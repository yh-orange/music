// 模拟要抓取的参数设置
export const commonParams = {
  g_tk: 1928093487,
  inCharset: 'utf-8',
  outCharset: 'utf-8',
  notice: 0,
  format: 'jsonp'
}
// 设置jsonp的第三个回调参数
export const options = {
  param: 'jsonpCallback'
}
// 配置常量
export const ERR_OK = 0