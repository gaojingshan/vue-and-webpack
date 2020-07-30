// axios 的create可以创建实例
import axios from 'axios';

// 利用这个实例的好处是将来可以作为axios的拦截器，拦截器是服务于判断登录注册的。
const instance = axios.create({
  baseURL: 'http://www.aiqianduan.com:56506/',
  timeout: 1000,
});

// 策略
const get = {
  getNews(callback) {
    // ajax拉取的接口
    instance.get('http://www.aiqianduan.com:56506/mingxing').then((data) => {
      callback(data);
    });

    // 模拟接口
    /* callback({
      data: [
        { title: '我是标题', link: '我是链接' },
        { title: '我是标题', link: '我是链接' },
        { title: '我是标题', link: '我是链接' },
        { title: '我是标题', link: '我是链接' },
        { title: '我是标题', link: '我是链接' },
      ],
    }); */
  },
};

export default {
  // 这里才Ajax
  // 好处：当现在没有接口的时候,可以在这里模拟数据。接口到最后要联调。
  // 这里才暴露一个函数，这个函数由axios实例发
  // 是一种策略模式

  // 以前是写网址，现在是写函数名
  // 函数定义在一个策略中
  get(fnName, callback) {
    get[fnName](callback);
  },
};
