import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Progress } from "@/components/ui/progress"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Trophy, ArrowLeft, Calendar, MapPin, Target, TrendingUp, BarChart3, Award } from "lucide-react"
import Link from "next/link"
import { notFound } from "next/navigation"

// Mock player data - in real app this would come from BigQuery
const playersData = {
  "sanju-samson": {
    id: "sanju-samson",
    name: "Sanju Samson",
    team: "Rajasthan Royals",
    role: "Wicket-keeper Batsman",
    nationality: "India",
    age: 29,
    birthPlace: "Thiruvananthapuram, Kerala",
    debut: "2013",
    image: "/sanju-samson-portrait.png",
    bio: "Sanju Samson is an Indian cricketer who plays for Kerala in domestic cricket and captains Rajasthan Royals in the IPL. Known for his elegant batting style and excellent wicket-keeping skills.",
    stats: {
      matches: 142,
      runs: 3668,
      average: 28.9,
      strikeRate: 136.7,
      centuries: 1,
      fifties: 17,
      catches: 89,
      stumpings: 12,
      highestScore: 119,
    },
    recentForm: [45, 23, 67, 12, 89, 34, 56],
    achievements: [
      "IPL Captain - Rajasthan Royals",
      "Fastest IPL fifty by an Indian (17 balls)",
      "Kerala Captain",
      "Vijay Hazare Trophy Winner",
    ],
  },
  "jos-buttler": {
    id: "jos-buttler",
    name: "Jos Buttler",
    team: "Rajasthan Royals",
    role: "Wicket-keeper Batsman",
    nationality: "England",
    age: 34,
    birthPlace: "Taunton, England",
    debut: "2011",
    image: "/jos-buttler-portrait.png",
    bio: "Jos Buttler is an English cricketer known for his explosive batting and innovative shot-making. He's been a key player for Rajasthan Royals and the England national team.",
    stats: {
      matches: 89,
      runs: 2582,
      average: 34.4,
      strikeRate: 148.9,
      centuries: 1,
      fifties: 18,
      catches: 67,
      stumpings: 15,
      highestScore: 124,
    },
    recentForm: [67, 89, 23, 45, 78, 12, 56],
    achievements: [
      "IPL Orange Cap Winner 2022",
      "England World Cup Winner 2019",
      "T20 World Cup Winner 2022",
      "IPL Most Sixes in a Season",
    ],
  },
}

interface PlayerPageProps {
  params: {
    id: string
  }
}

