'use client';

import Image from 'next/image';
import { ChangeEvent, FormEvent, useState } from 'react';
import PageHero from '@/components/PageHero';
import MotionSection from '@/components/animations/MotionSection';
import PageShell from '@/components/animations/PageShell';
import { contactCards, services } from '@/data/siteData';

type ContactForm = {
  firstName: string;
  lastName: string;
  company: string;
  email: string;
  phone: string;
  interest: string;
  message: string;
};

type ContactErrors = Partial<Record<keyof ContactForm, string>>;

const initialForm: ContactForm = {
  firstName: '',
  lastName: '',
  company: '',
  email: '',
  phone: '',
  interest: 'Web Application',
  message: '',
};

export default function ContactPage() {
  const [formData, setFormData] = useState<ContactForm>(initialForm);
  const [errors, setErrors] = useState<ContactErrors>({});
  const [success, setSuccess] = useState('');

  function handleChange(event: ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) {
    const { name, value } = event.target;
    setFormData((current) => ({ ...current, [name]: value }));
  }

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const nextErrors: ContactErrors = {};

    if (!formData.firstName.trim()) nextErrors.firstName = 'First name is required.';
    if (!formData.email.trim()) nextErrors.email = 'Email is required.';
    if (!formData.message.trim()) nextErrors.message = 'Project description is required.';

    setErrors(nextErrors);

    if (Object.keys(nextErrors).length > 0) {
      setSuccess('');
      return;
    }

    setSuccess('Thank you. Your project request has been submitted successfully.');
    setFormData(initialForm);
  }

  return (
    <PageShell>
      <PageHero
        eyebrow="Get in Touch"
        title="Need forward-thinking software? Get in touch with us."
        text="Tell us what you need. We can help with web applications, mobile applications, UI/UX design, dedicated teams, support, and maintenance."
        image="/assets/advanced/office-glass.jpg"
      />

      <MotionSection className="section-pad">
        <div className="mx-auto grid max-w-7xl gap-10 lg:grid-cols-[.9fr_1.1fr]">
          <div>
            <span className="rounded-full bg-orange-100 px-5 py-2 text-sm font-black uppercase tracking-[0.25em] text-orange-700">Contact Details</span>
            <h2 className="mt-6 text-4xl font-black leading-tight text-zinc-950 md:text-5xl">Start with a simple project message.</h2>
            <p className="mt-6 text-lg leading-8 text-zinc-600">Use the form to explain your software idea, service need, or support request. The current form is frontend-only and ready for future API integration.</p>

            <div className="mt-8 grid gap-4">
              {contactCards.map((card) => (
                <div key={card.title} className="card-hover flex gap-5 rounded-[2rem] bg-zinc-950 p-6 text-white">
                  <Image src={card.icon} alt="" width={58} height={58} className="h-14 w-14 rounded-2xl bg-white p-2 object-contain" />
                  <div>
                    <p className="font-black text-orange-300">{card.title}</p>
                    <p className="mt-3 leading-7 text-zinc-300">{card.text}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <form onSubmit={handleSubmit} className="rounded-[2.5rem] bg-white p-7 shadow-2xl shadow-orange-100/80 md:p-9">
            <div className="grid gap-5 md:grid-cols-2">
              <label className="font-bold">First Name<input name="firstName" value={formData.firstName} onChange={handleChange} className="focus-ring mt-2 w-full rounded-2xl border border-zinc-200 px-4 py-3 outline-none focus:border-orange-400" /></label>
              <label className="font-bold">Last Name<input name="lastName" value={formData.lastName} onChange={handleChange} className="focus-ring mt-2 w-full rounded-2xl border border-zinc-200 px-4 py-3 outline-none focus:border-orange-400" /></label>
              <label className="font-bold">Company/Organization<input name="company" value={formData.company} onChange={handleChange} className="focus-ring mt-2 w-full rounded-2xl border border-zinc-200 px-4 py-3 outline-none focus:border-orange-400" /></label>
              <label className="font-bold">Email<input name="email" value={formData.email} onChange={handleChange} className="focus-ring mt-2 w-full rounded-2xl border border-zinc-200 px-4 py-3 outline-none focus:border-orange-400" /></label>
              <label className="font-bold">Phone Number<input name="phone" value={formData.phone} onChange={handleChange} className="focus-ring mt-2 w-full rounded-2xl border border-zinc-200 px-4 py-3 outline-none focus:border-orange-400" /></label>
              <label className="font-bold">I am Interested In<select name="interest" value={formData.interest} onChange={handleChange} className="focus-ring mt-2 w-full rounded-2xl border border-zinc-200 px-4 py-3 outline-none focus:border-orange-400">{services.map((service) => <option key={service.title}>{service.title}</option>)}</select></label>
            </div>
            <label className="mt-5 block font-bold">Project Description<textarea name="message" value={formData.message} onChange={handleChange} rows={5} className="focus-ring mt-2 w-full rounded-2xl border border-zinc-200 px-4 py-3 outline-none focus:border-orange-400" /></label>
            {Object.values(errors).map((error) => <p key={error} className="mt-3 font-bold text-red-600">{error}</p>)}
            {success ? <p className="mt-4 rounded-2xl bg-green-50 p-4 font-bold text-green-700">{success}</p> : null}
            <button type="submit" className="mt-6 w-full rounded-full bg-orange-500 px-8 py-4 font-black text-white transition hover:-translate-y-1 hover:bg-zinc-950">Submit Request</button>
            <div className="mt-6 rounded-2xl bg-[#fff7eb] p-5 text-sm leading-7 text-zinc-600">
              <strong className="text-zinc-950">Live Preview:</strong> {formData.firstName || 'Your name'} is interested in {formData.interest}.
            </div>
          </form>
        </div>
      </MotionSection>
    </PageShell>
  );
}
