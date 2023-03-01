import React, { useState, useEffect } from "react";

//include images into your bundle
import rigoImage from "../../img/rigo-baby.jpg";

//create your first component
const TrafficLight = () => {

	const [activeLight, setActiveLight] = useState(null);

	function handleLightClick(light) {
	  setActiveLight(light);
	};

	return (
		<>		
    <div className="container">
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
    </div>
	  	</>

	);
};

export default TrafficLight;
