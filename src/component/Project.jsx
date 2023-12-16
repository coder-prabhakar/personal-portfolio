import "./css/project.css"
import DentalCare from "./image/dentalcare-website.jpg"
import Ecommerce from "./image/fashion-website.jpg"
import MovieReview from "./image/movie-review-website.jpg"

function Project() {
  return (
    <section className="project" id="projects">
        <div className="container">
            <h1 className="sectionTitle">My <span>Projects</span></h1>
            <p className="sectionHeadline">My Recent Works</p>
            <div className="projectShowContainer">
              <div className="projectBox">
                <img src={DentalCare} alt="dentalcare"/>
                <p className="websiteName">DentalCare</p>
                <div>
                  <span>Live Demo</span>
                  <span>Github</span>
                </div>
              </div>
              <div className="projectBox">
                <img src={Ecommerce} alt="ecommerce"/>
                <p className="websiteName">Ecommerce</p>
                <div>
                  <span>Live Demo</span>
                  <span>Github</span>
                </div>
              </div>
              <div className="projectBox">
                <img src={MovieReview} alt="movie"/>
                <p className="websiteName">Movie Review</p>
                <div>
                  <span>Live Demo</span>
                  <span>Github</span>
                </div>
              </div>
            </div>
        </div>
    </section>
  )
}

export default Project
