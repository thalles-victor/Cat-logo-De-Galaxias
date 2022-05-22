import express from 'express';
import cors from 'cors';

import { router } from './routes'

const app = express();

app.use(express.json());
app.use(cors());
app.use(router);

app.get("/", (request, response) => {
  response.status(200).send({ message: 'hello' });
});

const PORT = process.env.PORT || 3333;
app.listen(3333, () => {
  console.log(`Server is running at http://localhost:${PORT}`);
});