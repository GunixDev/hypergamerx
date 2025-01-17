import { ActionError, defineAction } from 'astro:actions';
import { Resend } from 'resend';
import {z} from "astro:content";

const resend = new Resend(import.meta.env.RESEND_API_KEY);

export const server = {
  send: defineAction({
    accept: 'form',
    input: z.object({
      name: z.string().nonempty(),
      email: z.string().email(),
      subject: z.string().nonempty(),
      message: z.string().nonempty(),
    }),
    handler: async ({name, email, subject, message}) => {
      const { data, error } = await resend.emails.send({
        from: 'Acme <onboarding@resend.dev>',
        to: ['delivered@resend.dev'],
        subject: subject,
        html: `<p>${name}: ${email}: ${message}</p>`,
      });

      if (error) {
        throw new ActionError({
          code: 'BAD_REQUEST',
          message: error.message,
        });
      }

      return data;
    },
  }),
};
