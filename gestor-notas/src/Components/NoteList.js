import React, { useState, useEffect } from 'react';
import NoteForm from './NoteForm';
import Note from './Note';
import Modal from './Modal';
import api from '../http-commons'; 

const NoteList = () => {
  const [notes, setNotes] = useState([]);
  const [selectedNote, setSelectedNote] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const fetchNotes = async () => {
    try {
      const response = await api.get('/notes');
      setNotes(response.data); 
    } catch (error) {
      console.error('Error al obtener las notas:', error);
    }
  };

  const addNote = async (newNote) => {
    try {
      await api.post('/notes', newNote);
      setNotes([...notes, newNote]);
    } catch (error) {
      console.error('Error al agregar la nota:', error);
    }
  };

  const openModal = (note) => {
    setSelectedNote(note);
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setSelectedNote(null);
    setIsModalOpen(false);
  };

  const deleteNote = async () => {
    try {
      console.log(selectedNote)
      await api.delete(`/notes/${selectedNote._id}`);
      const updatedNotes = notes.filter((note) => note._id !== selectedNote._id);
      setNotes(updatedNotes);
      closeModal();
    } catch (error) {
      console.error('Error al eliminar la nota:', error);
    }
  };

  useEffect(() => {
    fetchNotes();
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