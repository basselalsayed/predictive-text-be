'use strict';

import 'dotenv/config';
import express from 'express';
import cors from 'cors';

const app = express();

app.get('/ping', (req, res) => {
  res.send('pong');
});

const origins = process.env.ORIGINS.split(',');

let corsOptions = {
  origin: (origin, cb) => {
    const canPass = origins.includes(origin);
    return cb(!canPass, origins);
  },
};

app.use(cors(corsOptions));

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use((req, res, next) => {
  res.header(
    'Access-Control-Allow-Headers',
    'x-access-token, Origin, Content-Type, Accept',
  );
  next();
});
