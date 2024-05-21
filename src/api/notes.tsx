export type Notes = {
  paperUrl: string
  name: string
  pagesToDelete?: string
}
export async function takeNotes(FileUpload: any) {
  const API_URL = 'http://localhost:8000/transcribes'
  const data = await fetch(API_URL, {
    method: 'POST',
    // headers: {
    //   'Content-Type': 'application/json'
    // },
    body: FileUpload
  }).then((res) => {
    if (res.ok) {
      return res.json()
    }
    return null
  })
  // if (data) {
  //   return res.status(200).json(data)
  // }
  // return res.status(400)
  const answer = await data
  //   console.log(answer)
  return answer
}
