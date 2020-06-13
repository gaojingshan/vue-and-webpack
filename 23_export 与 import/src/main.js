// 引包需要加大括号{}，可以暴露多个
import {mianji,zhouchang} from './circle.js';

// 默认暴露的，只能暴露一个，就不需要大括号了，import后面写文件名
import qiuhe from './qiuhe.js';
console.log(mianji(10));
console.log(zhouchang(10));

console.log(qiuhe(1,2));
