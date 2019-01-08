import React from 'react';
import PropTypes from 'prop-types';
import {bindActionCreators} from 'redux';
import {connect} from 'react-redux';
import {ScrollView, View} from 'react-native';
import {fetchGalleries} from './redux/actions';
import Loader from '../../shared/loader/index';
import Gallery from './gallery/index';
import {HANDICRAFTS, PAINTINGS} from '../../../routes/constants';
import MainCarousel from './main-carousel'
import GalleriesCarousel from './galleries-carousel'

class Galleries extends React.Component {
  componentDidMount() {
    this.props.fetchGalleries();
  }

  render() {
    return (
      <ScrollView>
        {this.props.galleries.pending && <Loader/>}

        <MainCarousel data={this.props.galleries.items}/>
        <GalleriesCarousel data={this.props.galleries.items}/>

        <View style={{flexWrap: 'wrap', flexDirection: 'row'}}>
          {(this.props.galleries.items || []).map((gallery) => (
            <Gallery
              key={gallery.id}
              gallery={gallery}
              handleShowHandicrafts={this.handleShowHandicrafts}
              handleShowPaintings={this.handleShowPaintings}
            />
          ))}
        </View>
      </ScrollView>
    );
  }

  handleShowHandicrafts = (gallery) => {
    this.props.navigation.navigate(PAINTINGS, {gallery});
  };

  handleShowPaintings = (gallery) => {
    this.props.navigation.navigate(HANDICRAFTS, {gallery});
  };
}

Galleries.propTypes = {
  galleries: PropTypes.object.isRequired,
  navigation: PropTypes.object.isRequired,
  fetchGalleries: PropTypes.func.isRequired,
};

function mapStateToProps(state) {
  return {
    galleries: state.galleries,
  };
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators({fetchGalleries}, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(Galleries);
