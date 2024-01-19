function WinCond({win}) {
    if (win){
        return(<>
            <h1>You have won! (the song is megalovania in case you don't know)</h1>
        </>);
    }
    else{
        return(<>
            <h1>You have not won</h1>
        </>);
    }
	
}

export default WinCond;