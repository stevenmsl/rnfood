import axios from 'axios';

export default axios.create({
  baseURL: 'https://api.yelp.com/v3/businesses/',
  headers: {
    Authorization:
      'Bearer yMDeJDWVo8LZP9VNpXaIa3-hhYy1NrcmLLXWn6vH3yQxMH-SSRHjMKei3km8xn2W8KgSY2QljnsTS6XLW-9ykN2g4u45MjjwGiKV_OQUCieaCe0VncVAVAeE1iIUYnYx',
  },
});
