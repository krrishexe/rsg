import { NextResponse } from "next/server"
import { bigQueryService } from "@/lib/bigquery"

export async function GET() {
  try {
    const stats = await bigQueryService.getOverallStats()
    return NextResponse.json(stats)
  } catch (error) {
    console.error("Error fetching overview stats:", error)
    return NextResponse.json({ error: "Failed to fetch overview stats" }, { status: 500 })
  }
}
