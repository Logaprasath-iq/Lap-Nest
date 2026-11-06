const fs = require('fs');
const readline = require('readline');

async function checkStepsAfter3013() {
  const fileStream = fs.createReadStream('C:/Users/Lenovo/.gemini/antigravity/brain/d4d0e407-6a82-4b2c-9e74-f8d7d99a3adf/.system_generated/logs/transcript.jsonl');
  const rl = readline.createInterface({ input: fileStream, crlfDelay: Infinity });
  
  for await (const line of rl) {
    if (!line.trim()) continue;
    const obj = JSON.parse(line);
    if (obj.step_index >= 3055) {
      console.log(`Step ${obj.step_index} (${obj.source}, ${obj.type}): ${obj.content ? obj.content.slice(0, 100) : ''}`);
      if (obj.media) console.log('  Media:', obj.media);
    }
  }
}

checkStepsAfter3013();
