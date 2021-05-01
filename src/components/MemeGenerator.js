import React, { Component } from "react"

class MemeGenerator extends Component {
  
    state = {
      topText: "",
      bottomText: "",
      randomImg: "http://i.imgflip.com/1bij.jpg",
      allMemeImgs: []
    }
    
  componentDidMount = () => {
    fetch("https://api.imgflip.com/get_memes")
      .then((response) => response.json())
      .then((response) => {
        const { memes } = response.data;
        this.setState({ allMemeImgs: memes })
      });
  }

  inputChangeHandler = (event) => {
      const { name, value } = event.target
      this.setState({[name]: value})
  }

  handleSubmit = (event) => {
    event.preventDefault()
    const multiplier = this.state.allMemeImgs.length + 1
    const random = Math.floor(Math.random() * multiplier)
    this.setState({randomImg: this.state.allMemeImgs[random].url})
  }

  render() {
    return (
      <div>
        <form className="meme-form" onSubmit={this.handleSubmit}>
          <input
            type="text"
            name="topText"
            value={this.state.topText}
            placeholder="Top Text"
            onChange={this.inputChangeHandler}
          />
          <input
            type="text"
            name="bottomText"
            value={this.state.bottomText}
            placeholder="Bottom Text"
            onChange={this.inputChangeHandler}
          />
          <button>Gen</button>
        </form>
        <div className="meme">
            <img className="meme-image" src={this.state.randomImg} alt="" />
            <h2 className="top">{this.state.topText}</h2>
            <h2 className="bottom">{this.state.bottomText}</h2>
        </div>
      </div>
    );
  }
}

export default MemeGenerator;
