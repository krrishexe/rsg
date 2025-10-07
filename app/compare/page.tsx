"use client"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Progress } from "@/components/ui/progress"
import { Trophy, ArrowLeft, Users, TrendingUp, Target, BarChart3, Plus, X } from "lucide-react"
import Link from "next/link"
import { useState } from "react"

// Mock player data for comparison
const playersData = [
  {
    id: "sanju-samson",
    name: "Sanju Samson",
    team: "Rajasthan Royals",
    role: "Wicket-keeper Batsman",
    image: "/placeholder.svg?key=samson",
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
      sixes: 156,
      fours: 298,
    },
  },
  {
    id: "jos-buttler",
    name: "Jos Buttler",
    team: "Rajasthan Royals",
    role: "Wicket-keeper Batsman",
    image: "/placeholder.svg?key=buttler",
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
      sixes: 189,
      fours: 234,
    },
  },
  {
    id: "yashasvi-jaiswal",
    name: "Yashasvi Jaiswal",
    team: "Rajasthan Royals",
    role: "Opening Batsman",
    image: "/placeholder.svg?key=jaiswal",
    stats: {
      matches: 42,
      runs: 1289,
      average: 32.2,
      strikeRate: 143.1,
      centuries: 0,
      fifties: 8,
      catches: 23,
      stumpings: 0,
      highestScore: 98,
      sixes: 67,
      fours: 134,
    },
  },
  {
    id: "david-miller",
    name: "David Miller",
    team: "Paarl Royals",
    role: "Middle-order Batsman",
    image: "/placeholder.svg?key=miller",
    stats: {
      matches: 156,
      runs: 3845,
      average: 35.8,
      strikeRate: 142.3,
      centuries: 2,
      fifties: 23,
      catches: 78,
      stumpings: 0,
      highestScore: 101,
      sixes: 198,
      fours: 267,
    },
  },
  {
    id: "jason-holder",
    name: "Jason Holder",
    team: "Barbados Royals",
    role: "All-rounder",
    image: "/placeholder.svg?key=holder",
    stats: {
      matches: 134,
      runs: 1876,
      average: 24.8,
      strikeRate: 128.4,
      centuries: 0,
      fifties: 8,
      catches: 67,
      stumpings: 0,
      highestScore: 74,
      sixes: 89,
      fours: 156,
      wickets: 156,
      bowlingAverage: 28.4,
      economy: 8.2,
    },
  },
  {
    id: "quinton-de-kock",
    name: "Quinton de Kock",
    team: "Barbados Royals",
    role: "Wicket-keeper Batsman",
    image: "/placeholder.svg?key=dekock",
    stats: {
      matches: 187,
      runs: 5242,
      average: 31.9,
      strikeRate: 135.4,
      centuries: 3,
      fifties: 34,
      catches: 123,
      stumpings: 18,
      highestScore: 140,
      sixes: 234,
      fours: 456,
    },
  },
]

