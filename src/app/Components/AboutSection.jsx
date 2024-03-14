"use client";
import React, { useTransition, useState } from 'react';
import Image from "next/image";
import TabButton from './TabButton';


const TAB_DATA = [
  {
    title: "Skills",
    id: "skills",
    content: (
      <ul className='list-disc pl-2'>
      <li>React</li>
      <li>T3 Stack</li>
      <li>Next.js</li>
      <li>TypeScript</li>
      <li>JavaScript</li>
      <li>Java</li>
      <li>Python</li>
      <li>HTML</li>
      <li>CSS</li>
      <li>Tailwind CSS</li>
      <li>Node.js</li>
      <li>Firebase Google Cloud</li>
      <li>Prisma</li>
      <li>PostgreSQL</li>
      <li>MySQL</li>
      </ul>
    )
  },
  {
    title: "Education",
    id: "education",
    content: (
      <ul className='list-disc pl-2'>
      <li>Western Governor&apos;s University, Utah</li>
      </ul>
    )
  },
  {
    title: "Certifications",
    id: "certifications",
    content: (
      <ul className='list-disc pl-2'>
      <li>AWS Cloud Practicioner</li>
      <li>CompTIA Project+ Certified</li>
      <li>Google IT Support Professional</li>
      </ul>
    ),
  },

];

const AboutSection = () => {

  const [tab, setTab] = useState("skills");
  const [isPending, startTransition] = useTransition();

  const handleTabChange = (id) => {
    startTransition(() => {
      setTab(id);
    });
  };

  return (
    <section id="about" className='text-white'>
        <div className='md:grid md:grid-cols-2 gap-8 items-center py-8 px-4 xl:gap-16 sm:py-16 xl:px-16'>
        <Image src="/images/about-page-image.png" width={500} height={500} alt="about-page-image"/>
        <div className='mt-4 md:mt-0 text-left flex flex-col h-full'>
            <h2 className='text-4xl font-bold text-white mb-4'>About Me</h2>
            <p className='text-base md:text-lg'>
              I am a full stack web developer with a passion for creating
                interactive and responsive web and mobile applications. I have experience
                working with JavaScript, React, Next.js, Node.js, PostgreSQL, Java, Python,
                HTML, CSS, and Git. My future desire is to dive deaper into Machine Learning &
                Augmented Reality. I am a fast learner, who is always looking to
                expand my knowledge and skill set. I am a team player and I am
                excited to work with others to create amazing applications.
            </p>
            <div className='flex flex-row mt-8'>
              <TabButton selectTab={() => handleTabChange("skills")} 
              active={tab === "skills"}
              > 
              {" "}
              Skills{" "} 
              </TabButton>
              <TabButton selectTab={() => handleTabChange("education")} 
              active={tab === "education"}
              > 
              {" "}
              Education{" "} 
              </TabButton>
              <TabButton selectTab={() => handleTabChange("certifications")} 
              active={tab === "certifications"}
              > 
              {" "}
              Certifications{" "} 
              </TabButton>
            </div>
            <div className='mt-8'>{TAB_DATA.find((t) => t.id === tab).content}</div>
        </div>
        </div>
    </section>
  )
}

export default AboutSection