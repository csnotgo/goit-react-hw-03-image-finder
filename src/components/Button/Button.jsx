import { LoadBtn } from './Button.styled';
import PropTypes from 'prop-types';

export const Button = ({ onClick }) => {
  return (
    <LoadBtn type="button" onClick={onClick}>
      Load more
    </LoadBtn>
  );
};

Button.propTypes = {
  onClick: PropTypes.func,
};
