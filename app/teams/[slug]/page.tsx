import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Progress } from "@/components/ui/progress"
import { Trophy, ArrowLeft, MapPin, Calendar, Users, TrendingUp, Award, Star, BarChart3 } from "lucide-react"
import Link from "next/link"
import { notFound } from "next/navigation"

const teamsData = {
  "rajasthan-royals": {
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
    motto: "Halla Bol",
    description:
      "The Rajasthan Royals are the inaugural champions of the Indian Premier League, known for their innovative approach to cricket and commitment to nurturing young talent. Under the leadership of legendary captain Shane Warne, they created history by winning the first-ever IPL title in 2008.",
    history:
      "Founded in 2008, Rajasthan Royals made an immediate impact by winning the inaugural IPL season. Despite being considered underdogs, they showcased that cricket is not just about star power but about team spirit, strategy, and believing in young talent.",
    stats: {
      matches: 198,
      wins: 89,
      losses: 106,
      ties: 2,
      noResults: 1,
      winPercentage: 45.9,
      titles: 1,
      playoffAppearances: 4,
      highestScore: 226,
      lowestScore: 58,
    },
    achievements: ["IPL Champions 2008", "IPL Runners-up 2022", "CLT20 Semi-finalists 2013", "Most Sixes in IPL 2020"],
    keyPlayers: [
      { name: "Sanju Samson", role: "Captain & Wicket-keeper", matches: 142, runs: 3668 },
      { name: "Jos Buttler", role: "Wicket-keeper Batsman", matches: 89, runs: 2582 },
      { name: "Yashasvi Jaiswal", role: "Opening Batsman", matches: 42, runs: 1289 },
      { name: "Rahul Tewatia", role: "All-rounder", matches: 76, runs: 1289 },
    ],
    recentMatches: [
      { opponent: "Mumbai Indians", result: "Won", margin: "6 wickets", date: "2024-05-15" },
      { opponent: "Chennai Super Kings", result: "Lost", margin: "4 runs", date: "2024-05-12" },
      { opponent: "Royal Challengers Bangalore", result: "Won", margin: "23 runs", date: "2024-05-08" },
      { opponent: "Delhi Capitals", result: "Won", margin: "8 wickets", date: "2024-05-05" },
      { opponent: "Kolkata Knight Riders", result: "Lost", margin: "7 wickets", date: "2024-05-01" },
    ],
    image: "/placeholder.svg?height=400&width=600&text=Rajasthan+Royals",
  },
  "paarl-royals": {
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
    motto: "Rise Together",
    description:
      "Paarl Royals bring the winning culture of the Royals franchise to South African cricket. As one of the founding teams of the SA20 league, they represent the beautiful wine region of Paarl and embody the spirit of South African cricket.",
    history:
      "Established in 2023 as part of the inaugural SA20 season, Paarl Royals quickly established themselves as a competitive force in South African T20 cricket, making the playoffs in both their first two seasons.",
    stats: {
      matches: 24,
      wins: 14,
      losses: 10,
      ties: 0,
      noResults: 0,
      winPercentage: 58.3,
      titles: 0,
      playoffAppearances: 2,
      highestScore: 201,
      lowestScore: 89,
    },
    achievements: ["SA20 Playoffs 2023", "SA20 Playoffs 2024", "Highest Team Score SA20 2023", "Most Sixes SA20 2024"],
    keyPlayers: [
      { name: "David Miller", role: "Captain & Batsman", matches: 20, runs: 567 },
      { name: "Jos Buttler", role: "Wicket-keeper Batsman", matches: 18, runs: 489 },
      { name: "Lungi Ngidi", role: "Fast Bowler", matches: 22, wickets: 28 },
      { name: "Tabraiz Shamsi", role: "Spin Bowler", matches: 19, wickets: 24 },
    ],
    recentMatches: [
      { opponent: "MI Cape Town", result: "Won", margin: "5 wickets", date: "2024-02-15" },
      { opponent: "Sunrisers Eastern Cape", result: "Lost", margin: "12 runs", date: "2024-02-12" },
      { opponent: "Durban Super Giants", result: "Won", margin: "7 wickets", date: "2024-02-08" },
      { opponent: "Pretoria Capitals", result: "Won", margin: "15 runs", date: "2024-02-05" },
      { opponent: "Joburg Super Kings", result: "Lost", margin: "3 wickets", date: "2024-02-01" },
    ],
    image: "/placeholder.svg?height=400&width=600&text=Paarl+Royals",
  },
  "barbados-royals": {
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
    motto: "Caribbean Pride",
    description:
      "Barbados Royals represent the heart of Caribbean cricket, playing at the historic Kensington Oval. They showcase the explosive batting and dynamic bowling that West Indies cricket is famous for, bringing entertainment and excellence to the CPL.",
    history:
      "Originally founded as Barbados Tridents in 2013, the team was rebranded as Barbados Royals, bringing them under the RSG umbrella. They won their first CPL title in 2019 and have been consistent playoff contenders.",
    stats: {
      matches: 132,
      wins: 68,
      losses: 62,
      ties: 1,
      noResults: 1,
      winPercentage: 52.3,
      titles: 1,
      playoffAppearances: 6,
      highestScore: 195,
      lowestScore: 61,
    },
    achievements: [
      "CPL Champions 2019",
      "CPL Runners-up 2016",
      "CPL Playoffs 2020, 2021, 2022",
      "Fastest CPL Century 2018",
    ],
    keyPlayers: [
      { name: "Jason Holder", role: "Captain & All-rounder", matches: 89, runs: 1876, wickets: 156 },
      { name: "Quinton de Kock", role: "Wicket-keeper Batsman", matches: 45, runs: 1234 },
      { name: "Kyle Mayers", role: "All-rounder", matches: 67, runs: 1567, wickets: 45 },
      { name: "Obed McCoy", role: "Fast Bowler", matches: 78, wickets: 89 },
    ],
    recentMatches: [
      { opponent: "Trinbago Knight Riders", result: "Won", margin: "4 wickets", date: "2024-09-15" },
      { opponent: "Guyana Amazon Warriors", result: "Lost", margin: "6 runs", date: "2024-09-12" },
      { opponent: "St Kitts and Nevis Patriots", result: "Won", margin: "8 wickets", date: "2024-09-08" },
      { opponent: "Jamaica Tallawahs", result: "Won", margin: "12 runs", date: "2024-09-05" },
      { opponent: "St Lucia Kings", result: "Lost", margin: "5 wickets", date: "2024-09-01" },
    ],
    image: "/placeholder.svg?height=400&width=600&text=Barbados+Royals",
  },
}

