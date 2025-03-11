<script lang="ts">
    import { fruits, tiers } from './fruits'
    import Matter/*, {Engine, Render, Runner, Bodies, Composite, Events, World}*/ from 'matter-js'

    //weird bug fix
    var Engine = Matter.Engine,
        Render = Matter.Render,
        Runner = Matter.Runner,
        Bodies = Matter.Bodies,
        Body = Matter.Body,
        Composite = Matter.Composite,
        Events = Matter.Events,
        World = Matter.World

    const CAT_LEGIBLE = "#00FF00";
    const CAT_ILLEGIBLE = "#FF0000";

    const PARTICLES = 0x001
    const OBJ = 0x002
    const ENV = 0x004

    type State = 'startMenu' | 'playing' | 'losing' | 'lost'

    const iconSize = 64
    const maxCircleSize = 120
    const spawnY = 110
    const spawnX = 300
    const fieldSize = 450
    const rBound = 600 - Math.floor((600 - fieldSize)/2)
    const lBound = Math.floor((600 - fieldSize)/2)

    var canvas: HTMLElement
    var nextInLine:Matter.Body

    var points = $state(0)

    // create an engine
    var engine = Engine.create();

    var gameMode: State = $state('startMenu')
    var leaderboard = generateLeaderboard()

    var cooldownLock = false 

    $effect(() => {

        // create a renderer
        var render = Render.create({
            element: canvas,
            engine: engine,
            options: {
                width: 600,
                height: 1000,
                wireframes: false
            }
        });

        startFreshGame()

        // run the renderer
        Render.run(render);

        // create runner
        var runner = Runner.create();

        // run the engine
        Runner.run(runner, engine);

        prepareNextTarget()
    })

    const startFreshGame = () => {
        //game boundaries
        var leftWall = Bodies.rectangle(lBound, 550, 10, 700, 
        { 
            isStatic: true,
            render: {
                fillStyle: "#6589D7"
            },
            collisionFilter:{
                category: ENV
            }
        })
        var rightWall = Bodies.rectangle(rBound, 550, 10, 700, 
        { 
            isStatic: true,
            render: {
                fillStyle: "#6589D7"
            },
            collisionFilter:{
                category: ENV
            }
        })
        var ground = Bodies.rectangle(310, 900, 620, 50, 
        { 
            isStatic: true,
            render: {
                fillStyle: "#6589D7"
            },
            collisionFilter:{
                category: ENV
            }
        })
        var boundary = Bodies.rectangle(310, 220, 620, 5, 
        {
            label: "warning",
            isStatic: true,
            isSensor: true,
            render: {
                fillStyle: "#BB0000"
            },
            collisionFilter:{
                category: ENV
            }
        })
        var sensor = Bodies.rectangle(310, 200, 620, 40, 
        {
            label: "gameover",
            isStatic: true,
            isSensor: true,
            render: {
                opacity: 0
            },
            collisionFilter:{
                category: ENV
            }
        })
        var rWall = Bodies.rectangle(rBound + 25, 450, 50, 900, 
        { 
            isStatic: true,
            render: {
                opacity: 0,
                fillStyle: "#000000"
            },
            collisionFilter:{
                category: ENV
            }
        })
        var lWall = Bodies.rectangle(lBound - 25, 450, 50, 900, 
        { 
            isStatic: true,
            render: {
                opacity: 0,
                fillStyle: "#000000"
            },
            collisionFilter:{
                category: ENV
            }
        })

        // add all of the bodies to the world
        Composite.add(engine.world, [ground, lWall, rWall, leftWall, rightWall, sensor, boundary]);
    }

    Events.on(engine, 'collisionStart', (event) => {
        if(gameMode !== 'playing'){
            return
        }
        event.pairs.forEach(({ bodyA, bodyB }) => {
            if(bodyA.label === "particle"){
                return
            }
            if((bodyA.label === "gameover" || bodyB.label === "gameover") && 
                (bodyA.render.fillStyle == CAT_LEGIBLE || bodyB.render.fillStyle == CAT_LEGIBLE)){
                    endGame(bodyA.label === "gameover" ? bodyB : bodyA)
            }
            if (bodyA.label !== bodyB.label) {
                if(bodyA.render.fillStyle == CAT_ILLEGIBLE){
                    bodyA.render.fillStyle = CAT_LEGIBLE
                }
                if(bodyB.render.fillStyle == CAT_ILLEGIBLE){
                    bodyB.render.fillStyle = CAT_LEGIBLE
                }
                return
            }
            let x = bodyA.position.x, y = bodyA.position.y, idx = parseInt(bodyA.label)
            points += tiers[idx].points
            idx++
            World.remove(engine.world, [bodyA, bodyB])
            if(idx < tiers.length){
                spawnCircle(x,y,idx,false,true)
            }
            particleExplosion(x, y, idx, true)
        });
    });

    const endGame = (loser: Matter.Body) => {
        gameMode = 'losing'
        const flash = setInterval(() => {
            loser.render.opacity = 1 - (loser.render.opacity?? 1)
        }, 100)
        loser.isStatic = true
        loser.isSensor = true
        
        const cashInObj = (obj : Matter.Body) => {
            World.remove(engine.world, obj)
            let idx = parseInt(obj.label)
            particleExplosion(obj.position.x, obj.position.y, idx, false)
            points += tiers[idx].points
        }
        const cashIn = (objs : Array<Matter.Body>, finisher: Function) => {
            let obj = objs.pop()
            if(!obj){
                return
            }
            cashInObj(obj)
            if(objs.length > 0){
                setTimeout(()=>{
                    cashIn(objs, finisher)
                }, 200)
            }else{
                finisher()
            }
        }
        let collectable:Array<Matter.Body> = []
        Composite.allBodies(engine.world).forEach(body => {
            if(body.id == loser.id || body.collisionFilter.category == ENV || 
                body.label == "particle" || body.render.fillStyle == CAT_ILLEGIBLE){
                return
            }
            collectable.push(body)
        })
        
        const finisher = () => {
            clearInterval(flash)
            cashInObj(loser)
            setTimeout(()=>{
                gameMode = 'lost'
                gameReset()
            }, 1500)
        }

        setTimeout(() => {
            cashIn(collectable, finisher)
        }, 1000)
    } 

    function generateLeaderboard(){
        let scores = new Set<number>()
        
        while(scores.size < 10){
            const randVal = Math.floor(Math.random() * 1000)
            scores.add(randVal)
        }
        
        return ([...scores].sort(function(a,b){return (b-a)}))
    }

    function dropTarget(e: MouseEvent){
        if(cooldownLock || gameMode !== 'playing'){
            return
        }
        let x = e.clientX - parseFloat(getComputedStyle(e.currentTarget as Element)['left'].split("px")[0])

        let idx = parseInt(nextInLine.label)

        if(x < lBound + tiers[idx].size * maxCircleSize){
            x = lBound + tiers[idx].size * maxCircleSize
        }else if (x > rBound - tiers[idx].size * maxCircleSize){
            x = rBound - tiers[idx].size * maxCircleSize
        }

        
        let t = 0
        let dx = (x - spawnX) / 10
        cooldownLock = true
        const moveToPosition = () => {
            setTimeout(() => {
                Body.setPosition(nextInLine, {x: spawnX + dx * t, y: spawnY})
                t++
                if(t < 10){
                    moveToPosition()
                }else{
                    World.remove(engine.world, [nextInLine])
                    
                    spawnCircle(x, spawnY, idx)
                    
                    setTimeout(() => {
                        prepareNextTarget() 
                        cooldownLock = false
                    }, 500);
                }
            }, 10)
        }
        moveToPosition()
    }

    function prepareNextTarget(){
        const idx = Math.floor(Math.random() * 5/*tiers.length*/)
        
        nextInLine = spawnCircle(spawnX,spawnY,idx,true)
    }

    function spawnCircle(x:number, y:number, idx:number, staticState:boolean = false, legible = false){
        let c = Math.floor(100 * (1 - idx / tiers.length) + 155)

        var ball = Bodies.circle(
            x, y, tiers[idx].size*maxCircleSize,
            {
                label: idx+"",
                render: {
                    // fillStyle: "#FF" + returnHex2(c) + "FF",
                    fillStyle: legible == true ? CAT_LEGIBLE:CAT_ILLEGIBLE,
                    sprite: {
                        texture: tiers[idx].icon,
                        xScale: tiers[idx].size * 2 * (maxCircleSize/iconSize),
                        yScale: tiers[idx].size * 2 * (maxCircleSize/iconSize)
                    }
                },
                isStatic: staticState,
                isSensor: staticState,
                collisionFilter: {
                    category: OBJ,
                    mask: OBJ | ENV
                }
            }
        );

        Composite.add(engine.world, ball);

        return ball
    }

    const particleExplosion = (x: number, y: number, num: number, collision:boolean = false) => {
        let parts = []
        for(var i = 0; i < num * 3 + 20; i++){
            parts.push(spawnParticle(x,y, collision))
        }

        Composite.add(engine.world, parts)
    }

    const spawnParticle = (x:number,y:number, collision: boolean) => {
        const c = Math.random() > 0.5 ? "#ffb300" : "#5555FF"
        const c1 = Math.floor(Math.random() * 200 + 55)
        const c2 = Math.floor(Math.random() * 200 + 55)
        const c3 = Math.floor(Math.random() * 200 + 55)

        var particle = Bodies.circle(
            x,y,5,
            {
                label: "particle",
                // isStatic: true,
                mass: 0.0001,
                friction: 0.01,
                density: 0.001,
                isSensor: !collision,
                render: {
                    fillStyle: c
                    // fillStyle: "#" + returnHex2(c1) + returnHex2(c2) + returnHex2(c3),
                },
                collisionFilter:{
                    category: PARTICLES,
                    mask: PARTICLES | ENV
                }
            }
        )

        const angle = (Math.random()) * Math.PI + Math.PI
        const spd = (Math.random() * 10) + 2
        Body.setVelocity(particle, {
            x: Math.cos(angle) * spd / 2,
            y:  Math.sin(angle) * spd
        })
        
        const t = (p : Matter.Body) => {
            setTimeout(() => {
                World.remove(engine.world, p)
            }, !collision ? 5000 : 10000 + 10000* Math.random())
        }

        t(particle)

        return particle
    }

    const gameReset = () => {
        World.clear(engine.world, false)
        startFreshGame()
    }

    function returnHex2(input:number){
        let val = input > 255 ? 255 : input
        
        return getHex(Math.floor((val / 16))) + getHex(val % 16)

        function getHex(input: number){
            switch(input){
                case 10:
                    return "A"
                case 11:
                    return "B"
                case 12:
                    return "C"
                case 13:
                    return "D"
                case 14:
                    return "E"
                case 15:
                    return "F"
                default:
                    return input + ""
            }
        }
    }

    function isCanvasVisible(){
        return gameMode == 'playing' || gameMode == 'losing'
    }
