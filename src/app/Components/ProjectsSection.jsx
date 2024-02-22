"use client";
import React, { useState, useRef } from 'react';
import ProjectCard from './ProjectCard';
import ProjectTag from './ProjectTag';
import { motion, useInView } from "framer-motion";

const projectsData = [
    {
        id: 1,
        title: "Vacation Budgeting Android Mobile App",
        description: "An Android Mobile Application built with Java, Maven, Room Interface, and SQLite, for users to budget and track their vacations.",
        image: "/images/projects/VACAYBUDMAIN.png",
        tag: ["All", "Mobile"],
        gitUrl: "https://github.com/ladukeisaiah/Capstone-Android-Mobile-Application/tree/dev-capstone-branch",
        previewUrl: "/"
    },
    {
        id: 2,
        title: "Registration Form",
        description: "A project creating registration forms using HTML & CSS",
        image: "/images/projects/registration-form.png",
        tag: ["All", "Web"],
        gitUrl: "https://github.com/ladukeisaiah/registration-form",
        previewUrl: "/"
    },
    {
        id: 3,
        title: "Blog Post Website",
        description: "A blog website built with HTML, CSS, & JS, for sharing posts on forestry and allowing users to post their own blogs to the site as well.",
        image: "",
        tag: ["All", "Web"],
        gitUrl: "ladukeisaiah.github.io/trial-by-fire/",
        previewUrl: "/"
    },
    {
        id: 4,
        title: "SVG World Map",
        description: "An SVG world map using REST APIs in order to gather data from worldbank.org and displaying them as countries are selected",
        image: "/images/projects/svg-world-map.png",
        tag: ["All", "Web"],
        gitUrl: "https://github.com/ladukeisaiah/SVG-World-Map",
        previewUrl: "/"
    },
    {
        id: 5,
        title: "Quiz",
        description: "This project is a quiz application built with HTML and CSS",
        image: "/images/projects/quiz.png",
        tag: ["All", "Web"],
        gitUrl: "https://github.com/ladukeisaiah/accessibility-quiz",
        previewUrl: "/"
    },
    {
        id: 6,
        title: "Cafe Menu",
        description: "This is a cafe menu built using HTML & CSS",
        image: "/images/projects/cafe-menu.png",
        tag: ["All", "Web"],
        gitUrl: "https://github.com/ladukeisaiah/cafe-menu",
        previewUrl: "/"
    },
    {
        id: 7,
        title: "Cat Photo App",
        description: "A web app displaying HTML & CSS",
        image: "/images/projects/cat-photo-app.png",
        tag: ["All", "Web"],
        gitUrl: "https://github.com/ladukeisaiah/cat-photo-app",
        previewUrl: "/"
    },
    {
        id: 8,
        title: "Rothko Painting",
        description: "A project for practicing CSS design styles and their capabilities",
        image: "/images/projects/rothko-painting.png",
        tag: ["All", "Web"],
        gitUrl: "https://github.com/ladukeisaiah/Rothko-painting",
        previewUrl: "/"
    },
    {
        id: 9,
        title: "Nutrition Label",
        description: "This project is for practicing CSS design principals by building out a nutrition label",
        image: "/images/projects/nutrition-label.png",
        tag: ["All", "Web"],
        gitUrl: "https://github.com/ladukeisaiah/nutrition-label",
        previewUrl: "/"
    },
    {
        id: 10,
        title: "Flexbox Photo Gallery",
        description: "A project for practing CSS flex-box designs principles",
        image: "/images/projects/Flexbox-photo-gallery.png",
        tag: ["All", "Web"],
        gitUrl: "https://github.com/ladukeisaiah/flexbox-photo-gallery",
        previewUrl: "/"
    },
    {
        id: 11,
        title: "Color Markers",
        description: "A project for practing CSS color designs and principles",
        image: "/images/projects/color-markers.png",
        tag: ["All", "Web"],
        gitUrl: "https://github.com/ladukeisaiah/flexbox-photo-gallery",
        previewUrl: "/"
    }
]

const ProjectsSection = () => {
    const [tag, setTag] = useState("All");
    const ref = useRef(null);
    const isInView = useInView(ref, { once: true });

    const handleTagChange = (newTag) => {
        setTag(newTag);
    };

    const filteredProjects = projectsData.filter((project) =>
        project.tag.includes(tag)
    );

    const cardVariants = {
        initial: { y: 50, opacity: 0},
        animate: { y: 0, opacity: 1},
    }

  return (
    <section id="projects">
    <h2 className='text-center text-4xl font-bold text-white mt-4 mb-8 md:mb-12'>
        My Projects
    </h2>
    <div className='text-white flex flex-row justify-center items-center gap-2 py-6'>
        <ProjectTag 
        onClick={handleTagChange} 
        name="All" 
        isSelected={tag === "All"}
        />
        <ProjectTag 
        onClick={handleTagChange} 
        name="Web" 
        isSelected={tag === "Web"}
        />
        <ProjectTag 
        onClick={handleTagChange} 
        name="Mobile" 
        isSelected={tag === "Mobile"}
        />
        <ProjectTag 
        onClick={handleTagChange} 
        name="UX/UI Prototypes" 
        isSelected={tag === "UX/UI Prototypes"}
        />
    </div>
    <ul ref={ref} className='grid md:grid-cols-3 gap-8 md:gap-12'>
        {filteredProjects.map((project, index) => (
        <motion.li key={index} 
        variants={cardVariants} 
        initial="initial" 
        animate={isInView ? "animate" : "initial"}
        transition={{duration: 0.3, delay: index * 0.4}}
        >
        <ProjectCard key={project.id} 
            title={project.title} 
            description={project.description} 
            imgUrl={project.image}
            gitUrl={project.gitUrl}
            previewUrl={project.previewUrl}  />
        </motion.li>
        ))}
    </ul>
    </section>
  );
};

export default ProjectsSection