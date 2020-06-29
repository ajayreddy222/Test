const nodemailer = require('nodemailer');

const options = {
    host: process.env.MAILER_HOST,
    port: process.env.MAILER_PORT,
    secure: process.env.SECURE === 'true',
    auth: {
        user: process.env.MAILER_USER,
        pass: process.env.MAILER_PASS
    }
};

const mailer = nodemailer.createTransport(options);

module.exports = async (req, res) => {
    const { to, subject, html, from } = req.body || {};

    console.log({
        from,
        to,
        subject,
        html
    });

    return mailer.sendMail(
        {
            from,
            to,
            subject,
            html
        },
        (err, info) => {
            if (err) {
                console.error(err);
                return res.status(422).send('Error occurred')
            }
            if (info) {
                console.log(info);
                return res.status(200).send('OK')
            }
        }
    );
};
