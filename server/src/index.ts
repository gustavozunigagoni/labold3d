// index.ts
/*
El el package.json hey tres formas de ejecutar
"scripts": {
    "start:prod": "node ./dist/index.js",  -- compilando con npx tsc para crear los js en ./dist
    "start:dev": "nodemon --exec ts-node ./src/index.ts", -- ejecutardo con los ts para viendo cambios en tiempo real
    "start:dev2": "ts-node ./src/index.ts"  -- ejecutando pero sin ver cambios en tiempo real
  },

*/

import express, { Request, Response } from 'express';

const app = express();
const port = 3000;

app.get('/', (req: Request, res: Response) => {
  res.send('¡Hola al mundo de labold3d!');
});

app.listen(port, () => {
  console.log(`Servidor corriendo en http://localhost:${port}`);
});
