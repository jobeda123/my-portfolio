'use client'

interface ProjectCardProps {
  title: string
  description: string
}

function ProjectCard({ title, description }: ProjectCardProps) {
  return (
    <div className="p-6 rounded-lg bg-gray-800">
      <h3 className="text-xl font-semibold mb-2">{title}</h3>
      <p>{description}</p>
    </div>
  )
}

export default function ProjectsSection() {
  const projects = [
    {
      title: "Project 1",
      description: "A showcase of state management with Zustand"
    },
    {
      title: "Project 2", 
      description: "Another amazing project using modern technologies"
    }
  ]

  return (
    <div className="max-w-4xl mx-auto">
      <h2 className="text-3xl font-bold mb-6">My Projects</h2>
      <div className="grid md:grid-cols-2 gap-6">
        {projects.map((project, index) => (
          <ProjectCard 
            key={index}
            title={project.title}
            description={project.description}
          />
        ))}
      </div>
    </div>
  )
}
