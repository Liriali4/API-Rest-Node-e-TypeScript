//o servidor está sendo iniciado aqui, ele importa o server do arquivo 
//server.ts e define a porta onde o servidor irá rodar.

import server from "./server/server";

const PORT = process.env.PORT || 3333;

server.listen(PORT, () => {
  console.log(`Servidor rodando na porta ${PORT}`);
});
