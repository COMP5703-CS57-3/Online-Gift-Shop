-- MySQL dump 10.13  Distrib 8.0.28, for Win64 (x86_64)
--
-- Host: database-comp5703-cs57-3.cvbkv8f5esm6.us-east-1.rds.amazonaws.com    Database: comp5703
-- ------------------------------------------------------
-- Server version	8.0.27

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
-- SET @MYSQLDUMP_TEMP_LOG_BIN = @@SESSION.SQL_LOG_BIN;
-- SET @@SESSION.SQL_LOG_BIN= 0;

--
-- GTID state at the beginning of the backup 
--

-- SET @@GLOBAL.GTID_PURGED=/*!80000 '+'*/ '';

--
-- Table structure for table `admin`
--

DROP TABLE IF EXISTS `admin`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `admin` (
  `id` int NOT NULL AUTO_INCREMENT,
  `admin_email` varchar(150) DEFAULT NULL,
  `admin_name` varchar(100) DEFAULT NULL,
  `admin_password` varchar(100) DEFAULT NULL,
  `admin_mobile` varchar(50) DEFAULT NULL,
  PRIMARY KEY (`id`),
  UNIQUE KEY `id` (`id`),
  UNIQUE KEY `admin_email` (`admin_email`)
) ENGINE=InnoDB AUTO_INCREMENT=2 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `admin`
--

