import PropTypes from 'prop-types';
import { Component } from 'react';
import { Image } from './ImageGalleryItem.styled';
import { Modal } from 'components/Modal/Modal';

export class ImageGalleryItem extends Component {
  state = {
    isOpen: false,
  };

  togleModal = () => {
    this.setState(({ isOpen }) => ({ isOpen: !isOpen }));
  };

  render() {
    const { path, tags, largeImg } = this.props;
    return (
      <>
        <Image>
          <img
            src={path}
            alt={tags}
            width="360"
            height="260"
            onClick={this.togleModal}
          />
        </Image>
        {this.state.isOpen && (
          <Modal onClose={this.togleModal}>
            <img src={largeImg} alt={tags} width="900" height="650" />
          </Modal>
        )}
      </>
    );
  }
}

ImageGalleryItem.propTypes = {
  path: PropTypes.string.isRequired,
  tags: PropTypes.string.isRequired,
  largeImg: PropTypes.string.isRequired,
};
