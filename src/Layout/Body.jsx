import React from "react";
import Images from './Image';
import bytron from '../bytron.png';
import ops from '../opsboard.jpg';
import etops from '../etops.jpg';

function FadeInSection(props) {
  const [isVisible, setVisible] = React.useState(false);
  const domRef = React.useRef();
  React.useEffect(() => {
    const observer = new IntersectionObserver(entries => {
      entries.forEach(entry => setVisible(entry.isIntersecting));
    });
    observer.observe(domRef.current);
  }, []);
  return (
    <div
      className={`fade-in-section ${isVisible ? 'is-visible' : ''}`}
      ref={domRef}
    >
      {props.children}
    </div>
  );
}

const Text = () => {
  return(
    <div className="title-box">
      <h1 className="text-title">
        Hi! I'm Callum, <br/> a Software Developer.
      </h1>
      <p className="text-sub">Keen to develop on front-end to create engaging UI </p>
    </div>
  )
}

const BytronText = () => {
  return(
    <FadeInSection>
    <div className="info-box flex">
      <h1 className="text-info">
        I'm a Junior Software Developer <br/>working remotely for 
        <a href="https://www.bytron.aero/"> Bytron Aviation Systems</a>
        <p className="text-sub padding">I've spent the past year developing
         and training in languages such as PHP, Javascript and React whilst working 
         on the skybook software. <br/><br/>This has progressed me onto learning both back-end processes
         such as PHP with symfony and building applications in front-end using React JS and scss to 
         produce features for our customers at Bytron</p>
      </h1>
      <img className="bytron-img" alt="bytron" src={bytron}/>
    </div>
    </FadeInSection>
  )
}

const BytronTextMore = () => {
  return(
    <FadeInSection>
    <div className="info-box">
       <p className="text-sub padding black">Examples of the projects I have been closely working on,
       developed in React</p>
      <img className="img-examples" alt="bytron" src={etops}/>
      <img className="img-examples" alt="bytron" src={ops}/>
    </div>
    </FadeInSection>
  )
}

function Body() {
  return(
    <div className="main">
      <div id="main-body" className="main-body">
        <Images/>
        <Text/>
      </div>
      <div id="main-content" className="main-content">
        <BytronText/>
      </div>
      <div className="main-content2">
        <BytronTextMore/>
      </div>
      
      
    </div>
  );
}

export default Body;
