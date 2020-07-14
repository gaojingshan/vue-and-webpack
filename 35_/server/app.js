const express = require('express');
const url = require('url');

const app = express();
// app.get('/a', (req, res) => {
//     // 允许跨域
//     // res.setHeader('Access-Control-Allow-Origin', '*');
//     // res.setHeader('Access-Control-Allow-Methods', '*');
//     res.json({
//         a: 10,
//     });
// });

app.get('/info', (req, res) => {
  // 得到用户发来的GET请求参数
  var m = url.parse(req.url, true).query.m;

  // 允许跨域
  // res.setHeader('Access-Control-Allow-Origin', '*');
  // res.setHeader('Access-Control-Allow-Methods', '*');

  if (m == undefined || m == '') {
    res.json({
      arr: [
        {
          qid: '010',
          qname: '北京分公司',
        },
        {
          qid: '020',
          qname: '上海分公司',
        },
      ],
    });
  } else if (m == '010') {
    res.json({
      arr: [
        {
          bid: '1001',
          bname: '行政部',
        },
        {
          bid: '1002',
          bname: '销售部',
        },
        {
          bid: '1003',
          bname: '研发部',
        },
      ],
    });
  } else if (m == '1001') {
    res.json({
      arr: [
        {
          rid: '20001',
          rname: '小红',
        },
        {
          rid: '20002',
          rname: '小橙',
        },
        {
          rid: '20003',
          rname: '小绿',
        },
        {
          rid: '20004',
          rname: '小兰',
        },
      ],
    });
  } else if (m == '1002') {
    res.json({
      arr: [
        {
          rid: '20005',
          rname: '小紫',
        },
        {
          rid: '20006',
          rname: '小明',
        },
        {
          rid: '20007',
          rname: '小刚',
        },
      ],
    });
  } else if (m == '1003') {
    res.json({
      arr: [
        {
          rid: '18001',
          rname: '小高',
        },
        {
          rid: '18002',
          rname: '小静',
        },
      ],
    });
  } else if (m == '020') {
    res.json({
      arr: [
        {
          bid: '2001',
          bname: '行政部',
        },
        {
          bid: '2002',
          bname: '销售部',
        },
        {
          bid: '2003',
          bname: '研发部',
        },
        {
          bid: '2004',
          bname: '优化外推部',
        },
      ],
    });
  } else if (m == '2001') {
    res.json({
      arr: [
        {
          =“id: '18011',
          rname: '小刘',
        },
        {
          rid: '18012',
          rname: '小秋',
        },
      ],
    });
  } else if (m == '2002') {
    res.json({
      arr: [
        {
          rid: '18021',
          rname: '小从',
        },
        {
          rid: '18022',
          rname: '小成',
        },
      ],
    });
  } else if (m == '2003') {
    res.json({
      arr: [
        {
          rid: '18031',
          rname: '小对',
        },
        {
          rid: '18032',
          rname: '小点',
        },
      ],
    });
  } else if (m == '2004') {
    res.json({
      arr: [
        {
          rid: '18041',
          rname: '小给',
        },
        {
          rid: '18042',
          rname: '小刚',
        },
      ],
    });
  }
});

app.listen(3000);
