const fs = require('fs');

const cats = [
  { title: "Gaming Laptops", desc: "GeForce RTX 40-Series power with 165Hz+ high refresh displays for elite gamers.", btn: "Explore Gaming" },
  { title: "Business Laptops", desc: "Mil-spec durability, TPM 2.0 security, and all-day battery life for corporate leaders.", btn: "Explore Business" },
  { title: "Student Laptops", desc: "Lightweight laptops with fast SSDs for coding, campus coursework, and daily study.", btn: "Explore Student" },
  { title: "Professional Workstations", desc: "Color-accurate displays with ECC RAM support for 3D renderers and video editors.", btn: "Explore Creator" },
  { title: "Laptop Accessories", desc: "Original USB-C GaN adapters, mechanical keyboards, precision stands, and sleeves.", btn: "Explore Gear" }
];

console.log('Testing category card content at 1024px...');
cats.forEach(c => {
  console.log(`Cat: ${c.title} -> title len: ${c.title.length}, btn: ${c.btn} (len: ${c.btn.length})`);
});
