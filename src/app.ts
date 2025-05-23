import express from 'express';
import rootRouter from './router/mainRouter';
const app = express();
const port = 3000;

app.get('/', (req, res) => {
   res.send('Hello World!');
});

app.use(express.json());

app.listen(port, () => {
   return console.log(`Express is listening at http://localhost:${port}`);
});

app.use('/api', rootRouter);
