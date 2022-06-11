import s from './notification.module.scss';
import PropTypes from 'prop-types';
export default function Notification({ message }) {
  if (!message) return;
  return <div className={s.notify}>{message}</div>;
}
Notification.propTypes = {
  message: PropTypes.string.isRequired,
};
