define([], function () {
  // return就表示要暴露的API
  return {
    mianji(r) {
      return 3.14 * r * r;
    },
    zhouchang(r) {
      return 2 * 3.14 * r;
    },
  };
});
