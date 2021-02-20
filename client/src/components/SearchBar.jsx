import React from 'react';

class SearchBar extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      movieName: ''
    };
    this.changeHandler = this.changeHandler.bind(this);
    this.submitHandler = this.submitHandler.bind(this);
  }

  changeHandler(e) {
    this.setState({movieName: e.target.value})
    this.props.searchUpdater(e.target.value)
    // console.log('searchBar state: ', this.state)
  }

  submitHandler(e) {
    e.preventDefault();
    // console.log('this should submit=', this.state.movieName)
  }

  render() {
    return (
      <form onSubmit={this.submitHandler}>
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