import {Component} from 'react'

import Welcome from './components/Welcome'

import './App.css'

class App extends Component {
  state = {
    isLoggedIn: false,
  }
  // using if...else statement
  //   renderAuthButton = () => {
  //     const {isLoggedIn} = this.state
  //     if (isLoggedIn === true) {
  //       return <button type="button">Logout</button>
  //     }
  //     return <button type="button">Login</button>
  //   }

  // using element variables

  render() {
    const {isLoggedIn} = this.state
    // here we use a element variable
    // let authButton
    // if (isLoggedIn === true) {
    //   authButton = <button type="button">Logout</button>
    // } else {
    //   authButton = <button type="button">Login</button>
    // }

    return (
      <div className="container">
        <Welcome greeting="Hello" name="User" />
        {/* <button>Login</button>
        <button>Logout</button> */}

        {/* instead of the above we can call the function */}
        {/* this.renderAuthButton() */}
        {/* we have to embed this variable */}
        {/* {authButton} */}

        {/* instead of using element variable or if and else statement we can use terinary operator */}
        {/* {isLoggedIn ? (
          <button type="button">Logout</button>
        ) : (
          <button type="button">Login</button>
        )} */}

        {/* using logical $$ operator */}
        {isLoggedIn && <button type="button">Logout</button>}
        {!isLoggedIn && <button type="button">Login</button>}
      </div>
    )
  }
}

export default App
