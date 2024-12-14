import PropTypes from "prop-types";

const Notification = ({ children }) => {
  return <p>{children}</p>;
};

export default Notification;

Notification.propTypes = {
  children: PropTypes.node.isRequired,
};
