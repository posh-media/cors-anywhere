import CorsAnywhere from 'cors-anywhere';

const corsProxy = CorsAnywhere.createServer({
  originWhitelist: [], // Allow all origins
  requireHeader: ['origin', 'x-requested-with'],
  removeHeaders: ['cookie', 'cookie2'],
});

export default function handler(req, res) {
  req.url = req.url.replace(/^\/api\/cors\??/, '/'); // Normalize URL for CORS Anywhere
  corsProxy.emit('request', req, res);
}
