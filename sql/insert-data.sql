-- --------------------------------------------------------
-- 主机:                           127.0.0.1
-- 服务器版本:                        10.1.28-MariaDB - mariadb.org binary distribution
-- 服务器操作系统:                      Win32
-- HeidiSQL 版本:                  9.4.0.5125
-- --------------------------------------------------------

/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET NAMES utf8 */;
/*!50503 SET NAMES utf8mb4 */;
/*!40014 SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0 */;
/*!40101 SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='NO_AUTO_VALUE_ON_ZERO' */;

-- 导出  表 selin.customer 结构
DROP TABLE IF EXISTS `customer`;
CREATE TABLE IF NOT EXISTS `customer` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `name` varchar(500) NOT NULL,
  `address` varchar(500) NOT NULL,
  `mobile` varchar(50) NOT NULL,
  `create_time` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP,
  `user_id` varchar(50) NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=17 DEFAULT CHARSET=utf8;

-- 导出  表 selin.dinguser 结构
DROP TABLE IF EXISTS `dinguser`;
CREATE TABLE IF NOT EXISTS `dinguser` (
  `id` varchar(50) NOT NULL,
  `name` varchar(50) DEFAULT NULL,
  `mobile` varchar(50) DEFAULT NULL,
  `active` varchar(50) DEFAULT NULL,
  `createdAt` timestamp NULL DEFAULT CURRENT_TIMESTAMP,
  `modeifiedAt` timestamp NULL DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;


-- 导出  表 selin.orders 结构
DROP TABLE IF EXISTS `orders`;
CREATE TABLE IF NOT EXISTS `orders` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `customer_id` int(11) NOT NULL DEFAULT '0',
  `product_id` int(11) NOT NULL DEFAULT '0',
  `quantity` int(11) NOT NULL DEFAULT '0',
  `flag` int(11) NOT NULL DEFAULT '5',
  `create_time` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP,
  `order_id` bigint(20) NOT NULL,
  `user_id` varchar(50) NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=26 DEFAULT CHARSET=utf8;
-- 导出  表 selin.product 结构
DROP TABLE IF EXISTS `product`;
CREATE TABLE
IF NOT EXISTS `product`
(
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `name` varchar(300) NOT NULL,
  `vip_price` float NOT NULL,
  `price` float NOT NULL,
  `size` int(11) NOT NULL,
  `xcode` varchar(50) DEFAULT NULL,
  `barcode` varchar(50) DEFAULT NULL,
  `score` int(11) NOT NULL,
  PRIMARY KEY(`id`)
) ENGINE=InnoDB AUTO_INCREMENT=17 DEFAULT CHARSET=utf8;

-- 正在导出表  selin.product 的数据：~14 rows (大约)
/*!40000 ALTER TABLE `product` DISABLE KEYS */;
INSERT INTO `product` (`
id`,
`name
`, `vip_price`, `price`, `size`, `xcode`, `barcode`, `score`) VALUES
(1, '海藻油', 279, 307, 28, '150-880302', '6956435500063', 25),
(2, '益生菌', 128, 141, 12, '108-880301', '6956435500179', 11),
(3, '葡萄糖酸锌片', 125, 148, 28, '152-880302', '6956435500032', 12),
(4, '初乳片', 228, 276, 30, '153-880302', '6956435500018', 22),
(5, '铁加叶酸', 161, 181, 56, '145-880302', '6956435500056', 15),
(6, '儿童多维咀嚼片', 105, 116, 28, '105-880302', '6956435500025', 9),
(7, '钙加D咀嚼片', 86, 99, 28, '155-880302', '6956435500049', 8),
(8, '孕妇多维营养片', 135, 148, 28, '151-880302', '6956435500087', 12),
(9, '钙加D ', 75, 85, 28, '154-880302', '6956435500186', 7),
(10, '葡萄籽维生素c片', 278, 311, 56, '110-880301', '6945894400090', 28),
(11, '磷脂亚麻酸软胶囊', 377, 415, 84, '122-880309', '6956435500216', 33),
(12, '男士天力多维片', 332, 373, 84, '137-880301', '6956435500094', 30),
(13, '女士润泽多维片', 332, 373, 84, '136-880301', '6956435500131', 30),
(14, '茶蓟椰柑片', 248, 273, 56, '135-880301', '6945894400113', 21),
(15, '钙力镁片', 172, 203, 112, '120-880301', '6945894400120', 16),
(16, '维生素c片', 135, 149, 84, '130-880301', '6945894400106', 12),
(17, '大豆蛋白粉', 378, 430, 1, '200-880302', '6956435500100', 31),
(18, '复合蛋白粉（草莓）', 298, 348, 18, '216-8803', '0', 21),
(19, '膳食纤维粉', 256, 295, 28, '215-8803', '0', 18),
(20, '复合蛋白粉（巧克力）', 298, 348, 18, '213-8803', '0', 21),
(21, '复合蛋白粉（香草）', 298, 348, 18, '214-8803', '0', 21),
(22, 'sense活肤精华霜', 350, 385, 1, '305-8803', '0', 39),
(23, 'sense柔润保湿洁面乳', 139, 156, 1, '300-8803', '0', 13),
(24, 'sense柔润保湿爽肤水', 129, 148, 1, '301-8803', '0', 12),
(25, 'sense柔润补水修复霜', 265, 300, 1, '303-8803', '0', 29),
(26, 'sense柔润修护眼霜', 170, 195, 1, '306-8803', '0', 19),
(27, 'sense稻米纤维磨砂膏', 138, 156, 1, '307-8803', '0', 11),
(28, 'sense活力滋养面膜', 149, 169, 1, '308-8803', '0', 15),
(29, 'sense清爽滋养沐浴露', 139, 169, 1, '311-8803', '0', 11),
(30, 'sense修护营养洗发露', 139, 169, 1, '312-8803', '0', 11),
(31, 'sense轻盈滋润护发素', 139, 169, 1, '313-8803', '0', 11),
(32, 'sense丝柔紧肤霜', 148, 179, 1, '314-8803', '0', 12),
(33, 'sense滋养润手霜', 102, 119, 1, '315-8803', '0', 9),
(34, '化妆品7件套', 1050, 1050, 7, '0', '0', 100),
(35, '化妆品4件套', 588, 588, 4, '0', '0', 60);
/*!40000 ALTER TABLE `product` ENABLE KEYS */;

-- 导出  表 selin.schedule 结构
DROP TABLE IF EXISTS `schedule`;
CREATE TABLE IF NOT EXISTS `schedule` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `customer_id` int(11) NOT NULL DEFAULT '0',
  `order_id` bigint(20) NOT NULL DEFAULT '0',
  `name` varchar(100) NOT NULL DEFAULT '0',
  `product_id` int(11) NOT NULL DEFAULT '0',
  `morning` int(11) NOT NULL DEFAULT '0',
  `size` int(11) NOT NULL DEFAULT '0',
  `lunch` int(11) NOT NULL DEFAULT '0',
  `quantity` int(11) NOT NULL DEFAULT '0',
  `dinner` int(11) NOT NULL DEFAULT '0',
  `startDate` date NOT NULL,
  `endDate` date NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=23 DEFAULT CHARSET=utf8;