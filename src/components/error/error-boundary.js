import React, {Fragment} from 'react';
import {Alert} from 'react-native';
import {bindActionCreators} from 'redux';
import {connect} from 'react-redux';
import PropTypes from 'prop-types';
import {deleteError} from './redux/actions';

class ErrorBoundary extends React.Component {
  render() {
    this.props.errors.forEach((error) => Alert.alert(
      error.type,
      error.message,
      [
        {text: 'OK', onPress: () => this.props.deleteError(error.id)},
      ],
      {cancelable: false}
    ));
    return (
      <Fragment>
        {this.props.children}
      </Fragment>
    );
  }
}

ErrorBoundary.propTypes = {
  children: PropTypes.any,
  errors: PropTypes.array,
  deleteError: PropTypes.func,
};

function mapStateToProps({errors}) {
  return {errors};
}

function mapDispatchToProps(dispatch){
  return bindActionCreators({deleteError}, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(ErrorBoundary);
