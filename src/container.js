import { connect } from 'react-redux';
import * as EventListComponent from './Components/EventList';
import * as AddEventComponent from './Components/AddEvent';
import { addEvent } from './actions';


export const EventList = connect(
  function mapStateToProps(state) {
    return { events: state };
  })(EventListComponent.EventList);

export const AddEvent = connect(
  function mapStateToProps(state) {
    return { events: state };
  },
  function mapDispatchToProps(dispatch) {
    return {
      addEvent: eventTitle => dispatch(addEvent(eventTitle))
    }
  }
)(AddEventComponent.AddEvent);
