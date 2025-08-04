import PropTypes from 'prop-types';
const Greetings = (props) => {
  return props.isLoggedIn ? (
    <h2 className="greeting">Welcome {props.username}</h2>
  ) : (
    <h2 className="not-greeting">Please Login</h2>
  );
};
Greetings.propTypes = {
    isLoggedIn: PropTypes.bool,
    username: PropTypes.string,
}

Greetings.defaultProps = {
  isLoggedIn: false,
  username: "Guest",
};
export default Greetings