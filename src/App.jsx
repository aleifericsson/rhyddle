import Rhyddle from "./components/Wordle";
import { randomSolution } from "./scripts/solutions";
import { useState } from "react";

function App() {
	const [solution, setSolution] = useState(randomSolution);

	console.log(solution);
	return(<>
		{solution && <Rhyddle solution={solution}/>}
	</>);
}


export default App
