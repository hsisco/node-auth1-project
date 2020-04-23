const session = require('express-session');

const knexSessionStore = require('connect-session-knex')(session);

const express = require('express');
const helmet = require('helmet');
const cors = require('cors');

const authRouter = require('./routers/auth-router');

const server = express();

const sessionConfig = {
  name: 'peanut-butter',
  secret: 'ingredient',
  cookie: {
    maxAge: 3600 * 1000,
    secure: false,
    httpOnly: true
  },
  resave: false,
  saveUninitialized: false,

  store: new knexSessionStore(
    {
      knex: require('./data/db-config'),
      tablename: 'sessions',
      sidfieldname: 'sid',
      createtable: true,
      clearInterval: 3600 * 1000
    }
  )
}

server.use(express.json());
server.use(helmet());
server.use(cors());
server.use(session(sessionConfig));

server.get('/', (req, res) => {
  res.json({ api: 'up' });
});

module.exports = server;