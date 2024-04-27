import React from 'react'
import pageImg from '../../assests/food/pageImg.jpeg'

const About = () => {
  const myStyle = {
    backgroundImage:  `url(${pageImg})`,
    height: "60vh",
    backgroundSize: "cover",
    backgroundRepeat: "no-repeat",
    position: 'relative'
  };
  const headStyle={
    color: 'white',
    position: 'absolute',
    marginTop: '-25em',
    textAlign: 'justify',
    width: '40%',
    marginLeft: '2em'
  }
  return (
    <>
      <div style={myStyle}></div>
      <div style={headStyle}>
        <span style={{fontSize:50, color: 'yellow', textShadow: '3px 3px grey'}}>About Us</span><br/>
        <span  style={{fontSize:30}}>Little Lemon, Chicago </span>
            <p  style={{fontSize:20}}>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer at ex leo. Maecenas enim sem, 
            laoreet at nulla ac, luctus scelerisque massa. Praesent ut molestie nisi. Aliquam arcu lorem, 
            auctor condimentum blandit id, lobortis in nisi. Ut diam justo, euismod in accumsan id, vehicula
             sit amet tellus. Pellentesque porttitor elit lacus, vitae lacinia magna ultricies quis. Etiam vitae
              tellus et mi hendrerit consequat.</p>
      </div>
    </>
  );
}

export default About