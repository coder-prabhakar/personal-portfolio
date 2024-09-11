import "./css/skills.css"

function Skills() {

    const skillsData = require('../data.json')

  return (
    <section id="skills">
        <div className="container">
            <h1 className="sectionTitle">My <span>Skills</span></h1>
            <p className="sectionHeadline">My Expertise</p>
            <div className="skillShowContainer">
                {
                    skillsData.skillData.map((item,index)=>(
                        <div className="box">
                            <div><i style={{color:item.color}} class={item.iconClass}></i></div>
                            <div>
                                <h1>{item.skillName}</h1>
                                <p>{item.skillStatus}</p>
                            </div>
                        </div>
                    ))
                }
                
            </div>
        </div>
    </section>
  )
}

export default Skills;
