/*
 *  node_modules 
 *  引入时不写路径，可以直接反问对应文件夹的index.文件 比如 axios
 *  如果不写index 就得配置一个package.json文件
 *  指定入口为 某一个文件，比如 db
 */

 const axios = require('axios');
 const db = require('db');

 axios.get();

 db.add();