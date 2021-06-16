import React, { useState} from "react";
import dark from '../nightImage.jpg';
import light from '../lightimage.jpg';

const Images = () => {

const [isChecked, setIsChecked] = useState(false);

  const toggleCheck = () => {
    setIsChecked(!isChecked);
    
  }

  const checkbox = isChecked ? light : dark;
  return (
    <div>
      <button className="button_slide slide_left" onClick={toggleCheck}>Click me!! </button>
      <span><img className="main-body" alt={'svtp-Checkbox'} src={checkbox} /></span>
    </div>
  )
}

const Text = () => {


  return(
    <div className="title-box">
      <h1 className="text-title fadeInBottom cssanimation">
        Hi! I'm Callum, <br/> a Software Developer.
      </h1>
      <p className="text-sub fadeInBottom cssanimation">Keen to develop on front-end to create engaging UI </p>
    </div>
  )
}

function Body() {
  return(
    <div className="main">
      <div className="main-body">
        <Images/>
        <Text/>
      </div>
      <div className="main-content">
        
      </div>
      
    </div>
  );
}

export default Body;
