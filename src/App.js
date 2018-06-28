import React, { Component } from 'react';
import './App.css';
import NavBar from './components/NavBar';
import Title from './components/Title';
import Cards from './components/Cards';
import Image from './components/Image';
import Wrapper from './components/Wrapper';


class App extends Component {
    state = {    
        image: [
          {
              id: 1,
              image: "./assets/images/Ariel.png",
              clicked: false
          },
          {
              id: 2, 
              image: "./assets/images/Aurora.jpg", 
              clicked: false
          },
          {
              id: 3,
              image: "./assets/images/Belle.png",
              clicked: false
          },
          {
              id: 4,
              image: "./assets/images/Cinderella.png",
              clicked: false
          },
          {
              id: 5,
              image: "./assets/images/Jasmine.jpg",
              clicked: false
          },
          {
              id: 6,
              image: "./assets/images/Merida.png",
              clicked: false
          },
          {
              id: 7,
              image: "./assets/images/Moana.jpg",
              clicked: false
          },
          {
              id: 8,
              image: "./assets/images/Mulan.jpg",
              clicked: false
          },
          {
              id: 9,
              image: "./assets/images/Pocahontas.png",
              clicked: false
          },
          {
              id: 10,
              image: "./assets/images/Rapunzel.png",
              clicked: false
          },
          {
              id: 11,
              image: "./assets/images/SnowWhite.gif",
              clicked: false
          },
          {
              id: 12,
              image: "./assets/images/Tiana.png",
              clicked: false
          } 
        ],
        score: 0, 
        topScore: 0
    };

  // Game Play //
  
  // If the image is clicked on, the cards will shuffle //
  sortImages = (id, clicked) => {
    const imageOrder = this.state.image;

  // If clicked twice - you lose! //
    if (clicked) {
      console.log("true");
      alert ("Oh no! It looks like you've already clicked this one! Let's start the game over again.")
      imageOrder.forEach((img, index) => {
        imageOrder[index].clicked = false;  
      });

      return this.setState({
         image: imageOrder.sort(() => Math.random() - 0.5),
         topScore: this.state.score,
         score: 0
      })
  }

  // If click only one time, you win! //
    else {
      console.log("false"); 
    //   alert("Keep going! Let's see if you can beat your top score!")
      imageOrder.forEach((image, index) => {
        if (id === image.id) {
           imageOrder[index].clicked = true;
        }
      });
      return this.setState({image:imageOrder.sort(() => Math.random() - 0.5), 
        score: this.state.score + 1})
    }
  };

  render() {
    return (
      <Wrapper>

        <NavBar score={this.state.score}
        topScore={this.state.topScore}>

        {/* <h3>Score={this.state.score}</h3>
        <h3>topScore={this.state.topScore}</h3> */}
        </NavBar>
    

        <Title />

        <Cards>
          {this.state.image.map(image => (
            <Image
              key={image.id}
              sortImages={this.sortImages}
              id={image.id}
              src={image.image}
              clicked={image.clicked}
            />
        ))}
       </Cards>

      </Wrapper>
    );
  }
}

export default App;
