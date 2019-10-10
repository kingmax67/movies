-- phpMyAdmin SQL Dump
-- version 4.5.1
-- http://www.phpmyadmin.net
--
-- Host: 127.0.0.1
-- Generation Time: Oct 10, 2019 at 04:33 AM
-- Server version: 10.1.13-MariaDB
-- PHP Version: 5.6.20

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `movies`
--

-- --------------------------------------------------------

--
-- Table structure for table `episodes`
--

CREATE TABLE `episodes` (
  `id` int(11) NOT NULL,
  `episodes` varchar(100) NOT NULL,
  `link` varchar(200) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data for table `episodes`
--

INSERT INTO `episodes` (`id`, `episodes`, `link`) VALUES
(1, 'episode1', 'https://morphee.ninja/videos/S%C3%A9ries/Doctor.Who.2005.S10E02.FASTSUB.VOSTFR.720p.HDTV.x264-ARK01.mkv'),
(2, 'episode 2', 'https://morphee.ninja/videos/S%C3%A9ries/Doctor.Who.2005.S10E03.FASTSUB.VOSTFR.720p.HDTV.x264-ARK01.mkv');

-- --------------------------------------------------------

--
-- Table structure for table `seasons`
--

CREATE TABLE `seasons` (
  `id` int(11) NOT NULL,
  `seasonname` varchar(100) NOT NULL,
  `seasonsnumber` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data for table `seasons`
--

INSERT INTO `seasons` (`id`, `seasonname`, `seasonsnumber`) VALUES
(1, 'Doctor.Who.2005', 10),
(2, 'Power', 6);

-- --------------------------------------------------------

--
-- Table structure for table `series`
--

CREATE TABLE `series` (
  `id` int(11) NOT NULL,
  `name` varchar(100) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data for table `series`
--

INSERT INTO `series` (`id`, `name`) VALUES
(1, 'Doctor.Who.2005'),
(2, 'Power');

-- --------------------------------------------------------

--
-- Table structure for table `test`
--

CREATE TABLE `test` (
  `name` varchar(80) NOT NULL,
  `id` int(11) NOT NULL,
  `address` varchar(1000) NOT NULL,
  `size` varchar(10) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data for table `test`
--

INSERT INTO `test` (`name`, `id`, `address`, `size`) VALUES
('13.Graves.2019', 3, '103.91.144.230/ftpdata/Movies/Hollywood/2019/13%20Graves%20%282019%29/13.Graves.2019.720p.WEB-DL.x264-MkvCage.Com.mkv', '996MB'),
('Cold.Blood.2019', 4, '103.91.144.230/ftpdata/Movies/Hollywood/2019/Cold%20Blood%20%282019%29/Cold.Blood.2019.720p.WEB-DL.x264.MkvCage.Com.mkv', '1.8GB'),
('Adventures.Of.Aladdin.2019', 5, '103.91.144.230/ftpdata/Movies/Hollywood/2019/Adventures%20of%20Aladdin%20%282019%29/Adventures.Of.Aladdin.2019.1080p.WEBRip.x264-RARBG.mp4', '834MB'),
('Apollo.11.2019', 6, 'dl3.haylimoviez.info/Movie%202019/Apollo.11.2019.1080p.6CH.MkvCage.mkv', ' 1.9GB'),
('Captain.Marvel.2019', 7, '103.91.144.230/ftpdata/Movies/Hollywood/2019/Captain%20Marvel%20%282019%29/Captain%20Marvel%20%282019%29%20720p%20HDCAM-Rip%20x264%20%5BDual%20Audio%5D%20%5BHindi%28Cleaned%29%20%2B%20English%5D%201GB%20%5BWww.MoviezAddiction.Club%5D.mkv', '500MB'),
('Close.2019', 8, 'dl3.haylimoviez.info/Movie%202019/Close.2019.480p.mkv', '1.7GB'),
('Cold.Pursuit.2019', 9, '103.91.144.230/ftpdata/Movies/Hollywood/2019/Cold%20Pursuit%20%282019%29/WwW.SeeHD.WS__Cold.Pursuit.2019.720p.HDCAM.1XBET.mp4', '800MB');

--
-- Indexes for dumped tables
--

--
-- Indexes for table `episodes`
--
ALTER TABLE `episodes`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `seasons`
--
ALTER TABLE `seasons`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `series`
--
ALTER TABLE `series`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `test`
--
ALTER TABLE `test`
  ADD PRIMARY KEY (`id`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `episodes`
--
ALTER TABLE `episodes`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=3;
--
-- AUTO_INCREMENT for table `seasons`
--
ALTER TABLE `seasons`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=3;
--
-- AUTO_INCREMENT for table `series`
--
ALTER TABLE `series`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=3;
--
-- AUTO_INCREMENT for table `test`
--
ALTER TABLE `test`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=10;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
