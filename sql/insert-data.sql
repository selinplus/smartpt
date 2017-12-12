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

-- 正在导出表  selin.customer 的数据：~13 rows (大约)
/*!40000 ALTER TABLE `customer` DISABLE KEYS */;
INSERT INTO `customer` (`id`, `name`, `address`, `mobile`, `create_time`, `user_id`) VALUES
	(1, '王毅', '烟台市', '18660001234', '2017-11-20 14:11:37', 'test1'),
	(2, '刘而', '烟台市', '18550001234', '2017-11-20 14:12:11', 'test1'),
	(3, '张三', '烟台市', '188600001234', '2017-11-20 14:12:30', 'test1'),
	(4, '网二', '烟台市', '18800092221', '2017-11-20 14:33:48', 'test'),
	(5, '张与', '烟台市', '18130001234', '2017-11-20 14:34:11', 'test1'),
	(6, '刘总', '烟台市', '18865651111', '2017-11-20 14:34:36', 'test1'),
	(7, '都市', '烟台市', '12288781122', '2017-11-20 14:36:01', 'test1'),
	(8, '防风', '烟台市', '12289990000', '2017-11-20 14:36:20', 'test1'),
	(9, '周郑', '烟台市', '18877220090', '2017-11-20 14:36:42', 'test1'),
	(10, '王国', '烟台市', '18311231110', '2017-11-20 14:37:04', 'test1'),
	(11, '陈东', '烟台市', '123989988998', '2017-11-20 14:37:21', 'test1'),
	(12, '蒋敏', '烟台市', '129230230999', '2017-11-20 14:37:38', 'test1'),
	(13, '刘智神', '龙口市', '13109876777', '2017-12-07 08:16:31', 'test1'),
	(14, '尔冬升', '烟台市莱阳', '13964532771', '2017-12-07 08:33:23', 'test1'),
	(15, '蒋老师', '招远', '18558836254', '2017-12-11 16:53:18', 'test1'),
	(16, '张峰', '莱阳市', '13058526478', '2017-12-12 11:44:45', '081800494926089637');
/*!40000 ALTER TABLE `customer` ENABLE KEYS */;

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

-- 正在导出表  selin.orders 的数据：~12 rows (大约)
/*!40000 ALTER TABLE `orders` DISABLE KEYS */;
INSERT INTO `orders` (`id`, `customer_id`, `product_id`, `quantity`, `flag`, `create_time`, `order_id`, `user_id`) VALUES
	(1, 13, 11, 1, 5, '2017-12-07 08:16:31', 1512605791148, 'test1'),
	(2, 14, 10, 1, 5, '2017-12-07 08:33:23', 1512606803262, 'test1'),
	(3, 14, 11, 1, 5, '2017-12-07 08:33:23', 1512606803262, 'test1'),
	(4, 14, 10, 1, 5, '2017-12-07 08:35:01', 1512606901087, 'test1'),
	(5, 14, 11, 1, 5, '2017-12-07 08:35:01', 1512606901087, 'test1'),
	(6, 1, 14, 2, 5, '2017-12-08 08:48:04', 1512694084565, 'test1'),
	(7, 1, 15, 2, 5, '2017-12-08 08:48:04', 1512694084565, 'test1'),
	(8, 1, 16, 1, 5, '2017-12-08 08:48:04', 1512694084565, 'test1'),
	(9, 14, 13, 1, 5, '2017-12-08 10:52:24', 1512701544105, 'test1'),
	(10, 14, 14, 1, 5, '2017-12-08 10:52:24', 1512701544105, 'test1'),
	(11, 14, 16, 1, 5, '2017-12-08 10:56:25', 1512701785047, 'test1'),
	(12, 14, 15, 1, 5, '2017-12-08 10:56:25', 1512701785047, 'test1'),
	(13, 9, 7, 1, 5, '2017-12-11 16:37:34', 1512981454169, 'test1'),
	(14, 9, 9, 1, 5, '2017-12-11 16:37:34', 1512981454169, 'test1'),
	(15, 15, 7, 1, 5, '2017-12-11 16:53:18', 1512982398748, 'test1'),
	(16, 15, 10, 1, 5, '2017-12-11 16:53:18', 1512982398748, 'test1'),
	(17, 15, 11, 1, 5, '2017-12-11 16:53:18', 1512982398748, 'test1'),
	(18, 1, 9, 1, 5, '2017-12-11 16:54:35', 1512982475931, 'test1'),
	(19, 1, 10, 1, 5, '2017-12-11 16:54:36', 1512982475931, 'test1'),
	(20, 16, 7, 1, 5, '2017-12-12 11:44:45', 1513050285505, '081800494926089637'),
	(21, 16, 8, 1, 5, '2017-12-12 11:44:45', 1513050285505, '081800494926089637'),
	(22, 16, 9, 1, 5, '2017-12-12 11:44:45', 1513050285505, '081800494926089637'),
	(23, 16, 10, 1, 5, '2017-12-12 11:44:45', 1513050285505, '081800494926089637'),
	(24, 16, 15, 1, 5, '2017-12-12 15:20:24', 1513063224963, '081800494926089637'),
	(25, 16, 16, 1, 5, '2017-12-12 15:20:25', 1513063224963, '081800494926089637');
