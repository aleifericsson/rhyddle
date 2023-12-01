import Wordle from "./components/Wordle";
import { randomSolution } from "./scripts/solutions";
import { useState } from "react";

function App() {
	const [solution, setSolution] = useState(randomSolution);

	return(<>
		{solution && <Wordle solution={solution}/>}
	</>);
}


export default App
