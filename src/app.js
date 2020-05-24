import dotenv from 'dotenv';

dotenv.config();
import './database';

import express from 'express';
import cors from 'cors';
import helmet from 'helmet';

const whiteList = [
  'https://djcode.com.br',
  'http://localhost:3000',
];

const corsOptions = {
  origin: (origin, callback) => {
    if (whiteList.indexOf(origin) !== -1 || !origin) {
      callback(null, true);
    } else {
      callback(new Error('Not allowed by CORS'));
    }
  },
};

import { resolve } from 'path';

import homeRoutes from './routes/HomeRoutes';
import userRoutes from './routes/UserRoutes';
import tokenRoutes from './routes/TokenRoutes';
import studentRoutes from './routes/StudentRoutes';
import fileRoutes from './routes/FileRoutes';


class App {
  constructor() {
    this.app = express();
    this.middlewares();
    this.routes();
  }

  middlewares() {
    this.app.use(cors(corsOptions));
    this.app.use(helmet());
    this.app.use(express.urlencoded({ extended: true }));
    this.app.use(express.json());
    this.app.use(express.static(resolve(__dirname, '..', 'uploads')));
  }

  routes() {
    this.app.use('/', homeRoutes);
    this.app.use('/users', userRoutes);
    this.app.use('/tokens', tokenRoutes);
    this.app.use('/students', studentRoutes);
    this.app.use('/files', fileRoutes);
  }
}

export default new App().app;
