"use client";
import React, { useState } from 'react';
import ProjectCard from './ProjectCard';
import ProjectTag from './ProjectTag';

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
        title: "Blog Post Website",
        description: "A blog website built with HTML, CSS, & JS, for sharing posts on forestry and allowing users to post their own blogs to the site as well.",
        image: "",
        tag: ["All", "Web"],
        gitUrl: "ladukeisaiah.github.io/trial-by-fire/",
        previewUrl: "/"
    },
]

const ProjectsSection = () => {
    const [tag, setTag] = useState("All");

    const handleTagChange = (newTag) => {
        setTag(newTag);
    };

    const filteredProjects = projectsData.filter((project) =>
        project.tag.includes(tag)
    );

  return (
    <>
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
    <div className='grid md:grid-cols-3 gap-8 md:gap-12'>
        {filteredProjects.map((project) => (
        <ProjectCard key={project.id} 
            title={project.title} 
            description={project.description} 
            imgUrl={project.image}
            gitUrl={project.gitUrl}
            previewUrl={project.previewUrl}  />
        ))}
    </div>
    </>
  );
};

export default ProjectsSection