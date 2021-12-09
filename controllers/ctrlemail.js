
const nodemailer = require('nodemailer');

// create reusable transporter object using the default SMTP transport
var transporter = nodemailer.createTransport({
        service: 'Gmail',
        host : "smtp.gmail.com",
        port : 465,
        scure : false,
        debug: true,
        auth: {
            user: 'jalid.acdhi@gmail.com',
            pass: 'duhynqawjkppgxyj'
        }
     } );

// setup e-mail data with unicode symbols
const RecoverPswByemail = async (email,psw,req,res) => { 

     mailOptions = {
        from: '"Cursalia"', // sender address
        to: email, // list of receivers
        subject: 'PswRecovery', // Subject line
        //text: 'Esta es su contraseña', // plaintext body
        html: '<br> Esta es su @pass :<br><b> '+psw+'</b>,<br> por favor no la comparta' // html body
        };
        
    // send mail with defined transport object
    transporter.sendMail(mailOptions, function(error, info){
        if(error){
            return console.log(error);
        }
        console.log('Message sent: ' + info.response);
});

}


exports.RecoverPswByemail= RecoverPswByemail;