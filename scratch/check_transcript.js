const fs = require("fs");
const lines = fs.readFileSync("C:/Users/Lenovo/.gemini/antigravity/brain/d4d0e407-6a82-4b2c-9e74-f8d7d99a3adf/.system_generated/logs/transcript.jsonl", "utf8").trim().split("\n");
for (let i = 0; i < lines.length; i++) {
  try {
    const data = JSON.parse(lines[i]);
    if (data.step_index >= 7596 && data.step_index <= 7630) {
      console.log(`Step ${data.step_index} (${data.source}/${data.type}):`, data.tool_calls ? JSON.stringify(data.tool_calls) : (data.content || "").slice(0, 150));
    }
  } catch (e) {}
}
