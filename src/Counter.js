import React, { useState } from 'react';

function Counter() {

	
	const [number, setNumber] = useState(0);
	
	const onIncrease = () => {
		setNumber(preNumber => preNumber + 1);
	}
	
	const onDecrease = () => {
		setNumber(preNumber => preNumber - 1);
	}
	
	return (
		<div>
			<h1>{number}</h1>
			<button onClick={onIncrease}>+1</button>
			<button onClick={onDecrease}>-1</button>
			{/*onClick 으로 각 함수를 연결해주었습니다. 리액트에서 엘리먼트에 이벤트를 설정해줄때에는 on이벤트이름={실행하고싶은함수} 형태로 설정*/}
			{/*const numberState = useState(0);*/}
			{/*const number = numberState[0];*/}
			{/*const setNumber = numberState[1];*/}
		</div>
	);
}


export default Counter;