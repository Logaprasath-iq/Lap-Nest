import fs from 'fs';
import path from 'path';

const assets = [
  // Hero
  {
    url: 'https://images.unsplash.com/photo-1593642632823-8f785ba67e45?auto=format&fit=crop&w=1600&q=80',
    dest: 'assets/images/hero/hero-poster.jpg'
  },
  {
    url: 'https://images.unsplash.com/photo-1517336714731-489689fd1ca8?auto=format&fit=crop&w=1200&q=80',
    dest: 'assets/images/hero/hero-laptop.png'
  },
  {
    url: 'https://images.unsplash.com/photo-1525547719571-a2d4ac8945e2?auto=format&fit=crop&w=1400&q=80',
    dest: 'assets/images/hero/hero-2-split.jpg'
  },

  // Products
  {
    url: 'https://images.unsplash.com/photo-1588872657578-7efd1f1555ed?auto=format&fit=crop&w=800&q=80',
    dest: 'assets/images/products/dell-inspiron.jpg'
  },
  {
    url: 'https://images.unsplash.com/photo-1544716278-ca5e3f4abd8c?auto=format&fit=crop&w=800&q=80',
    dest: 'assets/images/products/hp-pavilion.jpg'
  },
  {
    url: 'https://images.unsplash.com/photo-1541807084-5c52b6b3adef?auto=format&fit=crop&w=800&q=80',
    dest: 'assets/images/products/lenovo-thinkpad.jpg'
  },
  {
    url: 'https://images.unsplash.com/photo-1603302576837-37561b2e2302?auto=format&fit=crop&w=800&q=80',
    dest: 'assets/images/products/asus-rog.jpg'
  },
  {
    url: 'https://images.unsplash.com/photo-1593642702821-c8da6771f0c6?auto=format&fit=crop&w=800&q=80',
    dest: 'assets/images/products/acer-nitro.jpg'
  },
  {
    url: 'https://images.unsplash.com/photo-1517336714731-489689fd1ca8?auto=format&fit=crop&w=800&q=80',
    dest: 'assets/images/products/apple-macbook.jpg'
  },
  {
    url: 'https://images.unsplash.com/photo-1611186871348-b1ce696e52c9?auto=format&fit=crop&w=800&q=80',
    dest: 'assets/images/products/macbook-air.jpg'
  },
  {
    url: 'https://images.unsplash.com/photo-1527864550417-7fd91fc51a46?auto=format&fit=crop&w=800&q=80',
    dest: 'assets/images/products/accessory-mouse.jpg'
  },
  {
    url: 'https://images.unsplash.com/photo-1587829741301-dc798b83add3?auto=format&fit=crop&w=800&q=80',
    dest: 'assets/images/products/accessory-keyboard.jpg'
  },
  {
    url: 'https://images.unsplash.com/photo-1629429408209-1ab9129e6b31?auto=format&fit=crop&w=800&q=80',
    dest: 'assets/images/products/accessory-stand.jpg'
  },

  // Services
  {
    url: 'https://images.unsplash.com/photo-1588508065123-287b28e013da?auto=format&fit=crop&w=800&q=80',
    dest: 'assets/images/services/screen-repair.jpg'
  },
  {
    url: 'https://images.unsplash.com/photo-1597872200969-2b65d56bd16b?auto=format&fit=crop&w=800&q=80',
    dest: 'assets/images/services/battery-replace.jpg'
  },
  {
    url: 'https://images.unsplash.com/photo-1562976540-1502c2145186?auto=format&fit=crop&w=800&q=80',
    dest: 'assets/images/services/ram-upgrade.jpg'
  },
  {
    url: 'https://images.unsplash.com/photo-1544652478-6653e09f18a2?auto=format&fit=crop&w=800&q=80',
    dest: 'assets/images/services/ssd-upgrade.jpg'
  },
  {
    url: 'https://images.unsplash.com/photo-1587829741301-dc798b83add3?auto=format&fit=crop&w=800&q=80',
    dest: 'assets/images/services/keyboard-repair.jpg'
  },
  {
    url: 'https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&w=800&q=80',
    dest: 'assets/images/services/motherboard-repair.jpg'
  },

  // Categories & General
  {
    url: 'https://images.unsplash.com/photo-1542751371-adc38448a05e?auto=format&fit=crop&w=800&q=80',
    dest: 'assets/images/general/category-gaming.jpg'
  },
  {
    url: 'https://images.unsplash.com/photo-1497215728101-856f4ea42174?auto=format&fit=crop&w=800&q=80',
    dest: 'assets/images/general/category-business.jpg'
  },
  {
    url: 'https://images.unsplash.com/photo-1523240795612-9a054b0db644?auto=format&fit=crop&w=800&q=80',
    dest: 'assets/images/general/category-student.jpg'
  },
  {
    url: 'https://images.unsplash.com/photo-1531403009284-440f080d1e12?auto=format&fit=crop&w=800&q=80',
    dest: 'assets/images/general/category-pro.jpg'
  },
  {
    url: 'https://images.unsplash.com/photo-1544244015-0df4b3ffc6b0?auto=format&fit=crop&w=800&q=80',
    dest: 'assets/images/general/category-accessories.jpg'
  },
  {
    url: 'https://images.unsplash.com/photo-1519389950473-47ba0277781c?auto=format&fit=crop&w=800&q=80',
    dest: 'assets/images/general/about-story.jpg'
  },
  {
    url: 'https://images.unsplash.com/photo-1556761175-5973dc0f32e7?auto=format&fit=crop&w=800&q=80',
    dest: 'assets/images/general/about-mission.jpg'
  },
  {
    url: 'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&w=800&q=80',
    dest: 'assets/images/general/chennai-store.jpg'
  },

  // Team
  {
    url: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=600&q=80',
    dest: 'assets/images/team/team-1.jpg'
  },
  {
    url: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=600&q=80',
    dest: 'assets/images/team/team-2.jpg'
  },
  {
    url: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=600&q=80',
    dest: 'assets/images/team/team-3.jpg'
  },
  {
    url: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=600&q=80',
    dest: 'assets/images/team/team-4.jpg'
  },

  // Blog
  {
    url: 'https://images.unsplash.com/photo-1603302576837-37561b2e2302?auto=format&fit=crop&w=800&q=80',
    dest: 'assets/images/blog/blog-1.jpg'
  },
  {
    url: 'https://images.unsplash.com/photo-1562976540-1502c2145186?auto=format&fit=crop&w=800&q=80',
    dest: 'assets/images/blog/blog-2.jpg'
  },
  {
    url: 'https://images.unsplash.com/photo-1588872657578-7efd1f1555ed?auto=format&fit=crop&w=800&q=80',
    dest: 'assets/images/blog/blog-3.jpg'
  },
  {
    url: 'https://images.unsplash.com/photo-1517336714731-489689fd1ca8?auto=format&fit=crop&w=800&q=80',
    dest: 'assets/images/blog/blog-4.jpg'
  },
  {
    url: 'https://images.unsplash.com/photo-1544716278-ca5e3f4abd8c?auto=format&fit=crop&w=800&q=80',
    dest: 'assets/images/blog/blog-5.jpg'
  },
  {
    url: 'https://images.unsplash.com/photo-1597872200969-2b65d56bd16b?auto=format&fit=crop&w=800&q=80',
    dest: 'assets/images/blog/blog-6.jpg'
  }
];

async function downloadAll() {
  console.log(`Starting download of ${assets.length} images...`);
  for (const item of assets) {
    try {
      const dir = path.dirname(item.dest);
      if (!fs.existsSync(dir)) {
        fs.mkdirSync(dir, { recursive: true });
      }
      const res = await fetch(item.url, { headers: { 'User-Agent': 'Mozilla/5.0' } });
      if (!res.ok) {
        console.error(`Failed ${item.url}: status ${res.status}`);
        continue;
      }
      const buffer = Buffer.from(await res.arrayBuffer());
      fs.writeFileSync(item.dest, buffer);
      console.log(`Saved: ${item.dest} (${(buffer.length / 1024).toFixed(1)} KB)`);
    } catch (err) {
      console.error(`Error downloading ${item.dest}:`, err.message);
    }
  }
  console.log('All image downloads completed!');
}

downloadAll();
