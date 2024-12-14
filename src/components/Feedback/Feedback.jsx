import PropTypes from "prop-types";
import css from "../App/App.module.css";

const Feedback = ({ feedbackData, total, precentPositiveFeedback }) => {
  return (
    <>
      <span className={css.span}>Good: {feedbackData.good}</span>
      <span className={css.span}>Neutral: {feedbackData.neutral}</span>
      <span className={css.span}>Bad: {feedbackData.bad}</span>
      <span className={css.span}>Total: {total}</span>
      <span className={css.span}>Positive: {precentPositiveFeedback}</span>
    </>
  );
};

Feedback.propTypes = {
  feedbackData: PropTypes.shape({
    good: PropTypes.number.isRequired,
    neutral: PropTypes.number.isRequired,
    bad: PropTypes.number.isRequired,
  }).isRequired,
  total: PropTypes.number.isRequired,
  precentPositiveFeedback: PropTypes.number.isRequired,
};
export default Feedback;
