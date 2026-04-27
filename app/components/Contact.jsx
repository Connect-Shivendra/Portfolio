'use client'
import { assets } from '@/assets/assets'
import Image from 'next/image'
import React, { useState, useRef } from 'react'
import { motion } from "motion/react"
import ReCAPTCHA from 'react-google-recaptcha'
import { useDarkMode } from '@/app/context/DarkModeContext'

const Contact = () => {
  const [result, setResult] = useState("");
  const [errors, setErrors] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const captchaRef = useRef();
  const [captchaToken, setCaptchaToken] = useState('');
  const { isDarkMode } = useDarkMode();

  const validate = (fields) => {
    const errs = {};
    if (!fields.name || fields.name.trim().length < 2)
      errs.name = 'Name must be at least 2 characters.';
    if (!fields.email || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(fields.email))
      errs.email = 'Enter a valid email address.';
    if (fields.phone && !/^[0-9\-\+\s\(\)]{7,20}$/.test(fields.phone))
      errs.phone = 'Enter a valid phone number.';
    if (!fields.message || fields.message.trim().length < 10)
      errs.message = 'Message must be at least 10 characters.';
    if (!captchaToken)
      errs.captcha = 'Please complete the captcha.';
    return errs;
  };

  const onSubmit = async (event) => {
    event.preventDefault();
    const formData = new FormData(event.target);
    const fields = Object.fromEntries(formData.entries());
    const validationErrors = validate(fields);
    setErrors(validationErrors);
    if (Object.keys(validationErrors).length > 0) return;

    setIsSubmitting(true);
    setResult('Sending...');

    formData.append('access_key', process.env.NEXT_PUBLIC_WEB3FORMS_KEY);
    formData.append('g-recaptcha-response', captchaToken);

    try {
      const response = await fetch('https://api.web3forms.com/submit', {
        method: 'POST',
        body: formData,
      });
      const data = await response.json();
      if (data.success) {
        setResult('Message sent successfully. I\'ll be in touch soon!');
        event.target.reset();
        setErrors({});
        setCaptchaToken('');
        if (captchaRef.current) captchaRef.current.reset();
      } else {
        setResult(data.message || 'Something went wrong. Please try again.');
      }
    } catch {
      setResult('Network error. Please check your connection and try again.');
    } finally {
      setIsSubmitting(false);
    }
  };

  const inputClass = `w-full p-3 rounded-lg text-sm outline-none transition-all duration-300
    bg-[var(--background)] border border-[var(--border-color)]
    text-[var(--text-primary)] placeholder:text-[var(--text-secondary)]
    focus:border-[var(--accent-color)] focus:ring-1 focus:ring-[var(--accent-color)]/30`;

  return (
    <motion.section
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 1 }}
      id='contact'
      className='w-full py-20 px-6 md:px-[8%] flex flex-col items-center'
      style={{ background: 'var(--section-bg)' }}
    >
      <motion.p
        initial={{ opacity: 0, y: -10 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.4, delay: 0.2 }}
        className='heading-eyebrow'
      >
        Get in Touch
      </motion.p>

      <motion.h2
        initial={{ opacity: 0, y: -20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.3 }}
        className='heading-primary'
      >
        Let&apos;s Work Together
      </motion.h2>

      <div className='gold-divider' />

      <motion.p
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.5, delay: 0.5 }}
        className='text-center max-w-xl mx-auto mb-12 text-[var(--text-secondary)]'
      >
        Have a project in mind or want to discuss how data strategy can transform your business?
        I&apos;d love to hear from you.
      </motion.p>

      <motion.form
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.6 }}
        onSubmit={onSubmit}
        className='w-full max-w-2xl card-component p-8 md:p-10'
        noValidate
      >
        <div className='grid grid-cols-1 md:grid-cols-2 gap-4 mb-4'>
          <div>
            <input
              type="text"
              placeholder='Your name'
              name='name'
              className={inputClass}
              aria-label="Your name"
            />
            {errors.name && (
              <p className='text-red-400 text-xs mt-1'>{errors.name}</p>
            )}
          </div>
          <div>
            <input
              type="email"
              placeholder='Your email'
              name='email'
              className={inputClass}
              aria-label="Your email"
            />
            {errors.email && (
              <p className='text-red-400 text-xs mt-1'>{errors.email}</p>
            )}
          </div>
        </div>

        <div className='mb-4'>
          <input
            type="tel"
            placeholder='Phone number (optional)'
            name='phone'
            className={inputClass}
            aria-label="Phone number"
          />
          {errors.phone && (
            <p className='text-red-400 text-xs mt-1'>{errors.phone}</p>
          )}
        </div>

        <div className='mb-6'>
          <textarea
            rows='5'
            placeholder='Tell me about your project or enquiry...'
            name='message'
            className={inputClass}
            aria-label="Your message"
          />
          {errors.message && (
            <p className='text-red-400 text-xs mt-1'>{errors.message}</p>
          )}
        </div>

        <div className='mb-6'>
          <ReCAPTCHA
            ref={captchaRef}
            sitekey={process.env.NEXT_PUBLIC_RECAPTCHA_SITE_KEY}
            onChange={token => setCaptchaToken(token)}
            theme={isDarkMode ? 'dark' : 'light'}
          />
          {errors.captcha && (
            <p className='text-red-400 text-xs mt-1'>{errors.captcha}</p>
          )}
        </div>

        <button
          type='submit'
          disabled={isSubmitting}
          className='button-primary w-full justify-center disabled:opacity-60 disabled:cursor-not-allowed'
        >
          {isSubmitting ? 'Sending...' : 'Send Message'}
          {!isSubmitting && (
            <Image src={assets.right_arrow_white} alt='' className='w-4' />
          )}
        </button>

        {result && !isSubmitting && (
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className={`mt-4 text-center text-sm ${
              result.includes('successfully')
                ? 'text-green-400'
                : 'text-[var(--accent-color)]'
            }`}
          >
            {result}
          </motion.p>
        )}
      </motion.form>
    </motion.section>
  );
};

export default Contact;
