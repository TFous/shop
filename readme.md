1、在命令提示行中键入：mysql -u root -p123456
2、输入 alter user 'root'@'localhost' identified with mysql_native_password by '123456';
如果成功会显示Query OK, 0 rows affected (0.04 sec)
3、输入flush privileges;
如果成功会显示Query OK, 0 rows affected (0.02 sec)