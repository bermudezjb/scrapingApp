const crudSql=require('../models/crudSql')
const bcryptjs= require('bcryptjs')

const dataentry = async (req,res) => { 
    const insert={
        username: req.body.firstname,
        sname : '',
        email: req.body.email,
        pasw: await bcryptjs.hash(req.body.password,8),
        curse : '',
        rol : 'user'
    } 
    return await crudSql.createEntry(insert)
}

exports.dataentry=dataentry;

//Como solo hay una funcion de recogida de datos no puedoo exportar el modulo 
//Aplico await bcryptjs.hash(req.body.password,8) para hasear la pass que viene del post de Login