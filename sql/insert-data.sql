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
CREATE TABLE IF NOT EXISTS `product` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `name` varchar(300) NOT NULL,
  `vip_price` float NOT NULL,
  `price` float NOT NULL,
  `size` int(11) NOT NULL,
  `xcode` varchar(50) NOT NULL,
  `barcode` varchar(50) NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=17 DEFAULT CHARSET=utf8;

-- 正在导出表  selin.product 的数据：~13 rows (大约)
/*!40000 ALTER TABLE `product` DISABLE KEYS */;
INSERT INTO `product` (`id`, `name`, `vip_price`, `price`, `size`, `xcode`, `barcode`) VALUES
	(2, '海藻油', 300, 370, 28, '3666255001', '11221267776'),
	(3, '罗海', 288, 312.9, 36, '32338989', '3282938'),
	(5, '入海', 220, 260, 30, '3238974932', '32482432847'),
	(6, '南丁', 140, 180, 28, '32498798', '7897972323'),
	(7, '王屋山黑紫花', 220, 290, 30, '3249879482', '32479814931'),
	(8, '长白绿萝', 450, 510, 32, '43039078998', '314891473291'),
	(9, '山东苹果', 80, 120, 12, '4987328', '38247932'),
	(10, '东北榛蘑', 110, 150, 16, '234879388', '123787319'),
	(11, '河南榛子', 80, 100, 22, '349832798423', '327492498'),
	(12, '太白长叶', 230, 280, 28, '3328947', '3748391'),
	(13, '陕西刀削犇', 130, 180, 28, '3984798798', '7987321'),
	(14, '云南白药', 80, 100, 1, '897987899', '978998999'),
	(15, '湖南板鸭', 40, 60, 1, '07947584979', '79898787'),
	(16, '武汉三绝', 140, 170, 12, '123837487', '7382211');
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