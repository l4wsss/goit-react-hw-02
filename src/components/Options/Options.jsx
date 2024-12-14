import PropTypes from "prop-types";
import css from "../App/App.module.css";

const Options = ({ handleLeaveFeedback, feedbacks, handleReset, total }) => {
  return (
    <>
      {feedbacks.map((feedback) => (
        <button
          className={css.button}
          key={feedback}
          onClick={() => handleLeaveFeedback(feedback)}
        >
          {feedback}
        </button>
      ))}

      {total > 0 && (
        <button className={css.button} onClick={handleReset}>
          Reset
        </button>
      )}
    </>
  );
};

Options.propTypes = {
  total: PropTypes.number.isRequired,
  handleReset: PropTypes.func.isRequired,
  handleLeaveFeedback: PropTypes.func.isRequired,
  feedbacks: PropTypes.arrayOf(PropTypes.string).isRequired,
};

export default Options;
