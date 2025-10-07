import { Button } from "@/components/ui/button"
import { Card as UICard, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { BentoGrid, BentoGridItem, BentoGridHero, BentoGridStats, BentoGridFeatures, BentoGridCards } from "@/components/ui/bento-grid"
import ParallaxTile from "@/components/ui/parallax-tile"
import PlayerStatusCard from "@/components/ui/player-status-card"
import { Trophy, Users, Target, TrendingUp, Menu, ShoppingBag, Sun, User } from "lucide-react"
import Link from "next/link"
import HeroScroll from "@/components/ui/hero-scroll-animation"
import { Input } from "@/components/ui/input"
import CardSwap, { Card as SwapCard } from "@/components/ui/card-swap"

export default function HomePage() {
  return (
    <div className="min-h-screen bg-background">

      {/* Hero Scroll Animation */}
      <section className="relative">
        <HeroScroll />
      </section>

      {/* CardSwap Section: About + Cards */}
      <section className="relative py-20 bg-background">
        <div className="container mx-auto px-4 h-[600px]">
          <BentoGridHero className="lg:grid-cols-2">
            <BentoGridItem colSpan={1} className="mt-36 space-y-4 pr-6 border-0 bg-transparent shadow-none">
              <h2 className="text-6xl font-serif font-bold">Built for Super Royals</h2>
              <p className="text-muted-foreground text-xl">
                Watch key moments, compare stars, and track form—live. These preview cards cycle through
                clips and insights from Rajasthan, Paarl, and Barbados Royals.
              </p>
            </BentoGridItem>

            <BentoGridItem colSpan={1} className="min-h-[520px] border-0 bg-transparent shadow-none">
              <div className="relative w-full max-w-3xl mx-auto h-[600px] flex items-end justify-ce\">
                <CardSwap cardDistance={60} verticalDistance={70} delay={4000} pauseOnHover easing="power">
                  <SwapCard className="p-0 overflow-hidden">
                    <img className="w-full h-full object-cover" src="/rr_players/impact-hero-image.webp"></img>
                    <div className="absolute inset-x-0 bottom-0 p-4 bg-black/70">
                      <h3 className="text-lg font-semibold">Rajasthan Royals • Training</h3>
                      <p className="text-xs text-white/80">Sharpening for the next fixture.</p>
                    </div>
                  </SwapCard>
                  <SwapCard className="p-0 overflow-hidden">
                    <img className="w-full h-full object-cover" src="/pr_players/paarl-card-image.webp"></img>
                    <div className="absolute inset-x-0 bottom-0 p-4 bg-black/70">
                      <h3 className="text-lg font-semibold">Paarl Royals • Match Night</h3>
                      <p className="text-xs text-white/80">Lights on. Stakes high.</p>
                    </div>
                  </SwapCard>
                  <SwapCard className="p-0 overflow-hidden">
                    <img className="w-full h-full object-cover" src="/br_players/barbados-card-image.webp"></img>
                    <div className="absolute inset-x-0 bottom-0 p-4 bg-black/70">
                      <h3 className="text-lg font-semibold">Barbados Royals • Warm-ups</h3>
                      <p className="text-xs text-white/80">Tempo up before the toss.</p>
                    </div>
                  </SwapCard>
                  <SwapCard className="p-0 overflow-hidden">
                    <img className="w-full h-full object-cover" src="/collective-card-image.webp"></img>
                    <div className="absolute inset-x-0 bottom-0 p-4 bg-black/70">
                      <h3 className="text-lg font-semibold">Across RSG • Highlights</h3>
                      <p className="text-xs text-white/80">Big hits. Big moments.</p>
                    </div>
                  </SwapCard>
                </CardSwap>
              </div>
            </BentoGridItem>
          </BentoGridHero>
        </div>
      </section>


      {/* Header - moved below hero animation */}
      <header className="sticky top-0 z-50 bg-primary text-primary-foreground mt-10">
        <div className="container mx-auto px-4">
          {/* Top Navigation */}
          <div className="flex items-center justify-between py-3 text-sm">
            <div className="flex items-center space-x-6">
              <Link href="https://www.rajasthanroyals.com/cricket-academies" className="hover:text-accent-foreground transition-colors">
                ROYALS ACADEMY
              </Link>
              <Link href="https://rsb.rajasthanroyals.com/" className="hover:text-accent-foreground transition-colors">
                ROYALS SCHOOL OF BUSINESS
              </Link>
              <Link href="https://www.rajasthanroyals.com/foundation" className="hover:text-accent-foreground transition-colors">
                ROYAL RAJASTHAN FOUNDATION
              </Link>
            </div>
            <div className="flex items-center space-x-4">
              <Button asChild variant="ghost" size="sm" className="text-primary-foreground hover:text-accent-foreground">
                <Link href="https://www.rajasthanroyals.com/shop">
                  <ShoppingBag className="h-4 w-4 mr-1" />
                  SHOP
                </Link>
              </Button>
              <Button variant="ghost" size="sm" className="text-primary-foreground hover:text-accent-foreground">
                <User className="h-4 w-4 mr-1" />
                LOGIN
              </Button>
            </div>
          </div>

          {/* Main Navigation */}
          <div className="flex items-center justify-between py-4 border-t border-primary-foreground/20">
            <div className="flex items-center space-x-8">
              {/* Logo */}
              <div className="flex items-center space-x-2">
                <img src="/favicon.ico" className="h-12 w-12" />
                <div>
                  <h1 className="font-serif font-bold text-xl">RSG</h1>
                  <p className="text-xs opacity-90">ROYALS SPORTS GROUP</p>
                </div>
              </div>

              {/* Navigation Links */}
              <nav className="flex items-center space-x-6">
                <Button variant="ghost" className="text-primary-foreground hover:text-accent-foreground">
                  Latest <Menu className="h-4 w-4 ml-1" />
                </Button>
                <Button variant="ghost" className="text-primary-foreground hover:text-accent-foreground">
                  IPL 2025 <Menu className="h-4 w-4 ml-1" />
                </Button>
                <Button variant="ghost" className="text-primary-foreground hover:text-accent-foreground">
                  Fan Zone <Menu className="h-4 w-4 ml-1" />
                </Button>
                <Button variant="ghost" className="text-primary-foreground hover:text-accent-foreground">
                  Royals Corner <Menu className="h-4 w-4 ml-1" />
                </Button>
              </nav>
            </div>

            <div className="flex items-center space-x-4">
              <Link href="https://play.google.com/store/apps/details?id=com.rajasthanroyals.app&hl=en_IN" className="text-sm">Download App </Link>
              <Link href="https://api.whatsapp.com/send/?phone=919152974250&text=Menu&type=phone_number&app_absent=0" className="text-sm">WhatsApp</Link>
            </div>
          </div>
        </div>
      </header>

      {/* Hero Section (supporting copy) */}
      <section className="relative bg-slate-900 text-white overflow-hidden min-h-screen flex items-center">
        {/* Animated Background Elements */}
        <div className="absolute inset-0">
          <div className="absolute inset-0 bg-secondary/70"></div>
          <div className="absolute top-0 left-1/4 w-72 h-72 bg-primary/20 rounded-full blur-3xl animate-pulse"></div>
          <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-purple-500/20 rounded-full blur-3xl animate-pulse delay-1000"></div>
          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-full h-px bg-white/20"></div>
        </div>

        <div className="container mx-auto px-4 py-20 relative z-10">
          <BentoGridHero className="lg:grid-cols-3">
            {/* International Stats */}
            <BentoGridItem colSpan={1} className="space-y-8 border-0 bg-transparent shadow-none">
              <div className="flex items-center gap-3 mb-8">
                <div className="w-3 h-3 bg-primary rounded-full"></div>
                <h2 className="text-3xl font-serif font-bold text-white">
                  International
                </h2>
              </div>
              <div className="space-y-6">
                <UICard className="group bg-white/5 backdrop-blur-xl border border-white/10 text-white hover:bg-white/10 transition-all duration-500 hover:scale-105 hover:shadow-2xl hover:shadow-primary/20">
                  <CardContent className="p-6">
                    <div className="flex items-center justify-between">
                      <div>
                        <p className="text-sm text-gray-300 mb-2 font-medium">Total Players</p>
                        <p className="text-4xl font-bold text-white">20</p>
                      </div>
                      <Users className="w-8 h-8 text-primary/60 group-hover:text-primary transition-colors" />
                    </div>
                  </CardContent>
                </UICard>
                <UICard className="group bg-white/5 backdrop-blur-xl border border-white/10 text-white hover:bg-white/10 transition-all duration-500 hover:scale-105 hover:shadow-2xl hover:shadow-primary/20">
                  <CardContent className="p-6">
                    <div className="flex items-center justify-between">
                      <div>
                        <p className="text-sm text-gray-300 mb-2 font-medium">Matches</p>
                        <p className="text-4xl font-bold text-white">542</p>
                      </div>
                      <Trophy className="w-8 h-8 text-primary/60 group-hover:text-primary transition-colors" />
                    </div>
                  </CardContent>
                </UICard>
                <UICard className="group bg-white/5 backdrop-blur-xl border border-white/10 text-white hover:bg-white/10 transition-all duration-500 hover:scale-105 hover:shadow-2xl hover:shadow-primary/20">
                  <CardContent className="p-6">
                    <div className="flex items-center justify-between">
                      <div>
                        <p className="text-sm text-gray-300 mb-2 font-medium">Runs Scored</p>
                        <p className="text-4xl font-bold text-white">13779</p>
                      </div>
                      <Target className="w-8 h-8 text-primary/60 group-hover:text-primary transition-colors" />
                    </div>
                  </CardContent>
                </UICard>
                <UICard className="group bg-white/5 backdrop-blur-xl border border-white/10 text-white hover:bg-white/10 transition-all duration-500 hover:scale-105 hover:shadow-2xl hover:shadow-primary/20">
                  <CardContent className="p-6">
                    <div className="flex items-center justify-between">
                      <div>
                        <p className="text-sm text-gray-300 mb-2 font-medium">Wickets Taken</p>
                        <p className="text-4xl font-bold text-white">373</p>
                      </div>
                      <TrendingUp className="w-8 h-8 text-primary/60 group-hover:text-primary transition-colors" />
                    </div>
                  </CardContent>
                </UICard>
              </div>
            </BentoGridItem>

            {/* Center Content */}
            <BentoGridItem colSpan={1} className="text-center space-y-10 border-0 bg-transparent shadow-none">
              <div className="space-y-6">
                <h1 className="text-5xl md:text-7xl font-serif font-bold text-white leading-tight">
                  All Royals.<br />One home.
                </h1>
                <p className="text-xl text-gray-300 max-w-2xl mx-auto leading-relaxed">
                  Live form, player profiles, and team insights across Rajasthan, Paarl, and Barbados Royals.
                </p>
              </div>

              <div className="flex items-center justify-center gap-6 flex-wrap">
                <Link href="/teams">
                  <Button size="lg" className="bg-primary hover:bg-primary/90 border-0 px-8 py-4 text-lg font-semibold shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105">
                    Explore Teams
                  </Button>
                </Link>
                <Link href="/players">
                  <Button
                    size="lg"
                    variant="outline"
                    className="bg-white/10 backdrop-blur-sm border-white/20 text-white hover:bg-white/20 hover:border-white/30 px-8 py-4 text-lg font-semibold transition-all duration-300 hover:scale-105"
                  >
                    Find a Player
                  </Button>
                </Link>
              </div>

              {/* Enhanced Player Images */}
              <div className="relative mt-12">
                <div className="flex justify-center items-end space-x-2 lg:space-x-4">
                  <div className="relative group">
                    <img
                      src="/cricket-player-pink-jersey.png"
                      alt="Cricket Player 1"
                      className="w-20 h-28 lg:w-24 lg:h-32 object-cover rounded-xl shadow-2xl transition-all duration-500 group-hover:scale-110 group-hover:shadow-primary/50"
                    />
                    <div className="absolute inset-0 bg-primary/20 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                  </div>
                  <div className="relative group">
                    <img
                      src="/cricket-player-pink-jersey-batting.png"
                      alt="Cricket Player 2"
                      className="w-24 h-32 lg:w-28 lg:h-36 object-cover rounded-xl shadow-2xl transition-all duration-500 group-hover:scale-110 group-hover:shadow-primary/50"
                    />
                    <div className="absolute inset-0 bg-primary/20 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                  </div>
                  <div className="relative group transform -translate-y-4">
                    <img
                      src="/cricket-player-pink-jersey-bowling.png"
                      alt="Cricket Player 3"
                      className="w-28 h-36 lg:w-32 lg:h-40 object-cover rounded-xl shadow-2xl transition-all duration-500 group-hover:scale-110 group-hover:shadow-primary/50"
                    />
                    <div className="absolute inset-0 bg-primary/20 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                    <div className="absolute -top-2 -left-2 w-6 h-6 bg-primary rounded-full blur-sm"></div>
                  </div>
                  <div className="relative group">
                    <img
                      src="/cricket-player-fielding.png"
                      alt="Cricket Player 4"
                      className="w-24 h-32 lg:w-28 lg:h-36 object-cover rounded-xl shadow-2xl transition-all duration-500 group-hover:scale-110 group-hover:shadow-primary/50"
                    />
                    <div className="absolute inset-0 bg-primary/20 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                  </div>
                  <div className="relative group">
                    <img
                      src="/placeholder-ub95p.png"
                      alt="Cricket Player 5"
                      className="w-20 h-28 lg:w-24 lg:h-32 object-cover rounded-xl shadow-2xl transition-all duration-500 group-hover:scale-110 group-hover:shadow-primary/50"
                    />
                    <div className="absolute inset-0 bg-primary/20 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                  </div>
                </div>
                <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-3/4 h-px bg-primary/50"></div>
              </div>
            </BentoGridItem>

            {/* Domestic Stats */}
            <BentoGridItem colSpan={1} className="space-y-8 border-0 bg-transparent shadow-none">
              <div className="flex items-center gap-3 mb-8 justify-end">
                <h2 className="text-3xl font-serif font-bold text-white">
                  Domestic
                </h2>
                <div className="w-3 h-3 bg-primary rounded-full"></div>
              </div>
              <div className="space-y-6">
                <UICard className="group bg-white/5 backdrop-blur-xl border border-white/10 text-white hover:bg-white/10 transition-all duration-500 hover:scale-105 hover:shadow-2xl hover:shadow-primary/20">
                  <CardContent className="p-6">
                    <div className="flex items-center justify-between">
                      <div>
                        <p className="text-sm text-gray-300 mb-2 font-medium">Total Players</p>
                        <p className="text-4xl font-bold text-white">91</p>
                      </div>
                      <Users className="w-8 h-8 text-primary/60 group-hover:text-primary transition-colors" />
                    </div>
                  </CardContent>
                </UICard>
                <UICard className="group bg-white/5 backdrop-blur-xl border border-white/10 text-white hover:bg-white/10 transition-all duration-500 hover:scale-105 hover:shadow-2xl hover:shadow-primary/20">
                  <CardContent className="p-6">
                    <div className="flex items-center justify-between">
                      <div>
                        <p className="text-sm text-gray-300 mb-2 font-medium">Matches</p>
                        <p className="text-4xl font-bold text-white">4278</p>
                      </div>
                      <Trophy className="w-8 h-8 text-primary/60 group-hover:text-primary transition-colors" />
                    </div>
                  </CardContent>
                </UICard>
                <UICard className="group bg-white/5 backdrop-blur-xl border border-white/10 text-white hover:bg-white/10 transition-all duration-500 hover:scale-105 hover:shadow-2xl hover:shadow-primary/20">
                  <CardContent className="p-6">
                    <div className="flex items-center justify-between">
                      <div>
                        <p className="text-sm text-gray-300 mb-2 font-medium">Runs Scored</p>
                        <p className="text-4xl font-bold text-white">86753</p>
                      </div>
                      <Target className="w-8 h-8 text-primary/60 group-hover:text-primary transition-colors" />
                    </div>
                  </CardContent>
                </UICard>
                <UICard className="group bg-white/5 backdrop-blur-xl border border-white/10 text-white hover:bg-white/10 transition-all duration-500 hover:scale-105 hover:shadow-2xl hover:shadow-primary/20">
                  <CardContent className="p-6">
                    <div className="flex items-center justify-between">
                      <div>
                        <p className="text-sm text-gray-300 mb-2 font-medium">Wickets Taken</p>
                        <p className="text-4xl font-bold text-white">3108</p>
                      </div>
                      <TrendingUp className="w-8 h-8 text-primary/60 group-hover:text-primary transition-colors" />
                    </div>
                  </CardContent>
                </UICard>
              </div>
            </BentoGridItem>
          </BentoGridHero>
        </div>
      </section>




      {/* Teams Section */}
      <section className="py-16 bg-background">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-serif font-bold text-foreground mb-4">Choose your Royals</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">Pick your side to follow every match, stat, and storyline.</p>
          </div>

          <BentoGridFeatures className="md:grid-cols-3">
            {/* Rajasthan Royals */}
            <BentoGridItem className="p-0 border-0 bg-transparent shadow-none">
              <ParallaxTile
                href="/teams/rajasthan-royals"
                imageSrc="/rr_players/impact-hero-image.webp"
                title="Rajasthan Royals"
                subtitle="IPL Champions 2008"
                tags={["IPL", "India"]}
                height={360}
              />
            </BentoGridItem>

            {/* Paarl Royals */}
            <BentoGridItem className="p-0 border-0 bg-transparent shadow-none">
              <ParallaxTile
                href="/teams/paarl-royals"
                imageSrc="/pr_players/paarl-card-image.webp"
                title="Paarl Royals"
                subtitle="SA20 Contenders"
                tags={["SA20", "South Africa"]}
                height={360}
              />
            </BentoGridItem>

            {/* Barbados Royals */}
            <BentoGridItem className="p-0 border-0 bg-transparent shadow-none">
              <ParallaxTile
                href="/teams/barbados-royals"
                imageSrc="/br_players/barbados-card-image.webp"
                title="Barbados Royals"
                subtitle="CPL Champions"
                tags={["CPL", "Caribbean"]}
                height={360}
              />
            </BentoGridItem>
          </BentoGridFeatures>
        </div>
      </section>

      {/* Trending Players */}
      <section className="py-16 bg-muted/50">
        <div className="container mx-auto px-4">
          <div className="mb-6 text-center">
            <h3 className="text-3xl font-serif font-bold">Players in Form</h3>
            <p className="text-muted-foreground">Who’s lighting it up right now.</p>
          </div>
          <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
            <PlayerStatusCard
              name="Yashasvi Jaiswal"
              team="RR"
              stat="Recent SR +5%"
              imageSrc={`/api/image?u=${encodeURIComponent("https://www.rajasthanroyals.com/static-assets/images/players/69238.png?v=7.39")}`}
            />
            <PlayerStatusCard
              name="Sanju Samson"
              team="RR"
              stat="Last 5: 68*, 32, 41, 12, 55"
              imageSrc={`/api/image?u=${encodeURIComponent("https://www.rajasthanroyals.com/static-assets/images/players/61837.png?v=7.39")}`}
            />
            <PlayerStatusCard
              name="Nitish Rana"
              team="RR"
              stat="PoTM last match"
              imageSrc={`/api/image?u=${encodeURIComponent("https://www.rajasthanroyals.com/static-assets/images/players/63649.png?v=7.39")}`}
            />
          </div>
        </div>
      </section>

      {/* Latest Matches */}
      <section className="py-16 bg-background">
        <div className="container mx-auto px-4">
          <div className="mb-6 text-center">
            <h3 className="text-3xl font-serif font-bold">Latest Royals Matches</h3>
          </div>
          <BentoGridFeatures className="md:grid-cols-3">
            {["RR vs MI", "PR vs SEC", "BR vs TKR"].map((fixture, i) => (
              <BentoGridItem key={i}>
                <div className="flex items-center justify-between">
                  <div>
                    <div className="font-semibold">{fixture}</div>
                    <div className="text-sm text-muted-foreground">Top performer: TBD</div>
                  </div>
                  <Badge className={i % 2 === 0 ? "bg-green-600" : "bg-red-600"}>{i % 2 === 0 ? "W" : "L"}</Badge>
                </div>
              </BentoGridItem>
            ))}
          </BentoGridFeatures>
        </div>
      </section>

      {/* Quick Compare Mini */}
      <section className="py-16 bg-muted/50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-6">
            <h3 className="text-3xl font-serif font-bold">Compare players in seconds</h3>
          </div>
          <BentoGrid className="md:grid-cols-3">
            <BentoGridItem colSpan={2}>
              <div className="flex gap-3">
                <Input placeholder="Search player A" className="bg-transparent" />
                <Input placeholder="Search player B" className="bg-transparent" />
                <Link href="/compare">
                  <Button>Open Full Compare</Button>
                </Link>
              </div>
            </BentoGridItem>
            <BentoGridItem>
              <div className="text-sm text-muted-foreground">Mini head-to-head snapshot</div>
            </BentoGridItem>
          </BentoGrid>
        </div>
      </section>

      {/* Stats Spotlight */}
      <section className="py-16 bg-background">
        <div className="container mx-auto px-4">
          <div className="text-center mb-6">
            <h3 className="text-3xl font-serif font-bold">Stats Spotlight</h3>
          </div>
          <BentoGridFeatures className="md:grid-cols-3">
            {[
              { label: "Most runs (last 5)", value: "TBD" },
              { label: "Best economy (T20)", value: "TBD" },
              { label: "Form streak", value: "TBD" },
            ].map((kpi, i) => (
              <BentoGridItem key={i}>
                <div className="text-center">
                  <div className="text-4xl font-bold">{kpi.value}</div>
                  <div className="text-sm text-muted-foreground mt-2">{kpi.label}</div>
                </div>
              </BentoGridItem>
            ))}
          </BentoGridFeatures>
        </div>
      </section>

      {/* Quick Actions */}
      <section className="py-16 bg-muted/50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-serif font-bold text-foreground mb-4">Explore More</h2>
            <p className="text-lg text-muted-foreground">Dive deeper into the world of RSG cricket</p>
          </div>

          <BentoGridStats className="lg:grid-cols-4">
            <BentoGridItem>
              <Link href="/players">
                <Button size="lg" className="h-20 flex-col space-y-2 bg-transparent w-full" variant="outline">
                  <Users className="h-6 w-6" />
                  <span>All Players</span>
                </Button>
              </Link>
            </BentoGridItem>
            <BentoGridItem>
              <Button size="lg" className="h-20 flex-col space-y-2 bg-transparent w-full" variant="outline">
                <TrendingUp className="h-6 w-6" />
                <span>Performance Stats</span>
              </Button>
            </BentoGridItem>
            <BentoGridItem>
              <Link href="/compare">
                <Button size="lg" className="h-20 flex-col space-y-2 bg-transparent w-full" variant="outline">
                  <Target className="h-6 w-6" />
                  <span>Compare Players</span>
                </Button>
              </Link>
            </BentoGridItem>
            <BentoGridItem>
              <Button size="lg" className="h-20 flex-col space-y-2 bg-transparent w-full" variant="outline">
                <Trophy className="h-6 w-6" />
                <span>Achievements</span>
              </Button>
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
                  <Link href="#" className="hover:text-primary transition-colors">
                    Player Profiles
                  </Link>
                </li>
                <li>
                  <Link href="#" className="hover:text-primary transition-colors">
                    Performance Stats
                  </Link>
                </li>
                <li>
                  <Link href="/compare" className="hover:text-primary transition-colors">
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

