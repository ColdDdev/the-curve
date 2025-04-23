import Image from "../../assets/hack2-1_1.webp"
// import Image2 from "../../assets/WhatsApp-Image-2022-10-22-at-07.56-1.webp"
import { FiCheckCircle } from "react-icons/fi";

const AboutMiddle = () => {
  return (
    <>
        <div className="AboutMiddle">
          <h2>Our Mission</h2>
          <div className="AboutMission">
            <article className="AboutMissionText">
           <p> Our Mission to Mentor and Train Young Minds in Software Engineering</p>
            <br/>
            <br/>
            At The Curve Africa, we are dedicated to empowering the youth of Africa through our comprehensive software engineering academy. With a firm belief in the potential of young individuals, we provide mentorship and on-site training programs for those who are eager to learn and commit to a transformative 6-month journey.
            <br/>
            <br/>
            Our mission is ambitious yet resolute: to train over 10,000 aspiring tech enthusiasts across Africa, completely free of charge, within the next 10 years. By equipping them with in-demand skills, practical experience, and a strong foundation in software engineering, we strive to nurture a generation of capable professionals who can drive technological advancements throughout the continent.
            Through our rigorous curriculum, expert mentorship, and emphasis on hands-on learning, we empower our students to become proficient software engineers, ready to tackle real-world challenges and contribute meaningfully to the ever-evolving tech industry. We believe that by investing in the potential of African youth, we can foster economic growth, bridge the digital divide, and create a brighter future for all.
            <br/>
            <br/>
            Join us on our mission to unlock the untapped potential of Africa's tech talent. Together, we can shape the next generation of world-class software engineers and make a lasting impact on the technological landscape of Africa.
            </article>
            <article className="AboutMissionImage">
              <img src={Image} alt="sitting in a circle"/>
            </article>
          </div>
          <div className="AboutMiddle">
            <h2>Why Choose The Curve Africa</h2>
            <div className="AboutUsWhy">
              {/* <section> */}
                <div className="AboutUsWhyBox">
                <div className="AboutUsWhyTitle"><FiCheckCircle color="purple" size="25"/> <h3> Quality and Diverse Pool of Engineers</h3></div>
                <p className="AboutUsWhytext">Gain access to a talented and diverse community of engineers, providing a rich learning environment and valuable networking opportunities.</p>
                </div>
                <div className="AboutUsWhyBox">
                <div className="AboutUsWhyTitle"> <FiCheckCircle color="orange" size="25"/> <h3>Personalized Support</h3></div>
                <p className="AboutUsWhytext">Receive dedicated support throughout your journey, ensuring a tailored and fulfilling learning experience.</p>
                </div>
              {/* </section> */}
              {/* <section> */}
                <div className="AboutUsWhyBox">
                  <div className="AboutUsWhyTitle"><FiCheckCircle color="green" size="25"/> <h3>Real-Life Project Experience</h3></div>
                  <p className="AboutUsWhytext">Engage in hands-on projects that simulate real-world scenarios, applying your skills and building practical expertise.</p>
                </div>
                <div className="AboutUsWhyBox">
                  <div className="AboutUsWhyTitle"><FiCheckCircle color="red" size="25"/> <h3>Holistic Training Approach</h3></div>
                  <p className="AboutUsWhytext">Develop not only technical skills but also soft skills, workplace readiness, and interview preparation tips to enhance your employability.</p>
                </div>
              {/* </section> */}
              {/* <section> */}
                <div className="AboutUsWhyBox"> 
                <div className="AboutUsWhyTitle"><FiCheckCircle color="orange"size="25"/>  <h3>Portfolio Development and Career Support</h3></div>
                  <p className="AboutUsWhytext">Benefit from our guidance in building a compelling portfolio to showcase your abilities, opening doors to internships and junior software engineering roles. Access job opportunities within our network.</p>
                </div>
                <div className="AboutUsWhyBox">
                  <div className="AboutUsWhyTitle"><FiCheckCircle color="skyblue" size="25"/>  <h3>Choose The Curve Africa</h3></div>
                  <p className="AboutUsWhytext">for a comprehensive and impactful learning experience, empowering you for success in the software engineering industry.</p>
                </div>
              {/* </section> */}
            </div>
            {/* <img src="./Frame 1098.svg" alt="" className="FDesktop"/>
            <img src="./FrameM 1099.png" alt="" className="FMolbile"/> */}
          </div>
        </div>
    </>
  )
}

export default AboutMiddle