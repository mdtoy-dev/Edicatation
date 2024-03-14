import express from "express";
import cors from "cors";
import OpenAI from "openai";
import fs from "fs";
import path from "path";

const app = express();
const PORT = 3000;

app.use(
  cors({
    origin: "http://localhost:3000",
  })
);

app.get("/api/questions", async (req, res) => {
  // Call OpenAI
  // API Key
  const OPENAI_API_KEY = "API_KEY";
  const openai = new OpenAI({ apiKey: OPENAI_API_KEY });
  // AI Model
  const aiModel = "gpt-3.5-turbo-0125";
  // Messages Array
  const messages = [
    {
      role: "system",
      content:
        'You are a quiz master, generate 10 random questions designed for 7 year olds with 5 multiple choice answers. The results should be in the following json format [ { "question": "", "correct": "", "incorrect": [""] }',
    },
  ];
  // Return questions json
  const completion = await openai.chat.completions.create({
    model: aiModel,
    response_format: { type: "json_object" },
    messages,
  });
  const aiResponse = completion.choices[0].message.content;

  const json = JSON.parse(aiResponse);

  // Use the absolute file path
  const filePath =
    "/Users/rhenquadros/Development/bootcamp/Project-2/src/data/random.json";

  // Save the JSON data to random.json
  fs.writeFile(filePath, JSON.stringify(json), (err) => {
    if (err) {
      console.error("Error saving JSON to file:", err);
    } else {
      console.log(`JSON saved to ${filePath}`);
    }
  });

  res.json(json);
});

app.listen(PORT, () => {
  console.log("server running");
});
