import ProjectCard from './ProjectCard'
const Projects = () => {
  const projects = [
    {
      title: "Stree Free Services",
      description: "It is a cleaning service website based in Dubai, then it likely offers professional cleaning services.",
    image: "./public/projectimage1 .jpg", // path relative to your project root
    tags: ["Html5", "CSS3", "Bootstrap5" , "Javascript"],
      demoLink: "https://stressfreedubai.com/",
            // codeLink: "#"
    },
    // {
    //   title: "Wrestling Belt Customization",
    //   description: "A website allowing customers to customize and order wrestling belts with various options.",
    //   image: {projectimage},
    //   tags: ["HTML", "CSS", "JavaScript"],
    //   demoLink: "https://customizewrestlingbelt.com/",
    //   codeLink: "#" // If available, replace with your code repo link
    // },
    {
      title: "ArbanHost Hosting Services",
      description: "A platform offering reliable hosting services with features like server management and customer support.",
      image: "./public/projectimage2.jpg", 
      tags: ["Html5", "CSS3", "Wordpress"],
      demoLink: "https://arbanhost.com/",
     
    },
    {
      title: "Handmade Jacket Maker",
      description: "An online store where customers can browse and purchase handmade jackets with customization options.",
      image: "./public/projectimage3.jpg", 
      tags: ["Shopify", "Liquidtheme"],
      demoLink: "https://www.handmadejacketmaker.com/",
      
    },
    {
      title: "Gymshark",
      description: "An online store for high-quality fitness apparel and accessories.",
      image: "./public/projectimage4.jpg", 
      tags: ["Wordpress", "E-commerce",],
      demoLink: "https://www.gymshark.com/",
      
    },
    {
      title: "Aim Services Social Media Agency",
      description: "An online store where customers can browse and purchase handmade jackets with customization options.",
      image: "./public/projectimage5.jpg", 
      tags: ["Html5", "Css3" , "Bootstrap5" , "J-qurey" , "Javscript" , "Node-js",],
      demoLink: "https://aimservicess.com/",
      
    },
    {
      title: "Aims Solar",
      description: "AIMs Solar is Pakistan’s premier provider of residential solar energy solutions.",
      image: "./public/projectimage6.jpg", 
      tags: ["Tailwind-Css", "React-js", "Node-js"],
      demoLink: "http://localhost:5174/",
      
    }
  ];

  return (
    <section id="projects" className="section">
      <div className="container-custom">
        <h2 className="section-title text-center">My Projects</h2>
        <p className="section-subtitle text-center mx-auto">
          Here are some of the projects I've worked on. Each project was an opportunity to learn and solve unique challenges.
        </p>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <ProjectCard key={index} project={project} />
          ))}
        </div>
        
        {/* <div className="text-center mt-12">
          <a href="https://github.com" target="_blank" rel="noopener noreferrer" className="btn-primary">
            View More on GitHub
          </a>
        </div> */}
      </div>
    </section>
  )
}
export default Projects;