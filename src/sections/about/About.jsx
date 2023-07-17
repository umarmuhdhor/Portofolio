import AboutImage from '../../assets/a1.jpg'
import CV from '../../assets/a1.jpg'
import './about.css'
import Card from '../../components/Card'
import data from './data'
import {HiDownload} from 'react-icons/hi'

const About = () => {
  return (
    <section id="about">
        <div className="container about__container">
          <div className="about__left">
            <div className="about__portrait">
              <img src={AboutImage} alt="About Image" />
            </div>
          </div>
          <div className="about__right">
            <h2>
              About Me
            </h2>
            <div className="about__cards">
              {
                data.map(item => (
                  <Card key={item.id} className="about__card">
                    <span className='about__card-icon'>{item.icon}</span>
                    <h5>{item.title}</h5>
                    <small>{item.desc}</small>
                  </Card>
                ))
              }
            </div>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. 
              Blanditiis explicabo aspernatur inventore asperiores obcaecati, 
              commodi, mollitia, omnis eum quibusdam atque error? Vel adipisci tempore voluptatibus explicabo, voluptatum consequuntur error. Quaerat?
            </p>
            <p>
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. Voluptate, 
              recusandae provident? Recusandae nam exercitationem vero, eos consequuntur 
              reprehenderit accusamus cupiditate illum explicabo deserunt placeat repellat. Consequatur, voluptatibus! Ipsum, tempore est!
            </p>
            <a href={CV} download className='btn primary'>Downlaod CV <HiDownload/></a>
          </div>
        </div>
    </section>
  )
}

export default About
