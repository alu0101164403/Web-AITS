const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const bodyParser = require('body-parser');

const app = express();
const PORT = process.env.PORT || 8080;

app.use(cors());

// Conectar a la base de datos
mongoose.connect('mongodb+srv://alu0101164403:tYSDmDGx05TAKjm4@cluster0.x5b6alu.mongodb.net/?retryWrites=true&w=majority', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

// Definir nota
const Note = mongoose.model('Note', {
  title: String,
  author: String,
  description: String,
});

app.use(bodyParser.json());

// Ruta para agregar una nueva nota
app.post('/api/notes', async (req, res) => {
  try {
    const { title, author, description } = req.body;
    const newNote = new Note({ title, author, description });
    await newNote.save();
    res.status(201).json(newNote);
  } catch (error) {
    console.error(error);
    res.status(500).send('Error al agregar la nota');
  }
});

// Ruta para obtener la lista de notas
app.get('/api/notes', async (req, res) => {
  try {
    const notes = await Note.find();
    res.json(notes);
  } catch (error) {
    console.error(error);
    res.status(500).send('Error al obtener la lista de notas');
  }
});

// Ruta para eliminar una nota por su ID
app.delete('/api/notes/:id', async (req, res) => {
  try {
    const { id } = req.params;
    await Note.findByIdAndDelete(id);
    res.status(204).end();
  } catch (error) {
    console.error(error);
    res.status(500).send('Error al eliminar la nota');
  }
});

// Iniciar el servidor
app.listen(PORT, () => {
  console.log(`Servidor escuchando en el puerto ${PORT}`);
});