const bodyParser = require('body-parser');
const pessoas = require('./pessoasRoute');
const niveis = require('./niveisRoute');
const turmas = require('./turmaRoute');
const salas = require('./salasRoute');

// module.exports = app => {
//     app.use(bodyParser.json());
//     app.use(pessoas);
//     app.use(niveis);
// }


module.exports = app => {
    app.use(
      bodyParser.json(),
      pessoas,
      niveis,
      turmas,
      salas
      )
    }