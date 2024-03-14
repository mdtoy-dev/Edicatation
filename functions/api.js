import express from "express"
import cors from "cors"
import OpenAI from "openai"
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
          'Create engaging and diverse 10 questions with multiple choice of answers for childrens education. The questions should be suitable for [5-11] and cover various aspects of the subject matter. Please ensure that the questions are clear, concise, and stimulate critical thinking and curiosity in children. The results should be in the following json format [ { "question": "", "correct": "", "incorrect": [""] }',
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


    res.json(json)
  } catch (error) {
    console.error("Error generating questions:", error)
    res.status(500).json({ error: "Failed to generate questions" })
  }
})

export const handler = serverless(app)
