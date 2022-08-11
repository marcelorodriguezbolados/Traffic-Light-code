import React, { useState } from "react";

//include images into your bundle
import rigoImage from "../../img/rigo-baby.jpg";

//create your first component
const Home= () => {

	const [cambio, setCambio]= useState("rojo");

	return (

		<div className="semaforo">

<div onClick={() => setCambio("rojo")} className={"rojo "+(cambio==="rojo"? "luzRoja ":"")}></div>

<div onClick={() => setCambio("amarillo")} className={"amarillo "+(cambio==="amarillo"? "luzAmarilla ":"")}></div>

<div onClick={() => setCambio("verde")} className={"verde "+(cambio==="verde"? "luzVerde":"")}></div>			
			{/* <div className="amarillo"></div> */}

			{/* <div className="verde"></div> */}

		</div>
	);
};

export default Home;
