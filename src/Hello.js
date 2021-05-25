import React from 'react';

function Hello({name, color, isSpecial}) {
	return (
	<div style={{color}}>
		{/* {isSpecial ? <b>*</b> : null} 아래와 같다. */} 
		{isSpecial && <b>*</b>}
		안녕하세요 {name}
	</div>
	);
}

Hello.defaultProps = {
	name: '이름없음'
}
export default Hello;