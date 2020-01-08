import React, {Component} from "react"

class ScrimbaMemeGen extends Component {
    constructor() {
        super()
        this.state = {
            topText: "",
            bottomText: "",
            randomImg: "http://i.imgflip.com/1bij.jpg",
            allMemeImgs: []
        }
        this.handleChange = this.handleChange.bind(this)
        this.handleSubmit = this.handleSubmit.bind(this)
    }

    componentDidMount() {
        fetch("https://api.imgflip.com/get_memes")
            .then(response => response.json())
            .then(response => {
                const {memes} = response.data
                this.setState({ allMemeImgs: memes })
            })
    }

    handleChange(event) {
        const {name, value} = event.target
        this.setState({ [name]: value })
    }

    handleSubmit(event) {
        event.preventDefault()
        const randNum = Math.floor(Math.random() * this.state.allMemeImgs.length)
        const randMemeImg = this.state.allMemeImgs[randNum].url
        this.setState({ randomImg: randMemeImg })
    }

    render() {
        return (
          <div className="content">
            <div className="contentContainers">
              <h1>Generate your very own meme!</h1>
              <p>Enter top and bottom text in the two forms below. To find the
              best possible image for your meme, hit generate (multiple times) and watch the
               magic happen.</p>
            </div>
            <div className="memeContainer">
              <form className="meme-form" onSubmit={this.handleSubmit}>
                <input
                    type="text"
                    name="topText"
                    placeholder="Top Text"
                    value={this.state.topText}
                    onChange={this.handleChange}
                />
                <input
                    type="text"
                    name="bottomText"
                    placeholder="Bottom Text"
                    value={this.state.bottomText}
                    onChange={this.handleChange}
                />

                <button>Generate</button>
                </form>
                <div className="meme">
                    <img src={this.state.randomImg} alt="image unable to load..." />
                    <h2 className="top">{this.state.topText}</h2>
                    <h2 className="bottom">{this.state.bottomText}</h2>
                </div>
                </div>
              <footer>No rights reserved.</footer>
            </div>
        )
    }
}

export default ScrimbaMemeGen
