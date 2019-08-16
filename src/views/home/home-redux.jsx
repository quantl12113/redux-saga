import { connect } from 'react-redux';
import Home from './home'
import { Actions } from '../../actions';

const mapStateToProps = state => ({ email: state.user.email, data: state.view.data })
const mapDispatchToProps = {
    loadData: Actions.ViewActions.loadDataAction,
    logout: Actions.UserActions.logOutAction
}

export default connect(mapStateToProps, mapDispatchToProps)(Home);