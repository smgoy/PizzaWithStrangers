import { connect } from 'react-redux';
import Dashboard from './dashboard';

const mapStateToProps = state => ({
  attendances: state.session.currentUser.attendances,
  hostedEvents: state.session.currentUser.hosted_events
});

export default connect(mapStateToProps, null)(Dashboard);
