/*// Make sure to include these imports:
const { GoogleGenerativeAI } = require("@google/generative-ai");
const genAI = new GoogleGenerativeAI(process.env.API_KEY);

  async function run() {
    const model = genAI.getGenerativeModel({
    model: "gemini-1.5-flash",
    generationConfig: {
      candidateCount: 1,
      stopSequences: ["x"],
      maxOutputTokens: 20,
      temperature: 1.0,
    },
  });
  const prompt = "Write a story about a magic backpack.";

const result = await model.generateContent(prompt);
console.log(result.response.text());

  }

run();*/