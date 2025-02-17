import nodemailer from 'nodemailer';
import SMTPTransport from 'nodemailer/lib/smtp-transport';

const transport = nodemailer.createTransport({
  host: process.env.NEXT_EMAIL_HOST,
  port: Number(process.env.NEXT_EMAIL_PORT),
  auth: {
    user: process.env.NEXT_EMAIL_USER,
    pass: process.env.BREVO_API_KEY,
  },
} as SMTPTransport.Options);

type EmailOptions = {
  name: string;
  email: string;
  message: string;
};
export const sendEmail = async (doc: EmailOptions) => {
  const { name, email, message } = doc;
  return await transport.sendMail({
    from: process.env.NEXT_EMAIL_PERSONALUSER,
    to: process.env.NEXT_EMAIL_RECIBER,
    subject: 'Contacto desde BG Electricidad',
    html: createEmail(message, email, name),
  });
};

const createEmail = (text: string, email: string, name: string) => {
  return `
  <div>
  <h2>Hola Mi nombre es: ${name}</h2>
  <p>Mi correo electronico: ${email}</p>
  <p> te he dejado este mensaje: ${text}</p>
  </div>
  `;
};
