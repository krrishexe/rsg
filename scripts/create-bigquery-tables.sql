-- Create BigQuery tables for RSG cricket data
-- Run these queries in your BigQuery console to set up the data structure

-- Players table
CREATE TABLE IF NOT EXISTS `your-project-id.rsg_cricket_data.players` (
  player_id STRING NOT NULL,
  name STRING NOT NULL,
  team STRING NOT NULL,
  role STRING NOT NULL,
  nationality STRING NOT NULL,
  age INT64,
  birth_place STRING,
  debut_year STRING,
  bio STRING,
  image_url STRING,
  created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP(),
  updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP()
);

-- Player statistics table
CREATE TABLE IF NOT EXISTS `your-project-id.rsg_cricket_data.player_statistics` (
  player_id STRING NOT NULL,
  matches INT64 DEFAULT 0,
  runs INT64 DEFAULT 0,
  batting_average FLOAT64 DEFAULT 0,
  strike_rate FLOAT64 DEFAULT 0,
  centuries INT64 DEFAULT 0,
  fifties INT64 DEFAULT 0,
  catches INT64 DEFAULT 0,
  stumpings INT64 DEFAULT 0,
  highest_score INT64 DEFAULT 0,
  sixes INT64 DEFAULT 0,
  fours INT64 DEFAULT 0,
  wickets INT64 DEFAULT 0,
  bowling_average FLOAT64 DEFAULT 0,
  economy_rate FLOAT64 DEFAULT 0,
  created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP(),
  updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP()
);

-- Teams table
CREATE TABLE IF NOT EXISTS `your-project-id.rsg_cricket_data.teams` (
  team_id STRING NOT NULL,
  name STRING NOT NULL,
  short_name STRING NOT NULL,
  league STRING NOT NULL,
  location STRING NOT NULL,
  founded STRING NOT NULL,
  captain STRING,
  coach STRING,
  home_ground STRING,
  motto STRING,
  description STRING,
  history STRING,
  created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP(),
  updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP()
);

-- Team statistics table
CREATE TABLE IF NOT EXISTS `your-project-id.rsg_cricket_data.team_statistics` (
  team_id STRING NOT NULL,
  matches_played INT64 DEFAULT 0,
  wins INT64 DEFAULT 0,
  losses INT64 DEFAULT 0,
  ties INT64 DEFAULT 0,
  no_results INT64 DEFAULT 0,
  win_percentage FLOAT64 DEFAULT 0,
  titles INT64 DEFAULT 0,
  playoff_appearances INT64 DEFAULT 0,
  highest_score INT64 DEFAULT 0,
  lowest_score INT64 DEFAULT 0,
  created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP(),
  updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP()
);

-- Matches table
CREATE TABLE IF NOT EXISTS `your-project-id.rsg_cricket_data.matches` (
  match_id STRING NOT NULL,
  team1 STRING NOT NULL,
  team2 STRING NOT NULL,
  winner STRING,
  margin STRING,
  match_date DATE,
  venue STRING,
  league STRING,
  created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP()
);

-- Player match statistics table (for recent form tracking)
CREATE TABLE IF NOT EXISTS `your-project-id.rsg_cricket_data.player_match_stats` (
  match_id STRING NOT NULL,
  player_id STRING NOT NULL,
  runs_scored INT64 DEFAULT 0,
  balls_faced INT64 DEFAULT 0,
  fours INT64 DEFAULT 0,
  sixes INT64 DEFAULT 0,
  wickets_taken INT64 DEFAULT 0,
  runs_conceded INT64 DEFAULT 0,
  overs_bowled FLOAT64 DEFAULT 0,
  catches INT64 DEFAULT 0,
  stumpings INT64 DEFAULT 0,
  created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP()
);

-- Sample data insertion (replace with your actual data)
-- Insert sample teams
INSERT INTO `your-project-id.rsg_cricket_data.teams` 
(team_id, name, short_name, league, location, founded, captain, coach, home_ground, motto, description, history)
VALUES 
('rajasthan-royals', 'Rajasthan Royals', 'RR', 'IPL', 'Jaipur, India', '2008', 'Sanju Samson', 'Rahul Dravid', 'Sawai Mansingh Stadium', 'Halla Bol', 'The inaugural champions of the Indian Premier League', 'Founded in 2008, won the first IPL title'),
('paarl-royals', 'Paarl Royals', 'PR', 'SA20', 'Paarl, South Africa', '2023', 'David Miller', 'JP Duminy', 'Boland Park', 'Rise Together', 'Bringing Royals culture to South African cricket', 'Established in 2023 for the inaugural SA20 season'),
('barbados-royals', 'Barbados Royals', 'BR', 'CPL', 'Bridgetown, Barbados', '2013', 'Jason Holder', 'Trevor Penney', 'Kensington Oval', 'Caribbean Pride', 'Representing the heart of Caribbean cricket', 'Originally Barbados Tridents, rebranded as Barbados Royals');

-- Insert sample team statistics
INSERT INTO `your-project-id.rsg_cricket_data.team_statistics`
(team_id, matches_played, wins, losses, ties, no_results, win_percentage, titles, playoff_appearances, highest_score, lowest_score)
VALUES 
('rajasthan-royals', 198, 89, 106, 2, 1, 45.9, 1, 4, 226, 58),
('paarl-royals', 24, 14, 10, 0, 0, 58.3, 0, 2, 201, 89),
('barbados-royals', 132, 68, 62, 1, 1, 52.3, 1, 6, 195, 61);

-- Insert sample players
INSERT INTO `your-project-id.rsg_cricket_data.players`
(player_id, name, team, role, nationality, age, birth_place, debut_year, bio, image_url)
VALUES 
('sanju-samson', 'Sanju Samson', 'Rajasthan Royals', 'Wicket-keeper Batsman', 'India', 29, 'Thiruvananthapuram, Kerala', '2013', 'Elegant wicket-keeper batsman and captain of Rajasthan Royals', '/placeholder.svg?key=samson'),
('jos-buttler', 'Jos Buttler', 'Rajasthan Royals', 'Wicket-keeper Batsman', 'England', 34, 'Taunton, England', '2011', 'Explosive English wicket-keeper known for innovative shot-making', '/placeholder.svg?key=buttler'),
('david-miller', 'David Miller', 'Paarl Royals', 'Middle-order Batsman', 'South Africa', 35, 'Pietermaritzburg, South Africa', '2010', 'Powerful South African middle-order batsman', '/placeholder.svg?key=miller'),
('jason-holder', 'Jason Holder', 'Barbados Royals', 'All-rounder', 'West Indies', 32, 'St. Michael, Barbados', '2012', 'Former West Indies captain and versatile all-rounder', '/placeholder.svg?key=holder');

-- Insert sample player statistics
INSERT INTO `your-project-id.rsg_cricket_data.player_statistics`
(player_id, matches, runs, batting_average, strike_rate, centuries, fifties, catches, stumpings, highest_score, sixes, fours, wickets, bowling_average, economy_rate)
VALUES 
('sanju-samson', 142, 3668, 28.9, 136.7, 1, 17, 89, 12, 119, 156, 298, 0, 0, 0),
('jos-buttler', 89, 2582, 34.4, 148.9, 1, 18, 67, 15, 124, 189, 234, 0, 0, 0),
('david-miller', 156, 3845, 35.8, 142.3, 2, 23, 78, 0, 101, 198, 267, 0, 0, 0),
('jason-holder', 134, 1876, 24.8, 128.4, 0, 8, 67, 0, 74, 89, 156, 156, 28.4, 8.2);
