import type { NextApiRequest, NextApiResponse } from "next";
import { createTransport } from "nodemailer";

const transporter = createTransport({
  service: "gmail",
  auth: {
    user: "contact.royalricheyrestoration@gmail.com",
    pass: "sovmcogznnmdelzi",
  },
});

const mailOptions = {
  from: "contact@royalricheyrestoration@gmail.com",
  to: "royalwoodfloors@gmail.com",
  subject: "New Message from the Website",
};

type Data = {
  name: string;
};

export default function handler(
  _req: NextApiRequest,
  res: NextApiResponse<Data>
) {
  if (_req.method === "POST") {
    const { name, email, message } = _req.body;
    if (name && email && message) {
      transporter.sendMail(
        {
          ...mailOptions,
          text: `
        From: ${name}
        Email: ${email},
        Message: ${message}
        `,
        },
        (error, info) => {
          if (error) {
            res.status(400).json(error);
          } else {
            res.status(200).json(_req.body);
          }
        }
      );
    } else {
      res.status(400).json({ name: "no body content" });
    }
  }
}
