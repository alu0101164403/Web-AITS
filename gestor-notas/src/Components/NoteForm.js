import React, {useState} from "react";

const NoteForm = ({ onAddNote }) => {
	const [noteTitle, setNoteTitle] = useState('');
  const [noteAuthor, setNoteAuthor] = useState('');
  const [noteText, setNoteText] = useState('');

  const handleAddNote = () => {
    if (noteText.trim() !== '') {
      const newNote = {
        id: Date.now(),
        title: noteTitle,
        author: noteAuthor,
        description: noteText,
      };

      onAddNote(newNote);
      setNoteTitle('');
      setNoteAuthor('');
      setNoteText('');
    }
  };

	return (
    <div className="w-1/3 pr-4">
      <input
        className="w-full p-2 mb-2 border rounded"
        type="text"
        placeholder="Título"
        value={noteTitle}
        onChange={(e) => setNoteTitle(e.target.value)}
      />
      <input
        className="w-full p-2 mb-2 border rounded"
        type="text"
        placeholder="Autor"
        value={noteAuthor}
        onChange={(e) => setNoteAuthor(e.target.value)}
      />
      <textarea
        className="w-full p-2 mb-2 border rounded"
        rows="4"
        placeholder="Escribe tu nota aquí..."
        value={noteText}
        onChange={(e) => setNoteText(e.target.value)}
      ></textarea>
      <button
        className="bg-blue-500 text-white px-4 py-2 rounded"
        onClick={handleAddNote}
      >
        Agregar Nota
      </button>
    </div>
  );

};

export default NoteForm;