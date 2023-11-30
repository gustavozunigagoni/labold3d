"use strict";
// index.ts
/*
El el package.json hey tres formas de ejecutar
"scripts": {
    "start:prod": "node ./dist/index.js",  -- compilando con npx tsc para crear los js en ./dist
    "start:dev": "nodemon --exec ts-node ./src/index.ts", -- ejecutardo con los ts para viendo cambios en tiempo real
    "start:dev2": "ts-node ./src/index.ts"  -- ejecutando pero sin ver cambios en tiempo real
  },

*/
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const app = (0, express_1.default)();
const port = 3000;
app.get('/', (req, res) => {
    res.send('¡Hola al mundo de labold3d!');
});
app.listen(port, () => {
    console.log(`Servidor corriendo en http://localhost:${port}`);
});
