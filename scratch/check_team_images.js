const fs = require('fs');

if (fs.existsSync('assets/images/team')) {
  console.log('Team images:', fs.readdirSync('assets/images/team'));
} else {
  console.log('Team folder does not exist');
}
