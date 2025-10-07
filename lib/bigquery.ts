import { BigQuery } from "@google-cloud/bigquery"

// Initialize BigQuery client
const bigquery = new BigQuery({
  projectId: process.env.GOOGLE_CLOUD_PROJECT_ID,
  keyFilename: process.env.GOOGLE_CLOUD_KEY_FILE, // Path to service account key file
  // Alternative: use credentials object if storing key as JSON string
  // credentials: JSON.parse(process.env.GOOGLE_CLOUD_CREDENTIALS || '{}'),
})

export interface Player {
  id: string
  name: string
  team: string
  role: string
  nationality: string
  age: number
  matches: number
  runs: number
  average: number
  strikeRate: number
  centuries: number
  fifties: number
  catches: number
  stumpings: number
  highestScore: number
  sixes: number
  fours: number
  wickets?: number
  bowlingAverage?: number
  economy?: number
  image?: string
}

export interface Team {
  id: string
  name: string
  shortName: string
  league: string
  location: string
  founded: string
  captain: string
  coach: string
  homeGround: string
  matches: number
  wins: number
  losses: number
  winPercentage: number
  titles: number
  playoffAppearances: number
  highestScore: number
  lowestScore: number
}

export interface MatchResult {
  id: string
  team1: string
  team2: string
  winner: string
  margin: string
  date: string
  venue: string
  league: string
}

// BigQuery utility functions
export class BigQueryService {
  private dataset: string

  constructor(dataset = "rsg_cricket_data") {
    this.dataset = dataset
  }

  async executeQuery(query: string): Promise<any[]> {
    try {
      const [rows] = await bigquery.query({
        query,
        location: "US", // Adjust based on your dataset location
      })
      return rows
    } catch (error) {
      console.error("BigQuery error:", error)
      throw new Error("Failed to execute BigQuery query")
    }
  }

  // Get all players with their statistics
  async getAllPlayers(): Promise<Player[]> {
    const query = `
      SELECT 
        p.player_id as id,
        p.name,
        p.team,
        p.role,
        p.nationality,
        p.age,
        COALESCE(s.matches, 0) as matches,
        COALESCE(s.runs, 0) as runs,
        COALESCE(s.batting_average, 0) as average,
        COALESCE(s.strike_rate, 0) as strikeRate,
        COALESCE(s.centuries, 0) as centuries,
        COALESCE(s.fifties, 0) as fifties,
        COALESCE(s.catches, 0) as catches,
        COALESCE(s.stumpings, 0) as stumpings,
        COALESCE(s.highest_score, 0) as highestScore,
        COALESCE(s.sixes, 0) as sixes,
        COALESCE(s.fours, 0) as fours,
        COALESCE(s.wickets, 0) as wickets,
        COALESCE(s.bowling_average, 0) as bowlingAverage,
        COALESCE(s.economy_rate, 0) as economy,
        p.image_url as image
      FROM \`${process.env.GOOGLE_CLOUD_PROJECT_ID}.${this.dataset}.players\` p
      LEFT JOIN \`${process.env.GOOGLE_CLOUD_PROJECT_ID}.${this.dataset}.player_statistics\` s
        ON p.player_id = s.player_id
      ORDER BY p.name
    `

    return await this.executeQuery(query)
  }

