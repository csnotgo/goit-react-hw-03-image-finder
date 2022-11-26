import { Component } from 'react';
import { Searchbar } from 'components/Searchbar/Searchbar';
import { ImageGallery } from 'components/ImageGallery/ImageGallery';
import { fetchImages } from 'components/Services/ImageApi';

export class App extends Component {
  state = {
    searchRequest: '',
    gallery: [],
    page: 0,
    status: 'idle',
    error: null,
  };

  componentDidUpdate(_, prevState) {
    const { searchRequest, gallery, page } = this.state;

    if (prevState.page !== page) {
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
            gallery: [...gallery, ...hits],
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

  onSubmitSearchRequest = (word, page) => {
    this.setState({
      searchRequest: word,
      page: page,
    });
  };

  onSubmitFetch = (search, page) => {
    this.setState({ status: 'pending' });

    fetchImages(search, page)
      .then(response => response.json())
      .then(data => {
        const hits = data.hits;
        this.setState({
          gallery: [...hits],
          status: 'resolved',
        });

        if (data.hits.length === 0) {
          return Promise.reject(new Error(`no results found ${search}`));
        }
      })
      .catch(error => this.setState({ status: 'rejected', error: error }));
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
