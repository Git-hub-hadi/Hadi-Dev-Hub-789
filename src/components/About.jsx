import SkillCard from './Skills'

const About = () => {
  const skills = [
    {
      title: "Frontend Development",
      icon: "💻",
      description: "Building responsive websites with HTML, CSS, JavaScript, React, and other modern frontend technologies."
    },
    {
      title: "Backend Development",
      icon: "⚙️",
      description: "Creating robust server-side applications using Node.js, Express, and various database technologies."
    },
    {
      title: "UI/UX Design",
      icon: "🎨",
      description: "Designing intuitive and engaging user interfaces with focus on user experience and accessibility."
    },
    {
      title: "Performance Optimization",
      icon: "⚡",
      description: "Improving website speed and performance through various optimization techniques and best practices."
    }
  ]

  return (
    <section id="about" className="section bg-dark-50">
      <div className="container-custom">
        <h2 className="section-title text-center">About Me</h2>
        <p className="section-subtitle text-center mx-auto">
          A passionate front-end developer skilled in creating engaging, responsive websites using HTML, CSS, JavaScript, and modern frameworks. I love turning ideas into visually appealing, user-friendly experiences."
        </p>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
          <div>
            <h3 className="text-2xl font-bold text-dark-800 mb-4">My Journey</h3>
            <p className="text-dark-600 mb-4">
            Creating beautiful and functional websites has always been my passion. My journey began with a curiosity for how websites work and a desire to bring ideas to life digitally.            </p>
            <p className="text-dark-600 mb-4">
            I started learning HTML and CSS, experimenting with building simple pages. Over time, I delved into JavaScript, excited by how it can make websites interactive and dynamic.
            I worked on freelance projects and internships, applying my knowledge to real-world scenarios—designing sleek interfaces, optimizing user experience, and collaborating with teams.
            </p>
            <p className="text-dark-600">
            My mission is to create beautiful, accessible, and high-performance websites that delight users and help businesses grow. I am eager to take on new challenges and contribute to innovative projects.
            </p>
          </div>
          <div>
            <h3 className="text-2xl font-bold text-dark-800 mb-4">Education & Experience</h3>
            <div className="mb-6">
              <h4 className="text-xl font-medium text-dark-800">Bachelor of Science in Computer Science </h4>
              <p className="text-dark-500">University of South Asia • 2019-2022</p>
            </div>
            <div className="mb-6">
              <h4 className="text-xl font-medium text-dark-800">Shopify/Wordpress Developer</h4>
              <p className="text-dark-500">Development Logix Digital Marketing Agency Pakistan • 2022-2023</p>
            </div>
            <div className="mb-6">
              <h4 className="text-xl font-medium text-dark-800">Frontend Developer</h4>
              <p className="text-dark-500">Aims It Solutions Software Company • 2025-present</p>
            </div>
          </div>
        </div>
        
        <h3 className="text-2xl font-bold text-dark-800 mb-8 text-center">My Skills</h3>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {skills.map((skill, index) => (
            <SkillCard key={index} title={skill.title} icon={skill.icon} description={skill.description} />
          ))}
        </div>
      </div>
    </section>
  )
}

export default About