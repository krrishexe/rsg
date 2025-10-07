import { type NextRequest, NextResponse } from "next/server"
import { bigQueryService } from "@/lib/bigquery"

export async function GET(request: NextRequest) {
  try {
    const { searchParams } = new URL(request.url)
    const team = searchParams.get("team")
    const role = searchParams.get("role")

    let players = await bigQueryService.getAllPlayers()

    // Filter by team if specified
    if (team && team !== "all") {
      players = players.filter((player) => player.team.toLowerCase().includes(team.toLowerCase()))
    }

    // Filter by role if specified
    if (role && role !== "all") {
      players = players.filter((player) => player.role.toLowerCase().includes(role.toLowerCase()))
    }

    return NextResponse.json(players)
  } catch (error) {
    console.error("Error fetching players:", error)
    return NextResponse.json({ error: "Failed to fetch players" }, { status: 500 })
  }
}
