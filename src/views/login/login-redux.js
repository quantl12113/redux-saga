import { connect } from 'react-redux';
import Login from './login'
import { Actions } from '../../actions';

const mapStateToProps = state => ({ user: state.user, email: state.user.email })
const mapDispatchToProps = {
  login: Actions.UserActions.loginAction,
}

export default connect(mapStateToProps, mapDispatchToProps)(Login);