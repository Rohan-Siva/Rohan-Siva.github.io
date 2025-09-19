const fs = require('fs');
const https = require('https');
const path = require('path');

const logos = {
  'cisco': 'https://upload.wikimedia.org/wikipedia/commons/thumb/0/08/Cisco_logo_blue_2016.svg/1200px-Cisco_logo_blue_2016.svg.png',
  'pku': 'https://upload.wikimedia.org/wikipedia/en/thumb/6/6b/Peking_University_seal.svg/1200px-Peking_University_seal.svg.png',
  'utexas': 'https://upload.wikimedia.org/wikipedia/commons/thumb/8/8d/University_of_Texas_at_Austin_logo.svg/1200px-University_of_Texas_at_Austin_logo.svg.png',
  'mercor': 'https://mercor-public-resources.s3.us-east-2.amazonaws.com/mercor_black.png',
  'canyon': 'https://canyonsystems.com/wp-content/uploads/2021/03/cropped-canyon-logo-1-32x32.png'
};

const downloadDir = path.join(__dirname, 'assets', 'images', 'company_logos');

// Create directory if it doesn't exist
if (!fs.existsSync(downloadDir)) {
  fs.mkdirSync(downloadDir, { recursive: true });
}

// Download each logo
Object.entries(logos).forEach(([name, url]) => {
  const filePath = path.join(downloadDir, `${name}.png`);
  const file = fs.createWriteStream(filePath);
  
  https.get(url, (response) => {
    response.pipe(file);
    console.log(`Downloaded ${name} logo`);
  }).on('error', (err) => {
    console.error(`Error downloading ${name} logo:`, err.message);
  });
});

console.log('Logo download complete!');
