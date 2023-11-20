import React, { useState, useEffect } from 'react';
import NoteForm from './NoteForm';
import Note from './Note';
import Modal from './Modal';

const NoteList = () => {
  const listnotes = [
    { id: 1, title: 'Primera nota', author: '3r4te5ryui', description: 'dsfdfgsfgfdsgdfdggfdg' },
    { id: 2, title: 'Segunda nota', author: '3r4te5ryui', description: 'dsfdfgsfgfdsgdfdggfdg' },
    { id: 3, title: 'Tercera nota', author: '3r4te5ryui', description: 'dsfdfgsfgfdsgdfdggfdg' },
    { id: 4, title: 'Primera nota', author: '3r4te5ryui', description: 'dsfdfgsfgfdsgdfdggfdgdsfdfgsfgfdsgdfdggfdgdsfdfgsfgfdsgdfdggfdgdsfdfgsfgfdsgdfdggfdg' },
    { id: 5, title: 'Segunda nota', author: '3r4te5ryui', description: 'dsfdfgsfgfdsgdfdggfdg' },
    { id: 6, title: 'Tercera nota', author: '3r4te5ryui', description: 'dsfdfgsfgfdsgdfdggfdg' },
    { id: 7, title: 'Primera nota', author: '3r4te5ryui', description: 'dsfdfgsfgfdsgdfdggfdg' },
  ]

  const [notes, setNotes] = useState(listnotes);
  const [selectedNote, setSelectedNote] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const addNote = (note) => {
    const newNote = {
      id: notes.length + 1,
      title: note.title,
      author: note.author,
      description: note.description,
    };

    setNotes([...notes, newNote]);
  };

  const openModal = (note) => {
    setSelectedNote(note);
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setSelectedNote(null);
    setIsModalOpen(false);
  };

  const deleteNote = () => {
    const updatedNotes = notes.filter((note) => note.id !== selectedNote.id);
    setNotes(updatedNotes);
    closeModal();
  };

  useEffect(() => {
    setNotes(listnotes);
  }, []);
  
  return (
    <div className="flex">
      <NoteForm onAddNote={addNote} />
      <div className="flex-1 flex flex-wrap">
        {notes.map((note) => (
          <Note key={note.id} note={note} onClick={() => openModal(note)} />
        ))}
      </div>
      <Modal isOpen={isModalOpen} onClose={closeModal} note={selectedNote} onDelete={deleteNote} />
    </div>
  );
};

export default NoteList;