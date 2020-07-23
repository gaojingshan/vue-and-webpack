const express = require('express');
const fs = require('fs');
const formidable = require('formidable');

const app = express();

// 列出
app.get('/tags', (req, res) => {
  fs.readFile('./mysql.txt', (err, content) => {
    var arr = JSON.parse(content.toString());
    res.json(arr);
  });
});

// 删除(可批量删)
app.delete('/tags/:indexArr', (req, res) => {
  var indexArr = req.params.indexArr.split('v');
  indexArr = indexArr.map((item) => Number(item));

  fs.readFile('./mysql.txt', (err, content) => {
    var arr = JSON.parse(content.toString());
    arr = arr.filter((item, index) => !indexArr.includes(index));

    // 写回去
    fs.writeFile('./mysql.txt', JSON.stringify(arr), function () {
      res.send('ok');
    });
  });
});

// 上移一位
app.patch('/tags/prev/:index', (req, res) => {
  const index = Number(req.params.index);
  if (index <= 0) {
    res.send('nook');
    return;
  }
  fs.readFile('./mysql.txt', (err, content) => {
    var arr = JSON.parse(content.toString());
    var delitem = arr.splice(index, 1)[0];
    arr.splice(index - 1, 0, delitem);
    fs.writeFile('./mysql.txt', JSON.stringify(arr), function () {
      res.send('ok');
    });
  });
});

// 下移一位
app.patch('/tags/next/:index', (req, res) => {
  const index = Number(req.params.index);
  fs.readFile('./mysql.txt', (err, content) => {
    var arr = JSON.parse(content.toString());

    var delitem = arr.splice(index, 1)[0];
    arr.splice(index + 1, 0, delitem);

    fs.writeFile('./mysql.txt', JSON.stringify(arr), function () {
      res.send('ok');
    });
  });
});

// 修改
app.patch('/tags/:index', (req, res) => {
  const index = Number(req.params.index);

  const form = formidable({multiples: true});
  form.parse(req, (err, fields, files) => {
    fs.readFile('./mysql.txt', (err, content) => {
      var arr = JSON.parse(content.toString());
      arr[i] = fields.content;

      fs.writeFile('./mysql.txt', JSON.stringify(arr), function () {
        res.send('ok');
      });
    });
  });
});

// 增加
app.post('/tags', (req, res) => {
  const form = formidable({multiples: true});
  form.parse(req, (err, fields, files) => {
    fs.readFile('./mysql.txt', (err, content) => {
      var arr = JSON.parse(content.toString());
      arr.push(fields.content);
      fs.writeFile('./mysql.txt', JSON.stringify(arr), function () {
        res.send('ok');
      });
    });
  });
});


app.listen(3000);
