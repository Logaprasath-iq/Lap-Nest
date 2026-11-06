const path = require("path");
let sharp;
try {
  sharp = require("sharp");
} catch (e) {
  try {
    sharp = require(path.resolve(__dirname, "../../../../../Desktop/Lapnest/node_modules/sharp"));
  } catch (e2) {
    console.log("Could not load sharp:", e2.message);
  }
}

if (sharp) {
  console.log("Sharp loaded successfully!");
} else {
  console.log("Sharp not loaded");
}
