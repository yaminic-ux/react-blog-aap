import React, { useState, useEffect } from "react";
import Container from 'components/Container'
import { Spacer, Box } from 'components/styled/ui'
import { primaryColor } from 'components/styled/theme'
import Nav from 'components/Nav'
import Footer from 'components/Footer'
import SignupCardAbout from 'components/SignupCardAbout'
//import aboutModule from '/aboutModule.css'
//import OwlCarousel from 'react-owl-carousel';
//import 'owl.carousel/dist/assets/owl.carousel.css';
//import 'owl.carousel/dist/assets/owl.theme.default.css';

const About = ({items}) => {
   const [items, setitems] = useState({});

   fetch('http://localhost/market-chainalysis/wp-json/acf/v3/pages/10')
            .then((result) => {
                return result.json();
            })
            .then((data) => {
                console.log(data);
                setitems(data);
            })
            .catch((error) => console.log(error))
        //.then((items) => console.log(items));

    useEffect(() => {
        fetchdata();
    }, []);

    return (
    	  <div>
        <Container>
        <Nav/>
        <div className="aboutWrapper" style={{display:'flex',marginTop:'50px'}}>
        {typeof items.acf != 'undefined' && (
        <div className="aboutLeftColumn" style={{width:'50%'}}>
        <span style={{color:'#293972'}}>{items.acf.tag_line}</span>
        <h1 style={{fontSize:'48px',lineHeight:'54px',fontWeight:'900',color:'#293972'}}>{items.acf.heading}</h1>
        <p dangerouslySetInnerHTML={{__html:items.acf.description}}></p>
        <div className="formWrap"  style={{display:'flex'}}>
        <SignupCardAbout/>
        <div style={{display:'flex',color:'#262626', paddingTop:'20px'}}>
        <p style={{paddingRight:'20px'}}><img style={{marginRight:"8px"}}width="15px" height="15px" src="/vector.png"/>{items.acf.read_past_reports}</p>
        <p><img style={{marginRight:"8px"}} height="18px" src="/vector1.png"/>{items.acf.listen_to_the_podcast}</p>
        </div>
        </div>
        </div>
       )}
   
        <div className="aboutRightColumn"  style={{width:'50%'}}>
        {/*<OwlCarousel className='owl-theme' loop margin={10} nav>*/}
        {typeof items.acf != 'undefined' && items.acf.carousel_slides.length &&
        items.acf.carousel_slides.map((slide) => {
          return (
            <div
              key={slide.slide}
              className='wrapper'
              style={{ marginBottom:"20px", paddingBottom: "30px", paddingLeft: "30px",}}>
              <p>{slide.slide}</p>
            </div>
          );
        })}
        {/*</OwlCarousel>*/}
        </div>
     
        </div>
        </Container>
        <Footer/>
    </div>

    )
}

export default About;