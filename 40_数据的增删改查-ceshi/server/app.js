const express = require('express');
const fs = require('fs');
const app = express();

// 列出
app.get('/tags', (req, res) => {
  fs.readFile('./mysql.txt', (err, content) => {
    var arr = JSON.parse(content.toString());
    res.json(arr);
  });
});

// 删除(可批量删)
app.get('/tags/:indexArr', (req, res) => {
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
app.get('/tags/prev/:index',(req,res)=>{
    
})

app.listen(3000);
