import { useLoaderData } from "react-router-dom";

function Projects(props) {

  const projects = useLoaderData()

    return projects.map((project) => (
      <div>
        <h2>{project.name}</h2>
        <img src={project.image} />
        <a href={project.githubLink}><br></br>
          <button>Github</button>
        </a>
        <a href={project.deployedLink}>
          <button>Live site</button> <br></br>
        </a>
      </div>
    ));
}

export default Projects;

  