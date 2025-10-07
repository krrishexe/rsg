import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { BentoGrid, BentoGridItem, BentoGridCards, BentoGridStats } from "@/components/ui/bento-grid"
import { Trophy, Users, ArrowLeft, MapPin, Calendar, Award, Target, TrendingUp } from "lucide-react"
import Link from "next/link"

const teams = [
  {
    id: "rajasthan-royals",
    name: "Rajasthan Royals",
    shortName: "RR",
    league: "IPL",
    location: "Jaipur, India",
    founded: "2008",
    captain: "Sanju Samson",
    coach: "Rahul Dravid",
    homeGround: "Sawai Mansingh Stadium",
    colors: ["#D5006D", "#4A148C"],
    achievements: ["IPL Champions 2008", "IPL Runners-up 2022"],
    description: "The inaugural IPL champions, known for their innovative approach and nurturing young talent.",
    stats: {
      matches: 198,
      wins: 89,
      losses: 106,
      winPercentage: 45.9,
      titles: 1,
    },
    image: "/placeholder.svg?height=300&width=400&text=Rajasthan+Royals",
  },
  {
    id: "paarl-royals",
    name: "Paarl Royals",
    shortName: "PR",
    league: "SA20",
    location: "Paarl, South Africa",
    founded: "2023",
    captain: "David Miller",
    coach: "JP Duminy",
    homeGround: "Boland Park",
    colors: ["#D5006D", "#FFD700"],
    achievements: ["SA20 Playoffs 2023", "SA20 Playoffs 2024"],
    description: "A dynamic team in the SA20, bringing the Royals legacy to South African cricket.",
    stats: {
      matches: 24,
      wins: 14,
      losses: 10,
      winPercentage: 58.3,
      titles: 0,
    },
    image: "/placeholder.svg?height=300&width=400&text=Paarl+Royals",
  },
  {
    id: "barbados-royals",
    name: "Barbados Royals",
    shortName: "BR",
    league: "CPL",
    location: "Bridgetown, Barbados",
    founded: "2013",
    captain: "Jason Holder",
    coach: "Trevor Penney",
    homeGround: "Kensington Oval",
    colors: ["#D5006D", "#00CED1"],
    achievements: ["CPL Champions 2019", "CPL Runners-up 2016"],
    description: "Caribbean cricket powerhouse, showcasing the best of West Indies talent.",
    stats: {
      matches: 132,
      wins: 68,
      losses: 62,
      winPercentage: 52.3,
      titles: 1,
    },
    image: "/placeholder.svg?height=300&width=400&text=Barbados+Royals",
  },
]

