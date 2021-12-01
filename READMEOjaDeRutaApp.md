Repaso estructurado de carpetas + metodo Crud + inser de usuarios en la BBDD SQL 

RESTRUCTUCTURADO DE CARPETAS : :
Hemos decidido que el orden de aplicacion será UTILS/MODELS/CONTROLERS/ROUTES/: 

Pasos seguidos : 
1--UTILS las conexiones a las BBDD de MongoDb y Poolstgrade.
1.1--Aqui creamos las conexiones y exportamos los modulos de cada conexion para utilizar en otras rutas/ficheros

2--MODELS aqui hemos generado los modelos de CRUD (CREATE;READ;UPADATE;DELETE) de las BBDD MongoDB y Pool respectivamente. Dentro hemos generado de consulta e insercion y como en el paso anterior exportamos el modulo para utilizar estas funciones en otras rutas/ficheros.
En la funcion create  de Pool le paso la variable @insert, dentro hago un destructuring : 

    const {username,sname,email,pasw,curse,rol} = insert;

Esta variable viene dada por el controlador Controllers/ctrlSwql y @insert es el objeto que recojo en el metodo post/signup cuando relleno el formulario.
Por ultimo le paso los parametros a la funcion para hacer el inser en la BBDD, si el inser esta correcto aparecera el mensaje de insercion correcta y lo insertara en la BBDD

3--CONTROLLERS lo primero que hago es importar el modulo de MODELS/crudsql
 [*const crudSql=require('../models/crudSql')] 
 para interconectar los ficheros. Aqui creo la funcion Dataentry que es async y que creara el
 objeto @insert con los parametros recogios del formulario singUp y se lo hara llegar a modelo[funcion de create()], esto lo realiza con :
return await crudSql.createEntry(insert)

4--RUTES, aqui defino que la vista/ejecucion SingUp sera post y accedera a controlers, funcion dataentry (Creara el objeto @insert ) que asu vez se lo pasara a la funcion create () de MODELS/crudSql
router.post('/signup',controllerSql.dataentry); 
dataentry es la exportacion del modulo creado en CONTROLLERS/ctrlSwql 



