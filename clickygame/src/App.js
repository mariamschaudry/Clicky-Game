import React, { Component } from 'react';
import './App.css';
import NavBar from './components/NavBar';
import Title from './components/Title';
import Cards from './components/Cards';
import Image from './components/Image';
import Wrapper from './components/Wrapper';

class App extends Component {
    state = {
        score: 0, 
        topScore: 0,
        
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
        ]
    };

  // Game Play //
  
  // If the image is clicked on, the cards will shuffle //
  sortImages = (id, clicked) => {
    const imageOrder = this.state.image;

    if (clicked) {
      console.log("true");
      imageOrder.forEach((img, index) => {
        imageOrder[index].clicked = false; 
      });

      return this.setState({
         image: imageOrder.sort(() => Math.random() - 0.5),
         topScore: this.state.counter,
         counter: 0
      })
  }
    else {
      console.log("false"); 
      imageOrder.forEach((image, index) => {
        if (id === image.id) {
           imageOrder[index].clicked = true;
        }
      });
      return this.setState({image:imageOrder.sort(() => Math.random() - 0.5), 
        counter: this.state.counter + 1})
    }
  };

  render() {
    return (
      <Wrapper>

        <NavBar>
          score={this.state.counter}
          topScore={this.state.topScore}
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
