import PropTypes from 'prop-types';
import { Button1 } from './Button.styled';
// import styles from './Button.module.css';

export const Button = ({ textContent, onClick }) => {
  return (
    <Button1 type="button" onClick={onClick}>
      {textContent}
    </Button1>
  );
};

Button.propTypes = {
  textContent: PropTypes.string,
  onClick: PropTypes.func,
};
