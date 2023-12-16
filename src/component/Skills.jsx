import "./css/skills.css"

function Skills() {
  return (
    <section id="skills">
        <div className="container">
            <h1 className="sectionTitle">My <span>Skills</span></h1>
            <p className="sectionHeadline">My Expertise</p>
            <div className="skillShowContainer">
                <div className="box">
                    <div><i style={{color:"#e34c26"}} class="fa-brands fa-html5"></i></div>
                    <div>
                        <h1>HTML</h1>
                        <p>Experienced</p>
                    </div>
                </div>
                <div className="box">
                    <div><i style={{color:"#264de4"}} class="fa-brands fa-css3-alt"></i></div>
                    <div>
                        <h1>CSS</h1>
                        <p>Experienced</p>
                    </div>
                </div>
                <div className="box">
                    <div><i style={{color:"#fce300"}} class="fa-brands fa-square-js"></i></div>
                    <div>
                        <h1>JavaScript</h1>
                        <p>Intermediate</p>
                    </div>
                    
                </div>
                <div className="box">
                    <div><i style={{color:"#60c700"}} class="fa-brands fa-node-js"></i></div>
                    <div>
                        <h1>Node js</h1>
                        <p>Basic</p>
                    </div>
                </div>
                <div className="box">
                    <div><i style={{color:"#00aeff"}} class="fa-brands fa-react"></i></div>
                    <div>
                        <h1>React js</h1>
                        <p>Basic</p>
                    </div>
                </div>
                <div className="box">
                    <div><i style={{color:"#f1502f"}} class="fa-brands fa-git-alt"></i></div>
                    <div>
                        <h1>GIT</h1>
                        <p>Basic</p>
                    </div>
                </div>
            </div>
        </div>
    </section>
  )
}

export default Skills
