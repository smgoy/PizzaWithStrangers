import { connect } from 'react-redux';
import CityDetail from './city_detail';

const mapStateToProps = state => ({
  city: state.city,
  cities: state.cities,
  currentUser: state.session.currentUser
});

export default connect(mapStateToProps, null)(CityDetail);
