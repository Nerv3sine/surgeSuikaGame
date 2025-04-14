<script lang="ts">
    import {updateLeaderboard} from '../Firebase/LeaderboardManager'
    import {State, anonymousAliases} from './SuikaController.svelte'

    interface stageParams {
        setGameMode: (mode: State) => void;
        points: number;
    }

    let {setGameMode, points} : stageParams = $props();

    let userName = $state("");

    async function finishRound(choice:State){
        await addToScoreboard(points)
        setGameMode(choice)
    }

    async function addToScoreboard(pts :number){
        console.log("post1")
        let username = userName
        const fillernames = anonymousAliases
        if(username === ""){
            username = fillernames[Math.floor(Math.random() * fillernames.length)]
        }
        
        await updateLeaderboard({
            username: username,
            points: pts
        })
    }
</script>

<div id="gameEndScreen" class="midAlign">
    <h2>Game Over</h2>
    <input type="text" placeholder="'sparky'" bind:value={userName}/>
    <h2>Final Score:</h2>
    <h2>{points}</h2>
    <br/>
    <p class='note'>pressing either button will save your score</p>
    <button onclick={() => finishRound(State.playing)}>Try Again</button>
    <button onclick={() => finishRound(State.startMenu)}>Exit</button>
</div>