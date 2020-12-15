import PropTypes from 'prop-types';
import s from './Statistics.module.css';
import Notification from '../Notification/Notification';

export default function Statistics({
  good,
  neutral,
  bad,
  total,
  positivePercentage,
}) {
  return (
    <>
      {total > 0 && (
        <ul className={s.list}>
          <li>
            <p className={s.text}>Good : {good}</p>
          </li>
          <li>
            <p className={s.text}>Neutral : {neutral}</p>
          </li>
          <li>
            <p className={s.text}>Bad : {bad}</p>
          </li>
          <li>
            <p className={s.text}>Total : {total}</p>
          </li>
          <li>
            <p className={s.text}>Positive feedbacks : {positivePercentage}%</p>
          </li>
        </ul>
      )}
      {total === 0 && <Notification message="No feedback given" />}
    </>
  );
}

Statistics.propTypes = {
  good: PropTypes.number.isRequired,
  neutral: PropTypes.number.isRequired,
  bad: PropTypes.number.isRequired,
  total: PropTypes.number.isRequired,
  positivePercentage: PropTypes.number.isRequired,
};
