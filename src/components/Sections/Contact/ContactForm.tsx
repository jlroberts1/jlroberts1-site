import emailjs from '@emailjs/browser';
import { FC, memo, useCallback, useEffect, useMemo, useState } from 'react';

interface FormData {
  name: string;
  email: string;
  message: string;
}

const ContactForm: FC = memo(() => {
  const defaultData = useMemo(
    () => ({
      name: '',
      email: '',
      message: '',
    }),
    [],
  );

  const [data, setData] = useState<FormData>(defaultData);

  useEffect(() => {
    const emailJsKey = process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY;
    if (!emailJsKey) {
      console.error('EmailJS Public Key is not defined in environment variables');
      return;
    }
    emailjs.init({
      publicKey: emailJsKey,
      blockHeadless: true,
      blockList: {
        list: [],
        watchVariable: 'userEmail',
      },
      limitRate: {
        id: 'app',
        throttle: 10000,
      }
    });
  }, []);

  const onChange = useCallback(
    <T extends HTMLInputElement | HTMLTextAreaElement>(event: React.ChangeEvent<T>): void => {
      const { name, value } = event.target;

      const fieldData: Partial<FormData> = { [name]: value };

      setData({ ...data, ...fieldData });
    },
    [data],
  );

  const handleSendMessage = useCallback(
    async (event: React.FormEvent<HTMLFormElement>) => {
      event.preventDefault();
      const serviceId = process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID;
      const templateId = process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID;
      if (!serviceId) {
        console.error('EmailJS Service ID is not defined in environment variables');
        return;
      }
      if (!templateId) {
        console.error('EmailJS Template ID is not defined in environment variables');
        return;
      }
      const templateData = {
        name: data.name,
        email: data.email,
        message: data.message,
      };
      emailjs.send(serviceId, templateId, templateData).then(
        (response) => {
          console.log('SUCCESS!', response.status, response.text);
        },
        (error) => {
          console.log('FAILED...', error);
        },
      );
    },
    [data],
  );

  const inputClasses =
    'bg-neutral-700 border-0 focus:border-0 focus:outline-none focus:ring-1 focus:ring-orange-600 rounded-md placeholder:text-neutral-400 placeholder:text-sm text-neutral-200 text-sm';

  return (
    <form className="grid min-h-[320px] grid-cols-1 gap-y-4" method="POST" onSubmit={handleSendMessage}>
      <input className={inputClasses} name="name" onChange={onChange} placeholder="Name" required type="text" />
      <input
        autoComplete="email"
        className={inputClasses}
        name="email"
        onChange={onChange}
        placeholder="Email"
        required
        type="email"
      />
      <textarea
        className={inputClasses}
        maxLength={250}
        name="message"
        onChange={onChange}
        placeholder="Message"
        required
        rows={6}
      />
      <button
        aria-label="Submit contact form"
        className="w-max rounded-full border-2 border-orange-600 bg-stone-900 px-4 py-2 text-sm font-medium text-white shadow-md outline-none hover:bg-stone-800 focus:ring-2 focus:ring-orange-600 focus:ring-offset-2 focus:ring-offset-stone-800"
        type="submit">
        Send Message
      </button>
    </form>
  );
});

ContactForm.displayName = 'ContactForm';
export default ContactForm;
