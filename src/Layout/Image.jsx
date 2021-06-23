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
      <button className="button-slide slide-left" onClick={toggleCheck}>Click me!! </button>
      <span><img className="main-body" alt={'svtp-Checkbox'} src={checkbox} /></span>
    </div>
  )
}

export default Images;