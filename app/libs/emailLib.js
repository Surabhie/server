'use strict';

const nodemailer = require('nodemailer');




let sendEmail = (sendEmailOptions) => {

    let account = {
        user: 'rohits021988@gmail.com', //emailid
        pass: 'rohitsharma02*'  //password

    }


    //step 1
    let transporter = nodemailer.createTransport({
        service: 'gmail',
        auth: {
            user: account.user,
            pass: account.pass
        }
    });








    //step 2 - Creating mail options:

    let mailOptions = {
        from: 'rohits021988@gmail.com', // sender address
        to: sendEmailOptions.email, // list of receivers
        //to:'sharmatara651@gmail.com',
        subject: sendEmailOptions.subject, // Subject line
        text: `Dear ${sendEmailOptions.name},
               Welcome to Issue Tracker.
        `, // plain text body
        html: sendEmailOptions.html // html body
    };

    //step 3:

    // send mail with defined transport object
    transporter.sendMail(mailOptions, (error, info) => {
        if (error) {
            return console.log(error);
        }
        else {
            console.log('Message successfully sent.', info);
        }

    });

}

module.exports = {
    sendEmail: sendEmail
}







