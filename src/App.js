import React, {Component} from "react";
import logo               from "./img/yes.svg";
import suara              from "./img/ashiap.mp3";
import "./App.css";

class App extends Component {
  state = {
    timesClicked: 0
  };

  playMusic = () => {
    console.log('ashiap');
    const audio = new Audio(suara);
    audio.play();
    this.setState({
      timesClicked: this.state.timesClicked + 1
    });
    document.getElementById('start').style.display = 'none';
    document.getElementById('times').style.display = 'block';
  };

  render() {
    return (
      <div className="App" onClick={e => this.playMusic()}>
        <iframe width="1366" height="657"
                src="https://www.youtube.com/embed/o3aojIlLKcM?autoplay=1&mute=1&controls=0&showinfo=0&disablekb=1&modestbranding=1&autohide=1"
                frameBorder="0"/>
        <div className="background"></div>
        <div className="content">
          <header className="App-header">
            <h1 style={{margin: '0'}}>ASHIAAAAPPP.exe</h1>
            <div>
              <embed src={logo} className="App-logo" style={{height: '17em'}}/>
            </div>
            <div style={{marginTop:'1em'}}>
              <div id="start">Klik biar dia ngomong "Ashiap".</div>
              <div id="times" style={{display: 'none'}}>Atta di klik: {this.state.timesClicked} kali</div>
            </div>
          </header>
          <div className="social-media">
            Created by MirukuSheki <br/>
            Github: <a href="https://github.com/mirukusheki" target="_blank">mirukusheki</a>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
