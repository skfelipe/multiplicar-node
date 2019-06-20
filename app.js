const  argv =   require('./config/yargs').argv;
const colors = require('colors');
const { EntregarResultado, ListarTabla } = require('./multiplicar/multiplicar');

let comando = argv._[0];

switch(comando){
    case 'listar':
        ListarTabla(argv.base, argv.limite).then(Salida =>{
            console.log(Salida);
        }).catch(error => console.log('el error es el siguiente: ',error));
    break;
    case 'crear':
        EntregarResultado(argv.base, argv.limite).then(Mensage =>{
            console.log(Mensage);
        }).catch(error => console.log('el error raro',error));
    break;
    default:
        console.log('Comando No reconocido');
}


