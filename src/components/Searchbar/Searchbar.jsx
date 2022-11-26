import { Component } from 'react';
import { Header, Input, Button } from './Searchbar.styled';
import PropTypes from 'prop-types';

export class Searchbar extends Component {
  state = {
    search: '',
  };

  onFormSubmit = e => {
    e.preventDefault();
    if (this.state.search.trim() === '') {
      alert('Please, enter something');
      return;
    }
    this.props.onSubmitFetch(this.state.search, 1)
    this.props.onSubmit(this.state.search, 1);
    this.reset();
    window.scrollTo(0,1)
  };

  onInputChange = e => {
    this.setState({ search: e.target.value.toLowerCase() });
  };

  reset() {
    this.setState({ search: '' });
  }

  render() {
    return (
      <Header>
        <form style={{ position: 'relative' }} onSubmit={this.onFormSubmit}>
          <Button type="submit">🔎</Button>

          <Input
            value={this.state.search}
            type="text"
            autocomplete="off"
            autoFocus
            placeholder="Search images and photos"
            onChange={this.onInputChange}
          />
        </form>
      </Header>
    );
  }
}

Searchbar.propTypes = {
  onSubmit: PropTypes.func,
  resetPage: PropTypes.func,
};
