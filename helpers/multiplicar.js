const fs = require('fs');
const colors = require('colors');

const crearArchivo = async(base = 5,  listar = false, hasta = 10) => {

    try{
    
        let salida = '';
        let consola = '';
    
        for (let i = 1; i <= hasta; i++) {
            salida += `${base} X ${i} = ${base * i}\n`;
            consola += `${base} ${'X'.red} ${i} ${'='.red} ${base * i}\n`;
        }; 

        if(listar = true) {
            console.log('=================='.green);
            console.log('   Tabla del:'.green, colors.blue(base));
            console.log('=================='.green);

            console.log(consola);
        };
    
        fs.writeFileSync(`./salida/tabla-${base}.txt`, salida);
    
        return `tabla-${base}.txt`;

    } catch (err) {
        throw err;
    };

};

module.exports = {
    crearArchivo
};