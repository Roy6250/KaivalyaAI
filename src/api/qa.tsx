export type QAResponse = {
  answer: string
  followupQuestions: string[]
}

export type QuestionRequest = {
  question: string
}
export async function submitQuestion(question: string) {
  const response: any = await fetch(
    `http://localhost:8000/getAnswers?question=${question}`,
    {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },

      body: JSON.stringify({ question })
    }
  )
  if (!response.ok) {
    throw new Error('Network response was not ok')
  }
  //   console.log(await response.json())
  const answer = await response.json()
  console.log(answer)
  return answer
  //   return {
  //     answer:resp
  //   }
}
