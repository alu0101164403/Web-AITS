import React from 'react';

const Note = ({ note, onClick }) => {
  const truncatedDescription = note.description.slice(0, 50);

  return (
    <div className="flex flex-col p-2">
      <div className="flex-grow bg-white rounded overflow-hidden" onClick={onClick}>
        <p className="box-border h-48 w-48 p-4 border-4 border-gray-400 bg-gray-200 rounded text-center break-words">{truncatedDescription}</p>
      </div>
      <p className="mt-2 text-center font-bold">{note.title}</p>
    </div>
  );
};

export default Note;