export default function TeamsPage() {
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
                <Link href="/players">
                  <Button variant="ghost" className="text-primary-foreground hover:text-accent-foreground">
                    Players
                  </Button>
                </Link>
                <Button
                  variant="ghost"
                  className="text-primary-foreground hover:text-accent-foreground bg-primary-foreground/10"
                >
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
            <h1 className="text-4xl md:text-5xl font-serif font-bold mb-4">Meet the Royals</h1>
            <p className="text-lg opacity-90 max-w-2xl mx-auto">Dive into your team’s fixtures, roster, and season story.</p>
          </div>
        </div>
      </section>

      {/* Teams Grid */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <BentoGridCards className="lg:grid-cols-3">
            {teams.map((team) => (
              <BentoGridItem
                key={team.id}
                className="group hover:shadow-2xl transition-all duration-300 border-primary/20 hover:border-primary/50 overflow-hidden"
              >
                <div className="relative">
                  <img src={team.image || "/placeholder.svg"} alt={team.name} className="w-full h-48 object-cover" />
                  <div className="absolute top-4 left-4">
                    <Badge className="bg-primary text-primary-foreground">{team.league}</Badge>
                  </div>
                  <div className="absolute inset-0 bg-black/60" />
                  <div className="absolute bottom-4 left-4 text-white">
                    <h3 className="text-2xl font-serif font-bold">{team.name}</h3>
                    <p className="text-sm opacity-90">{team.location}</p>
                  </div>
                </div>

                <div className="p-6 space-y-4">
                  <div className="grid grid-cols-2 gap-4 text-sm">
                    <div className="flex items-center space-x-2">
                      <Calendar className="h-4 w-4 text-muted-foreground" />
                      <span>Founded {team.founded}</span>
                    </div>
                    <div className="flex items-center space-x-2">
                      <MapPin className="h-4 w-4 text-muted-foreground" />
                      <span>{team.homeGround}</span>
                    </div>
                    <div className="flex items-center space-x-2">
                      <Users className="h-4 w-4 text-muted-foreground" />
                      <span>Captain: {team.captain}</span>
                    </div>
                    <div className="flex items-center space-x-2">
                      <Trophy className="h-4 w-4 text-muted-foreground" />
                      <span>
                        {team.stats.titles} Title{team.stats.titles !== 1 ? "s" : ""}
                      </span>
                    </div>
                  </div>

                  <p className="text-muted-foreground text-sm leading-relaxed">{team.description}</p>

                  <div className="grid grid-cols-3 gap-2 text-center text-sm">
                    <div>
                      <p className="font-semibold text-foreground">{team.stats.matches}</p>
                      <p className="text-muted-foreground">Matches</p>
                    </div>
                    <div>
                      <p className="font-semibold text-foreground">{team.stats.wins}</p>
                      <p className="text-muted-foreground">Wins</p>
                    </div>
                    <div>
                      <p className="font-semibold text-foreground">{team.stats.winPercentage}%</p>
                      <p className="text-muted-foreground">Win Rate</p>
                    </div>
                  </div>

                  <div className="space-y-2">
                    <h4 className="font-semibold text-sm">Recent Achievements</h4>
                    <div className="flex flex-wrap gap-1">
                      {team.achievements.slice(0, 2).map((achievement, index) => (
                        <Badge key={index} variant="outline" className="text-xs">
                          {achievement}
                        </Badge>
                      ))}
                    </div>
                  </div>

                  <Link href={`/teams/${team.id}`}>
                    <Button className="w-full bg-transparent" variant="outline">
                      View Team Details
                    </Button>
                  </Link>
                </div>
              </BentoGridItem>
            ))}
          </BentoGridCards>
        </div>
      </section>

      {/* Stats Comparison */}
      <section className="py-16 bg-muted/50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-serif font-bold text-foreground mb-4">Combined Statistics</h2>
            <p className="text-lg text-muted-foreground">The collective power of RSG across all leagues</p>
          </div>

          <BentoGridStats className="lg:grid-cols-4">
            <BentoGridItem>
              <div className="text-center">
                <Trophy className="h-8 w-8 text-primary mx-auto mb-3" />
                <p className="text-3xl font-bold text-foreground">
                  {teams.reduce((sum, team) => sum + team.stats.titles, 0)}
                </p>
                <p className="text-muted-foreground">Total Titles</p>
              </div>
            </BentoGridItem>

            <BentoGridItem>
              <div className="text-center">
                <Target className="h-8 w-8 text-primary mx-auto mb-3" />
                <p className="text-3xl font-bold text-foreground">
                  {teams.reduce((sum, team) => sum + team.stats.matches, 0)}
                </p>
                <p className="text-muted-foreground">Total Matches</p>
              </div>
            </BentoGridItem>

            <BentoGridItem>
              <div className="text-center">
                <TrendingUp className="h-8 w-8 text-primary mx-auto mb-3" />
                <p className="text-3xl font-bold text-foreground">
                  {teams.reduce((sum, team) => sum + team.stats.wins, 0)}
                </p>
                <p className="text-muted-foreground">Total Wins</p>
              </div>
            </BentoGridItem>

            <BentoGridItem>
              <div className="text-center">
                <Award className="h-8 w-8 text-primary mx-auto mb-3" />
                <p className="text-3xl font-bold text-foreground">
                  {Math.round(teams.reduce((sum, team) => sum + team.stats.winPercentage, 0) / teams.length)}%
                </p>
                <p className="text-muted-foreground">Avg Win Rate</p>
              </div>
            </BentoGridItem>
          </BentoGridStats>
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
                  <Link href="/teams/rajasthan-royals" className="hover:text-primary transition-colors">
                    Rajasthan Royals
                  </Link>
                </li>
                <li>
                  <Link href="/teams/paarl-royals" className="hover:text-primary transition-colors">
                    Paarl Royals
                  </Link>
                </li>
                <li>
                  <Link href="/teams/barbados-royals" className="hover:text-primary transition-colors">
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
