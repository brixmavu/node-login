## Login example 
#### Not suitable for production but learning purpose

### Tech used
[Express generator](https://expressjs.com/en/starter/generator.html)

### Dependencies
mysql, express-session, handlebars(.hbs)

### Requirements 
You need MySQL database

### connect app with db

```
CREATE DATABASE IF NOT EXISTS `nodelogin` DEFAULT CHARACTER SET utf8 COLLATE utf8_general_ci;
USE `nodelogin`;
 
CREATE TABLE IF NOT EXISTS `users` (
  `id` int(11) NOT NULL,
  `name` varchar(50) NOT NULL,
  `password` varchar(255) NOT NULL,
  `email` varchar(100) NOT NULL
) ENGINE=InnoDB AUTO_INCREMENT=2 DEFAULT CHARSET=utf8;
 
INSERT INTO `users` (`id`, `name`, `password`, `email`) VALUES (1, 'test', 'test', 'test@test.com');
 
ALTER TABLE `users` ADD PRIMARY KEY (`id`);
ALTER TABLE `users` MODIFY `id` int(11) NOT NULL AUTO_INCREMENT,AUTO_INCREMENT=2;
```

### Login Details

email: test@test.com

password: test

