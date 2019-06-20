const fs = require('fs'); //paquete preinstalado
const colors = require('colors');

let ListarTabla = async (base, limite = 10) => {
    let data = '';
    data += "========================\n".green;
    data += `Table de ${base}\n`.green;
    data += "========================\n".green;

    if(!Number(base) || !Number(limite)){
        throw new Error(`La base ${base} o el limite ${limite} no son numeros validos`); 
    }else{
        for (let i = 1; i <= limite; i++) {
            data +=`${base} * ${i} = ${base * i}\n`;
        }
        return data;
    }    
}

let CrearMultiplicacion = async (base, limite) => {
    let data = '';

    for (let i = 1; i <= limite; i++) {
        data +=`${base} * ${i} = ${base * i}\n`;
    }

    if(!data){
        throw new Error(`no se ha podido realizar la operacion por la tabla ${base}`);
    }else{
        fs.writeFile(`./tablas/Tabla-${base}.txt`, data, (err) => {
            if (err) throw err;
            //console.log(`El archivo tabla-${base}.txt ha sido creado.`);
            return `Se ha creado correctamente el archivo Tabla-${base}`;
        });  
        return `Se ha creado correctamente` + (` el archivo Tabla-${base}.txt`).green;
    }
}

let EntregarResultado = async (base, limite = 10) =>{
    if(!Number(base) || !Number(limite)){
        return `La base ${base} o el limite ${limite} no son numeros validos`;  
    }else{
        let resultado = await CrearMultiplicacion(base, limite);
        return resultado;  
    }
      
}

//EntregarResultado(11).then(Mensage =>{
//    console.log(Mensage);
//}).catch(error => console.log('el error raro',error));


module.exports ={
    EntregarResultado,
    ListarTabla

}


