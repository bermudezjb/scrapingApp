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


const updateDataUser = async (req,res) => { 
    const datauser={
        // username: 'Jalid Update',
        // email: 'jalid.update@gmail.com',
        // id : 28

        username: req.body.updateusername,
        email: req.body.updateemail,
        id : req.body.id

    } 
    return await crudSql.updateUser(datauser)
}


//updateDataUser()


module.exports = {
    dataentry,
    updateDataUser
}

//Como solo hay una funcion de recogida de datos no puedoo exportar el modulo 
//Aplico await bcryptjs.hash(req.body.password,8) para hasear la pass que viene del post de Login