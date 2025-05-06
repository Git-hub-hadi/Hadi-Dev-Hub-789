import React from "react"
const ProjectCard = ({ project }) => {
  const { title, description, image, tags, demoLink, codeLink } = project
  
  return (
    <div className="card flex flex-col h-full">
      <div className="h-56 overflow-hidden">
        <img 
          src={image} 
          alt={title} 
          className="w-full h-full object-cover transition-transform hover:scale-105 duration-700" 
        />
      </div>
      <div className="p-6 flex flex-col flex-grow">
        <h3 className="text-xl font-bold text-dark-800 mb-2">{title}</h3>
        <p className="text-dark-600 mb-4 flex-grow">{description}</p>
        
        <div className="mb-4 flex flex-wrap gap-2">
          {tags.map((tag, index) => (
            <span 
              key={index} 
              className="bg-primary-100 text-primary-800 px-2 py-1 text-sm rounded-md"
            >
              {tag}
            </span>
          ))}
        </div>
        
        <div className="flex space-x-3">
          <a 
            href={demoLink} 
            target="_blank" 
            rel="noopener noreferrer" 
            className="btn-primary text-sm py-1.5"
          >
            Live Demo
          </a>
          {/* <a 
            href={codeLink} 
            target="_blank" 
            rel="noopener noreferrer" 
            className="btn-outline text-sm py-1.5"
          >
            View Code
          </a> */}
        </div>
      </div>
    </div>
  )
}

export default ProjectCard

