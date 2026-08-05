const fs = require('fs');
const https = require('https');

const urls = [
  'https://www.instagram.com/p/DQMYSADkkEi/',
  'https://www.instagram.com/p/DXd70M1kg52/',
  'https://www.instagram.com/reel/DZKjXS_JUDS/',
  'https://www.instagram.com/reel/DW_6NONSDtL/',
  'https://www.instagram.com/p/DTQL4nVEr4O/'
];

if (!fs.existsSync('public/images/social')) fs.mkdirSync('public/images/social');

const download = (url, path) => new Promise((resolve) => {
  https.get(url, (res) => {
    const file = fs.createWriteStream(path);
    res.pipe(file);
    file.on('finish', () => { file.close(); resolve(); });
  });
});

const getOg = (url) => new Promise((resolve) => {
  https.get(url, { headers: { 'User-Agent': 'Mozilla/5.0' } }, (res) => {
    let data = '';
    res.on('data', chunk => data += chunk);
    res.on('end', () => {
      const match = data.match(/<meta property="og:image" content="([^"]+)"/);
      resolve(match ? match[1].replace(/&amp;/g, '&') : null);
    });
  });
});

(async () => {
  for (let i = 0; i < urls.length; i++) {
    const imgUrl = await getOg(urls[i]);
    if (imgUrl) {
      console.log('Downloading ' + (i+1));
      await download(imgUrl, 'public/images/social/' + (i+1) + '.jpg');
    } else {
      console.log('Failed to get OG image for ' + (i+1));
    }
  }
  console.log('Done');
})();
