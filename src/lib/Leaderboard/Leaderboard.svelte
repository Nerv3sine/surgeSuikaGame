<script lang="ts">
    import './Leaderboard.css'
    import {getLeaderboard} from '../Firebase/SuikaLeaderboardManager'
    import { tiers } from '../Suika/SuikaController.svelte'
    import { leaderboardPreset } from './LeaderboardController.svelte'

    var leaderboard = $state(leaderboardPreset)

    export const updateLeaderboard = () => {
        test()
    }

    const test = async () => {
        try{
            let tLeaderboard = await getLeaderboard()
            leaderboard = tLeaderboard??leaderboard
        }catch (e){
            console.log(e)
        }
    }

    $effect(() => {
        updateLeaderboard()
    })

    const leaderBoardIcons = tiers.map((t) => {
        return t.icon
    }).toReversed()
</script>

<table id="leaderBoard">
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