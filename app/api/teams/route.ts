import { NextResponse } from "next/server"
import { bigQueryService } from "@/lib/bigquery"

export async function GET() {
  try {
    const teams = await bigQueryService.getAllTeams()
    return NextResponse.json(teams)
  } catch (error) {
    console.error("Error fetching teams:", error)
    return NextResponse.json({ error: "Failed to fetch teams" }, { status: 500 })
  }
}
