var uuid = require('node-uuid')

var dateOptions = {
    year: "numeric", month: "short",
    day: "numeric"
};

export function addEvent(eventTitle) {
  return {
    type:"ADD_EVENT",
    payload: {
      eventTitle: eventTitle,
      date: new Date().toLocaleDateString("en-US", dateOptions),
      id: uuid.v4()
    }
  }
}

export function deleteEvent(id) {
  return {
    type: "DELETE_EVENT",
    payload: id
  }
}


/*
export function filterEvent(id) {
  return { payload: id }
  }
  */
