import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import * as actionCreators from '../actions/actionCreators';
import App from '../App';

function mapStateToProps(state){
	return {
		bands : state.bands
	}
}

function mapDispatchToProps(dispatch){
	return bindActionCreators(actionCreators, dispatch);
}

const Binder = connect(mapStateToProps, mapDispatchToProps)(App);

export default Binder;