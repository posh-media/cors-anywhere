import CorsAnywhere from 'cors-anywhere';

// Create the proxy server
const proxy = CorsAnywhere.createServer({
  originWhitelist: [], // Allow all origins
  requireHeader: [], // <-- IMPORTANT: Remove required headers that Vercel doesn't provide
  removeHeaders: ['cookie', 'cookie2'],
});

// Export as Vercel serverless handler
export default function handler(req, res) {
  // Required by cors-anywhere to work
  req.url = req.url.replace(/^\/api\/cors/, '') || '/';
  
  proxy.emit('request', req, res);
}
