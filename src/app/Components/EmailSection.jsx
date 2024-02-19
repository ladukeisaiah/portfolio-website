import React from 'react';
import GitHubIcon from "../../../public/github-icon.svg";
import LinkedinIcon from "../../../public/linkedin-icon.svg";
import Link from 'next/link';
import Image from 'next/image';

const EmailSection = () => {
  return (
    <section 
        id="contact"
        className='grid md:grid-cols-2 my-12 md:my-12 py-24 gap-4'
        > 

        <div className="bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-primary-900 to-transparent rounded-full h-80 w-80 z-0 blur-lg absolute top-3/4 -left-4 transform -translate-x-1/2 -translate-1/2"></div>
        <div className='z-10'>
            <h5 className='text-xl font-bold text-white my-2'>Let's Connect</h5>
            <p className='text-[#ADB7BE] mb-4 max-w-md'>
            {" "}
            I'm currently looking for new opportunities and would love to connect.
            Whether you have a question or just want to say hi, I'll try my best 
            to get back to you!
            </p>
            <div className='socials flex flex-row gap-2'>
                <Link href="https://github.com/ladukeisaiah">
                    <Image src={GitHubIcon} alt="Github Icon" />
                </Link>
                <Link href="www.linkedin.com/in/isaiah-laduke-04074218b">
                    <Image src={LinkedinIcon} alt="Linkedin Icon" />
                </Link>
            </div>
        </div>
        <div>
            <form className='flex flex-col'>
                <div className='mb-6'>
                <label 
                htmlFor="email" 
                className='text-white block text-sm mb-2 font-medium'>
                    Your Email
                </label>
                <input 
                type="email" 
                id="email" 
                className='bg-[#18191E] border border-[#33353F] placeholder-[#9CA2A9] text-gray-100 text-sm rounded-lg block w-full p-2.5'
                required placeholder="ladukeisaiah@gmail.com" />
                </div>
                <div className='mb-6'>
                <label 
                htmlFor="subject" 
                className='text-white block text-sm mb-2 font-medium'>
                    Subject
                </label>
                <input 
                type="text" 
                id="subject" 
                className='bg-[#18191E] border border-[#33353F] placeholder-[#9CA2A9] text-gray-100 text-sm rounded-lg block w-full p-2.5'
                required placeholder="Wanting to Connect!" />
                </div>
                <div className='mb-6'>
                    <label 
                    htmlFor='message'
                    className='text-white block text-sm mb-2 font-medium'
                    >
                        Message
                    </label>
                    <textarea
                        name="message"
                        id='message'
                        className='bg-[#18191E] border border-[#33353F] placeholder-[#9CA2A9] text-gray-100 text-sm rounded-lg block w-full p-2.5'
                        placeholder='Leave your message here...'
                        />
                </div>
                <button type='submit'
                className='bg-purple-500 hover:bg-purple-600 text-white font-medium py-2.5 px-5 rounded-lg w-full'> 
                    Send Message
                </button>
            </form>
        </div>
    </section>
  );
  
};

export default EmailSection