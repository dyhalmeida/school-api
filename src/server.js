import app from './app';

const port = process.env.APP_PORT;

app.listen(port, () => console.log(`
  Servidor rodando na porta ${port}
  CTRL + Click em http://localhost:${port}
`));
