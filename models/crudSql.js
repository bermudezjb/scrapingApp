//1--Importo de Utils la conexion 
const pool = require('../utils/sqlBBDD')

//1--Hago el insert de los nuevos usuarios (hay que adaptar el modelo entry para recoger los paramtros del formulario)
// entry --> {"noticia 1","va a nevar","sucesos"}
const createEntry = async (insert) => {

    const {username,sname,email,pasw,curse,rol} = insert;

    let client,result;
    
    try{
        client = await pool.connect(); // Espera a abrir conexion
        const data = await client.query(`INSERT INTO usuarios ("nombre","apellido","email","psw","favoritos","rol") 
                                         VALUES ($1,$2,$3,$4,$5,$6)`
                                         ,[username,sname,email,pasw,curse,rol])
                                       // ,[title,content,email,category])     
                result = data.rowCount
                console.log("El insert se ha credo correctamente")
                }catch(err){
                    console.log(err);
                    throw err;
                }finally{
                    client.release();    
                }
                return result
}


//2 Hago la funcion de get pasandole el email
const getEntriesByEmail = async (email) => {
    let client,result;
    try{
        client = await pool.connect(); // Espera a abrir conexion
        const data = await client.query(`
                SELECT * from usuarios where email=$1;`,[email])
        result = data.rows
    }catch(err){
        console.log(err);
        throw err;
    }finally{
        client.release();    
    }
    return result
}

//3-Hago esta funcion para traerme todo lo que esta en la tabla USUARIOS
const getAllEntries = async () => {
    let client,result;
    try{
        client = await pool.connect(); // Espera a abrir conexion
        const data = await client.query(`SELECT * FROM usuarios;`)
        result = data.rows
    }catch(err){
        console.log(err);
        throw err;
    }finally{
        client.release();    
    }
    return result
}


const getAllUserSistem = async () => {
    let client,result;
    try{
        client = await pool.connect(); // Espera a abrir conexion
        const data = await client.query(`SELECT nombre as username,psw as password,rol as role FROM usuarios where nombre is not null and rol<>'Admin';`)
        result = data.rows
        console.log(result)
    }catch(err){
        console.log(err);
        throw err;
    }finally{
        client.release();    
    }
    return result
}


const getATrueAdmin = async () => {
    let client,result;
    try{
        client = await pool.connect(); // Espera a abrir conexion
        const data = await client.query(`SELECT nombre as username,psw as password,rol as role FROM usuarios where rol='Admin';`)
        result = data.rows
        console.log(result)
    }catch(err){
        console.log(err);
        throw err;
    }finally{
        client.release();    
    }
    return result
}




const entries = {
    getEntriesByEmail,
    getAllEntries,
    createEntry,
    getAllUserSistem,
    getATrueAdmin
}





module.exports = entries;

///******************************************************//
// Pruebas de conexion/consulta de las funciones via NODE//
///******************************************************//


/*
    getEntriesByEmail("alejandro@thebridgeschool.es")
    .then(data=>console.log(data))
*/
/*
getAllEntries()
.then(data=>console.log(data))


// entry --> {"noticia 1","va a nevar","sucesos"}
let newEntry = {title:"noticia desde Node",content:"va a triunfar esto",category:"sucesos"}
createEntry(newEntry,"alejandro@thebridgeschool.es")
.then(data=>console.log(data))

// getAllEntries()
// .then(data=>console.log(data))

getEntriesByEmail("Joel@gmail.com")
.then(data=>console.log(data))

getEntriesByEmail("joel@gmail.com")
*/