  // Get player by ID
  async getPlayerById(playerId: string): Promise<Player | null> {
    const query = `
      SELECT 
        p.player_id as id,
        p.name,
        p.team,
        p.role,
        p.nationality,
        p.age,
        p.birth_place as birthPlace,
        p.debut_year as debut,
        COALESCE(s.matches, 0) as matches,
        COALESCE(s.runs, 0) as runs,
        COALESCE(s.batting_average, 0) as average,
        COALESCE(s.strike_rate, 0) as strikeRate,
        COALESCE(s.centuries, 0) as centuries,
        COALESCE(s.fifties, 0) as fifties,
        COALESCE(s.catches, 0) as catches,
        COALESCE(s.stumpings, 0) as stumpings,
        COALESCE(s.highest_score, 0) as highestScore,
        COALESCE(s.sixes, 0) as sixes,
        COALESCE(s.fours, 0) as fours,
        COALESCE(s.wickets, 0) as wickets,
        COALESCE(s.bowling_average, 0) as bowlingAverage,
        COALESCE(s.economy_rate, 0) as economy,
        p.image_url as image,
        p.bio
      FROM \`${process.env.GOOGLE_CLOUD_PROJECT_ID}.${this.dataset}.players\` p
      LEFT JOIN \`${process.env.GOOGLE_CLOUD_PROJECT_ID}.${this.dataset}.player_statistics\` s
        ON p.player_id = s.player_id
      WHERE p.player_id = @playerId
    `

    const results = await bigquery.query({
      query,
      params: { playerId },
      location: "US",
    })

    return results[0]?.length > 0 ? results[0][0] : null
  }

  // Get players by team
  async getPlayersByTeam(teamName: string): Promise<Player[]> {
    const query = `
      SELECT 
        p.player_id as id,
        p.name,
        p.team,
        p.role,
        p.nationality,
        p.age,
        COALESCE(s.matches, 0) as matches,
        COALESCE(s.runs, 0) as runs,
        COALESCE(s.batting_average, 0) as average,
        COALESCE(s.strike_rate, 0) as strikeRate,
        COALESCE(s.centuries, 0) as centuries,
        COALESCE(s.fifties, 0) as fifties,
        COALESCE(s.catches, 0) as catches,
        COALESCE(s.stumpings, 0) as stumpings,
        COALESCE(s.highest_score, 0) as highestScore,
        COALESCE(s.sixes, 0) as sixes,
        COALESCE(s.fours, 0) as fours,
        COALESCE(s.wickets, 0) as wickets,
        COALESCE(s.bowling_average, 0) as bowlingAverage,
        COALESCE(s.economy_rate, 0) as economy,
        p.image_url as image
      FROM \`${process.env.GOOGLE_CLOUD_PROJECT_ID}.${this.dataset}.players\` p
      LEFT JOIN \`${process.env.GOOGLE_CLOUD_PROJECT_ID}.${this.dataset}.player_statistics\` s
        ON p.player_id = s.player_id
      WHERE p.team = @teamName
      ORDER BY p.name
    `

    const results = await bigquery.query({
      query,
      params: { teamName },
      location: "US",
    })

    return results[0] || []
  }

  // Get all teams with their statistics
  async getAllTeams(): Promise<Team[]> {
    const query = `
      SELECT 
        t.team_id as id,
        t.name,
        t.short_name as shortName,
        t.league,
        t.location,
        t.founded,
        t.captain,
        t.coach,
        t.home_ground as homeGround,
        COALESCE(ts.matches_played, 0) as matches,
        COALESCE(ts.wins, 0) as wins,
        COALESCE(ts.losses, 0) as losses,
        COALESCE(ts.win_percentage, 0) as winPercentage,
        COALESCE(ts.titles, 0) as titles,
        COALESCE(ts.playoff_appearances, 0) as playoffAppearances,
        COALESCE(ts.highest_score, 0) as highestScore,
        COALESCE(ts.lowest_score, 0) as lowestScore
      FROM \`${process.env.GOOGLE_CLOUD_PROJECT_ID}.${this.dataset}.teams\` t
      LEFT JOIN \`${process.env.GOOGLE_CLOUD_PROJECT_ID}.${this.dataset}.team_statistics\` ts
        ON t.team_id = ts.team_id
      ORDER BY t.name
    `

    return await this.executeQuery(query)
  }

