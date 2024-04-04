// Write your code here
import {Component} from 'react'
import './index.css'

// class App extends Component {
//   state = {
//     isMode: false,
//   }

//   onChangeMode = () => {
//     this.setState(prevState => ({isMode: !prevState.isMode}))
//   }

//   getButtonText = () => {
//     const {isMode} = this.state

//     return isMode ? 'Dark Mode' : 'Light Mode'
//   }

//   render() {
//     return (
//       <div>
//         <h1>Click To Change Mode</h1>
//         <button type="button" onClick={this.onChangeMode}>
//           {this.getButtonText()}
//         </button>
//       </div>
//     )
//   }
// }
// export default App

class LightDarkMode extends Component {
  state = {
    isDarkMode: true,
  }

  onClickButton = () => {
    this.setState(prevState => ({isDarkMode: !prevState.isDarkMode}))
  }

  render() {
    const {isDarkMode} = this.state
    const modeClassName = isDarkMode ? 'dark-mode' : 'light-mode'
    const buttonText = isDarkMode ? 'Light Mode' : 'Dark Mode'

    return (
      <div className="app-container">
        <div className={`container ${modeClassName}`}>
          <h1 className="heading">Click To Change Mode</h1>
          <button type="button" onClick={this.onClickButton} className="button">
            {buttonText}
          </button>
        </div>
      </div>
    )
  }
}

export default LightDarkMode
