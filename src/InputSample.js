import React, { useState } from 'react';

function InputSample() {

	const [text, setText] = useState('');

	const onChange = e => {
		setText(e.target.value);
	}

	const onReset = () => {
		setText('');
	}

	return (
		<div>
			{/*input 의 상태를 관리할 때에는 input 태그의 value 값도 설정해주는 것이 중요합니다. 그렇게 해야, 상태가 바뀌었을때 input 의 내용도 업데이트 됩니다.*/}
			<input onChange={onChange} value={text} /> 
			<button onClick={onReset}>초기화</button>
			<div>
				<b>값: {text}</b>
			</div>
		</div>
	);
}

export default InputSample;