-- MySQL dump 10.13  Distrib 8.0.30, for Win64 (x86_64)
--
-- Host: localhost    Database: gong
-- ------------------------------------------------------
-- Server version	8.0.30

/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!50503 SET NAMES utf8 */;
/*!40103 SET @OLD_TIME_ZONE=@@TIME_ZONE */;
/*!40103 SET TIME_ZONE='+00:00' */;
/*!40014 SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0 */;
/*!40014 SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0 */;
/*!40101 SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='NO_AUTO_VALUE_ON_ZERO' */;
/*!40111 SET @OLD_SQL_NOTES=@@SQL_NOTES, SQL_NOTES=0 */;

--
-- Table structure for table `client_users`
--

DROP TABLE IF EXISTS `client_users`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `client_users` (
  `id` int NOT NULL AUTO_INCREMENT,
  `name` varchar(45) NOT NULL,
  `phone` varchar(45) NOT NULL,
  `is_admin` varchar(45) NOT NULL,
  `user_relation` varchar(45) NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=3 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `client_users`
--

LOCK TABLES `client_users` WRITE;
/*!40000 ALTER TABLE `client_users` DISABLE KEYS */;
INSERT INTO `client_users` VALUES (1,'samuel@gmail.com','{\"code\": \"+972\", \"number\": \"544372393\"}','0','1'),(2,'dvora@gmail.com','{\"code\": \"+972\", \"number\": \"544372393\"}','0','1');
/*!40000 ALTER TABLE `client_users` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `expense  _category`
--

DROP TABLE IF EXISTS `expense  _category`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `expense  _category` (
  `id` int NOT NULL AUTO_INCREMENT,
  `name` varchar(45) NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=4 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `expense  _category`
--

LOCK TABLES `expense  _category` WRITE;
/*!40000 ALTER TABLE `expense  _category` DISABLE KEYS */;
INSERT INTO `expense  _category` VALUES (1,'מזון'),(2,'חינוך'),(3,'תחבורה');
/*!40000 ALTER TABLE `expense  _category` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `revenue_categorys`
--

DROP TABLE IF EXISTS `revenue_categorys`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `revenue_categorys` (
  `id` int NOT NULL AUTO_INCREMENT,
  `name` varchar(45) NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=4 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `revenue_categorys`
--

LOCK TABLES `revenue_categorys` WRITE;
/*!40000 ALTER TABLE `revenue_categorys` DISABLE KEYS */;
INSERT INTO `revenue_categorys` VALUES (1,'משכורת בעל'),(2,'ביטוח לאומי'),(3,'משכורת אשה');
/*!40000 ALTER TABLE `revenue_categorys` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `sub_expense _category`
--

DROP TABLE IF EXISTS `sub_expense _category`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `sub_expense _category` (
  `id` int NOT NULL AUTO_INCREMENT,
  `name` varchar(45) NOT NULL,
  `categoty_id` varchar(45) NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=3 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `sub_expense _category`
--

LOCK TABLES `sub_expense _category` WRITE;
/*!40000 ALTER TABLE `sub_expense _category` DISABLE KEYS */;
INSERT INTO `sub_expense _category` VALUES (1,'מזון','1'),(2,'אוכל מוכן','1');
/*!40000 ALTER TABLE `sub_expense _category` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `user`
--

DROP TABLE IF EXISTS `user`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `user` (
  `id` int NOT NULL AUTO_INCREMENT,
  `client_user_id` varchar(45) NOT NULL,
  `email` varchar(45) NOT NULL,
  `password` varchar(455) NOT NULL,
  PRIMARY KEY (`id`),
  UNIQUE KEY `email_UNIQUE` (`email`)
) ENGINE=InnoDB AUTO_INCREMENT=3 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `user`
--

LOCK TABLES `user` WRITE;
/*!40000 ALTER TABLE `user` DISABLE KEYS */;
INSERT INTO `user` VALUES (1,'1','samuel@gmail.com','8d969eef6ecad3c29a3a629280e686cf0c3f5d5a86aff3ca12020c923adc6c92'),(2,'2','dvora@gmail.com','8d969eef6ecad3c29a3a629280e686cf0c3f5d5a86aff3ca12020c923adc6c92');
/*!40000 ALTER TABLE `user` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `user_logs`
--

DROP TABLE IF EXISTS `user_logs`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `user_logs` (
  `id` int NOT NULL AUTO_INCREMENT,
  `sub_expense _category` varchar(45) DEFAULT NULL,
  `expense _category` varchar(45) DEFAULT NULL,
  `revenue _category` varchar(45) DEFAULT NULL,
  `user_id` varchar(45) DEFAULT NULL,
  `date` varchar(455) DEFAULT NULL,
  `price` varchar(45) DEFAULT NULL,
  `store_name` varchar(45) DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=4 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `user_logs`
--

LOCK TABLES `user_logs` WRITE;
/*!40000 ALTER TABLE `user_logs` DISABLE KEYS */;
INSERT INTO `user_logs` VALUES (1,'1','1',NULL,'1','Tue Sep 10 2024 23:20:28 GMT+0300 (Eastern European Summer Time)','29.90','מגה בעיר'),(3,'2','2',NULL,'1','Tue Sep 10 2024 23:20:28 GMT+0300 (Eastern European Summer Time)','34.8','יש חסד');
/*!40000 ALTER TABLE `user_logs` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `user_prefrence`
--

DROP TABLE IF EXISTS `user_prefrence`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `user_prefrence` (
  `id` int NOT NULL AUTO_INCREMENT,
  `category_id` json DEFAULT NULL,
  `sub_expens_category_id` json DEFAULT NULL,
  `user_id` varchar(45) DEFAULT NULL,
  `sub_revenue _category_id` json DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=2 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `user_prefrence`
--

LOCK TABLES `user_prefrence` WRITE;
/*!40000 ALTER TABLE `user_prefrence` DISABLE KEYS */;
INSERT INTO `user_prefrence` VALUES (1,'\"{1,2}\"',NULL,'1',NULL);
/*!40000 ALTER TABLE `user_prefrence` ENABLE KEYS */;
UNLOCK TABLES;
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2024-09-10 23:29:21