interface TeamPageProps {
  params: {
    slug: string
  }
}

export default function TeamPage({ params }: TeamPageProps) {
  const team = teamsData[params.slug as keyof typeof teamsData]

  if (!team) {
    notFound()
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-background via-background to-muted">
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
                <Link href="/teams">
                  <Button
                    variant="ghost"
                    className="text-primary-foreground hover:text-accent-foreground bg-primary-foreground/10"
                  >
                    Teams
                  </Button>
                </Link>
                <Button variant="ghost" className="text-primary-foreground hover:text-accent-foreground">
                  Stats
                </Button>
              </nav>
            </div>
          </div>
        </div>
      </header>

      {/* Breadcrumb */}
      <section className="bg-muted/50 py-4">
        <div className="container mx-auto px-4">
          <div className="flex items-center space-x-2 text-sm text-muted-foreground">
            <Link href="/" className="hover:text-primary transition-colors">
              Home
            </Link>
            <span>/</span>
            <Link href="/teams" className="hover:text-primary transition-colors">
              Teams
            </Link>
            <span>/</span>
            <span className="text-foreground">{team.name}</span>
          </div>
        </div>
      </section>

      {/* Team Header */}
      <section className="py-12 bg-gradient-to-r from-secondary to-primary/80 text-white">
        <div className="container mx-auto px-4">
          <div className="flex items-center space-x-4 mb-8">
            <Link href="/teams">
              <Button variant="ghost" size="sm" className="text-white hover:text-accent-foreground">
                <ArrowLeft className="h-4 w-4 mr-2" />
                Back to Teams
              </Button>
            </Link>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
            <div className="space-y-6">
              <div>
                <Badge className="mb-4 bg-primary text-primary-foreground">{team.league}</Badge>
                <h1 className="text-4xl md:text-5xl font-serif font-bold mb-2">{team.name}</h1>
                <p className="text-xl opacity-90 mb-4">Form, fixtures, and the squad.</p>

                <div className="flex flex-wrap gap-4 text-sm mb-6">
                  <div className="flex items-center space-x-2">
                    <MapPin className="h-4 w-4" />
                    <span>{team.location}</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <Calendar className="h-4 w-4" />
                    <span>Founded {team.founded}</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <Users className="h-4 w-4" />
                    <span>Captain: {team.captain}</span>
                  </div>
                </div>
              </div>

              <p className="text-lg opacity-90 leading-relaxed">{team.description}</p>

              <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                <div className="text-center">
                  <p className="text-2xl font-bold">{team.stats.matches}</p>
                  <p className="text-sm opacity-80">Matches</p>
                </div>
                <div className="text-center">
                  <p className="text-2xl font-bold">{team.stats.wins}</p>
                  <p className="text-sm opacity-80">Wins</p>
                </div>
                <div className="text-center">
                  <p className="text-2xl font-bold">{team.stats.winPercentage}%</p>
                  <p className="text-sm opacity-80">Win Rate</p>
                </div>
                <div className="text-center">
                  <p className="text-2xl font-bold">{team.stats.titles}</p>
                  <p className="text-sm opacity-80">Titles</p>
                </div>
              </div>
            </div>

            <div>
              <img src={team.image || "/placeholder.svg"} alt={team.name} className="w-full rounded-lg shadow-2xl" />
            </div>
          </div>
        </div>
      </section>

      {/* Team Details */}
      <section className="py-12">
        <div className="container mx-auto px-4">
          <Tabs defaultValue="matches" className="w-full">
            <TabsList className="grid w-full grid-cols-4">
              <TabsTrigger value="matches">Fixtures & Results</TabsTrigger>
              <TabsTrigger value="squad">Roster</TabsTrigger>
              <TabsTrigger value="stats">Leaders</TabsTrigger>
              <TabsTrigger value="overview">Insights</TabsTrigger>
            </TabsList>

            <TabsContent value="overview" className="mt-8">
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                <Card>
                  <CardHeader>
                    <CardTitle>Insights</CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <p className="text-muted-foreground text-sm">Small multiples coming soon: run rate by phase, bowling economy by over, boundary % heatmap.</p>
                  </CardContent>
                </Card>

                <Card>
                  <CardHeader>
                    <CardTitle>Team Information</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="grid grid-cols-2 gap-4 text-sm">
                      <div>
                        <p className="text-muted-foreground">Full Name</p>
                        <p className="font-semibold">{team.name}</p>
                      </div>
                      <div>
                        <p className="text-muted-foreground">Short Name</p>
                        <p className="font-semibold">{team.shortName}</p>
                      </div>
                      <div>
                        <p className="text-muted-foreground">League</p>
                        <p className="font-semibold">{team.league}</p>
                      </div>
                      <div>
                        <p className="text-muted-foreground">Founded</p>
                        <p className="font-semibold">{team.founded}</p>
                      </div>
                      <div>
                        <p className="text-muted-foreground">Home Ground</p>
                        <p className="font-semibold">{team.homeGround}</p>
                      </div>
                      <div>
                        <p className="text-muted-foreground">Coach</p>
                        <p className="font-semibold">{team.coach}</p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </TabsContent>

            <TabsContent value="squad" className="mt-8">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {team.keyPlayers.map((player, index) => (
                  <Card key={index}>
                    <CardContent className="p-6">
                      <div className="flex items-center space-x-4">
                        <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center">
                          <Star className="h-6 w-6 text-primary" />
                        </div>
                        <div className="flex-1">
                          <h3 className="font-semibold text-lg">{player.name}</h3>
                          <p className="text-muted-foreground text-sm">{player.role}</p>
                          <div className="flex space-x-4 mt-2 text-sm">
                            <span>Matches: {player.matches}</span>
                            {player.runs && <span>Runs: {player.runs}</span>}
                            {player.wickets && <span>Wickets: {player.wickets}</span>}
                          </div>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </TabsContent>

            <TabsContent value="stats" className="mt-8">
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                <Card>
                  <CardHeader>
                    <CardTitle className="flex items-center space-x-2">
                      <BarChart3 className="h-5 w-5 text-primary" />
                      <span>Leaders</span>
                    </CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <div className="flex justify-between">
                      <span className="text-muted-foreground">Total Matches</span>
                      <span className="font-semibold">{team.stats.matches}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-muted-foreground">Wins</span>
                      <span className="font-semibold">{team.stats.wins}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-muted-foreground">Losses</span>
                      <span className="font-semibold">{team.stats.losses}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-muted-foreground">Win Percentage</span>
                      <span className="font-semibold">{team.stats.winPercentage}%</span>
                    </div>
                  </CardContent>
                </Card>

                <Card>
                  <CardHeader>
                    <CardTitle className="flex items-center space-x-2">
                      <Trophy className="h-5 w-5 text-primary" />
                      <span>Achievements</span>
                    </CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <div className="flex justify-between">
                      <span className="text-muted-foreground">Titles Won</span>
                      <span className="font-semibold">{team.stats.titles}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-muted-foreground">Playoff Appearances</span>
                      <span className="font-semibold">{team.stats.playoffAppearances}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-muted-foreground">Highest Score</span>
                      <span className="font-semibold">{team.stats.highestScore}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-muted-foreground">Lowest Score</span>
                      <span className="font-semibold">{team.stats.lowestScore}</span>
                    </div>
                  </CardContent>
                </Card>

                <Card>
                  <CardHeader>
                    <CardTitle className="flex items-center space-x-2">
                      <TrendingUp className="h-5 w-5 text-primary" />
                      <span>Performance Metrics</span>
                    </CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <div>
                      <div className="flex justify-between mb-2">
                        <span className="text-sm text-muted-foreground">Win Rate</span>
                        <span className="text-sm font-semibold">{team.stats.winPercentage}%</span>
                      </div>
                      <Progress value={team.stats.winPercentage} className="h-2" />
                    </div>
                    <div>
                      <div className="flex justify-between mb-2">
                        <span className="text-sm text-muted-foreground">Playoff Success</span>
                        <span className="text-sm font-semibold">
                          {Math.round(
                            (team.stats.playoffAppearances /
                              (new Date().getFullYear() - Number.parseInt(team.founded))) *
                            100,
                          )}
                          %
                        </span>
                      </div>
                      <Progress
                        value={
                          (team.stats.playoffAppearances / (new Date().getFullYear() - Number.parseInt(team.founded))) *
                          100
                        }
                        className="h-2"
                      />
                    </div>
                  </CardContent>
                </Card>
              </div>
            </TabsContent>

            <TabsContent value="matches" className="mt-8">
              <Card>
                <CardHeader>
                  <CardTitle>Fixtures & Results</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    {team.recentMatches.map((match, index) => (
                      <div key={index} className="flex items-center justify-between p-4 bg-muted/50 rounded-lg">
                        <div className="flex items-center space-x-4">
                          <div
                            className={`w-3 h-3 rounded-full ${match.result === "Won" ? "bg-green-500" : "bg-red-500"}`}
                          />
                          <div>
                            <p className="font-semibold">vs {match.opponent}</p>
                            <p className="text-sm text-muted-foreground">{match.date}</p>
                          </div>
                        </div>
                        <div className="text-right">
                          <p className={`font-semibold ${match.result === "Won" ? "text-green-600" : "text-red-600"}`}>
                            {match.result}
                          </p>
                          <p className="text-sm text-muted-foreground">{match.margin}</p>
                        </div>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </TabsContent>

            <TabsContent value="achievements" className="mt-8">
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center space-x-2">
                    <Award className="h-5 w-5 text-primary" />
                    <span>Major Achievements</span>
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    {team.achievements.map((achievement, index) => (
                      <div key={index} className="flex items-center space-x-3 p-3 bg-muted/50 rounded-lg">
                        <Trophy className="h-5 w-5 text-primary flex-shrink-0" />
                        <span className="text-sm">{achievement}</span>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </TabsContent>
          </Tabs>
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
