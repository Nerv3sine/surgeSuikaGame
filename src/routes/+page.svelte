<script lang="ts">
    import { fruits, tiers } from './fruits'
    import Matter/*, {Engine, Render, Runner, Bodies, Composite, Events, World}*/ from 'matter-js'

    var Engine = Matter.Engine,
        Render = Matter.Render,
        Runner = Matter.Runner,
        Bodies = Matter.Bodies,
        Body = Matter.Body,
        Composite = Matter.Composite,
        Events = Matter.Events,
        World = Matter.World

    type State = 'leaderboard' | 'playing' | 'lost'

    const iconSize = 64
    const maxCircleSize = 100
    const spawnY = 150
    const spawnX = 300

    var canvas: HTMLElement
    var nextInLine:Matter.Body

    var points = $state(0)

    // create an engine
    var engine = Engine.create();

    var gameMode: State = $state('leaderboard')
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

        //game boundaries
        var rightWall = Bodies.rectangle(550, 500, 10, 800, { isStatic: true });
        var leftWall = Bodies.rectangle(50, 500, 10, 800, { isStatic: true });
        var ground = Bodies.rectangle(310, 900, 620, 50, { isStatic: true });

        // add all of the bodies to the world
        Composite.add(engine.world, [ground, leftWall, rightWall]);

        // run the renderer
        Render.run(render);

        // create runner
        var runner = Runner.create();

        // run the engine
        Runner.run(runner, engine);

        prepareNextTarget()
    })

    Events.on(engine, 'collisionStart', (event) => {
        event.pairs.forEach(({ bodyA, bodyB }) => {
            if (bodyA.label !== bodyB.label) {
                return
            }
            let x = bodyA.position.x, y = bodyA.position.y, idx = parseInt(bodyA.label)
            points += tiers[idx].points
            idx++
            World.remove(engine.world, [bodyA, bodyB])
            if(idx < tiers.length){
                spawnCircle(x,y,idx)
            }
        });
    });

    function generateLeaderboard(){
        let scores = new Set<number>()
        
        while(scores.size < 10){
            const randVal = Math.floor(Math.random() * 1000)
            scores.add(randVal)
        }
        
        return ([...scores].sort(function(a,b){return (a-b)}))
    }

    function dropTarget(e: MouseEvent){
        if(cooldownLock){
            return
        }
        let x = e.clientX - parseFloat(getComputedStyle(e.currentTarget as Element)['left'].split("px")[0])

        let idx = parseInt(nextInLine.label)

        if(x < 150 + tiers[idx].size * maxCircleSize){
            x = 100 + tiers[idx].size * maxCircleSize
        }else if (x > 550 - tiers[idx].size * maxCircleSize){
            x = 500 - tiers[idx].size * maxCircleSize
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
        const idx = Math.floor(Math.random() * tiers.length)
        
        nextInLine = spawnCircle(spawnX,spawnY,idx,true)
    }

    function spawnCircle(x:number, y:number, idx:number, staticState:boolean = false){
        let c = Math.floor(100 * (1 - idx / tiers.length) + 155)

        var ball = Bodies.circle(
            x, y, tiers[idx].size*maxCircleSize,
            {
                label: idx+"",
                render: {
                    // fillStyle: "#FF" + returnHex2(c) + "FF",
                    sprite: {
                        texture: tiers[idx].icon,
                        xScale: tiers[idx].size * 2 * (maxCircleSize/iconSize),
                        yScale: tiers[idx].size * 2 * (maxCircleSize/iconSize)
                    }
                },
                isStatic: staticState
            }
        );
        if(staticState){
            Body.set(ball, {isSensor: true})
        }

        Composite.add(engine.world, ball);

        return ball
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

</script>



{#if gameMode == 'leaderboard'}
    <h1>
        ScoreBoard
    </h1>
    <div>
        {#each leaderboard as score}
            <div class="centre">{score}</div>
        {/each}
    </div>
    <button onclick={() => gameMode = 'playing'}>Start</button>
{/if}

{#if gameMode == 'playing'}
    
    <table class="pointsTable">
        <thead>
            <tr>
                <th>
                    <h2>Surgemotes</h2>
                </th>
            </tr>
        </thead>
        <tbody>
            {#each tiers as tier}
                <tr>
                    <td class="icon">
                        <img src={tier.icon} width="50" height="50"/>
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
    
{/if}
<!-- svelte-ignore a11y_no_static_element_interactions -->
<!-- svelte-ignore a11y_click_events_have_key_events -->
<div class="canvas" class:playActive={gameMode == 'playing'} bind:this={canvas} onclick={dropTarget}>
    <h3 id="pts" class="UI">Points: {points}</h3>
</div>