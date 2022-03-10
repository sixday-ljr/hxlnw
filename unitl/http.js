import axios from 'axios'

const http = axios.create({
  baseURL: 'http://xpl.hxlnw.com.cn/api/',
  // timeout: 1000,
  headers: {'X-Custom-Header': 'foobar'}
});

export default http