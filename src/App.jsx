import Wordle from "./components/Wordle";
import { generateSolution } from "./scripts/solutions";
import { useState } from "react";

function App() {
	const [solution, setSolution] = useState(generateSolution);

	return(<>
		{solution && <Wordle solution={solution}/>}
	</>);
}


export default App
