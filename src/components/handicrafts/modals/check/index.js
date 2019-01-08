import React, {Component} from 'react';
import PropTypes from 'prop-types';
import {
  Modal, Text, TouchableOpacity, TouchableWithoutFeedback, View
} from 'react-native';
import {positiveButton, defaultButton} from '../../../../styles/common';
import {strings as _} from '../../../../locales/i18n';
import styles from './styles';

class Check extends Component {
  render() {
    return (
      <Modal
        animationType="fade"
        transparent={true}
        visible={this.props.visible}
        onRequestClose={() => {}}
      >
        <TouchableWithoutFeedback onPress={() => this.props.onChangeVisibility()}>
          <View style={styles.marginBox}/>
        </TouchableWithoutFeedback>
        <View style={styles.container}>
          <TouchableOpacity onPress={() => this.props.onChangeVisibility()}>
            <Text style={styles.close}>&times;</Text>
          </TouchableOpacity>
          <Text style={styles.callToAction}>{_('reservation_checked?')}</Text>
          <View style={styles.actionButtons}>
            <TouchableOpacity onPress={() => this.props.onCheckBooking()}>
              <Text style={positiveButton}>{_('yes')}</Text>
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
}

Check.propTypes = {
  visible: PropTypes.bool.isRequired,
  onChangeVisibility: PropTypes.func.isRequired,
  onCheckBooking: PropTypes.func.isRequired,
};
export default Check;
