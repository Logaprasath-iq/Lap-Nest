const fs = require('fs');

const html = `
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <link rel="stylesheet" href="assets/css/style.css">
  <script src="https://cdn.tailwindcss.com"></script>
</head>
<body class="bg-[#111e26] p-10 flex gap-6">

  <!-- OPTION A: Proper line inside specs box only -->
  <div class="w-80 rounded-2xl bg-[#172731] border border-[#233D4C] p-5">
    <h4 class="text-white font-bold mb-3">Option A: Inside Specs Box Proper</h4>
    <div class="mb-4 text-xs text-[#9fb3be] bg-[#111e26] p-3 rounded-xl border border-[#233D4C]">
      <div class="flex items-center gap-2 pb-2">
        <span class="truncate font-medium text-white">Intel Core i5-1235U (12th Gen)</span>
      </div>
      <div class="flex items-center justify-between gap-3 pt-2.5 border-t border-[#233D4C]">
        <div class="truncate flex items-center gap-1.5 flex-1 min-w-0">
          <span class="text-[#9fb3be]">RAM:</span>
          <strong class="text-white font-semibold truncate">16GB DDR4</strong>
        </div>
        <span class="w-px h-3.5 bg-[#233D4C] shrink-0"></span>
        <div class="truncate flex items-center gap-1.5 flex-1 min-w-0 justify-end">
          <span class="text-[#9fb3be]">SSD:</span>
          <strong class="text-white font-semibold truncate">512GB NVMe</strong>
        </div>
      </div>
    </div>
    <div class="flex items-baseline gap-2 mb-4">
      <span class="text-2xl font-black text-white">₹54,990</span>
      <span class="text-xs text-[#9fb3be] line-through">₹62,990</span>
    </div>
    <div class="grid grid-cols-2 gap-2.5">
      <button class="px-3 py-2.5 rounded-xl border border-[#233D4C] text-white">View Details</button>
      <button class="px-3 py-2.5 rounded-xl bg-[#FD802E] text-white">Order Now</button>
    </div>
  </div>

  <!-- OPTION B: Inside Specs Box Proper + Footer Separation Line -->
  <div class="w-80 rounded-2xl bg-[#172731] border border-[#233D4C] p-5">
    <h4 class="text-white font-bold mb-3">Option B: Specs Box + Footer Line</h4>
    <div class="mb-4 text-xs text-[#9fb3be] bg-[#111e26] p-3 rounded-xl border border-[#233D4C]">
      <div class="flex items-center gap-2 pb-2">
        <span class="truncate font-medium text-white">Intel Core i5-1235U (12th Gen)</span>
      </div>
      <div class="flex items-center justify-between gap-3 pt-2.5 border-t border-[#233D4C]">
        <div class="truncate flex items-center gap-1.5 flex-1 min-w-0">
          <span class="text-[#9fb3be]">RAM:</span>
          <strong class="text-white font-semibold truncate">16GB DDR4</strong>
        </div>
        <span class="w-px h-3.5 bg-[#233D4C] shrink-0"></span>
        <div class="truncate flex items-center gap-1.5 flex-1 min-w-0 justify-end">
          <span class="text-[#9fb3be]">SSD:</span>
          <strong class="text-white font-semibold truncate">512GB NVMe</strong>
        </div>
      </div>
    </div>
    <div class="flex items-baseline gap-2 mb-4">
      <span class="text-2xl font-black text-white">₹54,990</span>
      <span class="text-xs text-[#9fb3be] line-through">₹62,990</span>
    </div>
    <div class="pt-4 border-t border-[#233D4C] grid grid-cols-2 gap-2.5">
      <button class="px-3 py-2.5 rounded-xl border border-[#233D4C] text-white">View Details</button>
      <button class="px-3 py-2.5 rounded-xl bg-[#FD802E] text-white">Order Now</button>
    </div>
  </div>

</body>
</html>
`;

fs.writeFileSync('scratch/preview_card_lines.html', html, 'utf8');
console.log('Created scratch/preview_card_lines.html');
