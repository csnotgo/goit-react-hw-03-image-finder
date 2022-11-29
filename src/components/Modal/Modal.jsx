import { Component } from 'react';
import { createPortal } from 'react-dom';
import PropTypes from 'prop-types';
import { Backdrop, Content } from './Modal.styled';

const modalPortal = document.getElementById('modal-root');

export class Modal extends Component {

  componentDidMount() {
  window.addEventListener('keydown', this.closeModalOnEscape);
  }
  
  componentWillUnmount() {
    window.removeEventListener('keydown', this.closeModalOnEscape);
  }

  closeModalOnEscape = (e) => {
  if (e.code === 'Escape') {
    this.props.onClose()
  }
  }
  
  render() {
    const { children, onClose } = this.props;
    return createPortal(
      <Backdrop onClick={onClose}>
        <Content>{children}</Content>
      </Backdrop>,
      modalPortal
    );
  }
}

Modal.propTypes = {
  children: PropTypes.node,
  onClose: PropTypes.func,
};
