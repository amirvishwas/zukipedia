const https = require('https');
const http = require('http');
const fs = require('fs');
const path = require('path');

const outputDir = path.join(__dirname, '..', 'public', 'images', 'fish');

// Direct Wikimedia Commons image URLs for each fish species
const images = {
  'clownfish': 'https://upload.wikimedia.org/wikipedia/commons/thumb/a/ad/Amphiprion_ocellaris_%28Clown_anemonefish%29_by_Nick_Hobgood.jpg/800px-Amphiprion_ocellaris_%28Clown_anemonefish%29_by_Nick_Hobgood.jpg',
  'great-white-shark': 'https://upload.wikimedia.org/wikipedia/commons/thumb/5/56/White_shark.jpg/800px-White_shark.jpg',
  'betta-fish': 'https://upload.wikimedia.org/wikipedia/commons/thumb/1/10/HM_Orange_M_Sarawut.jpg/800px-HM_Orange_M_Sarawut.jpg',
  'blue-tang': 'https://upload.wikimedia.org/wikipedia/commons/thumb/4/49/Paletten-Doktorfisch_%28Paracanthurus_hepatus%29_02.jpg/800px-Paletten-Doktorfisch_%28Paracanthurus_hepatus%29_02.jpg',
  'anglerfish': 'https://upload.wikimedia.org/wikipedia/commons/thumb/8/84/Lophius_piscatorius_MHNT.jpg/800px-Lophius_piscatorius_MHNT.jpg',
  'goldfish': 'https://upload.wikimedia.org/wikipedia/commons/thumb/6/65/Gold_fish1.jpg/800px-Gold_fish1.jpg',
  'manta-ray': 'https://upload.wikimedia.org/wikipedia/commons/thumb/3/3f/Manta_birostris-Thailand4.jpg/800px-Manta_birostris-Thailand4.jpg',
  'pufferfish': 'https://upload.wikimedia.org/wikipedia/commons/thumb/e/ee/Arothron_hispidus_1.jpg/800px-Arothron_hispidus_1.jpg',
  'seahorse': 'https://upload.wikimedia.org/wikipedia/commons/thumb/7/71/Hippocampus_hippocampus_%28on_Ascophyllum_nodosum%29.jpg/600px-Hippocampus_hippocampus_%28on_Ascophyllum_nodosum%29.jpg',
  'whale-shark': 'https://upload.wikimedia.org/wikipedia/commons/thumb/f/f1/Whale_shark_Georgia_aquarium.jpg/800px-Whale_shark_Georgia_aquarium.jpg',
};

function downloadFile(url, outputPath) {
  return new Promise((resolve, reject) => {
    const ext = path.extname(new URL(url).pathname).split('?')[0] || '.jpg';
    const finalPath = outputPath + ext;
    
    const file = fs.createWriteStream(finalPath);
    
    const request = https.get(url, {
      headers: {
        'User-Agent': 'ZukipediaBot/1.0 (https://zukipedia.example.com; contact@example.com) node.js'
      }
    }, (response) => {
      if (response.statusCode === 301 || response.statusCode === 302) {
        file.close();
        fs.unlinkSync(finalPath);
        downloadFile(response.headers.location, outputPath).then(resolve).catch(reject);
        return;
      }
      
      if (response.statusCode !== 200) {
        file.close();
        fs.unlinkSync(finalPath);
        reject(new Error(`Failed to download ${url}: ${response.statusCode}`));
        return;
      }
      
      response.pipe(file);
      file.on('finish', () => {
        file.close();
        console.log(`Downloaded: ${path.basename(finalPath)}`);
        resolve(finalPath);
      });
    });
    
    request.on('error', (err) => {
      file.close();
      if (fs.existsSync(finalPath)) fs.unlinkSync(finalPath);
      reject(err);
    });
  });
}

async function main() {
  if (!fs.existsSync(outputDir)) {
    fs.mkdirSync(outputDir, { recursive: true });
  }
  
  for (const [name, url] of Object.entries(images)) {
    const outputPath = path.join(outputDir, name);
    try {
      await downloadFile(url, outputPath);
    } catch (err) {
      console.error(`Error downloading ${name}: ${err.message}`);
    }
  }
  console.log('All downloads complete!');
}

main();
