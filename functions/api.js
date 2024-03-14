import express from "express"
import cors from "cors"
import OpenAI from "openai"
import fs from "fs"
import path from "path"
import serverless from "serverless-http"

const app = express()

app.use(cors()) // Enable CORS middleware

app.get("/api/questions", async (req, res) => {
  try {
    // Call OpenAI
    const OPENAI_API_KEY = "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"
    const openai = new OpenAI({ apiKey: OPENAI_API_KEY })

    // AI Model
    const aiModel = "gpt-3.5-turbo-0125"

    // Messages Array
    const messages = [
      {
        role: "system",
        content:
          'You are a quiz master, generate 10 random questions designed for 7 year olds with 5 multiple choice answers. The results should be in the following json format [ { "question": "", "correct": "", "incorrect": [""] }',
      },
    ]

    // Return questions json
    const completion = await openai.chat.completions.create({
      model: aiModel,
      response_format: { type: "json_object" },
      messages,
    })
    const aiResponse = completion.choices[0].message.content
    const json = JSON.parse(aiResponse)

    // Save the JSON data to random.json
    const filePath = path.join(__dirname, "../data/random.json")
    
    fs.writeFile(filePath, JSON.stringify(json), (err) => {
      if (err) {
        console.error("Error saving JSON to file:", err)
      } else {
        console.log(`JSON saved to ${filePath}`)
      }
    })

    res.json(json)
  } catch (error) {
    console.error("Error generating questions:", error)
    res.status(500).json({ error: "Failed to generate questions" })
  }
})

export const handler = serverless(app)