export default function ComparePage() {
  const [selectedPlayers, setSelectedPlayers] = useState<string[]>([])
  const [comparisonType, setComparisonType] = useState("batting")

  const addPlayer = (playerId: string) => {
    if (selectedPlayers.length < 4 && !selectedPlayers.includes(playerId)) {
      setSelectedPlayers([...selectedPlayers, playerId])
    }
  }

  const removePlayer = (playerId: string) => {
    setSelectedPlayers(selectedPlayers.filter((id) => id !== playerId))
  }

  const getSelectedPlayersData = () => {
    return selectedPlayers.map((id) => playersData.find((p) => p.id === id)).filter(Boolean)
  }

  const getMaxValue = (stat: string) => {
    const players = getSelectedPlayersData()
    return Math.max(...players.map((p) => p?.stats[stat as keyof typeof p.stats] || 0))
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
                  <Button variant="ghost" className="text-primary-foreground hover:text-accent-foreground">
                    Teams
                  </Button>
                </Link>
                <Button
                  variant="ghost"
                  className="text-primary-foreground hover:text-accent-foreground bg-primary-foreground/10"
                >
                  Compare
                </Button>
              </nav>
            </div>
          </div>
        </div>
      </header>

      {/* Page Header */}
      <section className="bg-gradient-to-r from-secondary to-primary/80 text-white py-12">
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
            <h1 className="text-4xl md:text-5xl font-serif font-bold mb-4">Player Comparison</h1>
            <p className="text-lg opacity-90 max-w-2xl mx-auto">
              Compare your favorite RSG players side-by-side across different performance metrics
            </p>
          </div>
        </div>
      </section>

      {/* Player Selection */}
      <section className="py-8 bg-background border-b">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row gap-4 items-center justify-between mb-6">
            <h2 className="text-2xl font-serif font-bold">Select Players to Compare</h2>
            <div className="flex items-center space-x-4">
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
          </div>

          {/* Selected Players */}
          {selectedPlayers.length > 0 && (
            <div className="mb-6">
              <h3 className="text-lg font-semibold mb-3">Selected Players ({selectedPlayers.length}/4)</h3>
              <div className="flex flex-wrap gap-2">
                {selectedPlayers.map((playerId) => {
                  const player = playersData.find((p) => p.id === playerId)
                  return player ? (
                    <Badge key={playerId} variant="secondary" className="flex items-center space-x-2 px-3 py-2">
                      <span>{player.name}</span>
                      <Button
                        variant="ghost"
                        size="sm"
                        className="h-4 w-4 p-0 hover:bg-destructive hover:text-destructive-foreground"
                        onClick={() => removePlayer(playerId)}
                      >
                        <X className="h-3 w-3" />
                      </Button>
                    </Badge>
                  ) : null
                })}
              </div>
            </div>
          )}

          {/* Available Players */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
            {playersData.map((player) => (
              <Card
                key={player.id}
                className={`cursor-pointer transition-all duration-200 ${
                  selectedPlayers.includes(player.id)
                    ? "border-primary bg-primary/5"
                    : "hover:border-primary/50 hover:shadow-md"
                } ${selectedPlayers.length >= 4 && !selectedPlayers.includes(player.id) ? "opacity-50 cursor-not-allowed" : ""}`}
                onClick={() => {
                  if (selectedPlayers.includes(player.id)) {
                    removePlayer(player.id)
                  } else {
                    addPlayer(player.id)
                  }
                }}
              >
                <CardContent className="p-4">
                  <div className="flex items-center space-x-3">
                    <img
                      src={player.image || "/placeholder.svg"}
                      alt={player.name}
                      className="w-12 h-12 rounded-full object-cover"
                    />
                    <div className="flex-1">
                      <h3 className="font-semibold">{player.name}</h3>
                      <p className="text-sm text-muted-foreground">{player.role}</p>
                      <Badge variant="outline" className="text-xs mt-1">
                        {player.team.split(" ")[0]}
                      </Badge>
                    </div>
                    <div className="flex items-center">
                      {selectedPlayers.includes(player.id) ? (
                        <div className="w-6 h-6 bg-primary rounded-full flex items-center justify-center">
                          <X className="h-4 w-4 text-primary-foreground" />
                        </div>
                      ) : (
                        <div className="w-6 h-6 border-2 border-muted-foreground rounded-full flex items-center justify-center">
                          <Plus className="h-4 w-4 text-muted-foreground" />
                        </div>
                      )}
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Comparison Results */}
      {selectedPlayers.length >= 2 && (
        <section className="py-12">
          <div className="container mx-auto px-4">
            <div className="flex items-center justify-between mb-8">
              <h2 className="text-3xl font-serif font-bold">Comparison Results</h2>
              <Select value={comparisonType} onValueChange={setComparisonType}>
                <SelectTrigger className="w-48">
                  <SelectValue />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="batting">Batting Stats</SelectItem>
                  <SelectItem value="fielding">Fielding Stats</SelectItem>
                  <SelectItem value="overall">Overall Performance</SelectItem>
                </SelectContent>
              </Select>
            </div>

            <Tabs value={comparisonType} onValueChange={setComparisonType} className="w-full">
              <TabsList className="grid w-full grid-cols-3">
                <TabsTrigger value="batting">Batting</TabsTrigger>
                <TabsTrigger value="fielding">Fielding</TabsTrigger>
                <TabsTrigger value="overall">Overall</TabsTrigger>
              </TabsList>

              <TabsContent value="batting" className="mt-8">
                <div className="space-y-8">
                  {/* Player Cards */}
                  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                    {getSelectedPlayersData().map((player) => (
                      <Card key={player?.id} className="text-center">
                        <CardHeader className="pb-3">
                          <img
                            src={player?.image || "/placeholder.svg"}
                            alt={player?.name}
                            className="w-20 h-20 rounded-full object-cover mx-auto mb-3"
                          />
                          <CardTitle className="text-lg">{player?.name}</CardTitle>
                          <p className="text-sm text-muted-foreground">{player?.team}</p>
                        </CardHeader>
                        <CardContent className="space-y-2">
                          <div className="grid grid-cols-2 gap-2 text-sm">
                            <div>
                              <p className="text-muted-foreground">Matches</p>
                              <p className="font-semibold">{player?.stats.matches}</p>
                            </div>
                            <div>
                              <p className="text-muted-foreground">Runs</p>
                              <p className="font-semibold">{player?.stats.runs}</p>
                            </div>
                            <div>
                              <p className="text-muted-foreground">Average</p>
                              <p className="font-semibold">{player?.stats.average}</p>
                            </div>
                            <div>
                              <p className="text-muted-foreground">Strike Rate</p>
                              <p className="font-semibold">{player?.stats.strikeRate}</p>
                            </div>
                          </div>
                        </CardContent>
                      </Card>
                    ))}
                  </div>

                  {/* Detailed Comparison */}
                  <Card>
                    <CardHeader>
                      <CardTitle className="flex items-center space-x-2">
                        <BarChart3 className="h-5 w-5 text-primary" />
                        <span>Batting Statistics Comparison</span>
                      </CardTitle>
                    </CardHeader>
                    <CardContent>
                      <div className="space-y-6">
                        {/* Runs */}
                        <div>
                          <h4 className="font-semibold mb-3">Total Runs</h4>
                          <div className="space-y-3">
                            {getSelectedPlayersData().map((player) => (
                              <div key={player?.id} className="flex items-center space-x-4">
                                <div className="w-32 text-sm font-medium">{player?.name}</div>
                                <div className="flex-1">
                                  <Progress
                                    value={((player?.stats.runs || 0) / getMaxValue("runs")) * 100}
                                    className="h-3"
                                  />
                                </div>
                                <div className="w-16 text-sm font-semibold text-right">{player?.stats.runs}</div>
                              </div>
                            ))}
                          </div>
                        </div>

                        {/* Average */}
                        <div>
                          <h4 className="font-semibold mb-3">Batting Average</h4>
                          <div className="space-y-3">
                            {getSelectedPlayersData().map((player) => (
                              <div key={player?.id} className="flex items-center space-x-4">
                                <div className="w-32 text-sm font-medium">{player?.name}</div>
                                <div className="flex-1">
                                  <Progress
                                    value={((player?.stats.average || 0) / getMaxValue("average")) * 100}
                                    className="h-3"
                                  />
                                </div>
                                <div className="w-16 text-sm font-semibold text-right">{player?.stats.average}</div>
                              </div>
                            ))}
                          </div>
                        </div>

                        {/* Strike Rate */}
                        <div>
                          <h4 className="font-semibold mb-3">Strike Rate</h4>
                          <div className="space-y-3">
                            {getSelectedPlayersData().map((player) => (
                              <div key={player?.id} className="flex items-center space-x-4">
                                <div className="w-32 text-sm font-medium">{player?.name}</div>
                                <div className="flex-1">
                                  <Progress
                                    value={((player?.stats.strikeRate || 0) / getMaxValue("strikeRate")) * 100}
                                    className="h-3"
                                  />
                                </div>
                                <div className="w-16 text-sm font-semibold text-right">{player?.stats.strikeRate}</div>
                              </div>
                            ))}
                          </div>
                        </div>

                        {/* Sixes */}
                        <div>
                          <h4 className="font-semibold mb-3">Sixes Hit</h4>
                          <div className="space-y-3">
                            {getSelectedPlayersData().map((player) => (
                              <div key={player?.id} className="flex items-center space-x-4">
                                <div className="w-32 text-sm font-medium">{player?.name}</div>
                                <div className="flex-1">
                                  <Progress
                                    value={((player?.stats.sixes || 0) / getMaxValue("sixes")) * 100}
                                    className="h-3"
                                  />
                                </div>
                                <div className="w-16 text-sm font-semibold text-right">{player?.stats.sixes}</div>
                              </div>
                            ))}
                          </div>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </div>
              </TabsContent>

              <TabsContent value="fielding" className="mt-8">
                <Card>
                  <CardHeader>
                    <CardTitle className="flex items-center space-x-2">
                      <Target className="h-5 w-5 text-primary" />
                      <span>Fielding Statistics Comparison</span>
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-6">
                      {/* Catches */}
                      <div>
                        <h4 className="font-semibold mb-3">Catches</h4>
                        <div className="space-y-3">
                          {getSelectedPlayersData().map((player) => (
                            <div key={player?.id} className="flex items-center space-x-4">
                              <div className="w-32 text-sm font-medium">{player?.name}</div>
                              <div className="flex-1">
                                <Progress
                                  value={((player?.stats.catches || 0) / getMaxValue("catches")) * 100}
                                  className="h-3"
                                />
                              </div>
                              <div className="w-16 text-sm font-semibold text-right">{player?.stats.catches}</div>
                            </div>
                          ))}
                        </div>
                      </div>

                      {/* Stumpings */}
                      <div>
                        <h4 className="font-semibold mb-3">Stumpings</h4>
                        <div className="space-y-3">
                          {getSelectedPlayersData().map((player) => (
                            <div key={player?.id} className="flex items-center space-x-4">
                              <div className="w-32 text-sm font-medium">{player?.name}</div>
                              <div className="flex-1">
                                <Progress
                                  value={
                                    getMaxValue("stumpings") > 0
                                      ? ((player?.stats.stumpings || 0) / getMaxValue("stumpings")) * 100
                                      : 0
                                  }
                                  className="h-3"
                                />
                              </div>
                              <div className="w-16 text-sm font-semibold text-right">
                                {player?.stats.stumpings || 0}
                              </div>
                            </div>
                          ))}
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </TabsContent>

              <TabsContent value="overall" className="mt-8">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                  <Card>
                    <CardHeader>
                      <CardTitle className="flex items-center space-x-2">
                        <TrendingUp className="h-5 w-5 text-primary" />
                        <span>Career Summary</span>
                      </CardTitle>
                    </CardHeader>
                    <CardContent>
                      <div className="space-y-4">
                        {getSelectedPlayersData().map((player) => (
                          <div key={player?.id} className="p-4 bg-muted/50 rounded-lg">
                            <h4 className="font-semibold mb-2">{player?.name}</h4>
                            <div className="grid grid-cols-2 gap-4 text-sm">
                              <div>
                                <p className="text-muted-foreground">Matches</p>
                                <p className="font-semibold">{player?.stats.matches}</p>
                              </div>
                              <div>
                                <p className="text-muted-foreground">Runs</p>
                                <p className="font-semibold">{player?.stats.runs}</p>
                              </div>
                              <div>
                                <p className="text-muted-foreground">Centuries</p>
                                <p className="font-semibold">{player?.stats.centuries}</p>
                              </div>
                              <div>
                                <p className="text-muted-foreground">Fifties</p>
                                <p className="font-semibold">{player?.stats.fifties}</p>
                              </div>
                            </div>
                          </div>
                        ))}
                      </div>
                    </CardContent>
                  </Card>

                  <Card>
                    <CardHeader>
                      <CardTitle className="flex items-center space-x-2">
                        <Users className="h-5 w-5 text-primary" />
                        <span>Head-to-Head</span>
                      </CardTitle>
                    </CardHeader>
                    <CardContent>
                      <div className="space-y-4">
                        <div className="text-center">
                          <h4 className="font-semibold mb-4">Best Performer by Category</h4>
                          <div className="space-y-3">
                            <div className="flex justify-between items-center p-2 bg-muted/50 rounded">
                              <span className="text-sm">Highest Average</span>
                              <span className="font-semibold text-primary">
                                {
                                  getSelectedPlayersData().reduce((best, player) =>
                                    (player?.stats.average || 0) > (best?.stats.average || 0) ? player : best,
                                  )?.name
                                }
                              </span>
                            </div>
                            <div className="flex justify-between items-center p-2 bg-muted/50 rounded">
                              <span className="text-sm">Highest Strike Rate</span>
                              <span className="font-semibold text-primary">
                                {
                                  getSelectedPlayersData().reduce((best, player) =>
                                    (player?.stats.strikeRate || 0) > (best?.stats.strikeRate || 0) ? player : best,
                                  )?.name
                                }
                              </span>
                            </div>
                            <div className="flex justify-between items-center p-2 bg-muted/50 rounded">
                              <span className="text-sm">Most Runs</span>
                              <span className="font-semibold text-primary">
                                {
                                  getSelectedPlayersData().reduce((best, player) =>
                                    (player?.stats.runs || 0) > (best?.stats.runs || 0) ? player : best,
                                  )?.name
                                }
                              </span>
                            </div>
                            <div className="flex justify-between items-center p-2 bg-muted/50 rounded">
                              <span className="text-sm">Most Sixes</span>
                              <span className="font-semibold text-primary">
                                {
                                  getSelectedPlayersData().reduce((best, player) =>
                                    (player?.stats.sixes || 0) > (best?.stats.sixes || 0) ? player : best,
                                  )?.name
                                }
                              </span>
                            </div>
                          </div>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </div>
              </TabsContent>
            </Tabs>
          </div>
        </section>
      )}

      {selectedPlayers.length < 2 && (
        <section className="py-16 text-center">
          <div className="container mx-auto px-4">
            <div className="max-w-md mx-auto">
              <BarChart3 className="h-16 w-16 text-muted-foreground mx-auto mb-4" />
              <h3 className="text-xl font-semibold mb-2">Select Players to Compare</h3>
              <p className="text-muted-foreground">
                Choose at least 2 players from the list above to start comparing their performance statistics.
              </p>
            </div>
          </div>
        </section>
      )}

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
                  <Link href="/compare" className="hover:text-primary transition-colors">
                    Compare Players
                  </Link>
                </li>
                <li>
                  <Link href="#" className="hover:text-primary transition-colors">
                    Performance Stats
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
