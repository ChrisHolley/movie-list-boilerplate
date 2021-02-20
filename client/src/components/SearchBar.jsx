import React from 'react';

class SearchBar extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      movieName: ''
    };
    this.changeHandler = this.changeHandler.bind(this);
  }

  changeHandler(e) {
    this.setState({movieName: event.target.value})
    console.log('seachBar state: ', this.state)
  }

  render() {
    return (
      <form>
        <input
          type="text"
          value={this.state.movieName}
          onChange={this.changeHandler}
          placeholder="movie title"
        />
        <input
          type="submit"
          value="submit"
        />
      </form>
    );
  }
}


// const SearchBar = props => (
//   <form>
//     <input
//       type="text"
//       placeholder="movie title"
//     />
//     <input
//       type="submit"
//       value="submit"
//     />

//   </form>
// )

export default SearchBar;