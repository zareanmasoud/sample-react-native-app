import React, {Component} from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  ScrollView, TouchableWithoutFeedback
} from 'react-native';
import {bindActionCreators} from 'redux';
import {connect} from 'react-redux';
import PropTypes from 'prop-types';
// import Icon from 'react-native-vector-icons/FontAwesome5';
import {strings as _} from '../../../locales/i18n';
import moment from 'moment-jalaali';
import {setBookingCanceled, setBookingChecked, setBookingVisited} from '../redux/actions';
import Check from '../modals/check/index';
import CancelDescription from '../modals/cancel-description/index';
import {positiveButton, basicButton, negativeButton} from '../../../styles/common';
import SetVisit from '../modals/set-visit/index';
import Loader from '../../shared/loader/index';
import styles from './styles';

class HandicraftView extends Component {
  constructor(props) {
    super(props);
    this.state = {
      text: '',
      detail: false,
      checkModalVisible: false,
      cancelDescriptionModalVisible: false,
      visitModalVisible: false,
    };
  }

  setCheckModalVisible = (visible) => {
    this.setState({checkModalVisible: visible});
  };

  setCancelDescriptionModalVisible = (visible) => {
    this.setState({cancelDescriptionModalVisible: visible});
  };

  setVisitModalVisible = (visible) => {
    this.setState({visitModalVisible: visible});
  };


  setBookingCanceled = (cancel_description) => {
    this.props.setBookingCanceled(this.props.hadicraft.id, cancel_description, this.props.hadicraft.galleryId);
    this.setCancelDescriptionModalVisible(false);
  };

  setBookingChecked = () => {
    this.props.setBookingChecked(this.props.hadicraft.id, this.props.hadicraft.galleryId);
    this.setCheckModalVisible(false);
  };

  setBookingVisited = () => {
    this.props.setBookingVisited(this.props.hadicraft.id, true, this.props.hadicraft.galleryId);
    this.setVisitModalVisible(false);
  };

  setBookingNotVisited = () => {
    this.props.setBookingVisited(this.props.hadicraft.id, false, this.props.hadicraft.galleryId);
    this.setVisitModalVisible(false);
  };

  renderAction = () => {
    switch (getStatus(this.props.hadicraft)) {

      case CANCELED:
        return null;

      case CHECKED:
        return (
          <View>
            <TouchableOpacity onPress={() => this.setCancelDescriptionModalVisible(true)}>
              <Text style={negativeButton}>{_('cancel')}</Text>
            </TouchableOpacity>
          </View>
        );

      case NEW:
        return (
          <View style={styles.row}>
            <TouchableOpacity onPress={() => this.setCheckModalVisible(true)}>
              <Text style={positiveButton}>{_('check')}</Text>
            </TouchableOpacity>
            <TouchableOpacity onPress={() => this.setCancelDescriptionModalVisible(true)}>
              <Text style={negativeButton}>{_('cancel')}</Text>
            </TouchableOpacity>
          </View>
        );

      case VISITED:
      case NOT_VISITED:
      case NULL_VISITED:
        return (
          <View>
            <TouchableOpacity onPress={() => this.setVisitModalVisible(true)}>
              <Text style={basicButton}>{_('set_status')}</Text>
            </TouchableOpacity>
          </View>
        );

      default:
        return null;
    }
  };

  render() {
    const {hadicraft} = this.props;
    const status = getStatus(hadicraft);
    const dateTime = moment.unix(hadicraft['date_time']).format('dddd jDD-jMM-jYYYY HH:mm');
    const createdDateTime = moment.unix(hadicraft['created']).format('dddd jDD-jMM-jYYYY HH:mm');
    const angelIcon = this.state.detail ? 'angle-up' : 'angle-down';
    return (
      <View>
        <TouchableWithoutFeedback onPress={() => this.setState({detail: !this.state.detail})}>
          <View style={[styles.container, styles.hadicraft]}>
            <ScrollView style={styles.groupItems}>
              {/*<View><Icon style={styles.angleIcon} name={angelIcon} size={20} color={'white'}/></View>*/}
              <Text style={styles.id}>{`${_('status')}: ${_(status)}`}</Text>
              {this.state.detail && <Text style={styles.id}>{`${_('id')}: ${hadicraft.id}`}</Text>}
              <Text style={styles.id}>{`${_('name')}: ${hadicraft.user.name}`}</Text>
              {this.state.detail && <Text style={styles.id}>{`${_('username')}: ${hadicraft.user.username}`}</Text>}
              <Text style={styles.id}>{`${_('tel')}: ${hadicraft.user['tel']}`}</Text>
              <Text style={styles.dateTimeTitle}>{`${_('date')}: ${dateTime}`}</Text>
              {this.state.detail && <Text style={styles.id}>{`${_('practice')}: ${hadicraft['practice_name']}`}</Text>}
              {
                this.state.detail && hadicraft.description !== '' && (
                  <Text style={styles.id}>
                    {`${_('description')}: ${hadicraft.description}`}
                  </Text>
                )
              }
              {
                this.state.detail && hadicraft.canceled && (
                  <Text style={styles.id}>
                    {`${_('cancel_description')}: ${hadicraft['cancel_description']}`}
                  </Text>
                )
              }
              {this.state.detail && <Text style={styles.id}>{`${_('created')} : ${createdDateTime}`}</Text>}
            </ScrollView>
            <View style={styles.actionRow}>
              {this.state.detail && this.renderAction()}
            </View>
            {hadicraft.pending && <Loader/>}
          </View>
        </TouchableWithoutFeedback>
        <Check
          visible={this.state.checkModalVisible}
          onChangeVisibility={() => this.setCheckModalVisible(false)}
          onCheckBooking={() => this.setBookingChecked()}
        />
        <CancelDescription
          visible={this.state.cancelDescriptionModalVisible}
          onChangeVisibility={() => this.setCancelDescriptionModalVisible(false)}
          onCancelBooking={(cancel_description) => this.setBookingCanceled(cancel_description)}
        />
        <SetVisit
          visible={this.state.visitModalVisible}
          onChangeVisibility={() => this.setVisitModalVisible(false)}
          onSetBookingVisited={() => this.setBookingVisited()}
          onSetBookingNotVisited={() => this.setBookingNotVisited()}
        />
      </View>
    );
  }
}

HandicraftView.propTypes = {
  hadicraft: PropTypes.object.isRequired,
  setBookingChecked: PropTypes.func.isRequired,
  setBookingCanceled: PropTypes.func.isRequired,
  setBookingVisited: PropTypes.func.isRequired,
};

function mapDispatchToProps(dispatch) {
  return bindActionCreators({setBookingChecked, setBookingCanceled, setBookingVisited}, dispatch);
}

export default connect(null, mapDispatchToProps)(HandicraftView);
