import React, {Component} from "react";
import logo               from "./img/yes.svg";
import suara              from "./img/ashiap.mp3";
import About              from './component/About';
import Background         from './component/Background';
import Foreground         from './component/Foreground';
import Video              from './component/Video';
import "./App.css";

class App extends Component {
  state = {
    timesClicked: 0
  };

  playMusic = () => {
    const audio = new Audio(suara);
    audio.play();
    this.setState({
      timesClicked: this.state.timesClicked + 1
    });
  };

  render() {
    return (
      <div className="App" onClick={e => this.playMusic()}>
        <Foreground/>
        <Video/>
        <Background/>
        <div className="content">
          <header className="App-header">
            <h1 style={{margin: '0'}}>ASHIYAAP.exe</h1>
            <div>
              <embed src={logo} className="App-logo" style={{height: '17em'}}/>
            </div>
            <div style={{marginTop: '1em'}}>
              {this.state.timesClicked === 0 ?
                <div>Klik biar Atta ngomong "Ashiap".</div> :
                <div>Atta di klik: {this.state.timesClicked} kali</div>}
            </div>
          </header>
          <About/>
        </div>
      </div>
    );
  }
}

export default App;
