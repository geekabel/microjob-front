import React, { Component } from 'react'

class Search extends Component {
    state = {
      query: '',
    }
   
    handleInputChange = (event) => {
      const query = event.target.value;
      this.setState({
        query
      })
    }
   
    render() {
      return (
        <form>
          <input
            placeholder="Search for..."
            ref={input => this.search = input}
            onChange={this.handleInputChange}
          />
          <p>{this.state.query}</p>
        </form>
      )
    }
   }
   
   export default Search;