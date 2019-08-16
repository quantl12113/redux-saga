import { connect } from 'react-redux';
import Register from './register'
import { Actions } from '../../actions';

const mapStateToProps = state => ({ email: state.user.registerEmail })
const mapDispatchToProps = {
  register: Actions.UserActions.registerAction,
}

export default connect(mapStateToProps, mapDispatchToProps)(Register);