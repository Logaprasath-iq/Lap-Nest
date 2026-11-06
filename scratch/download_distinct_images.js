const fs = require('fs');
const https = require('https');

const imageList = [
  {
    url: 'https://images.unsplash.com/photo-1581092160607-ee22621dd758?w=800&q=80',
    dest: 'assets/images/general/cleanroom.jpg',
    desc: 'ISO Cleanroom diagnostics lab'
  },
  {
    url: 'https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?w=800&q=80',
    dest: 'assets/images/general/delivery.jpg',
    desc: 'Express courier delivery packaging'
  },
  {
    url: 'https://images.unsplash.com/photo-1597733336794-12d05021d510?w=800&q=80',
    dest: 'assets/images/services/repair-hero.jpg',
    desc: 'Repair lab hero workstation'
  },
  {
    url: 'https://images.unsplash.com/photo-1591488320449-011701bb6704?w=800&q=80',
    dest: 'assets/images/blog/blog-2.jpg',
    desc: 'Thermal paste cooling servicing'
  },
  {
    url: 'https://images.unsplash.com/photo-1597852074816-d933c4d2b988?w=800&q=80',
    dest: 'assets/images/blog/blog-nvme.jpg',
    desc: 'NVMe SSD high speed storage'
  },
  {
    url: 'https://images.unsplash.com/photo-1523240795612-9a054b0db644?w=800&q=80',
    dest: 'assets/images/general/deals-student.jpg',
    desc: 'Student campus deal'
  },
  {
    url: 'https://images.unsplash.com/photo-1588702547919-26089e690ecc?w=800&q=80',
    dest: 'assets/images/general/deals-refurbished.jpg',
    desc: 'Refurbished ThinkPad deal'
  },
  {
    url: 'https://images.unsplash.com/photo-1497215728101-856f4ea42174?w=800&q=80',
    dest: 'assets/images/general/deals-rental.jpg',
    desc: 'Corporate rental fleet'
  },
  {
    url: 'https://images.unsplash.com/photo-1542751371-adc38448a05e?w=800&q=80',
    dest: 'assets/images/general/deals-gaming.jpg',
    desc: 'Gaming laptop flash deal'
  },
  {
    url: 'https://images.unsplash.com/photo-1517420704952-d9f39e95b43e?w=800&q=80',
    dest: 'assets/images/blog/blog-6.jpg',
    desc: 'Liquid damage ultrasonic cleaning'
  },
  {
    url: 'https://images.unsplash.com/photo-1581092335397-9583fe92d232?w=800&q=80',
    dest: 'assets/images/blog/blog-5.jpg',
    desc: 'Refurbished 45-point inspection'
  },
  {
    url: 'https://images.unsplash.com/photo-1517336714731-489689fd1ca8?w=800&q=80',
    dest: 'assets/images/blog/blog-4.jpg',
    desc: 'MacBook M3 studio review'
  },
  {
    url: 'https://images.unsplash.com/photo-1527443224154-c4a3942d3acf?w=800&q=80',
    dest: 'assets/images/general/category-pro.jpg',
    desc: 'Professional CAD workstation'
  },
  {
    url: 'https://images.unsplash.com/photo-1527864550417-7fd91fc51a46?w=800&q=80',
    dest: 'assets/images/general/category-accessories.jpg',
    desc: 'Curated tech desk gear accessories'
  },
  {
    url: 'https://images.unsplash.com/photo-1531482615713-2afd69097998?w=800&q=80',
    dest: 'assets/images/general/workspace.jpg',
    desc: 'Modern engineering collaboration workspace'
  }
];

async function downloadAll() {
  for (const item of imageList) {
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
  console.log('Finished downloading distinct image assets.');
}

downloadAll();
