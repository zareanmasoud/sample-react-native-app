import React, {Component} from 'react';
import {ScrollView, View} from 'react-native';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import PropTypes from 'prop-types';
import HandicraftView from './handicraft-view/index';
import {fetchHandicrafts} from './redux/actions';
import Loader from '../shared/loader/index';
import {strings as _} from '../../locales/i18n';

class Handicrafts extends Component {
  static navigationOptions = {
    title: `${_('handicrafts')}`,
    headerStyle: {
      backgroundColor: '#679e00',
    },
    headerTintColor: '#fff',
    headerTitleStyle: {
      fontWeight: 'bold',
    },
  };

  componentDidMount() {
    const galleryId = this.props.navigation.state.params.gallery.id;
    this.props.fetchHandicrafts(galleryId);
  }

  render() {
    return (
      <View>
        {this.props.Handicrafts.pending && <Loader/>}
        <ScrollView>
          {
            this.props.Handicrafts.items && this.props.Handicrafts.items.map(handicraft => (
              <HandicraftView key={handicraft.id} handicraft={handicraft}/>
            ))
          }
        </ScrollView>
      </View>
    );
  }
}

Handicrafts.defaultProps = {
  Handicrafts: {pending: true, items: []}
};

Handicrafts.propTypes = {
  Handicrafts: PropTypes.object.isRequired,
  navigation: PropTypes.object.isRequired,
  fetchHandicrafts: PropTypes.func.isRequired
};

function mapStateToProps(state, props) {
  const galleryId = props.navigation.state.params.gallery.id;
  return {Handicrafts: state.Handicrafts[galleryId]};
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators({fetchHandicrafts}, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(Handicrafts);
