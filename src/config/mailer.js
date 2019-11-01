const nodemailer = require("nodemailer");

// Module permettant d'envoyer les mails
class MailingService {
  constructor() {
    // Identifications du compte Google
    this.password = `LnF)/,R,G4Ty#3dy`;
    this.from = `frombethelshop@gmail.com`;

    this.transporter = nodemailer.createTransport({
      service: "gmail",
      auth: {
        user: this.from,
        pass: this.password
      }
    });
  }

  // Send mail
  _sendMail(data) {
    this.transporter.sendMail(data, (error, info) => {
      if (error) console.error(error);
      else console.log("Mail envoyé aux destinataires.", info.envelope);
    });
  }

  // Vérifier que le module est bien lancé et est opérationnel
  verify() {
    return new Promise((resolve, reject) => {
      this.transporter.verify((error, success) => {
        if (error) reject(error);
        else resolve(success);
      });
    });
  }

  // Envoi de mails en masse
  broadcast(subject, text, html, contacts = []) {
    contacts.forEach(contact => {
      if (contact && contact.emailAddress)
        this._sendMail({
          from: this.from,
          to: contact.emailAddress,
          subject,
          text,
          html
        });
    });
  }
}

module.exports = new MailingService();
