export interface Note {
  id: string;
  title: string | null;
  text: string | null;
  created_at: number | null | string;
  updated_at: number | null | string;
}

const notes: Note[] = [
  {
    id: "1",
    title: null,
    text: `Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.`,
    created_at: 1616129198289,
    updated_at: 1616129247663,
  },
  {
    id: "2",
    title: "Second but older note",
    text: `Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.`,
    created_at: 1615791600000,
    updated_at: 1616129198289,
  },
  {
    id: "3",
    title: "Old",
    text: null,
    created_at: 1615791600000,
    updated_at: null,
  },
];

export const getNotes = () => notes;

export const getNote = (id: string) => notes.find((note) => note.id === id);
