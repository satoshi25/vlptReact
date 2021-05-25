import React, { useState } from 'react';

function InputSample() {

	const [inputs, setInputs] = useState({ //input 의 개수가 여러개가 됐을때는, 
		//단순히 useState 를 여러번 사용하고 onChange 도 여러개 만들어서 구현 할 수 있습니다. 
		//하지만 그 방법은 가장 좋은 방법은 아닙니다. 
		//더 좋은 방법은, input 에 name 을 설정하고 이벤트가 발생했을 때 이 값을 참조하는 것입니다. 그리고, useState 에서는 문자열이 아니라 객체 형태의 상태를 관리해주어야 합니다.
		name: '',
		nickname: ''
	});

	const { name, nickname } = inputs; // 비구조화 할당을 통해 값 추출

	const onChanges = e => {
		const { value, name } = e.target; // 우선 e.target 에서 name과 value 추출
		setInputs({
			...inputs, // 기존의 input객체를 복사한 뒤
			[name]: value // name 키를 가진 값을 value로 설정
		}); // 리액트 상태에서 객체를 수정해야 할 때, inputs[name] = value 직접 수정하면 안된다. 리렌더링되지 않는다.
	};

	const onReset = () => {
		setInputs({
			name: '',
			nickname: ''
		})
	};

	return (
		<div>
			<input name="name" placeholder="이름" onChange={onChanges} value={name} /> 
			<input name="nickname" placeholder="닉네임" onChange={onChanges} value={nickname} /> 
			<button onClick={onReset}>초기화</button>
			<div>
				<b>값: </b>
				{name} : ({nickname})
			</div>
		</div>
	);
}

export default InputSample;