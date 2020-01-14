import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import NavBar from './web/NavBar.js'
import Body from './web/Body.js'
class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
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
        <NavBar onClick={this.handleClickBlog} />
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
}
export default App;
