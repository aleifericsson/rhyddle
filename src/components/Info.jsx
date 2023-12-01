function Info({solution}) {
	return(<>
        <div>Genre: {solution.genre}</div>
        <div>Description: {solution.desc}</div>
        <div>BPM: {solution.bPM}</div>
	</>);
}


export default Info
