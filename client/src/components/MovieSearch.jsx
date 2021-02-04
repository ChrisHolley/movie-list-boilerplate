import React from 'react';

class MovieSearch extends React.Component {
  constructor(props) {
    super(props);
    this.state = {value: ''};

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);

  }

  handleChange(e) {
    console.log('handlechange is invoking. event: ', e)
    this.setState({value: e.target.value});

  }

  handleSubmit(e) {
    console.log('handleSubmit is invoking. event: ', e)
    e.preventDefault();
    this.setState({value: this.state.value});
  }

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <input type="text" value={this.state.value} onChange={this.handleChange} placeholder="Search..."/>
        <input type="submit" value="Go!" />
      </form>
    )
  }
}


// const MovieSearch = () => (
//   <div>
//     <input id="searchInput" placeholder="Search..."></input>
//     <button>Go!</button>
//   </div>
// );

export default MovieSearch;