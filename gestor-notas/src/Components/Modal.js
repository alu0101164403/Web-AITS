import React from 'react';

const Modal = ({ isOpen, onClose, note, onDelete }) => {
  if (!isOpen) {
    return null;
  }

  return (
    <div className="fixed top-0 left-0 w-full h-full flex items-center justify-center bg-gray-800 bg-opacity-75">
      <div className="bg-white p-4 rounded">
        <h2 className="text-xl font-bold mb-2">{note.title}</h2>
        <p>{note.author}</p>
        <p>{note.description}</p>
        <button className="bg-red-500 text-white px-4 py-2 mt-2 rounded" onClick={onDelete}>
          Eliminar Nota
        </button>
        <button className="bg-gray-500 text-white px-4 py-2 ml-2 mt-2 rounded" onClick={onClose}>
          Cerrar
        </button>
      </div>
    </div>
  );
};

export default Modal;