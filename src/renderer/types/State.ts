
export interface Cartoon {
  id: number
  notes: string,
  image: string,
  alt: string
}

interface Chapter {
  title: string,
  content: string
}

interface EditorState {
  text: Chapter[]
}