import OpenAI from 'openai'

const openai = new OpenAI({
  apiKey: process.env.OPEN_AI_KEY,
})

export const generateQuiz = async (req, res) => {
  const { topic } = req.body
  const numQuestions = 5

  if (!topic || !numQuestions) {
    return res
      .status(400)
      .json({ error: 'Topic and number of questions are required' })
  }

  const messages = [
    {
      role: 'system',
      content: `You are a quiz generator. Given a topic and a number of questions, generate an array of that many multiple-choice questions. Each question should be an object with the following structure:
{
  "question": "Question text here",
  "options": ["Option1", "Option2", "Option3", "Option4"],
  "correctOption": 1
}
Format the entire output as a JSON array of these objects.`,
    },
    {
      role: 'user',
      content: `Generate ${numQuestions} questions about ${topic}.`,
    },
  ]

  try {
    const completion = await openai.chat.completions.create({
      model: 'gpt-3.5-turbo',
      messages: messages,
      temperature: 0.7,
    })

    const aiResponse = completion.choices[0].message.content

    let quizData
    try {
      quizData = JSON.parse(aiResponse)
    } catch (err) {
      return res.status(500).json({ error: 'Failed to parse AI response' })
    }

    res.json(quizData)
  } catch (error) {
    console.error('Error generating quiz:', error)
    res.status(500).json({ error: 'Failed to generate quiz' })
  }
}
