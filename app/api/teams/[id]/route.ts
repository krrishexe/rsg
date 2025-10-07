import { type NextRequest, NextResponse } from "next/server"
import { bigQueryService } from "@/lib/bigquery"

export async function GET(request: NextRequest, { params }: { params: { id: string } }) {
  try {
    const team = await bigQueryService.getTeamById(params.id)

    if (!team) {
      return NextResponse.json({ error: "Team not found" }, { status: 404 })
    }

    // Get team players and recent matches
    const [players, recentMatches] = await Promise.all([
      bigQueryService.getPlayersByTeam(team.name),
      bigQueryService.getRecentMatches(params.id),
    ])

    return NextResponse.json({
      ...team,
      players,
      recentMatches,
    })
  } catch (error) {
    console.error("Error fetching team:", error)
    return NextResponse.json({ error: "Failed to fetch team" }, { status: 500 })
  }
}
