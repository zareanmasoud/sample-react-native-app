import React, {Component} from 'react';
import PropTypes from 'prop-types';
import {
  Modal,Text, TouchableOpacity, TouchableWithoutFeedback, View
} from 'react-native';
import {positiveButton, defaultButton, negativeButton} from '../../../../styles/common';
import {strings as _} from '../../../../locales/i18n';
import styles from './styles';

class SetVisit extends Component {
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
          <Text style={styles.callToAction}>{_('visit_was_made?')}</Text>
          <View style={styles.actionButtons}>
            <TouchableOpacity onPress={() => this.props.onSetBookingVisited()}>
              <Text style={positiveButton}>{_('was_visited')}</Text>
            </TouchableOpacity>
            <TouchableOpacity onPress={() => this.props.onSetBookingNotVisited()}>
              <Text style={negativeButton}>{_('was_not_visited')}</Text>
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

SetVisit.propTypes = {
  visible: PropTypes.bool.isRequired,
  onChangeVisibility: PropTypes.func.isRequired,
  onSetBookingVisited: PropTypes.func.isRequired,
  onSetBookingNotVisited: PropTypes.func.isRequired,
};
export default SetVisit;
