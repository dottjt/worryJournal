var counter = 0;
var dateToday = new Date();
var dateOptions = {
    year: "numeric", month: "short",
    day: "numeric"
};

export function addEvent(eventTitle) {
  return {
    type:"ADD_EVENT",
    payload: {
      eventTitle: eventTitle,
      date: dateToday.toLocaleDateString("en-US", dateOptions),
      id: counter++
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