/*!40000 ALTER TABLE `orders` ENABLE KEYS */;

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

-- 正在导出表  selin.schedule 的数据：~9 rows (大约)
/*!40000 ALTER TABLE `schedule` DISABLE KEYS */;
INSERT INTO `schedule` (`id`, `customer_id`, `order_id`, `name`, `product_id`, `morning`, `size`, `lunch`, `quantity`, `dinner`, `startDate`, `endDate`) VALUES
	(1, 14, 1512606901087, '河南榛子', 11, 1, 22, 0, 1, 1, '0000-00-00', '0000-00-00'),
	(2, 14, 1512606901087, '东北榛蘑', 10, 1, 16, 1, 1, 1, '2017-12-09', '2017-12-15'),
	(3, 1, 1512694084565, '云南白药', 14, 0, 1, 0, 2, 1, '2017-12-09', '2017-12-11'),
	(4, 1, 1512694084565, '湖南板鸭', 15, 1, 1, 0, 2, 1, '2017-12-19', '2017-12-20'),
	(5, 1, 1512694084565, '武汉三绝', 16, 0, 12, 2, 1, 0, '2017-12-12', '2017-12-18'),
	(6, 14, 1512701544105, '云南白药', 14, 1, 1, 1, 1, 1, '2017-12-08', '2017-12-09'),
	(7, 14, 1512701544105, '陕西刀削犇', 13, 1, 28, 1, 1, 1, '2017-12-09', '2017-12-19'),
	(8, 14, 1512701785047, '湖南板鸭', 15, 0, 1, 0, 1, 1, '2017-12-19', '2017-12-20'),
	(9, 14, 1512701785047, '武汉三绝', 16, 1, 12, 1, 1, 1, '2017-12-08', '2017-12-12'),
	(10, 9, 1512981454169, '王屋山黑紫花', 7, 1, 30, 1, 1, 1, '2017-12-11', '2017-12-21'),
	(11, 9, 1512981454169, '山东苹果', 9, 1, 12, 1, 1, 1, '2017-12-11', '2017-12-15'),
	(12, 15, 1512982398748, '王屋山黑紫花', 7, 1, 30, 1, 1, 2, '2017-12-30', '2018-01-07'),
	(13, 15, 1512982398748, '东北榛蘑', 10, 1, 16, 1, 1, 1, '2017-12-11', '2017-12-17'),
	(14, 15, 1512982398748, '河南榛子', 11, 1, 22, 1, 1, 0, '2017-12-19', '2017-12-30'),
	(15, 1, 1512982475931, '山东苹果', 9, 1, 12, 1, 1, 1, '2017-12-11', '2017-12-15'),
	(16, 1, 1512982475931, '东北榛蘑', 10, 0, 16, 1, 1, 1, '2017-12-19', '2017-12-27'),
	(17, 16, 1513050285505, '长白绿萝', 8, 1, 32, 1, 1, 1, '2017-12-12', '2017-12-23'),
	(18, 16, 1513050285505, '王屋山黑紫花', 7, 1, 30, 1, 1, 1, '2017-12-30', '2018-01-09'),
	(19, 16, 1513050285505, '山东苹果', 9, 0, 12, 1, 1, 1, '2017-12-12', '2017-12-18'),
	(20, 16, 1513050285505, '东北榛蘑', 10, 0, 16, 0, 1, 2, '2017-12-13', '2017-12-21'),
	(21, 16, 1513063224963, '湖南板鸭', 15, 0, 1, 0, 1, 1, '2017-12-12', '2017-12-13'),
	(22, 16, 1513063224963, '武汉三绝', 16, 0, 12, 1, 1, 1, '2017-12-12', '2017-12-18');
/*!40000 ALTER TABLE `schedule` ENABLE KEYS */;

/*!40101 SET SQL_MODE=IFNULL(@OLD_SQL_MODE, '') */;
/*!40014 SET FOREIGN_KEY_CHECKS=IF(@OLD_FOREIGN_KEY_CHECKS IS NULL, 1, @OLD_FOREIGN_KEY_CHECKS) */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
