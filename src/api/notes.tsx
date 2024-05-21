export type Notes = {
  paperUrl: string
  name: string
  pagesToDelete?: string
}
export async function takeNotes(FileUpload: any) {
  const API_URL = 'http://localhost:8000/transcribes'
  const data = await fetch(API_URL, {
    method: 'POST',

    body: FileUpload
  }).then((res) => {
    if (res.ok) {
      return res.json()
    }
    return null
  })

  const answer = await data
  return answer
}
