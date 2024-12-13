import PropTypes from "prop-types";
import css from "../App/App.module.css";

const Options = ({ handleLeaveFeedback, options, handleReset, total }) => {
  return (
    <>
      {options.map((option) => (
        <button
          className={css.button}
          key={option}
          onClick={() => handleLeaveFeedback(option)}
        >
          {option}
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
  options: PropTypes.arrayOf(PropTypes.string).isRequired,
};

export default Options;
