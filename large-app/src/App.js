import React from 'react';
import _ from 'lodash';
import './App.css';

function App() {
  // 더 큰 배열을 생성하여 초기 용량을 증가
  const largeArray = _.range(0, 10000000); // 10,000,000 요소로 증가

  return (
    <div className="App">
      <header className="App-header">
        <h1>여러분 고마워요!</h1>
        
        {/* mp4 파일 자동 재생 및 소리 끔 */}
        <video width="100%" controls autoPlay muted>
          <source src="/38388-418005845_medium.mp4" type="video/mp4" />
          Your browser does not support the video tag.
        </video>

        {/* 고화질 고양이 이미지 추가 */}
        <img src="/cat-5727135_1280.jpg" alt="Cute Cat" style={{ width: '100%', marginTop: '20px' }} />

        {/* 배열 길이를 표시 */}
        <p>{`배열 길이: ${largeArray.length}`}</p>
        
        <p>{"정말로 고마워요!!"}</p>
      </header>
    </div>
  );
}

export default App;
