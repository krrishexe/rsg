// Client-side API utility functions for fetching data from our API routes

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
  recentForm?: number[]
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
  players?: Player[]
  recentMatches?: any[]
}

// Fetch all players with optional filters
export async function fetchPlayers(filters?: { team?: string; role?: string }): Promise<Player[]> {
  const params = new URLSearchParams()
  if (filters?.team) params.append("team", filters.team)
  if (filters?.role) params.append("role", filters.role)

  const response = await fetch(`/api/players?${params.toString()}`)
  if (!response.ok) {
    throw new Error("Failed to fetch players")
  }
  return response.json()
}

// Fetch single player by ID
export async function fetchPlayer(id: string): Promise<Player> {
  const response = await fetch(`/api/players/${id}`)
  if (!response.ok) {
    throw new Error("Failed to fetch player")
  }
  return response.json()
}

// Fetch all teams
export async function fetchTeams(): Promise<Team[]> {
  const response = await fetch("/api/teams")
  if (!response.ok) {
    throw new Error("Failed to fetch teams")
  }
  return response.json()
}

// Fetch single team by ID
export async function fetchTeam(id: string): Promise<Team> {
  const response = await fetch(`/api/teams/${id}`)
  if (!response.ok) {
    throw new Error("Failed to fetch team")
  }
  return response.json()
}

// Fetch overview statistics
export async function fetchOverviewStats(): Promise<any> {
  const response = await fetch("/api/stats/overview")
  if (!response.ok) {
    throw new Error("Failed to fetch overview stats")
  }
  return response.json()
}
