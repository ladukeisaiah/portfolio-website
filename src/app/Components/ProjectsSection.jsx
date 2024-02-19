import React from 'react';
import ProjectCard from './ProjectCard';

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
  return (
    <>
    <div>ProjectsSection</div>
    <div>{projectsData.map((project) => <ProjectCard key={project.id} title={project.title} description={project.description} imgUrl={project.image}  />)}</div>
    </>
  );
};

export default ProjectsSection