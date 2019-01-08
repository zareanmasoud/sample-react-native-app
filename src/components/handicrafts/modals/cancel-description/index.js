import React, {Component} from 'react';
import PropTypes from 'prop-types';
import {Modal, Text, TextInput, TouchableOpacity, TouchableWithoutFeedback, View} from 'react-native';
import {negativeButton, defaultButton} from '../../../../styles/common';
import {strings as _} from '../../../../locales/i18n';
import styles from './styles';

class CancelDescription extends Component {

  constructor(props) {
    super(props);
    this.state = {
      text: '',
      inputTextValidationError: null,
    };
  }

  render() {
    return (
      <Modal
        animationType="fade"
        transparent={true}
        visible={this.props.visible}
        onRequestClose={() => {
        }}
      >
        <TouchableWithoutFeedback onPress={() => this.props.onChangeVisibility()}>
          <View style={styles.marginBox}/>
        </TouchableWithoutFeedback>
        <View style={styles.container}>
          <TouchableOpacity onPress={() => this.props.onChangeVisibility()}><Text
            style={styles.close}>&times;</Text></TouchableOpacity>
          <Text style={styles.callToAction}>{_('reservation_canceled?')}</Text>
          <TextInput
            style={styles.textInput}
            onChangeText={(text) => this.onChangeText(text)}
            value={this.state.text}
          />
          {
            this.state.inputTextValidationError
              && (<Text style={styles.errorText}>{_('please_enter_cancel_description')}</Text>)
          }
          <View style={styles.actionButtons}>
            <TouchableOpacity onPress={() => this.cancelBookingHandler(this.state.text)}>
              <Text style={negativeButton}>{_('cancel')}</Text>
            </TouchableOpacity>
            <TouchableOpacity onPress={() => this.props.onChangeVisibility()}>
              <Text style={defaultButton}>{_('close')}</Text>
            </TouchableOpacity>
          </View>
        </View>
        <TouchableWithoutFeedback onPress={() => this.props.onChangeVisibility()}>
          <View style={styles.marginBox}/>
        </TouchableWithoutFeedback>

      </Modal>
    );
  }

  setTextValidationError = (text) => {
    if (!text) {
      this.setState(
        {inputTextValidationError: true},
      );
    } else {
      this.setState(
        {inputTextValidationError: false},
      );
    }
  };

  onChangeText = (text) => {
    this.setState({text}, this.setTextValidationError(text));
  };

  cancelBookingHandler = (text) => {
    if (!text) {
      this.setState({inputTextValidationError: true});
    } else {
      this.setState({inputTextValidationError: false});
      this.props.onCancelBooking(text);
    }
  };
}

CancelDescription.propTypes = {
  visible: PropTypes.bool.isRequired,
  onChangeVisibility: PropTypes.func.isRequired,
  onCancelBooking: PropTypes.func.isRequired,
};
export default CancelDescription;
