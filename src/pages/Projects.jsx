import { useState, useEffect } from 'react'

function Projects() {
    const [projects, setProjects] = useState(null)

    const getProjectsData = async () => {
        const response = await fetch("./projects.json")
        const data = await response.json()
        setProjects(data)
    }

    useEffect(() => {getProjectsData()}, [])

    const loaded = () => {
        return projects.map((project, idx) => (
            <div key={idx}>
                {/* <img src={project.image} /> */}
                <h3>{project.name}</h3>
                <a href={project.git}>
                    <button>Github</button>
                </a>
                <a href={project.live}>
                    <button>Live Site</button>
                </a>
            </div>
        ))
    }
    return projects ? loaded() : <h1>Loading...</h1>
}

export default Projects;