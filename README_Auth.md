# scrapingApp
1---Lo primero es generar el formulario loguin cn el metodo post para lanzar los parametros : 
Aqui equivale a body.username y body.pasword del pug/login
2--Ahora routes/index, invoca al metodo con se ejecuta esa ruta : action="/login" 
3--Ahora en index tengo : 
let users = require('../controllers/auth') que es la exportacion del modulo auth que trae una simulacion de la informacion que trae la BBBD
Despues hago la funcion para compararlo segun el dato que he traido del user del mudulo indicado
const user = users.find(u => { return u.username === username && u.password === password }); 

3*//Haseo de contraseña y comprobacion de login/pass deshaseada
1--He realizado la instalacion del modulo bycriptjs





