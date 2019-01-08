import React, {Component} from 'react';
import PropTypes from 'prop-types';
import {Text, View} from 'react-native';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import {fetchProfile} from './redux/actions';
import styles from './styles';
import {strings as _} from '../../../locales/i18n';

class Profile extends Component {
  componentDidMount() {
    this.props.fetchProfile();
  }

  render() {
    return (
      <View>
        <Text style={styles.header}>{this.props.profile.name} {_('welcome')}</Text>
      </View>
    );
  }
}

Profile.propTypes = {
  profile: PropTypes.object.isRequired,
  fetchProfile: PropTypes.func.isRequired
};

function mapStateToProps(state) {
  return {profile: state.profile};
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators({fetchProfile}, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(Profile);
