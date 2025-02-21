const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const DOCKER = process.env.DOCKER === '1';
const MONGO_URI = process.env.MONGO_URI || (DOCKER ? 'mongodb://dabeastapp-mongo:27017/express-todo' : 'mongodb://localhost:27017/express-todo');

mongoose.connect(MONGO_URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true
}).then(() => {
  console.log(`✅ MongoDB connected at ${MONGO_URI}`);
}).catch(err => {
  console.error('❌ MongoDB connection error:', err);
});

const TodoSchema = new Schema({
  user_id: String,
  content: String,
  updated_at: Date
});

const Todo = mongoose.model('Todo', TodoSchema);

module.exports = { mongoose, Todo };
