import { Component } from 'react';
import { Searchbar } from 'components/Searchbar/Searchbar';
import { ImageGallery } from 'components/ImageGallery/ImageGallery';
import { fetchImages } from 'Services/ImageApi'

export class App extends Component {
  state = {
    searchRequest: '',
    gallery: [],
    page: 1,
    status: 'idle',
    error: null,
  };

  componentDidUpdate(_, prevState) {
    const { searchRequest, gallery, page } = this.state;

    if (prevState.searchRequest !== searchRequest || prevState.page !== page) {
      fetchImages(searchRequest, page)
        .then(response => {
          if (response.status === 400) {
            return Promise.reject(
              new Error(
                `We're sorry, but you've reached the end of search results.`
              )
            );
          }
         return response.json()
        })
        .then(data => {
          const hits = data.hits;
          this.setState({
            gallery: prevState.searchRequest !== searchRequest ? [...hits] : [...gallery, ...hits],
            status: 'resolved',
          });

          if (hits.length === 0) {
            return Promise.reject(
              new Error(`no results found ${searchRequest}`)
            );
          }

        })
        .catch(error => {
          this.setState({ status: 'rejected', error: error });
          
        });
    }
  }

  onLoadMore = () => {
    this.setState(prevState => ({
      page: prevState.page + 1,
    }));
  };

  onSubmitSearchRequest = (word) => {
    this.setState({
      searchRequest: word,
      page: 1,
    });
  };

  render() {
    const { status, gallery, error } = this.state;
    return (
      <div>
        <Searchbar
          onSubmit={this.onSubmitSearchRequest}
          onSubmitFetch={this.onSubmitFetch}
        ></Searchbar>
        <ImageGallery
          status={status}
          gallery={gallery}
          error={error}
          onLoadMore={this.onLoadMore}
        ></ImageGallery>
      </div>
    );
  }
}