</script>

<table class="leaderBoard" class:hoverClose={!isCanvasVisible()}>
    <thead>
        <tr>
            <th></th>
            <th>
                <h2>Top Scores</h2>
            </th>
        </tr>
    </thead>
    <tbody>
        {#each tiers as tier}
            <tr>
                <td class="icon">
                    <img src={tier.icon}/>
                </td>
                <td class="label" width=200>
                    <p>{tier.label}</p>
                </td>
                <td>
                    <p>{leaderboard[tiers.findIndex(t => t.label === tier.label)]}</p>
                </td>
            </tr>
        {/each}
    </tbody>
</table>

<table class="pointsTable" class:invisible={!isCanvasVisible()}>
    <thead>
        <tr>
            <th></th>
            <th>
                <h2>Surgemotes</h2>
            </th>
        </tr>
    </thead>
    <tbody>
        {#each tiers as tier}
            <tr>
                <td class="icon">
                    <img src={tier.icon}/>
                </td>
                <td class="label" width=200>
                    <p>{tier.label}</p>
                </td>
                <td>
                    <p>{tier.points}</p>
                </td>
            </tr>
        {/each}
    </tbody>
</table>

{#if gameMode == 'startMenu'}
    <h1>
        Surge Suika
    </h1>
    <button onclick={() => gameMode = 'playing'}>Start</button>
{/if}

{#if gameMode == 'lost'}
    <h2>Game Over</h2>
    <h3>Final Score:</h3>
    <h3>{points}</h3>
    <br/>
    <button onclick={() => {points = 0; gameMode = 'playing'}}>Try Again</button>
    <button onclick={() => {points = 0; gameMode = 'startMenu'}}>Exit</button>
{/if}
<!-- svelte-ignore a11y_no_static_element_interactions -->
<!-- svelte-ignore a11y_click_events_have_key_events -->
<div class="canvas" class:playActive={isCanvasVisible()} class:invisible={!isCanvasVisible()} bind:this={canvas} onclick={dropTarget}>
    <h3 id="pts" class="UI">Points: {points}</h3>
</div>