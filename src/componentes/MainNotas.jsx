import React, { useState, useEffect } from 'react';
import { FaTrashAlt, FaEdit, FaSave, FaStar, FaRegStar } from 'react-icons/fa';
import '../assets/scss/_03-Componentes/_MainNotas.scss';

function MainNotas() {
  // Estado para almacenar la lista de notas (cada nota es un objeto con texto, color y favorito)
  const [notes, setNotes] = useState([]);
  // Estado para el texto de la nueva nota a agregar
  const [newNote, setNewNote] = useState('');
  // Estado para el color de la nueva nota a agregar
  const [newColor, setNewColor] = useState('#800000'); // bordó inicial
  // Estado para saber qué nota se está editando (índice)
  const [editingIndex, setEditingIndex] = useState(null);
  // Estado para el texto editado en modo edición
  const [editedNote, setEditedNote] = useState('');
  // Estado para el filtro de búsqueda
  const [searchQuery, setSearchQuery] = useState('');

  // Hook que carga las notas guardadas en localStorage al montar el componente
  useEffect(() => {
    const storedNotes = JSON.parse(localStorage.getItem('notes')) || [];
    setNotes(storedNotes);
  }, []);

  // Función para agregar una nueva nota con texto y color
  const handleAddNote = () => {
    if (newNote.trim()) {
      const updatedNotes = [...notes, { text: newNote, color: newColor, favorite: false }];
      setNotes(updatedNotes);
      localStorage.setItem('notes', JSON.stringify(updatedNotes));
      setNewNote('');        // limpiar input texto
      setNewColor('#800000'); // reset color a bordó
    }
  };

  // Función para activar modo edición en una nota, cargando su texto en estado
  const handleEditNote = (index) => {
    setEditingIndex(index);
    setEditedNote(notes[index].text);
  };

  // Función para guardar edición de nota y salir del modo edición
  const handleSaveEdit = (index) => {
    const updatedNotes = notes.map((note, i) =>
      i === index ? { ...note, text: editedNote } : note
    );
    setNotes(updatedNotes);
    localStorage.setItem('notes', JSON.stringify(updatedNotes));
    setEditingIndex(null);
    setEditedNote('');
  };

  // Función para eliminar una nota por índice
  const handleDeleteNote = (index) => {
    const updatedNotes = notes.filter((_, i) => i !== index);
    setNotes(updatedNotes);
    localStorage.setItem('notes', JSON.stringify(updatedNotes));
  };

  // Función para alternar la marca de favorito en una nota
  const toggleFavorite = (index) => {
    const updatedNotes = notes.map((note, i) =>
      i === index ? { ...note, favorite: !note.favorite } : note
    );
    setNotes(updatedNotes);
    localStorage.setItem('notes', JSON.stringify(updatedNotes));
  };

  // Filtrado y ordenamiento de notas según búsqueda y favorito
  const filteredNotes = notes
    .filter(note => note.text && note.text.toLowerCase().includes(searchQuery.toLowerCase()))
    .sort((a, b) => b.favorite - a.favorite);

  return (
    <div className="mainNotas-container">
      <div className="mainNotas">
        {/* Título principal */}
        <h2>Mis Notas</h2>

        {/* Input para buscar notas */}
        <div className="mainNotas__search">
          <input
            type="text"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            placeholder="Buscar notas..."
            aria-label="Buscar notas"
          />
        </div>

        {/* Inputs para agregar nueva nota y color */}
        <div className="mainNotas__input">
          <input
            type="text"
            value={newNote}
            onChange={(e) => setNewNote(e.target.value)}
            placeholder="Escribe una nota"
            aria-label="Nueva nota"
          />
          <input
            type="color"
            value={newColor}
            onChange={(e) => setNewColor(e.target.value)}
            aria-label="Color de la nota"
          />
          <button onClick={handleAddNote} aria-label="Agregar nota">Agregar Nota</button>
        </div>

        {/* Lista de notas filtradas */}
        <ul className="mainNotas__list" role="list">
          {filteredNotes.map((note, index) => (
            <li
              key={index}
              className={`mainNotas__listItem${note.favorite ? ' favorite' : ''}`}
              style={{ backgroundColor: note.color }}
              role="listitem"
            >
              {/* Texto editable o fijo */}
              <div className="mainNotas__listItem-text">
                {editingIndex === index ? (
                  <input
                    type="text"
                    value={editedNote}
                    onChange={(e) => setEditedNote(e.target.value)}
                    aria-label={`Editar nota ${index + 1}`}
                  />
                ) : (
                  <span>{note.text}</span>
                )}
              </div>

              {/* Botones para editar, eliminar, favorito */}
              <div className="mainNotas__listItem-buttons">
                {editingIndex === index ? (
                  <button onClick={() => handleSaveEdit(index)} aria-label="Guardar edición">
                    <FaSave />
                  </button>
                ) : (
                  <>
                    <button onClick={() => handleEditNote(index)} aria-label="Editar nota">
                      <FaEdit />
                    </button>
                    <button onClick={() => handleDeleteNote(index)} aria-label="Eliminar nota">
                      <FaTrashAlt />
                    </button>
                    <button onClick={() => toggleFavorite(index)} aria-label={note.favorite ? 'Quitar favorito' : 'Marcar favorito'}>
                      {note.favorite ? <FaStar /> : <FaRegStar />}
                    </button>
                  </>
                )}
              </div>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default MainNotas;
