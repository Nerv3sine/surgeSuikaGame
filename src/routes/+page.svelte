<script lang="ts">
    import { tiers } from '$lib/Suika/SuikaController.svelte'
    import SuikaStage from "$lib/Suika/Suika.svelte"
    import Leaderboard from '$lib/Leaderboard/Leaderboard.svelte';

    let leaderBoard:Leaderboard;

    function callLeaderboardUpdater(){
        leaderBoard.updateLeaderboard();
    }
</script>

<div id="leaderboard" class="display">
    <Leaderboard bind:this={leaderBoard}/>
</div>
<table class="pointsTable display" class:invisible={false}>
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
                    <img src={tier.icon} alt={tier.label}/>
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

<!-- svelte-ignore a11y_no_static_element_interactions -->
<!-- svelte-ignore a11y_click_events_have_key_events -->
<div id="stage">
    <SuikaStage updateLeaderboard={callLeaderboardUpdater}/>
</div>