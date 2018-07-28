import React, { Component } from 'react';
import MapView, { Marker } from 'react-native-maps';
import MapViewDirections from 'react-native-maps-directions';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

import * as actions from '../../redux/actions';
import { config } from '../../config/firebase';

import styles from '../../styles';

class Map extends Component {
  static navigationOptions = {
    headerTransparent: true,
    headerStyle: { zIndex: 100 },
  };

  static propTypes = {
    drivers: PropTypes.array.isRequired,
    destination: PropTypes.object.isRequired,
    destinationSet: PropTypes.bool.isRequired,
    getDrivers: PropTypes.func.isRequired,
    region: PropTypes.object.isRequired,
    setDestination: PropTypes.func.isRequired,
  };

  componentWillMount() {
    const { getDrivers } = this.props;
    getDrivers();
  }

  render() {
    const { drivers, destination, destinationSet, region, setDestination } = this.props;
    return (
      <MapView style={styles.map} region={region} onPress={setDestination}>
        <Marker pinColor="blue" title="Pickup Location" draggable coordinate={region} />
        <Marker pinColor="yellow" title="Destination" draggable coordinate={destination} />
        {drivers.map(driver => <Marker key={driver.id} coordinate={driver} />)}
        {destinationSet && (
          <MapViewDirections
            origin={region}
            destination={destination}
            apikey={config.googleMapsApiKey}
          />
        )}
      </MapView>
    );
  }
}

const mapDispatchToProps = dispatch => bindActionCreators(actions, dispatch);

const mapStateToProps = state => {
  const {
    mapReducer: { destination, destinationSet, drivers, pos, region },
  } = state;
  return {
    destination,
    destinationSet,
    drivers,
    pos,
    region,
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(Map);
