// backend/server.js
import express from 'express';
import fs from 'fs';
import path, { dirname } from 'path';
import cors from 'cors';
import { fileURLToPath } from 'url';

const app = express();
const PORT = 3000;

// Configurar __dirname para ES Modules
const __dirname = dirname(fileURLToPath(import.meta.url));

// Pasta e arquivo JSON com caminho absoluto
const dataDir = path.resolve(__dirname, 'data');
const filePath = path.join(dataDir, 'comments.json');

// Middleware
app.use(cors());
app.use(express.json());

// Cria pasta data caso não exista
if (!fs.existsSync(dataDir)) {
  fs.mkdirSync(dataDir, { recursive: true });
}

// DEBUG: mostra o caminho absoluto do arquivo JSON
console.log('Arquivo JSON está em:', filePath);

// GET para ler comentários
app.get('/comments', (req, res) => {
  try {
    if (!fs.existsSync(filePath)) {
      return res.json([]);
    }
    const rawData = fs.readFileSync(filePath, 'utf-8');
    const comments = JSON.parse(rawData);
    
    if (!Array.isArray(comments)) {
      return res.status(500).json({ error: 'Arquivo de comentários inválido.' });
    }
    
    res.status(200).json(comments);
  } catch (error) {
    console.error('Erro ao ler comentários:', error);
    res.status(500).json({ error: 'Erro ao ler comentários.' });
  }
});

// POST para salvar comentários
app.post('/save-comments', (req, res) => {
  try {
    const comments = req.body.comments;
    
    if (!comments || !Array.isArray(comments)) {
      return res.status(400).json({ error: 'Campo "comments" obrigatório e deve ser um array.' });
    }

    fs.writeFileSync(filePath, JSON.stringify(comments, null, 2), 'utf-8');
    res.status(200).json({ status: 'Comentários salvos com sucesso!' });
  } catch (error) {
    console.error('Erro ao salvar comentários:', error);
    res.status(500).json({ error: 'Erro ao salvar comentários' });
  }
});

// Iniciar servidor
app.listen(PORT, () => {
  console.log(`Servidor rodando na porta ${PORT}`);
});
