import "./css/about.css"
import aboutImage from "./image/about-profile-image.png"

function About() {
  return (
    <section id="about">
        <div className="container">
            <h1 className="sectionTitle">About <span>Me</span></h1>
            <h3 className="sectionHeadline">My introduction</h3>
            <div className="about-container">
                <div className="aboutContent">
                    <p><img className="floatAboutImg" src={aboutImage} width="350px" alt="aboutImage" />My name is Prabhakar Kumar. I am a Frontend Developer. When I passed 10th, I became interested in App Development due to which I started learning Programming Languages. First of all I started learning Java language. After learning it till intermediate I came to know that Google has created a language called Kotlin for App Development and then I started learning Kotlin. I learned about the basics needed to develop an App and then created one or two smaller Apps. Later I chose web development for a few reasons. After learning HTML, CSS and JavaScript, I also created 5-6 projects. After that came my 12th final exams due to which I stayed away from Web Development for a few months. After the exams were over, I moved ahead with my Web Development journey.<br/><br/>
                    <div>
                        <div className="box">
                            <h2><i style={{color:"#00ccff"}} class="fa-solid fa-award"></i> &nbsp; Experience</h2>
                            <p>02+ Years</p>
                        </div>
                        <div className="box">
                            <h2><i style={{color:"#00ccff"}} class="fa-solid fa-book-open-reader"></i> &nbsp; Education</h2>
                            <p>BCA Bachelors Degree</p>
                        </div>
                    </div>
                    </p>
                </div>
                <div className="aboutImage">
                    <img src={aboutImage} width="100%" alt="aboutImage" />
                </div>
            </div>
        </div>
    </section>
  )
}

export default About
