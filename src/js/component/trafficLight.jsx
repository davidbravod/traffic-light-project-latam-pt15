import React, { useState, useEffect } from "react";

//include images into your bundle
import rigoImage from "../../img/rigo-baby.jpg";

//create your first component
const TrafficLight = () => {

  const [activeLight, setActiveLight] = useState(null);
  const [hasPurple, setHasPurple] = useState(false);
  const lightColors = ['red', 'yellow', 'green', 'purple'];

	function handleLightClick(light) {
	  setActiveLight(light);
	};

  function handlePurpleClick() {
    if (hasPurple) {
      if (activeLight === 'purple') {
        setActiveLight('red');
      }
      setHasPurple(false);
    } else {
      setHasPurple(true);
    }
  }

  function handleButtonClick() {
    const currentIndex = lightColors.indexOf(activeLight);
    const nextIndex = (currentIndex + 1) % lightColors.length;
    setActiveLight(lightColors[nextIndex]);
  }

	return (
		<>		
    <div className="container mt-3">
      <div
        className={`light red ${activeLight === 'red' ? 'active' : ''}`}
        onClick={() => handleLightClick('red')}
      />
      <div
        className={`light yellow ${activeLight === 'yellow' ? 'active' : ''}`}
        onClick={() => handleLightClick('yellow')}
      />
      <div
        className={`light green ${activeLight === 'green' ? 'active' : ''}`}
        onClick={() => handleLightClick('green')}
      />

      {hasPurple ? (
        <div
          className={`light purple ${activeLight === 'purple' ? 'active' : ''}`}
          onClick={() => handleLightClick('purple')}
        />
      ) : null}

    </div>
    <div className= "mt-3 d-flex justify-content-center">
      <button className= "me-2" onClick={handleButtonClick}>Cycle Lights</button>
      <button onClick={handlePurpleClick}>
        {hasPurple ? 'Remove Purple' : 'Add Purple'}
      </button>
    </div>
    
	  	</>

	);
};

export default TrafficLight;
