import { connect } from 'react-redux';
import CitiesIndex from './cities_index';

const mapStateToProps = state => ({
  cities: state.cities
});

export default connect(mapStateToProps, null)(CitiesIndex);
