import { type NextRequest, NextResponse } from "next/server"
import { bigQueryService } from "@/lib/bigquery"

export async function GET(request: NextRequest, { params }: { params: { id: string } }) {
  try {
    const player = await bigQueryService.getPlayerById(params.id)

    if (!player) {
      return NextResponse.json({ error: "Player not found" }, { status: 404 })
    }

    // Get recent form data
    const recentForm = await bigQueryService.getPlayerRecentForm(params.id)

    return NextResponse.json({
      ...player,
      recentForm,
    })
  } catch (error) {
    console.error("Error fetching player:", error)
    return NextResponse.json({ error: "Failed to fetch player" }, { status: 500 })
  }
}
