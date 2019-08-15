import { connect } from 'react-redux';
import Login from './login'
import { Actions } from '../../actions';

const mapStateToProps = state => ({ user: state.user })
const mapDispatchToProps = {
  login: Actions.UserActions.loginAction,
}

export default connect(mapStateToProps, mapDispatchToProps)(Login);