  // Get team by ID
  async getTeamById(teamId: string): Promise<Team | null> {
    const query = `
      SELECT 
        t.team_id as id,
        t.name,
        t.short_name as shortName,
        t.league,
        t.location,
        t.founded,
        t.captain,
        t.coach,
        t.home_ground as homeGround,
        t.motto,
        t.description,
        t.history,
        COALESCE(ts.matches_played, 0) as matches,
        COALESCE(ts.wins, 0) as wins,
        COALESCE(ts.losses, 0) as losses,
        COALESCE(ts.ties, 0) as ties,
        COALESCE(ts.no_results, 0) as noResults,
        COALESCE(ts.win_percentage, 0) as winPercentage,
        COALESCE(ts.titles, 0) as titles,
        COALESCE(ts.playoff_appearances, 0) as playoffAppearances,
        COALESCE(ts.highest_score, 0) as highestScore,
        COALESCE(ts.lowest_score, 0) as lowestScore
      FROM \`${process.env.GOOGLE_CLOUD_PROJECT_ID}.${this.dataset}.teams\` t
      LEFT JOIN \`${process.env.GOOGLE_CLOUD_PROJECT_ID}.${this.dataset}.team_statistics\` ts
        ON t.team_id = ts.team_id
      WHERE t.team_id = @teamId
    `

    const results = await bigquery.query({
      query,
      params: { teamId },
      location: "US",
    })

    return results[0]?.length > 0 ? results[0][0] : null
  }

  // Get recent matches for a team
  async getRecentMatches(teamId: string, limit = 5): Promise<MatchResult[]> {
    const query = `
      SELECT 
        m.match_id as id,
        m.team1,
        m.team2,
        m.winner,
        m.margin,
        m.match_date as date,
        m.venue,
        m.league
      FROM \`${process.env.GOOGLE_CLOUD_PROJECT_ID}.${this.dataset}.matches\` m
      WHERE m.team1 = @teamId OR m.team2 = @teamId
      ORDER BY m.match_date DESC
      LIMIT @limit
    `

    const results = await bigquery.query({
      query,
      params: { teamId, limit },
      location: "US",
    })

    return results[0] || []
  }

  // Get overall RSG statistics
  async getOverallStats(): Promise<any> {
    const query = `
      SELECT 
        COUNT(DISTINCT p.player_id) as totalPlayers,
        SUM(CASE WHEN p.nationality = 'India' THEN 1 ELSE 0 END) as indianPlayers,
        SUM(CASE WHEN p.nationality != 'India' THEN 1 ELSE 0 END) as internationalPlayers,
        SUM(COALESCE(s.matches, 0)) as totalMatches,
        SUM(COALESCE(s.runs, 0)) as totalRuns,
        SUM(COALESCE(s.wickets, 0)) as totalWickets,
        AVG(COALESCE(s.batting_average, 0)) as avgBattingAverage,
        AVG(COALESCE(s.strike_rate, 0)) as avgStrikeRate
      FROM \`${process.env.GOOGLE_CLOUD_PROJECT_ID}.${this.dataset}.players\` p
      LEFT JOIN \`${process.env.GOOGLE_CLOUD_PROJECT_ID}.${this.dataset}.player_statistics\` s
        ON p.player_id = s.player_id
    `

    const results = await this.executeQuery(query)
    return results[0] || {}
  }

  // Get player recent form (last 7 matches)
  async getPlayerRecentForm(playerId: string): Promise<number[]> {
    const query = `
      SELECT 
        pms.runs_scored
      FROM \`${process.env.GOOGLE_CLOUD_PROJECT_ID}.${this.dataset}.player_match_stats\` pms
      JOIN \`${process.env.GOOGLE_CLOUD_PROJECT_ID}.${this.dataset}.matches\` m
        ON pms.match_id = m.match_id
      WHERE pms.player_id = @playerId
      ORDER BY m.match_date DESC
      LIMIT 7
    `

    const results = await bigquery.query({
      query,
      params: { playerId },
      location: "US",
    })

    return results[0]?.map((row: any) => row.runs_scored) || []
  }
}

// Export singleton instance
export const bigQueryService = new BigQueryService()
