// needs to be the first import
import 'reflect-metadata';

import '@shared/container';
import 'dotenv/config';
import { app } from './app';

app.listen(process.env.PORT, () =>
  console.log(`Server runing on port ${process.env.PORT}`)
);
