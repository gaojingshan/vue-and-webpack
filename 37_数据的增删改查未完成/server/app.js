const express = require('express');
const fs = require('fs');
const formidable = require('formidable');

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
app.delete('/tags/:indexArr', (req, res) => {
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

// patch请求需要在Ajax中测试，不能在地址栏中测试
// 上移一项
app.patch('/tags/prev/:index', (req, res) => {
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

// 下移一项
app.patch('/tags/next/:index', (req, res) => {
  const index = Number(req.params.index);

  // 读取文件
  fs.readFile('./mysql.txt', (err, content) => {
    // 读取arr
    var arr = JSON.parse(content.toString());
    // 移动，就相当于把那项删除了，然后插入到它前面一项
    // 要移动的这项要删除，删除之后得到数组（得到被删除的项），所以要加方括号0
    var delitem = arr.splice(index, 1)[0];
    // 插入到前一项
    arr.splice(index + 1, 0, delitem);
    // 写回去
    fs.writeFile('./mysql.txt', JSON.stringify(arr), function () {
      res.send('ok');
    });
  });
});

// 目录，两个斜杠的往下写，三个斜杠的往上写，因为两个斜杠的:index会匹配任一项
// 修改某个tag
app.patch('/tags/:index', (req, res) => {
  // 识别 :index参数
  const index = Number(req.params.index);

  // 使用formidable库识别patch请求发来的数据，(在HTTP的报文体中发的)
  const form = formidable({multiples: true});

  // 用formidable识别用户发上来的请求
  form.parse(req, (err, fields, files) => {
    // 读取文件
    fs.readFile('./mysql.txt', (err, content) => {
      // 读取arr
      var arr = JSON.parse(content.toString());

      // 把修改的这项改变掉
      arr[index] = fields.content;

      // 写回去
      fs.writeFile('./mysql.txt', JSON.stringify(arr), function () {
        res.send('ok');
      });
    });
  });
});

// 增加一个tag
app.post('/tags', (req, res) => {
  // 使用formidable库识别patch请求发来的数据，(在HTTP的报文体中发的)
  const form = formidable({multiples: true});

  // 用formidable识别用户发上来的请求
  form.parse(req, (err, fields, files) => {
    // 读取文件
    fs.readFile('./mysql.txt', (err, content) => {
      // 读取arr
      var arr = JSON.parse(content.toString());

      // 推入新项
      arr.push(fields.content);

      // 写回去
      fs.writeFile('./mysql.txt', JSON.stringify(arr), function () {
        res.send('ok');
      });
    });
  });
});

app.listen(3000);
