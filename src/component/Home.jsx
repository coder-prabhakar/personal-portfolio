import "./css/home.css"
import profileImage from "./image/main-image.png"

function Home() {
  return (
    <div id="home" className="home">
        {/* Web Name */}
        <p className="headerName" style={{color:"white"}}>Pr<span style={{color:"#0891B2"}}>abhak</span>ar</p>

        <div className="container">

            {/* Home Image */}
            <div className="image">
                <img src={profileImage} width="100%" alt="" />
            </div>

            <div className="home-content">
                <p className="hellowText">Hello!</p>
                <p className="nameText">My Name is Prabhakar</p>
                <p className="workRoleText">Frontend Developer</p>
                <div className="icon">

                    {/* Github Logo */}
                    <a
                    href="https://github.com/coder-prabhakar"
                    target="_blank"
                    rel="noreferrer"
                    style={{all:'unset'}}
                    >
                        <i class="fa-brands fa-github"></i>
                    </a>

                    {/* Linkedin Logo */}
                    <a
                    href="https://www.linkedin.com/in/prabhakar-kumar-b08a9b231/"
                    target="_blank"
                    rel="noreferrer"
                    >
                        <i class="fa-brands fa-linkedin"></i>
                    </a>
                    
                </div>
            </div>
            
        </div>
    </div>
  )
}

export default Home;