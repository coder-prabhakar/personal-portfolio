import "./css/home.css"
import profileImage from "./image/main-image.png"

function Home() {
  return (
    <div id="home" className="home">
        <p className="headerName" style={{color:"white"}}>Pr<span style={{color:"#0891B2"}}>abhak</span>ar</p>
        <div className="container">
            <div className="image">
                <img src={profileImage} width="100%" alt="" />
            </div>
            <div className="home-content">
                <p className="hellowText">Hello!</p>
                <p className="nameText">My Name is Prabhakar</p>
                <p className="workRoleText">Frontend Developer</p>
                <div className="icon">
                    <i class="fa-brands fa-github"></i>
                    <i class="fa-brands fa-linkedin"></i>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Home
