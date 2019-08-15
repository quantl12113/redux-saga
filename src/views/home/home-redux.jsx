import { connect } from 'react-redux';
import Home from './home'
import { Actions } from '../../actions';

const mapStateToProps = state => ({ email: state.user.email })

export default connect(mapStateToProps)(Home);