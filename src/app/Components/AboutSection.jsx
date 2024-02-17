import React from 'react';
import Image from "next/image";

const AboutSection = () => {
  return (
    <section className='text-white'>
        <div className='md:grid md:grid-cols-2 gap-8 items-center py-8 px-4 xl:gap-16 sm:py-16 xl:px-16'>
        <Image src="/images/about-page-image.png" width={500} height={500} />
        <div>
            <h2>About Me</h2>
            <p>I am a full stack web developer with a passion for creating
                interactive and responsive web applications. I have experience
                working with JavaScript, React, Node.js, PostgreSQL, Java, Python,
                HTML, CSS, and Git. I am a fast learner, who is always looking to
                expand my knowledge and skill set. I am a team player and I am
                excited to work with others to create amazing applications.
            </p>
        </div>
        </div>
    </section>
  )
}

export default AboutSection