import PropTypes from "prop-types";
import css from "../App/App.module.css";

const Feedback = ({ good, neutral, bad, total, precentPositiveFeedback }) => {
  return (
    <>
      <span className={css.span}>Good: {good}</span>
      <span className={css.span}>Neutral: {neutral}</span>
      <span className={css.span}>Bad: {bad}</span>
      <span className={css.span}>Total: {total}</span>
      <span className={css.span}>Positive: {precentPositiveFeedback}</span>
    </>
  );
};

Feedback.propTypes = {
  precentPositiveFeedback: PropTypes.number.isRequired,
  good: PropTypes.number.isRequired,
  neutral: PropTypes.number.isRequired,
  bad: PropTypes.number.isRequired,
  total: PropTypes.number.isRequired,
};

export default Feedback;
