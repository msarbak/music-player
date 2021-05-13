import React from "react";
import audio from './bmw.mp3';
import {Button} from '@material-ui/core'
import {ButtonGroup} from '@material-ui/core'
//import {PlayArrow} from '@material-ui/icons'


class AudioTest extends React.Component{

  playAudio = () => {
    new Audio(audio).play();
  }

  render() {
    return (
        <div>
            <ButtonGroup  size="large" variant="text" color="primary" aria-label="text primary button group">
              <Button onClick={this.playAudio}>One</Button>
              <Button onClick={this.playAudio}>Two</Button>
              <Button >Three</Button>
            </ButtonGroup> 
           
        </div>
    );
  }
}

export default AudioTest;

/* return (
        <div>
            <Button
            className="ses"
            color= "secondary"
            variant= "outlined" 
            size= "large"
            onClick={this.playAudio}
            startIcon={<PlayArrow/>} 
            >PLAY MUSIC</Button>
        </div>*/