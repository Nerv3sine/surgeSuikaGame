<script lang="ts">
    import SuikaStage from "$lib/Suika/Suika.svelte"
    import Leaderboard from '$lib/Leaderboard/Leaderboard.svelte';
    import evoStages from '$lib/Suika/evolutions/Evolution Chart.svg'

    let leaderBoard:Leaderboard;
    let score = $state(0)

    function callLeaderboardUpdater(){
        leaderBoard.updateLeaderboard();
    }
</script>

<div id="bgGrid"></div>
<p id="scorePts" class="display">{score}</p>
<div id="leaderboard" class="display">
    <Leaderboard bind:this={leaderBoard}/>
</div>
<img id="evoStages" src={evoStages} />

<!-- svelte-ignore a11y_no_static_element_interactions -->
<!-- svelte-ignore a11y_click_events_have_key_events -->
<div id="stage">
    <SuikaStage updateLeaderboard={callLeaderboardUpdater} updateScore={(pts: number) => {score = pts}}/>
</div>