LOCK TABLES `admin` WRITE;
/*!40000 ALTER TABLE `admin` DISABLE KEYS */;
INSERT INTO `admin` VALUES (1,'12345@giftshop.com','12345','12345678','15636128575');
/*!40000 ALTER TABLE `admin` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `gifts`
--

DROP TABLE IF EXISTS `gifts`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `gifts` (
  `id` int NOT NULL AUTO_INCREMENT,
  `gift_name` varchar(150) DEFAULT NULL,
  `gift_price` float DEFAULT NULL,
  `gift_discount_price` float DEFAULT NULL,
  `gift_discount_state` varchar(10) DEFAULT NULL,
  `gift_description` varchar(300) DEFAULT NULL,
  `gift_category` varchar(100) DEFAULT NULL,
  `gift_side_category1` varchar(100) DEFAULT NULL,
  `gift_side_category2` varchar(100) DEFAULT NULL,
  `gift_cover_url` varchar(500) DEFAULT NULL,
  `gift_show_url1` varchar(500) DEFAULT NULL,
  `gift_show_url2` varchar(500) DEFAULT NULL,
  `gift_show_url3` varchar(500) DEFAULT NULL,
  `gift_show_url4` varchar(500) DEFAULT NULL,
  `gift_sales` int DEFAULT NULL,
  `gift_income` float DEFAULT NULL,
  PRIMARY KEY (`id`),
  UNIQUE KEY `id` (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=41 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `gifts`
--

LOCK TABLES `gifts` WRITE;
/*!40000 ALTER TABLE `gifts` DISABLE KEYS */;
INSERT INTO `gifts` VALUES (1,'Utvaer Men\'s Windbreaker Vest',325,230.75,'71%','\n\n55031 - Utv?r Men\'s Windbreaker Vest\nS - XXL | Regular fit | Outer layer | Main fabric front: 100% brushed polyester. Main fabric back: 50% merino wool, 50% acrylic | Fill: Thinsulate | 560g (size L) | Two-way zipper, zippered front pockets | Machine wash using wool-cycle\nColors:\n\nC - Navy\n\nSize C','Clothing','Male','Juvenile','https://cdn11.bigcommerce.com/s-i8agbb7iol/images/stencil/1280x1280/products/10178/23186/55031_C00__94643.1647178830.jpg?c=2','','','','',220,64467),(2,'Veoy Pile Fleece Women\'s Vest',250,227.5,'91%','\n\n55061 - Ve?y Pile Fleece Women\'s Vest\nXS - XL | Regular fit | Outer layer | 40% merino wool, 40% polyester, 20% acrylic | 380g (size M) | Two-way zipper, zippered front pockets | Machine wash using wool-cycle\nColors:\n\nA - Off White\nC - Navy\n\nSize Chart\n\n\n','Clothing','Male','Juvenile','https://cdn11.bigcommerce.com/s-i8agbb7iol/images/stencil/1280x1280/products/10175/23176/55061_A00__59331.1647173153.jpg?c=2','','','','',210,46422.5),(3,'Firda Quilted Jacket',795,795,'100%','\n\n85301 - Firda Quilted Jacket\nXS - L | Regular fit | Outer layer | 100% skin soft merino wool | Zefir Nano 20.5 micron | 2-ply | 10 gauge | 1615g (size M) | J-sleeve | Two-way zipper, zippered front pockets | Drawstring hood | Insulation: Lavalan virgin wool fibre fill. Lining: skin soft merino woo','Clothing','Male','Juvenile','https://cdn11.bigcommerce.com/s-i8agbb7iol/images/stencil/1280x1280/products/10155/22892/85301_F00__00944.1649086461.jpg?c=2','','','','',382,273393),(4,'Vilja Weatherproof Hoodie',400,192,'48%','\n\n95221 - Vilja Weatherproof Hoodie\nS - XL | Loose fit | Outer layer, heavy knit | 100% long-lasting Norwegian wool | Plover nano 33.5 micron | Windproof lining | 3-ply | 5 gauge | 1345g (size M) | T-sleeve | Quarter-zip, zippered front pockets | Drawstring hood | Hand wash\nColors:\n\nA - Off White/Bl','Clothing','Female','Youth','https://cdn11.bigcommerce.com/s-i8agbb7iol/images/stencil/1280x1280/products/10152/22864/95221_A00__33691.1646935682.jpg?c=2','','','','',878,310908),(5,'Winterland Men\'s Sweater',225,225,'100%','\n\n95291 - Winterland Men\'s Sweater\nS - XXL | Regular fit | Mid layer, regular knit | 100% skin soft merino wool | Zefir 20.5 micron | 2-ply | 10 gauge | 610 g (size L) | J-sleeve | Quarter-zip, medium high neck | Machine wash using wool-cycle\nColors:\n\nC - Navy/Off White/Raspberry\nN - Dark Green/Off ','Clothing','Female','Youth','https://cdn11.bigcommerce.com/s-i8agbb7iol/images/stencil/1280x1280/products/10149/22667/95291_C00__39794.1646859607.jpg?c=2','','','','',247,49257),(6,'Winter Star Women\'s Sweater',200,194,'97%','\n\n95321 - Winter Star Women\'s Sweater\nS - XL | Regular fit | Mid layer, regular knit | 100% fine Norwegian wool | Heron 30.5 micron | Neckline in skin soft merino wool | 3-ply | 10 gauge | 500 g (size M) | T-sleeve | Medium high neck | Machine wash using wool-cycle\nColors:\n\nB - Off White/Raspberry\nF','Clothing','Female','Elderly','https://cdn11.bigcommerce.com/s-i8agbb7iol/images/stencil/1280x1280/products/10146/22654/95321_B00__16395.1646855395.jpg?c=2','','','','',210,37488),(7,'Moritz Men\'s Sweater',300,300,'100%','\n\n91391 - Moritz Men\'s Sweater\nA bestselling design, based on the original St. Moritz World Ski Championship sweater. The pattern combines authentic elements in a sporty yet refined look. It is made with our innovative Comfort knit technology, giving it a comfortable feel and fit with a bit of stret','Clothing','Other','Juvenile','https://cdn11.bigcommerce.com/s-i8agbb7iol/images/stencil/1280x1280/products/9775/22543/91391_D00__02136.1646787967.jpg?c=2','','','','',463,120726),(8,'Veskre Weatherproof Men\'s Sweater',375,375,'100%','\n\n94851 - Veskre Weatherproof Men\'s Sweater\nVeskre is a warm, windproof and water repellent sweater made of 100% Norwegian wool. A perfect companion in the great outdoors Veskre features a breathable windproof lining made with a technical polyester/polyurethane blend, hand gaiters with thumb holes, ','female','Life','Clothes','https://cdn11.bigcommerce.com/s-i8agbb7iol/images/stencil/1280x1280/products/9733/22559/94851_C__19157.1646791173.jpg?c=2','','','','',789,261608),(9,'Spirit Men\'s Jacket',240,240,'100%','\n\n83831 - OL Spirit Men\'s Jacket\nThis is the 2021/22 team jacket for the Norwegian Alpine Ski Team. The jacket takes its design cues from our official Olympic sweater for the 2022 Beijing Winter Olympics. The star pattern originates from the classic Norwegian eight-petal rose. The form is sharpened ','female','Life','Clothes','https://cdn11.bigcommerce.com/s-i8agbb7iol/images/stencil/1280x1280/products/9727/22876/83831_C__17374.1646936841.jpg?c=2','','','','',299,60943.2),(10,'History Basic Men\'s Sweater',195,62.4,'32%','\n\n94831 - OL History Basic Men\'s Sweater\nA sporty basic sweater made of 100% superfine and skin soft merino wool. Knitted tightly to avoid show-through, this sporty sweater can be used as a ?next to skin? sweater or base layer for sport. Being part of our OL History concept (OL stands for Olympic Ga','female','Life','Clothes','https://cdn11.bigcommerce.com/s-i8agbb7iol/images/stencil/1280x1280/products/9721/23190/94831_C__80260.1648157699.jpg?c=2','','','','',202,34279.1),(11,'Veskre Weatherproof Women\'s Sweater',395,395,'100%','\n\n94841 - Veskre Weatherproof Women\'s Sweater\nVeskre is a warm, windproof and water repellent sweater made of 100% Norwegian wool. A perfect companion in the great outdoors Veskre features a breathable windproof lining made with a technical polyester/polyurethane blend, hand gaiters with thumb holes','teenager','Life','Clothes','https://cdn11.bigcommerce.com/s-i8agbb7iol/images/stencil/1280x1280/products/9718/22680/94841_B__06620.1646863813.jpg?c=2','','','','',757,265325),(12,'Firda Women\'s Sweater',250,220,'88%','\n\n94541 - Firda Women\'s Sweater\nThis is a remake of our sporty Frida jacket: A relaxed turtleneck sweater with a young and wide fit – the same fit as our highly popular Bjor?y sweater – with shorter front and slightly longer back. The pattern remains unchanged, with a softened, round-edged version o','teenager','Life','Clothes','https://cdn11.bigcommerce.com/s-i8agbb7iol/images/stencil/1280x1280/products/9715/22670/94541_B__60308.1646860737.jpg?c=2','','','','',602,130980),(13,'Vegard Men\'s Jacket',270,180.9,'67%','\n\n83891 - Vegard Men\'s Jacket\nOccasionally we dive head-first into our fantastically rich archive (abundant with some jaw-dropping and even corny designs!). Every time we resurface a little wiser and a lot happier. One of our deep dives inspired us to make this fantastic big pattern jacket, a simult','teenager','Life','Clothes','https://cdn11.bigcommerce.com/s-i8agbb7iol/images/stencil/1280x1280/products/9744/20409/83891_C__66082.1612180031.jpg?c=2','','','','',183,42292.8),(14,'Vilja Women\'s Jacket',270,270,'100%','\n\n83881 - Vilja Women\'s Jacket\nOccasionally we dive head-first into our fantastically rich archive (abundant with some jaw-dropping and even corny designs!). Every time we resurface a little wiser and a lot happier. One of our deep dives inspired us to make this fantastic big pattern jacket, a simul','teenager','Life','Clothes','https://cdn11.bigcommerce.com/s-i8agbb7iol/images/stencil/1280x1280/products/9737/22802/83881_F__31461.1646918392.jpg?c=2','','','','',618,148481),(15,'Tyssoy Men\'s Sweater',225,225,'100%','\n\n94411 - Tyss?y Men\'s Sweater\nWhat do you get if you cross the famous Sotra sweater with our official sweater from the 1964 Olympic Games in Innsbruck? The best of two worlds. The Tyss?y sweater combines the complexity of the Sotra pattern (with the eight-petal roses across it) mixed with the simpl','teenager','Life','Clothes','https://cdn11.bigcommerce.com/s-i8agbb7iol/images/stencil/1280x1280/products/9316/22843/94411_C__08203.1646930850.jpg?c=2','','','','',809,158058),(16,'Myking Men\'s Sweater',350,322,'92%','\n\n93141 - Myking Men\'s Sweater\nBased on traditional Norwegian patterns updated into a modern expression and fit, this is a retro and stylish sweater. Made with our air-spun merino wool for a chunky, hand knit texture with an incredibly soft, and lightweight feel.\nS - XXL | Regular fit | Mid layer, h','aged','Life','Clothes','https://cdn11.bigcommerce.com/s-i8agbb7iol/images/stencil/1280x1280/products/7118/22794/93141_C__42886.1646917275.jpg?c=2','','','','',70,22228.5),(17,'Hodur Men\'s Sweater',270,267.3,'99%','\n\n94711 - Hodur Men\'s Sweater\nA beautiful unisex sweater inspired by the world famous Oseberg ship of the Viking Era, found in a large Viking burial mound from 834 AD. Inside the ship a woven tapestry was found, showing five Viking warriors. These five Vikings appear on this sweater, surrounded by o','aged','Life','Clothes','https://cdn11.bigcommerce.com/s-i8agbb7iol/images/stencil/1280x1280/products/9749/22676/94711_C__81695.1646861436.jpg?c=2','','','','',906,214736),(18,'Kvitseid Women\'s Jacket',230,230,'100%','\n\n83781 - Kvitseid Women\'s Jacket\nKviteseid is a beautiful detailed jacket inspired by Norwegian rosemaling (literally “rose painting”). Rosemaling is an ornamental decorative painting style deeply rooted in Norwegian folk art, known for its powerful yet refined use of colors. Our Kviteseid jacket i','aged','Life','Clothes','https://cdn11.bigcommerce.com/s-i8agbb7iol/images/stencil/1280x1280/products/9746/22784/83781_C__69147.1646916063.jpg?c=2','','','','',294,62405.9),(19,'Fongen Weatherproof Women\'s Sweater',395,395,'100%','\n\n93961 - Fongen Weatherproof Women\'s Sweater\nThis sporty and weatherproof sweater has water-repellent wool, a breathable windproof liner made with a technical polyester/polyurethane blend and soft cuffs with thumb holes. Inspired by the pattern from the famous Selbu-mitten, with a softened version ','Other','Male','Juvenile','https://cdn11.bigcommerce.com/s-i8agbb7iol/images/stencil/1280x1280/products/8837/22698/93961_A__96566.1646867315.jpg?c=2','','','','',472,162760),(20,'Ingeborg Women\'s Jacket',360,360,'100%','\n\n83521 - Ingeborg Women\'s Jacket\nA long and comfortable jacket with a loose fit to suit women of all sizes. Detailed patterns and side slits add the perfect amount of femininity to this elegant piece. Made with 100% soft and lightweight merino wool in a long-lasting knitting quality.XS - XL | Loose','Other','Other','Juvenile','https://cdn11.bigcommerce.com/s-i8agbb7iol/images/stencil/1280x1280/products/8831/22737/83521_A__81720.1646875433.jpg?c=2','','','','',815,256964),(21,'Utvaer Men\'s Windbreaker Vest',325,230.75,'71%','\n\n55031 - Utv?r Men\'s Windbreaker Vest\nS - XXL | Regular fit | Outer layer | Main fabric front: 100% brushed polyester. Main fabric back: 50% merino wool, 50% acrylic | Fill: Thinsulate | 560g (size L) | Two-way zipper, zippered front pockets | Machine wash using wool-cycle\nColors:\n\nC - Navy\n\nSize C','Clothing','Other','Juvenile','https://cdn11.bigcommerce.com/s-i8agbb7iol/images/stencil/1280x1280/products/10178/23186/55031_C00__94643.1647178830.jpg?c=2','','','','',220,64467);
/*!40000 ALTER TABLE `gifts` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `order`
--

DROP TABLE IF EXISTS `order`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `order` (
  `id` int NOT NULL AUTO_INCREMENT,
  `order_time` varchar(100) DEFAULT NULL,
  `order_total` float DEFAULT NULL,
  `order_number` varchar(100) DEFAULT NULL,
  `first_name` varchar(100) DEFAULT NULL,
  `last_name` varchar(100) DEFAULT NULL,
  `phone` varchar(100) DEFAULT NULL,
  `address` varchar(500) DEFAULT NULL,
  `postcode` varchar(50) DEFAULT NULL,
  `payer_id` int DEFAULT NULL,
  `payer_name` varchar(100) DEFAULT NULL,
  `order_state` varchar(100) DEFAULT NULL,
  `wishlist_code` varchar(100) DEFAULT NULL,
  `user_expected_delivery_time` varchar(100) DEFAULT NULL,
  `user_id` int DEFAULT NULL,
  PRIMARY KEY (`id`),
  UNIQUE KEY `id` (`id`),
  KEY `user_id` (`user_id`),
  CONSTRAINT `order_ibfk_1` FOREIGN KEY (`user_id`) REFERENCES `user` (`id`) ON DELETE CASCADE
) ENGINE=InnoDB AUTO_INCREMENT=11 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `order`
--

LOCK TABLES `order` WRITE;
/*!40000 ALTER TABLE `order` DISABLE KEYS */;
INSERT INTO `order` VALUES (1,'2022-04-20 21:33:07.740386',100,'qabJ5vH7ew2npLc','zheng','li','123456789','dddd','1234',0,'ddd','waiting','BIEU8Z','03/02/2022',1),(2,'2022-04-20 21:33:43.888575',100,'5gOzofujdmkrYv2','zheng','li','123456789','dddd','1234',0,'ddd','waiting','BIEU8Z','03/02/2022',1),(3,'2022-04-20 21:34:02.012873',100,'Eeszxb7LHFOmv45','zheng','li','123456789','dddd','1234',0,'ddd','waiting','BIEU8Z','03/02/2022',1),(4,'2022-04-20 21:37:12.372532',100,'AnCgveFQH62lTaz','zheng','li','123456789','dddd','1234',0,'ddd','waiting','FjkZgH','03/02/2022',1),(5,'2022-04-20 21:40:56.113509',100,'Hu80l7ygN9jJp4I','zheng','li','123456789','dddd','1234',0,'ddd','waiting','BeIdQj','03/02/2022',1),(6,'2022-04-20 21:49:06.616590',100,'P03ObXqfMSQg9r6','zheng','li','123456789','dddd','1234',0,'ddd','waiting','Y9ps1n','03/02/2022',1),(7,'2022-04-20 21:55:34.914231',100,'pJKYf7DubG1zALx','zheng','li','123456789','dddd','1234',0,'ddd','waiting','Y9ps1n','03/02/2022',1),(8,'2022-04-20 21:58:41.896479',100,'JeMWraAyOk1c53z','zheng','li','123456789','dddd','1234',0,'ddd','waiting','Y9ps1n','03/02/2022',1),(9,'2022-04-20 22:05:11.216726',100,'g6cfU1VrRpXSxsG','zheng','li','123456789','dddd','1234',0,'ddd','waiting','vt59BR','03/02/2022',1),(10,'2022-04-21 09:52:55.084934',19,'4CNeTSgKXALtIQd','123','123','123','Australia, Western Australia, 123','123',2,'123','delivery','fjNlbY','Tue Apr 26 2022 09:40:16 GM',2);
/*!40000 ALTER TABLE `order` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `orderitems`
--

DROP TABLE IF EXISTS `orderitems`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `orderitems` (
  `id` int NOT NULL AUTO_INCREMENT,
  `gift_name` varchar(100) DEFAULT NULL,
  `item_cover_url` varchar(500) DEFAULT NULL,
  `size` varchar(100) DEFAULT NULL,
  `count` int DEFAULT NULL,
  `price` float DEFAULT NULL,
  `each_total_price` float DEFAULT NULL,
  `productID` int DEFAULT NULL,
  `order_id` int DEFAULT NULL,
  PRIMARY KEY (`id`),
  UNIQUE KEY `id` (`id`),
  KEY `order_id` (`order_id`),
  CONSTRAINT `orderitems_ibfk_1` FOREIGN KEY (`order_id`) REFERENCES `order` (`id`) ON DELETE CASCADE
) ENGINE=InnoDB AUTO_INCREMENT=12 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `orderitems`
--

LOCK TABLES `orderitems` WRITE;
/*!40000 ALTER TABLE `orderitems` DISABLE KEYS */;
INSERT INTO `orderitems` VALUES (1,'string','string','1',1,1,1,1,1),(2,'string','string','1',1,1,1,1,2),(3,'string','string','1',1,1,1,1,3),(4,'string','string','2',1,1,1,1,4),(5,'string','string','1',1,1,1,1,4),(6,'string','string','1',1,1,1,1,5),(7,'string','string','2',1,1,1,1,5),(8,'string','string','1',1,1,1,1,6),(9,'string','string','1',1,1,1,2,6),(10,'string','string','1',2,1,1,1,9),(11,'string','string','1',1,1,1,2,9);
/*!40000 ALTER TABLE `orderitems` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `size`
--

DROP TABLE IF EXISTS `size`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `size` (
  `id` int NOT NULL AUTO_INCREMENT,
  `gift_id` int DEFAULT NULL,
  `size` varchar(50) DEFAULT NULL,
  `stock` int DEFAULT NULL,
  `this_size_sales` int DEFAULT NULL,
  `this_size_income` float DEFAULT NULL,
  PRIMARY KEY (`id`),
  UNIQUE KEY `id` (`id`),
  KEY `gift_id` (`gift_id`),
  CONSTRAINT `size_ibfk_1` FOREIGN KEY (`gift_id`) REFERENCES `gifts` (`id`) ON DELETE CASCADE
) ENGINE=InnoDB AUTO_INCREMENT=97 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `size`
--

LOCK TABLES `size` WRITE;
/*!40000 ALTER TABLE `size` DISABLE KEYS */;
INSERT INTO `size` VALUES (1,1,'S',881,70,19678.8),(2,1,'M',814,150,43709.2),(3,1,'L',714,0,0),(4,1,'XL',102,0,0),(5,1,'XXL',248,0,0),(6,2,'XS',787,36,7887.5),(7,2,'S',748,168,37387.5),(8,2,'M',356,3,572.5),(9,2,'L',96,3,622.5),(10,2,'XL',513,0,0),(11,3,'XS',185,315,214229),(12,3,'S',90,38,27189),(13,3,'M',974,10,7552.5),(14,3,'L',639,3,1693.35),(15,4,'S',808,106,36704),(16,4,'M',18,725,254332),(17,4,'L',522,35,12672),(18,4,'XL',245,0,0),(19,5,'S',215,136,27112.5),(20,5,'M',559,39,7854.75),(21,5,'L',106,64,12973.5),(22,5,'XL',110,7,1149.75),(23,5,'XXL',509,1,225),(24,6,'S',134,137,23438),(25,6,'M',840,21,3808),(26,6,'L',612,22,3798),(27,6,'XL',388,19,3298),(28,7,'S',708,16,3840),(29,7,'M',589,375,97572),(30,7,'L',691,22,6366),(31,7,'XL',513,18,4893),(32,7,'XXL',442,25,6483),(33,7,'3XL',911,6,1659),(34,8,'S',518,475,161119),(35,8,'M',479,136,44261.2),(36,8,'L',336,32,10897.5),(37,8,'XL',941,24,7293.75),(38,8,'XXL',559,118,38587.5),(39,9,'S',344,26,5906.4),(40,9,'M',497,108,22562.4),(41,9,'L',352,21,4341.6),(42,9,'XL',513,103,21307.2),(43,9,'XXL',866,14,2738.4),(44,10,'S',763,59,9738.3),(45,10,'M',442,87,15208),(46,10,'L',943,49,8388.9),(47,10,'XL',281,7,1173.9),(48,10,'XXL',650,0,0),(49,11,'S',915,572,197804),(50,11,'M',861,13,4566.2),(51,11,'L',950,120,41210.4),(52,11,'XL',353,38,12940.2),(53,12,'XS',754,252,54845),(54,12,'S',535,121,27610),(55,12,'M',826,93,20640),(56,12,'L',702,38,8337.5),(57,12,'XL',108,64,13580),(58,13,'S',482,78,18481.5),(59,13,'M',693,88,20630.7),(60,13,'L',557,15,3890.7),(61,13,'XL',879,1,270),(62,13,'XXL',95,0,0),(63,14,'XS',119,247,58714.2),(64,14,'S',451,31,7511.4),(65,14,'M',869,251,59175.9),(66,14,'L',204,33,7751.7),(67,14,'XL',312,40,9690.3),(68,15,'XS',610,114,22167),(69,15,'S',920,23,4378.5),(70,15,'M',235,174,34742.2),(71,15,'L',778,36,7125.75),(72,15,'XL',847,198,39381.8),(73,15,'XXL',34,128,24601.5),(74,16,'S',690,5,1445.5),(75,16,'M',346,17,5061),(76,16,'L',952,46,13807.5),(77,16,'XL',482,0,0),(78,16,'XXL',546,2,700),(79,17,'S',950,410,95885.1),(80,17,'M',176,337,81010.8),(81,17,'L',754,9,2430),(82,17,'XL',309,72,18000.9),(83,17,'XXL',16,44,10962),(84,18,'S',136,250,50393),(85,18,'M',650,30,6242.2),(86,18,'L',925,8,1766.4),(87,18,'XL',823,4,848.7),(88,19,'S',189,280,96561.7),(89,19,'M',431,42,15116.7),(90,19,'L',886,34,11933),(91,19,'XL',892,33,12446.5),(92,20,'XS',191,549,173639),(93,20,'S',641,102,31190.4),(94,20,'M',92,127,40748.4),(95,20,'L',932,18,5886),(96,20,'XL',378,1,360);
/*!40000 ALTER TABLE `size` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `user`
--

DROP TABLE IF EXISTS `user`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `user` (
  `id` int NOT NULL AUTO_INCREMENT,
  `user_name` varchar(50) DEFAULT NULL,
  `user_email` varchar(100) DEFAULT NULL,
  `user_password` varchar(50) DEFAULT NULL,
  `user_mobile` varchar(50) DEFAULT NULL,
  `user_date_of_birth` varchar(50) DEFAULT NULL,
  `user_address` varchar(100) DEFAULT NULL,
  PRIMARY KEY (`id`),
  UNIQUE KEY `id` (`id`),
  UNIQUE KEY `user_email` (`user_email`)
) ENGINE=InnoDB AUTO_INCREMENT=3 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `user`
--

LOCK TABLES `user` WRITE;
/*!40000 ALTER TABLE `user` DISABLE KEYS */;
INSERT INTO `user` VALUES (1,'zhengli','111@qq.com','1234','123456789',NULL,NULL),(2,'beefa','2910842215@qq.com','12345678','15636128575',NULL,NULL);
/*!40000 ALTER TABLE `user` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `validationinformation`
--

DROP TABLE IF EXISTS `validationinformation`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `validationinformation` (
  `id` int NOT NULL AUTO_INCREMENT,
  `user_email` varchar(100) DEFAULT NULL,
  `validation_code` varchar(10) DEFAULT NULL,
  PRIMARY KEY (`id`),
  UNIQUE KEY `id` (`id`),
  KEY `user_email` (`user_email`),
  CONSTRAINT `validationinformation_ibfk_1` FOREIGN KEY (`user_email`) REFERENCES `user` (`user_email`) ON DELETE CASCADE
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `validationinformation`
--

LOCK TABLES `validationinformation` WRITE;
/*!40000 ALTER TABLE `validationinformation` DISABLE KEYS */;
INSERT INTO `validationinformation` VALUES ('1', '111@qq.com', '123456');
/*!40000 ALTER TABLE `validationinformation` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `wishlist`
--

DROP TABLE IF EXISTS `wishlist`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `wishlist` (
  `id` int NOT NULL AUTO_INCREMENT,
  `wishlist_id` varchar(100) DEFAULT NULL,
  `owner_id` int DEFAULT NULL,
  `wishlist_name` varchar(100) DEFAULT NULL,
  `wishlist_description` varchar(100) DEFAULT NULL,
  `first_name` varchar(100) DEFAULT NULL,
  `last_name` varchar(100) DEFAULT NULL,
  `address` varchar(300) DEFAULT NULL,
  `phone` varchar(50) DEFAULT NULL,
  `postcode` varchar(50) DEFAULT NULL,
  `user_expected_delivery_time` varchar(100) DEFAULT NULL,
  `state` varchar(100) DEFAULT NULL,
  `payer_fname` varchar(100) DEFAULT NULL,
  PRIMARY KEY (`id`),
  UNIQUE KEY `id` (`id`),
  KEY `owner_id` (`owner_id`),
  CONSTRAINT `wishlist_ibfk_1` FOREIGN KEY (`owner_id`) REFERENCES `user` (`id`) ON DELETE CASCADE
) ENGINE=InnoDB AUTO_INCREMENT=9 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `wishlist`
--

LOCK TABLES `wishlist` WRITE;
/*!40000 ALTER TABLE `wishlist` DISABLE KEYS */;
INSERT INTO `wishlist` VALUES (1,'BIEU8Z',1,'dream','dream','zheng','li','ddd','123456789','12345','03/02/2022','partial','ddd'),(2,'FjkZgH',1,'dream','dream','zheng','li','ddd','123456789','12345','03/02/2022','completed','ddd'),(3,'BeIdQj',1,'dream','dream','zheng','li','ddd','123456789','12345','03/02/2022','partial','ddd'),(4,'Y9ps1n',1,'dream','dream','zheng','li','ddd','123456789','12345','03/02/2022','partial','ddd'),(5,'vt59BR',1,'dream','dream','zheng','li','ddd','123456789','12345','03/02/2022','partial','ddd'),(6,'z8xKWd',2,'123','123','123','123','Australia, New South Wales, 123','123','123','Wed Jan 10 1900 00:00:00 GM','processing','none'),(7,'wk7ovz',2,'123','123','123','123','Australia, Western Australia, 123','123','123','Mon Apr 25 2022 09:25:39 GM','processing','none'),(8,'fjNlbY',2,'wtx','123','123','123','Australia, Western Australia, 123','123','123','Tue Apr 26 2022 09:40:16 GM','processing','none');
/*!40000 ALTER TABLE `wishlist` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `wishlistitems`
--

DROP TABLE IF EXISTS `wishlistitems`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `wishlistitems` (
  `id` int NOT NULL AUTO_INCREMENT,
  `wishlistID` int DEFAULT NULL,
  `wishlist_id` varchar(100) DEFAULT NULL,
  `products_id` int DEFAULT NULL,
  `product_name` varchar(150) DEFAULT NULL,
  `product_cover` varchar(500) DEFAULT NULL,
  `size` varchar(50) DEFAULT NULL,
  `price` float DEFAULT NULL,
  `count` int DEFAULT NULL,
  `this_gift_state` varchar(100) DEFAULT NULL,
  `paid_count` int DEFAULT NULL,
  PRIMARY KEY (`id`),
  UNIQUE KEY `id` (`id`),
  KEY `wishlistID` (`wishlistID`),
  KEY `products_id` (`products_id`),
  CONSTRAINT `wishlistitems_ibfk_1` FOREIGN KEY (`wishlistID`) REFERENCES `wishlist` (`id`) ON DELETE CASCADE,
  CONSTRAINT `wishlistitems_ibfk_2` FOREIGN KEY (`products_id`) REFERENCES `gifts` (`id`) ON DELETE CASCADE
) ENGINE=InnoDB AUTO_INCREMENT=12 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `wishlistitems`
--

LOCK TABLES `wishlistitems` WRITE;
/*!40000 ALTER TABLE `wishlistitems` DISABLE KEYS */;
INSERT INTO `wishlistitems` VALUES (1, 1, 'fjNlbY', 20, 'Ingeborg Women''s Jacket', 'https://cdn11.bigcommerce.com/s-i8agbb7iol/images/stencil/1280x1280/products/8831/22737/83521_A__81720.1646875433.jpg?c=2', 'M', 360, 1, '100%', 1),(2, 6, 'z8xKWd', 18, 'Ingeborg Women''s Jacket', 'https://cdn11.bigcommerce.com/s-i8agbb7iol/images/stencil/1280x1280/products/8831/22737/83521_A__81720.1646875433.jpg?c=2', 'M', 360, 1, '100%', 1);
/*!40000 ALTER TABLE `wishlistitems` ENABLE KEYS */;
UNLOCK TABLES;
-- SET @@SESSION.SQL_LOG_BIN = @MYSQLDUMP_TEMP_LOG_BIN;
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2022-04-26 21:20:58
