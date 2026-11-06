const fs = require('fs');

const twoItems = [
  {
    url: 'https://images.unsplash.com/photo-1550745165-9bc0b252726f?w=800&q=80', // retro tech / hardware
    dest: 'assets/images/blog/blog-nvme.jpg',
    desc: 'Hardware SSD engineering'
  },
  {
    url: 'https://images.unsplash.com/photo-1581092580497-e0d23cbdf1dc?w=800&q=80', // tech inspection lab
    dest: 'assets/images/blog/blog-5.jpg',
    desc: 'Refurbished laptop diagnostic testing'
  }
];

async function downloadTwo() {
  for (const item of twoItems) {
    try {
      const res = await fetch(item.url);
      if (!res.ok) {
        console.error(`Failed ${item.desc} (${res.status})`);
        continue;
      }
      const arrayBuf = await res.arrayBuffer();
      const buf = Buffer.from(arrayBuf);
      fs.writeFileSync(item.dest, buf);
      console.log(`[OK] ${item.dest} (${buf.length} bytes) - ${item.desc}`);
    } catch (err) {
      console.error(`[ERR] ${item.dest}: ${err.message}`);
    }
  }
}

downloadTwo();
