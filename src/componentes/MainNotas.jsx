// MainNotas.jsx (estructura similar pero con nuevas clases)
import React, { useState, useEffect } from 'react';
import { 
  FaTrashAlt, 
  FaEdit, 
  FaSave, 
  FaStar, 
  FaRegStar, 
  FaPlus, 
  FaThumbtack 
} from 'react-icons/fa';
import '../assets/scss/_03-Componentes/_MainNotas.scss';

const getTextColor = (bgColor) => {
  if (!bgColor) return '#1f2937';
  const hexToRgb = (hex) => {
    const r = parseInt(hex.substr(1, 2), 16);
    const g = parseInt(hex.substr(3, 2), 16);
    const b = parseInt(hex.substr(5, 2), 16);
    return [r, g, b];
  };
  const [r, g, b] = hexToRgb(bgColor);
  const luminance = (0.299 * r + 0.587 * g + 0.114 * b) / 255;
  return luminance > 0.5 ? '#1f2937' : '#f9fafb';
};

const MainNotas = () => {
  const [notes, setNotes] = useState([]);
  const [currentNote, setCurrentNote] = useState({
    text: '',
    color: '#e5e7eb',
    favorite: false,
    pinned: false,
    tags: [],
    id: null,
    createdAt: null
  });
  const [searchQuery, setSearchQuery] = useState('');
  const [tagFilter, setTagFilter] = useState('');
  const [isEditing, setIsEditing] = useState(false);

  useEffect(() => {
    const storedNotes = JSON.parse(localStorage.getItem('notes')) || [];
    setNotes(storedNotes);
  }, []);

  useEffect(() => {
    localStorage.setItem('notes', JSON.stringify(notes));
  }, [notes]);

  const handleAddOrEditNote = () => {
    if (!currentNote.text.trim()) return;

    const trimmedTags = currentNote.tags.map(t => t.trim().toLowerCase()).filter(Boolean);

    if (isEditing) {
      const updated = notes.map(note =>
        note.id === currentNote.id ? { ...currentNote, tags: trimmedTags } : note
      );
      setNotes(updated);
    } else {
      const newNote = {
        ...currentNote,
        id: Date.now(),
        createdAt: new Date().toISOString(),
        tags: trimmedTags
      };
      setNotes([newNote, ...notes]);
    }

    resetNoteForm();
  };

  const resetNoteForm = () => {
    setCurrentNote({
      text: '',
      color: '#e5e7eb',
      favorite: false,
      pinned: false,
      tags: [],
      id: null,
      createdAt: null
    });
    setIsEditing(false);
  };

  const handleDeleteNote = (id) => {
    const confirm = window.confirm('¿Seguro que deseas eliminar esta nota?');
    if (!confirm) return;
    setNotes(notes.filter(n => n.id !== id));
    if (currentNote.id === id) resetNoteForm();
  };

  const toggleProperty = (id, prop) => {
    setNotes(notes.map(n => n.id === id ? { ...n, [prop]: !n[prop] } : n));
  };

  const handleTagInput = (e) => {
    const tags = e.target.value.split(',').slice(0, 5);
    setCurrentNote({ ...currentNote, tags });
  };

  const filteredNotes = notes
    .filter(n => n.text.toLowerCase().includes(searchQuery.toLowerCase()))
    .filter(n => tagFilter ? n.tags.includes(tagFilter.toLowerCase()) : true)
    .sort((a, b) => {
      if (a.pinned !== b.pinned) return b.pinned - a.pinned;
      if (a.favorite !== b.favorite) return b.favorite - a.favorite;
      return new Date(b.createdAt) - new Date(a.createdAt);
    });

  return (
    <div className="notes-app">
      {/* Listado de notas */}
      <div className="notes-list-container">
        <div className="notes-list-header">
          <h2>Mis Notas ({filteredNotes.length})</h2>
          
          <div className="notes-search">
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="Buscar notas..."
              className="search-input"
            />
            <input
              type="text"
              value={tagFilter}
              onChange={(e) => setTagFilter(e.target.value)}
              placeholder="Filtrar por etiquetas..."
              className="search-input"
            />
            <button 
              onClick={() => { setSearchQuery(''); setTagFilter(''); }}
              className="clear-btn"
            >
              Limpiar filtros
            </button>
          </div>
        </div>

        <div className="notes-grid">
          {filteredNotes.map(note => (
            <div
              key={note.id}
              className={`note-card ${note.pinned ? 'pinned' : ''} ${note.favorite ? 'favorite' : ''}`}
              style={{ backgroundColor: note.color, color: getTextColor(note.color) }}
              onClick={() => {
                setCurrentNote(note);
                setIsEditing(true);
              }}
            >
              <div className="note-content">
                <p>{note.text}</p>
                <div className="note-meta">
                  <span>{new Date(note.createdAt).toLocaleDateString()}</span>
                  {note.tags.length > 0 && (
                    <div className="note-tags">
                      {note.tags.map(tag => (
                        <span key={tag} className="tag">{tag}</span>
                      ))}
                    </div>
                  )}
                </div>
              </div>
              <div className="note-actions">
                <button 
                  onClick={(e) => { e.stopPropagation(); toggleProperty(note.id, 'pinned'); }}
                  title={note.pinned ? 'Desanclar' : 'Anclar'}
                >
                  <FaThumbtack />
                </button>
                <button 
                  onClick={(e) => { e.stopPropagation(); toggleProperty(note.id, 'favorite'); }}
                  title={note.favorite ? 'Quitar favorito' : 'Marcar favorito'}
                >
                  {note.favorite ? <FaStar /> : <FaRegStar />}
                </button>
                <button 
                  onClick={(e) => { e.stopPropagation(); handleDeleteNote(note.id); }}
                  title="Eliminar"
                >
                  <FaTrashAlt />
                </button>
              </div>
            </div>
          ))}
        </div>

        <button className="new-note-btn" onClick={resetNoteForm}>
          <FaPlus /> Nueva Nota
        </button>
      </div>

      {/* Editor de notas */}
      <div className="note-editor-container">
        <h2>{isEditing ? 'Editar Nota' : 'Crear Nota'}</h2>
        
        <div className="editor-controls">
          <div className="color-picker">
            <label>Color de fondo:</label>
            <input
              type="color"
              value={currentNote.color}
              onChange={(e) => setCurrentNote({ ...currentNote, color: e.target.value })}
            />
          </div>
        </div>
        
        <textarea
          value={currentNote.text}
          onChange={(e) => setCurrentNote({ ...currentNote, text: e.target.value })}
          placeholder="Escribe tu nota aquí..."
          className="note-textarea"
          style={{
            backgroundColor: currentNote.color,
            color: getTextColor(currentNote.color)
          }}
        />
        
        <div className="tags-input">
          <input
            type="text"
            placeholder="Etiquetas (separadas por comas)"
            value={currentNote.tags.join(', ')}
            onChange={handleTagInput}
          />
        </div>
        
        <div className="editor-actions">
          <button
            onClick={handleAddOrEditNote}
            disabled={!currentNote.text.trim()}
            className="save-btn"
          >
            <FaSave /> {isEditing ? 'Actualizar' : 'Guardar'}
          </button>
          {isEditing && (
            <button onClick={resetNoteForm} className="cancel-btn">
              Cancelar
            </button>
          )}
        </div>
      </div>
    </div>
  );
};

export default MainNotas;