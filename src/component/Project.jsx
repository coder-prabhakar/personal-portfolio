import "./css/project.css"
import { projectData } from "./Data/Data"

function Project() {
  
  return (
    <section className="project" id="projects">
      <div className="container">
        <h1 className="sectionTitle">My <span>Projects</span></h1>
        <p className="sectionHeadline">My Recent Works</p>
        <div className="projectShowContainer">
        {
          projectData.map((item,index)=>(
            <div className="projectBox" key={index}>
              <img src={item.img} alt={item.altText}/>
              <p className="websiteName">{item.webName}</p>
              <div>
                {
                  item.technology.map((value,index)=>
                    <span key={index}>{value}</span>
                  )
                }
              </div>
              <a href={item.gitHubLink} target="_blank">View on GitHub</a>
            </div>
          ))
        }
        </div>
      </div>
    </section>
  )
}

export default Project;