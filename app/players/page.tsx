import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { BentoGridCards } from "@/components/ui/bento-grid"
import { Input } from "@/components/ui/input"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Trophy, Users, Search, ArrowLeft } from "lucide-react"
import Link from "next/link"

// Mock player data - in real app this would come from BigQuery
const players = [
  {
    id: "sanju-samson",
    name: "Sanju Samson",
    team: "Rajasthan Royals",
    role: "Wicket-keeper Batsman",
    nationality: "India",
    matches: 142,
    runs: 3668,
    average: 28.9,
    strikeRate: 136.7,
    image: "/cricket-player-sanju-samson.png",
  },
  {
    id: "jos-buttler",
    name: "Jos Buttler",
    team: "Rajasthan Royals",
    role: "Wicket-keeper Batsman",
    nationality: "England",
    matches: 89,
    runs: 2582,
    average: 34.4,
    strikeRate: 148.9,
    image: "/cricket-player.png",
  },
  {
    id: "yashasvi-jaiswal",
    name: "Yashasvi Jaiswal",
    team: "Rajasthan Royals",
    role: "Opening Batsman",
    nationality: "India",
    matches: 42,
    runs: 1289,
    average: 32.2,
    strikeRate: 143.1,
    image: "/yashasvi-jaiswal-cricket.png",
  },
  {
    id: "david-miller",
    name: "David Miller",
    team: "Paarl Royals",
    role: "Middle-order Batsman",
    nationality: "South Africa",
    matches: 156,
    runs: 3845,
    average: 35.8,
    strikeRate: 142.3,
    image: "/david-miller-cricket.png",
  },
  {
    id: "lungi-ngidi",
    name: "Lungi Ngidi",
    team: "Paarl Royals",
    role: "Fast Bowler",
    nationality: "South Africa",
    matches: 78,
    wickets: 89,
    average: 28.4,
    economy: 8.2,
    image: "/cricket-player-lungi-ngidi.png",
  },
  {
    id: "jason-holder",
    name: "Jason Holder",
    team: "Barbados Royals",
    role: "All-rounder",
    nationality: "West Indies",
    matches: 134,
    runs: 1876,
    wickets: 156,
    average: 24.8,
    image: "/cricket-player-jason-holder.png",
  },
  {
    id: "quinton-de-kock",
    name: "Quinton de Kock",
    team: "Barbados Royals",
    role: "Wicket-keeper Batsman",
    nationality: "South Africa",
    matches: 187,
    runs: 5242,
    average: 31.9,
    strikeRate: 135.4,
    image: "/quinton-de-kock-cricket.png",
  },
  {
    id: "rahul-tewatia",
    name: "Rahul Tewatia",
    team: "Rajasthan Royals",
    role: "All-rounder",
    nationality: "India",
    matches: 76,
    runs: 1289,
    wickets: 45,
    strikeRate: 139.2,
    image: "/cricket-player-rahul-tewatia.png",
  },
]

