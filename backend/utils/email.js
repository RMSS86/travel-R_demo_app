const nodemailer = require('nodemailer');
const pug = require('pug');
const { convert } = require('html-to-text');
// eslint-disable-next-line import/no-unresolved, node/no-missing-require
const postmarkTransport = require('nodemailer-postmark-transport');

module.exports = class Email {
  constructor(user, url) {
    this.to = user.email;
    this.firstName = user.name.split(' ')[0];
    this.url = url;
    this.from = `Robbie Trevor <${process.env.EMAIL_FROM}>`;
  }

  //team@travels.io postmark##99
  newTransport() {
    if (process.env.NODE_ENV === 'production') {
      return nodemailer.createTransport(
        postmarkTransport({
          auth: {
            apiKey: process.env.SENDGRID_PASSWORD,
          },
        }),
      );
    }
    // if (process.env.NODE_ENV === 'production') {
    //   // Sendgrid
    //   return nodemailer.createTransport({
    //     service: 'Postmark',
    //     auth: {
    //       user: process.env.SENDGRID_USERNAME,
    //       pass: process.env.SENDGRID_PASSWORD,
    //     },
    //   });
    // }
    // //team@travels.io postmark##99
    return nodemailer.createTransport({
      host: process.env.EMAIL_HOST,
      port: process.env.EMAIL_PORT,
      auth: {
        user: process.env.EMAIL_USERNAME,
        pass: process.env.EMAIL_PASSWORD,
      },
    });
  }

  // Send the actual email
  async send(template, subject) {
    // 1) Render HTML based on a pug template
    const html = pug.renderFile(`${__dirname}/../views/email/${template}.pug`, {
      firstName: this.firstName,
      url: this.url,
      subject,
    });

    // 2) Define email options
    const mailOptions = {
      from: this.from,
      to: this.to,
      subject,
      html,
      text: convert(html),
    };

    // 3) Create a transport and send email
    await this.newTransport().sendMail(mailOptions);
  }

  async sendWelcome() {
    await this.send('welcome', 'Welcome to the Trax Travels Family!');
  }

  async sendPasswordReset() {
    await this.send(
      'passwordReset',
      'Your password reset token (valid for 10 minutes only)',
    );
  }
};
