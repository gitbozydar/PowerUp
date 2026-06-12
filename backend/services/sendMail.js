import { getToken } from "./auth.js";
import { graphAPI } from "./graph.js";

export async function sendMail(formData, files = []) {
  const token = await getToken();

  const { name, email, phone, company, nip, letter } = formData;

  const attachments = (files || []).map((file) => ({
    "@odata.type": "#microsoft.graph.fileAttachment",
    name: file.originalname,
    contentType: file.mimetype,
    contentBytes: file.buffer.toString("base64"),
  }));

  const html = `
    <h2>Nowe zgłoszenie</h2>
    <p><b>Imię:</b> ${name}</p>
    <p><b>Email:</b> ${email}</p>
    <p><b>Telefon:</b> ${phone}</p>
    <p><b>Firma:</b> ${company}</p>
    <p><b>NIP:</b> ${nip}</p>
    <p><b>Wiadomość:</b> ${letter}</p>
  `;

  const payload = {
    message: {
      subject: `[FORMULARZ] - ${company}`,
      body: {
        contentType: "HTML",
        content: html,
      },
      toRecipients: [
        {
          emailAddress: {
            address: process.env.EMAIL_USER,
          },
        },
      ],
      attachments,
    },
    saveToSentItems: true,
  };

  return await graphAPI(token, payload);
}
