import "./css/footer.css"

function Footer() {
  return (
    <section className="footer" id="contact">
      <div className="container footer-content">
        <h1>CONTACT <span style={{color: "#0891B2"}}>ME</span></h1>
        <div className="contact-info">

          {/* Linkedin */}
          <a 
          href="https://www.linkedin.com/in/prabhakar-kumar-b08a9b231/" 
          target="_blank" 
          rel="noreferrer">
            <i style={{color:"#0077b5"}} class="fa-brands fa-linkedin"></i>
            <span>Linkedin</span>
          </a>

          {/* GitHub */}
          <a
          href="https://github.com/coder-prabhakar" 
          target="_blank" 
          rel="noreferrer">
            <i style={{color:"white"}} class="fa-brands fa-github"></i>
            <span>Github</span>
          </a>

          {/* Phone Number */}
          <p>
            <i style={{color:"#28D146"}} class="fa-brands fa-square-whatsapp"></i>
            <span>+91 950-875-1625</span>
          </p>

          {/* Mail */}
          <p className="contactEmail">
            <i style={{color:"#22ddca"}} class="fa-solid fa-envelope"></i>
            <span>prabhakarkumar16181@gmail.com</span>
          </p>
          </div>

      </div>
      
      <div className="container copyright-container">
              <div className="horizontalLine"></div>
              <p>Copyright © 2023 Prabhakar Kumar. All Rights Reserved.</p>
      </div>
    </section>
  )
}

export default Footer;