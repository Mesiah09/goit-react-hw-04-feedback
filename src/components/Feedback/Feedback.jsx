import s from './feedback.module.scss';
import PropTypes from 'prop-types';
export default function Feedback({ options, onLeaveFeedback }) {
  return (
    <div className={s['button-wraper']}>
      {options.map((option, index) => (
        <button
          key={index}
          className={s.button}
          onClick={() => onLeaveFeedback(option)}
        >
          {option}
        </button>
      ))}
    </div>
  );
}
Feedback.defaultProps = {
  options: [],
  onLeaveFeedback: () => {},
};
Feedback.propTypes = {
  onLeaveFeedback: PropTypes.func.isRequired,
  options: PropTypes.arrayOf(PropTypes.string).isRequired,
};
