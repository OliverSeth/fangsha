/*const express = require('express')
const router = express.Router()
const mysql = require('mysql')*/

/* eslint-disable */
/*const pools = mysql.createPool({
  host     : 'localhost',
  user     : 'root',
  password : '123456',
  port: '3306',
  database: 'test'
});

connection.connect();
return connection;*/
// 数据库的定义

/*router.get("/load",function (req,res) {

  var selectSQLs = 'select * from insertdata order by num desc limit 50';
  var selectSQLshebeixinxi = 'select * from shebeixinxi order by num desc limit 50';
  // var selectSQLs = 'select * from insertdata  limit 200';

  pools.getConnection(function (err,conn) {
    if (err) console.log(err);

    conn.query(selectSQLs,function (err,rows) {
      if (err) console.log(err);

      res.send(rows);
      conn.release();
    });
    conn.query(selectSQLshebeixinxi,function (err,rows) {
      if (err) console.log(err);

      res.send(rows);
      conn.release();
    });
  });
});*/







//module.exports = router;






var mysql = require('mysql');
//把数据库的密码，账号，地址，端口，表格都连接上！！
//var router = mysql.Router();
var connection = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: '123456',
  port: '3306',
  database: 'test'//名字
});
//connection.connect();
//return connection;
//启动连接！！！！
// 这中间的是操作！！↓（增删查改，随你开心！！！）
// 需要学数据库的代码
//这中间的是操作！！↓（增删查改，随你开心！！！）
// 需要学数据库的代码
// 这是增数据，顺序执行！！！！！
var addSql = 'INSERT INTO beijianxinxi(num,rukuriqi,beijianbianhao,beijianmingcheng,fuwujian,xiangxixinxi,shuliang,yuji) VALUES(?,?,?,?,?,?,?,?)';
var addSqlParams = ['1', '20200913', '2009-09-13', '轴承6004','卡头','标准轴承6004','50','20201010']; //这是想增加的数据
//增

connection.query(addSql, addSqlParams, function (err, res) { //询问访问数据库，也就是去那个数据库
  if (err) { //失败就报个错
    console.log('[INSERT ERROR] - ', err.message);
    return;
  }
  console.log("数据库增的结果：");
  console.log(res);
});

/*
// 这是删除数据。

var delSql = 'DELETE FROM shebeixinxi where serial=2'; //数据库代码，websites表中删除id为6的那一行。
//删
connection.query(delSql, function (err, res) { //询问访问数据库，也就是去嫩那个数据库
  if (err) {
    console.log('[DELETE ERROR] - ', err.message);
    return;
  }
  console.log("数据库删的结果：");
  console.log(res);
});


//这是改数据。
var modSql = 'UPDATE shebeixinxi SET  date = ?,province = ?,city = ?,address = ?,zip = ? WHERE serial = ?';//改name为菜鸟移动站的数据！把其id和url改掉！
var modSqlParams = ['3','2','2','2', '2', '3'];
//改
connection.query(modSql, modSqlParams, function (err, res) {
  if (err) {
    console.log('[UPDATE ERROR] - ', err.message);
    return;
  }
  console.log("数据库删的结果：");
  console.log(res);
});


//查，数据库代码
var sql = 'SELECT * FROM shebeixinxi';
connection.query(sql, function (err, res) { //询问访问数据库，也就是去那个数据库
  if (err) { //失败就报个错。
    console.log('[SELECT ERROR] - ', err.message);
    return;
  }
  console.log("数据库查的结果：");
  console.log(res); //成功就输出下结果
});
*/
