const fs = require('fs');
const readline = require('readline');

async function findLastUserInput() {
  const fileStream = fs.createReadStream('C:/Users/Lenovo/.gemini/antigravity/brain/d4d0e407-6a82-4b2c-9e74-f8d7d99a3adf/.system_generated/logs/transcript.jsonl');
  const rl = readline.createInterface({ input: fileStream, crlfDelay: Infinity });
  
  let lastUserStep = null;
  for await (const line of rl) {
    if (!line.trim()) continue;
    const obj = JSON.parse(line);
    if (obj.type === 'USER_INPUT') {
      lastUserStep = obj;
    }
  }
  console.log('Last USER_INPUT:');
  console.log(JSON.stringify(lastUserStep, null, 2));
}

findLastUserInput();
