<script lang="ts">
    import { leaderboard as presetScores } from './fruits'
    import { tiers } from '../lib/Suika/SuikaController.svelte'
    import {getLeaderboard} from '../lib/Firebase/LeaderboardManager'

    import SuikaStage from "$lib/Suika/Suika.svelte"
    const leaderBoardIcons = tiers.map((t) => {
        return t.icon
    }).toReversed()

    var leaderboard = $state(presetScores)

    const getLeaderboardInfo = async () => {
        try{
            let tLeaderboard = await getLeaderboard()
            leaderboard = tLeaderboard??leaderboard
        }catch (e){
            console.log(e)
        }
    }

    $effect(() => {
        getLeaderboardInfo()
    })

</script>

<table class="leaderBoard" class:hoverClose={false}>
    <thead>
        <tr>
            <th></th>
            <th>
                <h2>Top Scores</h2>
            </th>
        </tr>
    </thead>
    <tbody>
        {#each leaderboard as lScore}
            <tr>
                <td class="icon">
                    <img src={leaderBoardIcons[leaderboard.findIndex(t => t.points === lScore.points)]}/>
                </td>
                <td class="label" width=200>
                    <p>{lScore.username}</p>
                </td>
                <td>
                    <p>{lScore.points}</p>
                </td>
            </tr>
        {/each}
    </tbody>
</table>

<table class="pointsTable" class:invisible={false}>
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
    <SuikaStage updateLeaderboard={getLeaderboardInfo} tiers={tiers} sourceIconSize={128}/>
</div>