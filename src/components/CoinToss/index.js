// Write your code here
import {Component} from 'react'
import './index.css'

class CoinToss extends Component {
  state = {
    tossImg: 'https://assets.ccbp.in/frontend/react-js/heads-img.png',
    headsCount: 0,
    tailsCount: 0,
  }

  coinTossClicked = () => {
    const tossResult = Math.floor(Math.random() * 2)
    const tossImage =
      tossResult === 0
        ? 'https://assets.ccbp.in/frontend/react-js/heads-img.png'
        : 'https://assets.ccbp.in/frontend/react-js/tails-img.png'

    this.setState(prevState => ({
      tossImg: tossImage,
      headsCount:
        tossResult === 0 ? prevState.headsCount + 1 : prevState.headsCount,
      tailsCount:
        tossResult === 1 ? prevState.tailsCount + 1 : prevState.tailsCount,
    }))
  }

  render() {
    const {tossImg, headsCount, tailsCount} = this.state
    const total = headsCount + tailsCount

    return (
      <div className="app-container">
        <div className="container">
          <h1 className="heading">Coin Toss Game</h1>
          <p className="sub-heading">Heads (or) Tails</p>
          <img src={tossImg} className="image" alt="toss result" />
          <button
            className="button"
            type="button"
            onClick={this.coinTossClicked}
          >
            Toss Coin
          </button>
          <div className="result-container">
            <p className="result">Total: {total}</p>
            <p className="result">Heads: {headsCount}</p>
            <p className="result">Tails: {tailsCount}</p>
          </div>
        </div>
      </div>
    )
  }
}

export default CoinToss
