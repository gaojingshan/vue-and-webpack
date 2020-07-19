const express = require('express');
const url = require('url');
const fs = require('fs');

const app = express();
// 列出
app.get('/tags', (req, res) => {
  // 读取文件
  fs.readFile('./mysql.txt', (err, content) => {
    // 显示JSON
    res.json(JSON.parse(content.toString()));
  });
});

// 删除
app.get('/tags/del/:indexArr', (req, res) => {
  var indexArr = req.params.indexArr.split('v');
  // 把这里面每项都变为数字，因为这样才能下面和includes比对
  indexArr = indexArr.map((item) => Number(item));
  // 读取文件
  fs.readFile('./mysql.txt', (err, content) => {
    // 读取arr
    var arr = JSON.parse(content.toString());

    // 删除数组中指定项
    arr = arr.filter((item, index) => !indexArr.includes(index));
    // 写回去
    fs.writeFile('./mysql.txt', JSON.stringify(arr), function () {
      res.send('ok');
    });
  });
});

// 上移一项
app.get('/tags/prev/:index', (req, res) => {
  const index = Number(req.params.index);
  if (index <= 0) {
    res.send('nook');
    return;
  }
  // 读取文件
  fs.readFile('./mysql.txt', (err, content) => {
    // 读取arr
    var arr = JSON.parse(content.toString());
    // 移动，就相当于把那项删除了，然后插入到它前面一项
    // 要移动的这项要删除，删除之后得到数组（得到被删除的项），所以要加方括号0
    var delitem = arr.splice(index, 1)[0];
    // 插入到前一项
    arr.splice(index - 1, 0, delitem);
    // 写回去
    fs.writeFile('./mysql.txt', JSON.stringify(arr), function () {
      res.send('ok');
    });
  });
});

app.listen(3000);
