const crudSql=require('../models/crudSql')

const dataentry = async (req,res) => { 
    const insert={
        username: req.body.firstname,
        sname : '',
        email: req.body.email,
        pasw: req.body.password,
        curse : '',
        rol : 'user'
    } 
    return await crudSql.createEntry(insert)
}

exports.dataentry=dataentry;

//Como solo hay una funcion de recogida de datos no puedoo exportar el modulo 