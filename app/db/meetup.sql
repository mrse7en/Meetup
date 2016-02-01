-- phpMyAdmin SQL Dump
-- version 4.5.1
-- http://www.phpmyadmin.net
--
-- Host: 127.0.0.1
-- Generation Time: Feb 01, 2016 at 02:59 PM
-- Server version: 10.1.9-MariaDB
-- PHP Version: 5.6.15

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `meetup`
--

-- --------------------------------------------------------

--
-- Table structure for table `contacts`
--

CREATE TABLE `contacts` (
  `Cid` int(10) NOT NULL,
  `FirstName` varchar(200) NOT NULL,
  `LastName` varchar(200) NOT NULL,
  `Email` varchar(50) NOT NULL,
  `Phone` int(15) DEFAULT NULL,
  `user_id` int(10) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

-- --------------------------------------------------------

--
-- Table structure for table `event`
--

CREATE TABLE `event` (
  `UID` int(10) NOT NULL,
  `EventName` varchar(500) NOT NULL,
  `GeoLocation` varchar(500) NOT NULL,
  `Venue` varchar(500) NOT NULL,
  `DateTime` varchar(100) NOT NULL,
  `attendees` varchar(1000) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data for table `event`
--

INSERT INTO `event` (`UID`, `EventName`, `GeoLocation`, `Venue`, `DateTime`, `attendees`) VALUES
(8, 'test event', '3.133284999999999, 101.68830449999996', 'Sattva Mantra Hair & Beauty Salon', '03/29/2016 12:30 AM', 'sath@gmail.com, sat@gmail.com, sim@gmail.com'),
(8, 'test event3', '3.021998, 101.7055411', 'Seri Kembangan', '03/29/2016 12:30 AM', 'sath@gmail.com, sat@gmail.com, sim@gmail.com'),
(8, 'New Event', '3.1493, 101.65332899999999', 'The London Orchid', '03/22/2016 12:00 AM', 'sath@gmail.com, sat@gmail.com, sim@gmail.com');

-- --------------------------------------------------------

--
-- Table structure for table `registration`
--

CREATE TABLE `registration` (
  `PID` int(10) NOT NULL,
  `FirstName` varchar(200) NOT NULL,
  `LastName` varchar(200) NOT NULL,
  `DOB` varchar(25) NOT NULL,
  `Country` varchar(50) NOT NULL,
  `Email` varchar(50) NOT NULL,
  `Password` varchar(15) NOT NULL,
  `Profile_img` varchar(500) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data for table `registration`
--

INSERT INTO `registration` (`PID`, `FirstName`, `LastName`, `DOB`, `Country`, `Email`, `Password`, `Profile_img`) VALUES
(1, 'sathesh', 'kumar', '1998-12-19', 'IN', 'sathesh@mrse7en.com', 'mr7@meetup', 'test'),
(2, 'simon', 'kumar', '1929', 'AD', 'simon@gmail.com', 'mr7@meetup', 'test'),
(3, 'simon', 'kumar', '6/October/1928', 'AG', 'simon@gmail.com', 'mr7@meetup', 'test'),
(4, 'suresh', 'kumar', '23/December/1987', 'IN', 'suresh@gmail.com', 'mr7@meetup', 'test'),
(5, 'Mani', 'kumar', '12/December/1938', 'Angola', 'mani@gmail.com', 'mr7@meetup', 'test'),
(6, 'new', 'user', '19/December/1987', 'United Kingdom', 'new@email.com', 'mr7@meetup', 'test'),
(7, 'test name', 'test last Name', '18/January/1987', 'United States', 'test@email.com', 'mr7@meetup', 'test'),
(8, 'test name', 'kumar', '4/August/1925', 'Bangladesh', 'sathesh@goquo.com', 'mr7@meetup', 'test');

--
-- Indexes for dumped tables
--

--
-- Indexes for table `contacts`
--
ALTER TABLE `contacts`
  ADD PRIMARY KEY (`Cid`);

--
-- Indexes for table `event`
--
ALTER TABLE `event`
  ADD KEY `userid` (`UID`);

--
-- Indexes for table `registration`
--
ALTER TABLE `registration`
  ADD PRIMARY KEY (`PID`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `registration`
--
ALTER TABLE `registration`
  MODIFY `PID` int(10) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=9;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
