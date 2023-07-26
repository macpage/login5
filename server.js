const express = require('express');
const app = express();

const cors = require('cors');
const mongoose = require('mongoose');
const UserModel = require('./model/user');
app.use(cors());
app.use(express.json());
mongoose.connect('mongodb://localhost:27017/appdb');

app.get('/getUsers', (req, res) => {
  UserModel.find().then((users) => res.json(users));
});

app.post('/addUser', async (req, res) => {
  const user = new UserModel(req.body);
  try {
    await user.save();
    res.send(user);
  } catch (error) {
    res.status(error);
  }
});

app.post('/login', async (req, res) => {
  const { username, password } = req.body;
  UserModel.findOne({ username, password }).then((user) => {
    if (user) {
      if (user.password === password) {
        res.json('login!!!');
      } else {
        res.json('not login');
      }
    } else {
      res.json('user not found');
    }
  });
});

app.listen(3003, () => {
  console.log('common');
});
