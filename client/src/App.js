import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import NavBar from './web/NavBar.js'
import Body from './web/Body.js'


class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      dataIndex: 0,
      whichBody: 'Blog',
      data: []
    }
  }

  componentDidMount() {
    const request = new URL('/api/title', 'http://localhost:3000');

    fetch(request)
      .then(response => response.json())
      .then(data => this.setState({ data: data.reverse() }));
    console.log('prebehol fetch znova')
  }


  render() {

    return (
      <>
        <NavBar onClick={this.handleClick} />
        <div className='container'>
          <Body data={this.state.data}
            whichBody={this.state.whichBody}
            onClick={this.handleClick}
            handleClickDetail={this.handleClickDetail}
            index={this.state.dataIndex} />
        </div>
      </>
    )

  }
  handleClickBlog = (event) => {
    event.preventDefault();
    console.log(event.currentTarget.name, event.currentTarget)
    if (event.target.name === 'Blog') {
      const request = new URL('/api/title', 'http://localhost:3000');
      fetch(request)
        .then(response => response.json())
        .then(data => this.setState({ data: data.reverse() }));

      console.log('prebehol fetch znova')
      this.setState({
        redactorState: 'Blog'
      })
    }
  }

  handleClickDetail = (e) => {
    console.log(e.currentTarget.id)
    console.log(e.currentTarget.name)
    if (e.currentTarget.name === 'BlogDetail') {
      this.setState({
        dataIndex: e.currentTarget.id,
        redactorState: 'BlogDetail'
      }, () => {
        console.log('toto je test:', this.state.dataIndex, this.state.whichBody)
      })
    }
  }

  handleClickAboutUs = (event) => {
    if (event.currentTarget.name === 'BlogDetail') {
      this.setState({
        dataIndex: event.currentTarget.id,
        redactorState: 'About us'
      })
    }
  }

  handleClickRedaction = (event) => {
    if (event.currentTarget.name === 'BlogDetail') {
      this.setState({
        dataIndex: event.currentTarget.id,
        redactorState: 'Redaction'
      })
    }
  }

}
export default App;
