import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import NavBar from './web/NavBar.js'
import Body from './web/Body.js'


class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      redactorState: 'Blog',
    }
  }
  render() {

    return (
      <>
        <NavBar onClick={this.clickHandle} />
        <div className='container'>
          <Body whichBody={this.state.redactorState} />
        </div>
      </>
    )

  }
  clickHandle = (event) => {
    event.preventDefault();
    console.log(event.target.name)
    this.setState({
      redactorState: event.target.name
    })
  }
}
export default App;
