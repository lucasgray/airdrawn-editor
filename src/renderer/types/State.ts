
export interface Cartoon {
  id: string,
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
