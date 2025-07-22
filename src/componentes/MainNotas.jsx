import React, { useState, useEffect } from 'react';
import { FaTrashAlt, FaEdit, FaSave, FaStar, FaRegStar, FaPlus } from 'react-icons/fa';
import '../assets/scss/_03-Componentes/_MainNotas.scss';

// Función para determinar el color del texto basado en el fondo
const getTextColor = (bgColor) => {
  if (!bgColor) return '#333';
  
  // Convertir color HEX a RGB
  const hexToRgb = (hex) => {
    const r = parseInt(hex.substr(1, 2), 16);
    const g = parseInt(hex.substr(3, 2), 16);
    const b = parseInt(hex.substr(5, 2), 16);
    return [r, g, b];
  };
  
  const [r, g, b] = hexToRgb(bgColor);
  // Calcular luminosidad (fórmula de contraste WCAG)
  const luminance = (0.299 * r + 0.587 * g + 0.114 * b) / 255;
  return luminance > 0.5 ? '#333' : '#fff';
};

function MainNotas() {
  // ------------------------------------------------------------
  // ESTADOS PRINCIPALES
  // ------------------------------------------------------------
  const [notes, setNotes] = useState([]);
  const [currentNote, setCurrentNote] = useState({
    text: '',
    color: '#800000',
    favorite: false,
    id: null
  });
  const [searchQuery, setSearchQuery] = useState('');
  const [isEditing, setIsEditing] = useState(false);

  // ------------------------------------------------------------
  // EFECTOS
  // ------------------------------------------------------------
  useEffect(() => {
    const storedNotes = JSON.parse(localStorage.getItem('notes')) || [];
    setNotes(storedNotes);
  }, []);

  useEffect(() => {
    if (notes.length > 0) {
      localStorage.setItem('notes', JSON.stringify(notes));
    }
  }, [notes]);

  // ------------------------------------------------------------
  // FUNCIONES DE MANEJO
  // ------------------------------------------------------------
  const handleAddNote = () => {
    if (!currentNote.text.trim()) return;
    
    if (isEditing) {
      const updatedNotes = notes.map(note => 
        note.id === currentNote.id ? currentNote : note
      );
      setNotes(updatedNotes);
    } else {
      const newNote = {
        ...currentNote,
        id: Date.now()
      };
      setNotes([...notes, newNote]);
    }
    
    setCurrentNote({
      text: '',
      color: '#800000',
      favorite: false,
      id: null
    });
    setIsEditing(false);
  };

  const handleEditNote = (note) => {
    setCurrentNote(note);
    setIsEditing(true);
  };

  const handleDeleteNote = (id) => {
    const updatedNotes = notes.filter(note => note.id !== id);
    setNotes(updatedNotes);
    
    if (isEditing && currentNote.id === id) {
      setCurrentNote({
        text: '',
        color: '#800000',
        favorite: false,
        id: null
      });
      setIsEditing(false);
    }
  };

  const toggleFavorite = (id) => {
    const updatedNotes = notes.map(note => 
      note.id === id ? { ...note, favorite: !note.favorite } : note
    );
    setNotes(updatedNotes);
    
    if (isEditing && currentNote.id === id) {
      setCurrentNote(prev => ({
        ...prev,
        favorite: !prev.favorite
      }));
    }
  };

  // ------------------------------------------------------------
  // FILTRADO Y RENDERIZADO
  // ------------------------------------------------------------
  const filteredNotes = notes
    .filter(note => 
      note.text && note.text.toLowerCase().includes(searchQuery.toLowerCase())
    )
    .sort((a, b) => b.favorite - a.favorite);

  return (
    <div className="mainNotas-combined-container">
      {/* Columna izquierda - Listado de notas */}
      <div className="mainNotas-combined__listado">
        <h2>Mis Notas</h2>
        
        <div className="mainNotas-combined__search">
          <input
            type="text"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            placeholder="Buscar notas..."
          />
        </div>
        
        <ul className="mainNotas-combined__notes-list">
          {filteredNotes.map(note => (
            <li 
              key={note.id}
              className={`mainNotas-combined__note-item ${note.favorite ? 'favorite' : ''}`}
              style={{ 
                backgroundColor: note.color,
                color: getTextColor(note.color)
              }}
              onClick={() => handleEditNote(note)}
            >
              <div className="mainNotas-combined__note-content">
                <p>{note.text}</p>
                <div className="mainNotas-combined__note-actions">
                  <button 
                    onClick={(e) => {
                      e.stopPropagation();
                      toggleFavorite(note.id);
                    }}
                    style={{ color: getTextColor(note.color) }}
                  >
                    {note.favorite ? <FaStar /> : <FaRegStar />}
                  </button>
                  <button 
                    onClick={(e) => {
                      e.stopPropagation();
                      handleDeleteNote(note.id);
                    }}
                    style={{ color: getTextColor(note.color) }}
                  >
                    <FaTrashAlt />
                  </button>
                </div>
              </div>
            </li>
          ))}
        </ul>
        
        <button 
          className="mainNotas-combined__new-btn"
          onClick={() => {
            setCurrentNote({
              text: '',
              color: '#800000',
              favorite: false,
              id: null
            });
            setIsEditing(false);
          }}
        >
          <FaPlus /> Nueva Nota
        </button>
      </div>
      
      {/* Columna derecha - Editor de notas */}
      <div className="mainNotas-combined__editor">
        <h2>{isEditing ? 'Editar Nota' : 'Nueva Nota'}</h2>
        
        <div className="mainNotas-combined__color-picker">
          <label>Color de la nota:</label>
          <input
            type="color"
            value={currentNote.color}
            onChange={(e) => setCurrentNote({
              ...currentNote,
              color: e.target.value
            })}
          />
        </div>
        
        <textarea
          value={currentNote.text}
          onChange={(e) => setCurrentNote({
            ...currentNote,
            text: e.target.value
          })}
          placeholder="Escribe tu nota aquí..."
          className="mainNotas-combined__note-textarea"
          style={{ 
            backgroundColor: currentNote.color,
            color: getTextColor(currentNote.color)
          }}
        />
        
        <div className="mainNotas-combined__editor-actions">
          <button
            onClick={handleAddNote}
            disabled={!currentNote.text.trim()}
          >
            <FaSave /> {isEditing ? 'Guardar Cambios' : 'Guardar Nota'}
          </button>
          
          {isEditing && (
            <button onClick={() => {
              setCurrentNote({
                text: '',
                color: '#800000',
                favorite: false,
                id: null
              });
              setIsEditing(false);
            }}>
              Cancelar
            </button>
          )}
          
          <button
            onClick={() => toggleFavorite(currentNote.id)}
            disabled={!isEditing}
            className={currentNote.favorite ? 'favorite' : ''}
          >
            {currentNote.favorite ? <FaStar /> : <FaRegStar />}
            {currentNote.favorite ? ' Quitar Favorito' : ' Marcar Favorito'}
          </button>
        </div>
      </div>
    </div>
  );
}

export default MainNotas;