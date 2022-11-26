import { Component } from 'react';
import PropTypes from 'prop-types';
import { Gallery, ErrorMessage } from './ImageGallery.styled';
import { ImageGalleryItem } from 'components/ImageGalleryItem/ImageGalleryItem';
import { Loader } from 'components/Loader/Loader';
import { Button } from 'components/Button/Button';


export class ImageGallery extends Component {
 
  render() {
      const {status, gallery, error, onLoadMore} = this.props

      if (status === 'rejected') {
        return <ErrorMessage>{error.message}</ErrorMessage>;
    }
    


      if (status === 'resolved' || status === 'pending') {
        return (
          <>
          <Gallery>
            {gallery.map(({ webformatURL, largeImageURL, tags }) => {
              return (
                <ImageGalleryItem
                  key={webformatURL}
                  path={webformatURL}
                  tags={tags}
                  largeImg={largeImageURL}
                />
              );
            })}
            {status === 'pending' &&
              <Loader />
          }
            </Gallery>
            {status !== 'pending' && <div style={{ width: '100%', display: 'flex', justifyContent: 'center', alignItems: 'center', padding: '20px 0' }}>
              <Button onClick={onLoadMore} /></div>}
            
          </>
        );
      }
    }
  }


Gallery.propTypes = {
  status: PropTypes.string,
  gallery: PropTypes.arrayOf(
    PropTypes.shape({
      webformatURL: PropTypes.string,
      largeImageURL: PropTypes.string,
      tags: PropTypes.string,
    })
  ),
  error: PropTypes.any,
  onloadMore: PropTypes.func,
};
