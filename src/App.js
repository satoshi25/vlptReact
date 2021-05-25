import React from 'react';
import Hello from './Hello';
import Wrapper from './Wrapper';
import './App.css';

function App() {
  return (

    <Wrapper>
      <Hello name='react' color='red' isSpecial={true} /> {/* isSpecial 만 적으면 자동으로 true로 설정된다. */} 
      <Hello color='pink' />
    </Wrapper>

  );
}

export default App;
