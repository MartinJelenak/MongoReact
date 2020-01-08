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
      dataIndex: 0,
    }
  }




  render() {

    return (
      <>
        <NavBar onClick={this.handleClick} />
        <div className='container'>
          <Body whichBody={this.state.redactorState} onClick={this.handleClick} index={this.state.index} />
        </div>
      </>
    )

  }
  handleClick = (event) => {
    console.log(event.target.name)
    if (event.target.name === 'Blog') {
      this.setState({
        redactorState: 'Blog'
      })
    } else if (event.target.name === 'BlogDetail') {
      this.setState({
        dataIndex: event.target.value,
        redactorState: 'BlogDetail'
      }, () => {
        console.log('toto je test:', this.state.dataIndex, this.state.redactorState)
      })
    } else if (event.target.name === 'About us') {
      this.setState({
        redactorState: 'About us'
      })
    } else if (event.target.name === 'Redaction') {
      this.setState({
        redactorState: 'Redaction'
      })
    }
  }
}
export default App;
