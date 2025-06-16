'use client'
import { assets } from '@/assets/assets'
import Image from 'next/image'
import React, { useState, useRef } from 'react'
import { motion } from "motion/react"
import ReCAPTCHA from 'react-google-recaptcha'

const Contact = () => {
  
  const [result, setResult] = useState("");
  const [errors, setErrors] = useState({});
  const captchaRef = useRef();
  const [captchaToken, setCaptchaToken] = useState('');

  const validate = (fields) => {
    const errs = {};
    if (!fields.name || fields.name.trim().length < 2) errs.name = 'Name must be at least 2 characters.';
    if (!fields.email || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(fields.email)) errs.email = 'Enter a valid email.';
    if (!fields.phone || !/^[0-9\-\+\s\(\)]{7,20}$/.test(fields.phone)) errs.phone = 'Enter a valid phone number.';
    if (!fields.message || fields.message.trim().length < 10) errs.message = 'Message must be at least 10 characters.';
    if (!captchaToken) errs.captcha = 'Please complete the captcha.';
    return errs;
  };

  const onSubmit = async (event) => {
    event.preventDefault();
    const formData = new FormData(event.target);
    const fields = Object.fromEntries(formData.entries());
    const validationErrors = validate(fields);
    setErrors(validationErrors);
    if (Object.keys(validationErrors).length > 0) return;
    setResult('Sending....');
    formData.append('access_key', '424597d8-12b9-49ee-ad7d-5917b112e1e0');
    formData.append('g-recaptcha-response', captchaToken);
    const response = await fetch('https://api.web3forms.com/submit', {
      method: 'POST',
      body: formData
    });
    const data = await response.json();
    if (data.success) {
      setResult('Form Submitted Successfully');
      event.target.reset();
      setErrors({});
      setCaptchaToken('');
    } else {
      setResult(data.message);
    }
  };
  
  
  return (
    <motion.div 
      initial={{opacity: 0}}
      whileInView={{opacity: 1}}
      transition={{duration: 1}}
      id='contact' className='w-full py-16 flex flex-col items-center justify-center bg-[var(--background)]'>
        <motion.h4 
          initial={{opacity: 0, y: -20}}
          whileInView={{opacity: 1, y:0}}
          transition={{duration: 0.3, delay: 0.5}}
          className='text-center mb-2 text-lg font-Ovo text-[var(--text-secondary)] dark:text-[var(--accent-color)]'>Connect With Shivendra</motion.h4>
        <motion.h2 
          initial={{opacity: 0, y: -20}}
          whileInView={{opacity: 1, y:0}}
          transition={{duration: 0.5, delay: 0.5}}
          className='text-center text-5xl font-Ovo text-[var(--text-primary)] mb-2'>Get in Touch</motion.h2>

        <motion.p 
          initial={{opacity: 0}}
          whileInView={{opacity: 1}}
          transition={{duration: 0.5, delay: 0.7}}
          className='text-center max-w-2xl mx-auto mt-5 mb-12 font-Ovo text-[var(--text-secondary)]'>
            I would love to hear from you! If you have any questions, comments or feedback
            please use the form below.
        </motion.p>

        <motion.form 
          initial={{opacity: 0}}
          whileInView={{opacity: 1}}
          transition={{duration: 0.5, delay: 0.9}}
          onSubmit={onSubmit}
          className='w-full max-w-xl mx-auto bg-[var(--card-bg)] dark:bg-[var(--card-bg)] rounded-2xl shadow-lg p-8 flex flex-col gap-6 border border-[var(--border-color)]'>
          <div className='flex flex-col md:flex-row flex-wrap gap-4'>
            <motion.input 
              initial={{opacity: 0, x: -50}}
              whileInView={{opacity: 1, x:0}}
              transition={{duration: 0.6, delay: 1.1}}
              type="text" placeholder='Enter your name' required 
              className='flex-1 min-w-0 basis-1/3 p-3 outline-none border-[0.5px] border-gray-400 rounded-md bg-[var(--card-bg)] dark:bg-darkHover/30 dark:border-white/90' name='name'/>
            {errors.name && <span className='text-red-500 text-xs'>{errors.name}</span>}
            <motion.input 
              initial={{opacity: 0, x: 50}}
              whileInView={{opacity: 1, x:0}}
              transition={{duration: 0.6, delay: 1.2}}
              type="email" placeholder='Enter your email' required 
              className='flex-1 min-w-0 basis-1/3 p-3 outline-none border-[0.5px] border-gray-400 rounded-md bg-[var(--card-bg)] dark:bg-darkHover/30 dark:border-white/90' name='email'/>
            {errors.email && <span className='text-red-500 text-xs'>{errors.email}</span>}
            <motion.input 
              initial={{opacity: 0, x: 0}}
              whileInView={{opacity: 1, x:0}}
              transition={{duration: 0.6, delay: 1.3}}
              type="tel" placeholder='Enter your phone number' required 
              pattern='[0-9\-\+\s\(\)]{7,20}'
              className='flex-1 min-w-0 basis-1/3 p-3 outline-none border-[0.5px] border-gray-400 rounded-md bg-[var(--card-bg)] dark:bg-darkHover/30 dark:border-white/90' name='phone'/>
            {errors.phone && <span className='text-red-500 text-xs'>{errors.phone}</span>}
          </div>
          <motion.textarea 
            initial={{opacity: 0, y: 100}}
            whileInView={{opacity: 1, y:0}}
            transition={{duration: 0.6, delay: 1.3}}
            rows='6' placeholder='Please enter your message' required
            className='w-full p-4 outline-none border-[0.5px] border-gray-400 rounded-md bg-[var(--card-bg)] mb-6 dark:bg-darkHover/30 dark:border-white/90' name='message'>
          </motion.textarea>
          {errors.message && <span className='text-red-500 text-xs'>{errors.message}</span>}
          {/* Captcha widget */}
          <div className='my-4'>
            <ReCAPTCHA
              sitekey='6LcWZIrAAAAAB5Ck9XLBN1lDhNElSb2xSYyJ5IlI'
              onChange={token => setCaptchaToken(token)}
              theme='dark'
            />
            {errors.captcha && <span className='text-red-500 text-xs'>{errors.captcha}</span>}
          </div>
          <motion.button 
            whileHover={{scale: 1.05}}
            transition={{duration: 0.3}}
            type='submit'
            className='py-3 px-8 w-max flex items-center justify-between gap-2 bg-[var(--accent-color)] text-white rounded-full mx-auto hover:bg-[var(--accent-dark)] duration-500 dark:bg-[var(--accent-color)] dark:hover:bg-[var(--accent-dark)]'>
            Submit Now <Image src={assets.right_arrow_white} alt=''/></motion.button>
          <p className='mt-2 text-center text-[var(--accent-color)]'>
              {result}
          </p>
        </motion.form>
    </motion.div>
  )
}

export default Contact