export default function PlayerPage({ params }: PlayerPageProps) {
  const player = playersData[params.id as keyof typeof playersData]

  if (!player) {
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
                  <Button
                    variant="ghost"
                    className="text-primary-foreground hover:text-accent-foreground bg-primary-foreground/10"
                  >
                    Players
                  </Button>
                </Link>
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

      {/* Breadcrumb */}
      <section className="bg-muted/50 py-4">
        <div className="container mx-auto px-4">
          <div className="flex items-center space-x-2 text-sm text-muted-foreground">
            <Link href="/" className="hover:text-primary transition-colors">
              Home
            </Link>
            <span>/</span>
            <Link href="/players" className="hover:text-primary transition-colors">
              Players
            </Link>
            <span>/</span>
            <span className="text-foreground">{player.name}</span>
          </div>
        </div>
      </section>

      {/* Player Header */}
      <section className="py-12 bg-gradient-to-r from-secondary to-primary/80 text-white">
        <div className="container mx-auto px-4">
          <div className="flex items-center space-x-4 mb-8">
            <Link href="/players">
              <Button variant="ghost" size="sm" className="text-white hover:text-accent-foreground">
                <ArrowLeft className="h-4 w-4 mr-2" />
                Back to Players
              </Button>
            </Link>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-center">
            <div className="lg:col-span-1">
              <img
                src={player.image || "/placeholder.svg"}
                alt={player.name}
                className="w-full max-w-sm mx-auto rounded-lg shadow-2xl"
              />
            </div>

            <div className="lg:col-span-2 space-y-6">
              <div>
                <Badge
                  className={`mb-4 ${player.team === "Rajasthan Royals"
                      ? "bg-primary text-primary-foreground"
                      : player.team === "Paarl Royals"
                        ? "bg-secondary text-secondary-foreground"
                        : "bg-accent text-accent-foreground"
                    }`}
                >
                  {player.team}
                </Badge>
                <h1 className="text-4xl md:text-5xl font-serif font-bold mb-2">{player.name}</h1>
                <p className="text-xl opacity-90 mb-4">{player.role} · {player.team}</p>

                <div className="flex flex-wrap gap-4 text-sm">
                  <div className="flex items-center space-x-2">
                    <MapPin className="h-4 w-4" />
                    <span>{player.nationality}</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <Calendar className="h-4 w-4" />
                    <span>Age {player.age}</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <Trophy className="h-4 w-4" />
                    <span>Debut {player.debut}</span>
                  </div>
                </div>
              </div>

              <p className="text-lg opacity-90 leading-relaxed">{player.bio}</p>

              <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                <div className="text-center">
                  <p className="text-2xl font-bold">{player.stats.matches}</p>
                  <p className="text-sm opacity-80">Matches</p>
                </div>
                <div className="text-center">
                  <p className="text-2xl font-bold">{player.stats.runs}</p>
                  <p className="text-sm opacity-80">Runs</p>
                </div>
                <div className="text-center">
                  <p className="text-2xl font-bold">{player.stats.average}</p>
                  <p className="text-sm opacity-80">Average</p>
                </div>
                <div className="text-center">
                  <p className="text-2xl font-bold">{player.stats.strikeRate}</p>
                  <p className="text-sm opacity-80">Strike Rate</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Player Details */}
      <section className="py-12">
        <div className="container mx-auto px-4">
          <Tabs defaultValue="stats" className="w-full">
            <TabsList className="grid w-full grid-cols-4">
              <TabsTrigger value="stats">Key Numbers</TabsTrigger>
              <TabsTrigger value="form">Recent Form</TabsTrigger>
              <TabsTrigger value="achievements">Milestones</TabsTrigger>
              <TabsTrigger value="bio">Biography</TabsTrigger>
            </TabsList>

            <TabsContent value="stats" className="mt-8">
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                <Card>
                  <CardHeader>
                    <CardTitle className="flex items-center space-x-2">
                      <Target className="h-5 w-5 text-primary" />
                      <span>Key Numbers</span>
                    </CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <div className="flex justify-between">
                      <span className="text-muted-foreground">Matches</span>
                      <span className="font-semibold">{player.stats.matches}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-muted-foreground">Runs</span>
                      <span className="font-semibold">{player.stats.runs}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-muted-foreground">Average</span>
                      <span className="font-semibold">{player.stats.average}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-muted-foreground">Strike Rate</span>
                      <span className="font-semibold">{player.stats.strikeRate}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-muted-foreground">Highest Score</span>
                      <span className="font-semibold">{player.stats.highestScore}</span>
                    </div>
                  </CardContent>
                </Card>

                <Card>
                  <CardHeader>
                    <CardTitle className="flex items-center space-x-2">
                      <TrendingUp className="h-5 w-5 text-primary" />
                      <span>Milestones</span>
                    </CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <div className="flex justify-between">
                      <span className="text-muted-foreground">Centuries</span>
                      <span className="font-semibold">{player.stats.centuries}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-muted-foreground">Fifties</span>
                      <span className="font-semibold">{player.stats.fifties}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-muted-foreground">Catches</span>
                      <span className="font-semibold">{player.stats.catches}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-muted-foreground">Stumpings</span>
                      <span className="font-semibold">{player.stats.stumpings}</span>
                    </div>
                  </CardContent>
                </Card>

                <Card>
                  <CardHeader>
                    <CardTitle className="flex items-center space-x-2">
                      <BarChart3 className="h-5 w-5 text-primary" />
                      <span>Performance Metrics</span>
                    </CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <div>
                      <div className="flex justify-between mb-2">
                        <span className="text-sm text-muted-foreground">Batting Average</span>
                        <span className="text-sm font-semibold">{player.stats.average}</span>
                      </div>
                      <Progress value={(player.stats.average / 50) * 100} className="h-2" />
                    </div>
                    <div>
                      <div className="flex justify-between mb-2">
                        <span className="text-sm text-muted-foreground">Strike Rate</span>
                        <span className="text-sm font-semibold">{player.stats.strikeRate}</span>
                      </div>
                      <Progress value={(player.stats.strikeRate / 200) * 100} className="h-2" />
                    </div>
                    <div>
                      <div className="flex justify-between mb-2">
                        <span className="text-sm text-muted-foreground">Consistency</span>
                        <span className="text-sm font-semibold">85%</span>
                      </div>
                      <Progress value={85} className="h-2" />
                    </div>
                  </CardContent>
                </Card>
              </div>
            </TabsContent>

            <TabsContent value="form" className="mt-8">
              <Card>
                <CardHeader>
                  <CardTitle>Recent Form (Last 7 Matches)</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    <div className="flex items-center justify-between">
                      <span className="text-sm text-muted-foreground">Last 7 innings</span>
                      <div className="flex space-x-2">
                        {player.recentForm.map((score, index) => (
                          <div
                            key={index}
                            className={`w-12 h-12 rounded-full flex items-center justify-center text-sm font-semibold ${score >= 50
                                ? "bg-green-100 text-green-800"
                                : score >= 30
                                  ? "bg-yellow-100 text-yellow-800"
                                  : "bg-red-100 text-red-800"
                              }`}
                          >
                            {score}
                          </div>
                        ))}
                      </div>
                    </div>
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-4 pt-4">
                      <div className="text-center">
                        <p className="text-2xl font-bold text-primary">
                          {Math.round(player.recentForm.reduce((a, b) => a + b, 0) / player.recentForm.length)}
                        </p>
                        <p className="text-sm text-muted-foreground">Avg (Last 7)</p>
                      </div>
                      <div className="text-center">
                        <p className="text-2xl font-bold text-primary">{Math.max(...player.recentForm)}</p>
                        <p className="text-sm text-muted-foreground">Highest</p>
                      </div>
                      <div className="text-center">
                        <p className="text-2xl font-bold text-primary">
                          {player.recentForm.filter((score) => score >= 50).length}
                        </p>
                        <p className="text-sm text-muted-foreground">50+ Scores</p>
                      </div>
                      <div className="text-center">
                        <p className="text-2xl font-bold text-primary">
                          {player.recentForm.filter((score) => score >= 30).length}
                        </p>
                        <p className="text-sm text-muted-foreground">30+ Scores</p>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </TabsContent>

            <TabsContent value="achievements" className="mt-8">
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center space-x-2">
                    <Award className="h-5 w-5 text-primary" />
                    <span>Career Achievements</span>
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    {player.achievements.map((achievement, index) => (
                      <div key={index} className="flex items-center space-x-3 p-3 bg-muted/50 rounded-lg">
                        <Trophy className="h-5 w-5 text-primary flex-shrink-0" />
                        <span className="text-sm">{achievement}</span>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </TabsContent>

            <TabsContent value="bio" className="mt-8">
              <Card>
                <CardHeader>
                  <CardTitle>Biography</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <p className="text-muted-foreground leading-relaxed">{player.bio}</p>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6 pt-6">
                    <div>
                      <h4 className="font-semibold mb-3">Personal Information</h4>
                      <div className="space-y-2 text-sm">
                        <div className="flex justify-between">
                          <span className="text-muted-foreground">Full Name</span>
                          <span>{player.name}</span>
                        </div>
                        <div className="flex justify-between">
                          <span className="text-muted-foreground">Age</span>
                          <span>{player.age} years</span>
                        </div>
                        <div className="flex justify-between">
                          <span className="text-muted-foreground">Birth Place</span>
                          <span>{player.birthPlace}</span>
                        </div>
                        <div className="flex justify-between">
                          <span className="text-muted-foreground">Nationality</span>
                          <span>{player.nationality}</span>
                        </div>
                      </div>
                    </div>

                    <div>
                      <h4 className="font-semibold mb-3">Career Information</h4>
                      <div className="space-y-2 text-sm">
                        <div className="flex justify-between">
                          <span className="text-muted-foreground">Current Team</span>
                          <span>{player.team}</span>
                        </div>
                        <div className="flex justify-between">
                          <span className="text-muted-foreground">Role</span>
                          <span>{player.role}</span>
                        </div>
                        <div className="flex justify-between">
                          <span className="text-muted-foreground">Debut Year</span>
                          <span>{player.debut}</span>
                        </div>
                        <div className="flex justify-between">
                          <span className="text-muted-foreground">Career Span</span>
                          <span>{new Date().getFullYear() - Number.parseInt(player.debut)} years</span>
                        </div>
                      </div>
                    </div>
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
