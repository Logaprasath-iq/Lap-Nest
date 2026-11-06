const fs = require('fs');
const readline = require('readline');

async function searchTranscript() {
  const fileStream = fs.createReadStream('C:/Users/Lenovo/.gemini/antigravity/brain/d4d0e407-6a82-4b2c-9e74-f8d7d99a3adf/.system_generated/logs/transcript.jsonl');
  const rl = readline.createInterface({ input: fileStream });

  for await (const line of rl) {
    if (line.includes('newsletter-cta-section') || line.includes('newsletter-dark-box')) {
      const obj = JSON.parse(line);
      console.log(`Step ${obj.step_index} (${obj.source}, ${obj.type}):`);
      if (obj.content) console.log(obj.content.slice(0, 300));
    }
  }
}

searchTranscript();
