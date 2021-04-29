import React, { Component } from "react"

class MemeGenerator extends Component {
  constructor() {
    super()
    this.state = {
      topText: "",
      bottomText: "",
      randomImg: "http://i.imgflip.com/1bij.jpg",
      allMemeImgs: [],
    }
    this.inputChangeHandler = this.inputChangeHandler.bind(this)
  }

  componentDidMount() {
    fetch("https://api.imgflip.com/get_memes")
      .then((response) => response.json())
      .then((response) => {
        const { memes } = response.data;
        this.setState({ allMemeImgs: memes })
      });
  }

  inputChangeHandler(event) {
      const { name, value } = event.target
      this.setState({[name]: value})
  }

  render() {
    return (
      <div>
        <form className="meme-form">
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
      </div>
    );
  }
}

export default MemeGenerator;
