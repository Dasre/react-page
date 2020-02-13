import React, { Component } from 'react';
import './stylesheets/envelope.scss';

class envelope extends Component {
  componentDidMount() {
    document.getElementById('circle').addEventListener('click', () => {
      document.getElementById('top').classList.add('close');
      document.getElementById('circle').classList.add('opacity');
      document.getElementById('envelope').classList.add('opacity');
      setTimeout(() => {
        document.getElementById('letter').classList.remove('opacity');
      }, 3000);
    });
  }

  render() {
    const center = {
      textAlign: 'center',
    };
    return (
      <div className="all">
        <div className="envelope" id="envelope">
          <div className="left" />
          <div className="right" />
          <div className="bottom" />
          <div className="top" id="top" />
          <button type="button" className="circle" id="circle">Open</button>
        </div>
        <div className="letter opacity" id="letter">
          <div><h1 style={center}>我的特質</h1></div>
          <div>
            <strong>負責任：</strong>
            對於自己該負責的事物，會在時限內盡全力去完成。
          </div>
          <div>
            <strong>樂於幫助別人：</strong>
            在自己有餘力時，樂於幫助他人所遇到的問題。
          </div>
          <div>
            <strong>不害怕學習新事物：</strong>
            前後端各種技術框架變化快速，保持一顆學習的心去面對各項新的技術。
          </div>
        </div>
      </div>
    );
  }
}

export default envelope;