export default function PlayersPage() {
  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <header className="bg-primary text-primary-foreground">
        <div className="container mx-auto px-4">
          {/* Top Navigation */}
          <div className="flex items-center justify-between py-3 text-sm">
            <div className="flex items-center space-x-6">
              <Link href="#" className="hover:text-accent-foreground transition-colors">
                ROYALS ACADEMY
              </Link>
              <Link href="#" className="hover:text-accent-foreground transition-colors">
                ROYALS SCHOOL OF BUSINESS
              </Link>
              <Link href="#" className="hover:text-accent-foreground transition-colors">
                ROYAL RAJASTHAN FOUNDATION
              </Link>
            </div>
            <div className="flex items-center space-x-4">
              <Button variant="ghost" size="sm" className="text-primary-foreground hover:text-accent-foreground">
                SHOP
              </Button>
              <Button variant="ghost" size="sm" className="text-primary-foreground hover:text-accent-foreground">
                DARK MODE
              </Button>
              <Button variant="ghost" size="sm" className="text-primary-foreground hover:text-accent-foreground">
                LOGIN
              </Button>
            </div>
          </div>

          {/* Main Navigation */}
          <div className="flex items-center justify-between py-4 border-t border-primary-foreground/20">
            <div className="flex items-center space-x-8">
              {/* Logo */}
              <Link href="/" className="flex items-center space-x-2">
                <div className="w-12 h-12 bg-primary-foreground rounded-full flex items-center justify-center">
                  <Trophy className="h-6 w-6 text-primary" />
                </div>
                <div>
                  <h1 className="font-serif font-bold text-xl">RSG</h1>
                  <p className="text-xs opacity-90">ROYALS SPORTS GROUP</p>
                </div>
              </Link>

              {/* Navigation Links */}
              <nav className="flex items-center space-x-6">
                <Link href="/">
                  <Button variant="ghost" className="text-primary-foreground hover:text-accent-foreground">
                    Home
                  </Button>
                </Link>
                <Button
                  variant="ghost"
                  className="text-primary-foreground hover:text-accent-foreground bg-primary-foreground/10"
                >
                  Players
                </Button>
                <Button variant="ghost" className="text-primary-foreground hover:text-accent-foreground">
                  Teams
                </Button>
                <Button variant="ghost" className="text-primary-foreground hover:text-accent-foreground">
                  Stats
                </Button>
              </nav>
            </div>
          </div>
        </div>
      </header>

      {/* Page Header */}
      <section className="bg-secondary text-white py-12">
        <div className="container mx-auto px-4">
          <div className="flex items-center space-x-4 mb-6">
            <Link href="/">
              <Button variant="ghost" size="sm" className="text-white hover:text-accent-foreground">
                <ArrowLeft className="h-4 w-4 mr-2" />
                Back to Home
              </Button>
            </Link>
          </div>
          <div className="text-center">
            <h1 className="text-4xl md:text-5xl font-serif font-bold mb-4">All Players</h1>
            <p className="text-lg opacity-90 max-w-2xl mx-auto">
              Discover the talented cricketers across Rajasthan Royals, Paarl Royals, and Barbados Royals
            </p>
          </div>
        </div>
      </section>

      {/* Filters */}
      <section className="py-8 bg-background border-b">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row gap-4 items-center justify-between">
            <div className="flex items-center space-x-4">
              <div className="relative">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-muted-foreground" />
                <Input placeholder="Search players..." className="pl-10 w-64" />
              </div>
              <Select>
                <SelectTrigger className="w-48">
                  <SelectValue placeholder="Filter by team" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="all">All Teams</SelectItem>
                  <SelectItem value="rajasthan">Rajasthan Royals</SelectItem>
                  <SelectItem value="paarl">Paarl Royals</SelectItem>
                  <SelectItem value="barbados">Barbados Royals</SelectItem>
                </SelectContent>
              </Select>
              <Select>
                <SelectTrigger className="w-48">
                  <SelectValue placeholder="Filter by role" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="all">All Roles</SelectItem>
                  <SelectItem value="batsman">Batsman</SelectItem>
                  <SelectItem value="bowler">Bowler</SelectItem>
                  <SelectItem value="allrounder">All-rounder</SelectItem>
                  <SelectItem value="wicketkeeper">Wicket-keeper</SelectItem>
                </SelectContent>
              </Select>
            </div>
            <div className="flex items-center space-x-2 text-sm text-muted-foreground">
              <Users className="h-4 w-4" />
              <span>{players.length} players found</span>
            </div>
          </div>
        </div>
      </section>

      {/* Players Grid */}
      <section className="py-12">
        <div className="container mx-auto px-4">
          <BentoGridCards className="xl:grid-cols-4">
            {players.map((player) => (
              <Link key={player.id} href={`/players/${player.id}`} className="block">
                <Card className="group hover:shadow-xl transition-all duration-300 border-primary/20 hover:border-primary/50 cursor-pointer">
                  <CardContent className="p-0">
                    <div className="relative">
                      <img
                        src={player.image || "/placeholder.svg"}
                        alt={player.name}
                        className="w-full h-48 object-cover rounded-t-lg"
                      />
                      <div className="absolute top-3 right-3">
                        <Badge
                          variant="secondary"
                          className={`
                            ${player.team === "Rajasthan Royals" ? "bg-primary text-primary-foreground" : ""}
                            ${player.team === "Paarl Royals" ? "bg-secondary text-secondary-foreground" : ""}
                            ${player.team === "Barbados Royals" ? "bg-accent text-accent-foreground" : ""}
                          `}
                        >
                          {player.team.split(" ")[0]}
                        </Badge>
                      </div>
                    </div>

                    <div className="p-4 space-y-3">
                      <div>
                        <h3 className="font-serif font-bold text-lg text-foreground group-hover:text-primary transition-colors">
                          {player.name}
                        </h3>
                        <p className="text-sm text-muted-foreground">{player.role}</p>
                        <p className="text-xs text-muted-foreground">{player.nationality}</p>
                      </div>

                      <div className="grid grid-cols-2 gap-2 text-sm">
                        <div>
                          <p className="text-muted-foreground">Matches</p>
                          <p className="font-semibold text-foreground">{player.matches}</p>
                        </div>
                        {player.runs && (
                          <div>
                            <p className="text-muted-foreground">Runs</p>
                            <p className="font-semibold text-foreground">{player.runs}</p>
                          </div>
                        )}
                        {player.wickets && (
                          <div>
                            <p className="text-muted-foreground">Wickets</p>
                            <p className="font-semibold text-foreground">{player.wickets}</p>
                          </div>
                        )}
                        {player.average && (
                          <div>
                            <p className="text-muted-foreground">Average</p>
                            <p className="font-semibold text-foreground">{player.average}</p>
                          </div>
                        )}
                      </div>

                      <Button className="w-full bg-transparent" variant="outline" size="sm">
                        View Profile
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              </Link>
            ))}
          </BentoGridCards>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-secondary text-secondary-foreground py-12">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div>
              <div className="flex items-center space-x-2 mb-4">
                <div className="w-10 h-10 bg-primary rounded-full flex items-center justify-center">
                <img src="/favicon.ico" alt="RSG Logo" className="w-10 h-10" />
                </div>
                <div>
                  <h3 className="font-serif font-bold text-lg">RSG</h3>
                  <p className="text-xs opacity-90">ROYALS SPORTS GROUP</p>
                </div>
              </div>
              <p className="text-sm opacity-80">The ultimate destination for cricket fans across three continents.</p>
            </div>

            <div>
              <h4 className="font-semibold mb-4">Teams</h4>
              <ul className="space-y-2 text-sm opacity-80">
                <li>
                  <Link href="#" className="hover:text-primary transition-colors">
                    Rajasthan Royals
                  </Link>
                </li>
                <li>
                  <Link href="#" className="hover:text-primary transition-colors">
                    Paarl Royals
                  </Link>
                </li>
                <li>
                  <Link href="#" className="hover:text-primary transition-colors">
                    Barbados Royals
                  </Link>
                </li>
              </ul>
            </div>

            <div>
              <h4 className="font-semibold mb-4">Features</h4>
              <ul className="space-y-2 text-sm opacity-80">
                <li>
                  <Link href="/players" className="hover:text-primary transition-colors">
                    Player Profiles
                  </Link>
                </li>
                <li>
                  <Link href="#" className="hover:text-primary transition-colors">
                    Performance Stats
                  </Link>
                </li>
                <li>
                  <Link href="#" className="hover:text-primary transition-colors">
                    Compare Players
                  </Link>
                </li>
                <li>
                  <Link href="#" className="hover:text-primary transition-colors">
                    Latest News
                  </Link>
                </li>
              </ul>
            </div>

            <div>
              <h4 className="font-semibold mb-4">Connect</h4>
              <ul className="space-y-2 text-sm opacity-80">
                <li>
                  <Link href="#" className="hover:text-primary transition-colors">
                    Download App
                  </Link>
                </li>
                <li>
                  <Link href="#" className="hover:text-primary transition-colors">
                    WhatsApp
                  </Link>
                </li>
                <li>
                  <Link href="#" className="hover:text-primary transition-colors">
                    Social Media
                  </Link>
                </li>
                <li>
                  <Link href="#" className="hover:text-primary transition-colors">
                    Contact Us
                  </Link>
                </li>
              </ul>
            </div>
          </div>

          <div className="border-t border-secondary-foreground/20 mt-8 pt-8 text-center text-sm opacity-80">
            <p>&copy; 2025 Royals Sports Group. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  )
}
