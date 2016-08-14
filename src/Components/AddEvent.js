import React from 'react';
import './AddEvent.css';

export function AddEvent(props) {
  const { addEvent } = props;

  const onSubmit = (event) => {

    let input = event.target;
    let text = input.value;
    let enterKey = (event.keyCode === 13);
    let len = text.length > 0;

    if (enterKey && len) {
      event.preventDefault();
      input.value = '';
      addEvent(text);
    };
  }

  return (
    <form className="addevent__form">
      <h1>What is making you feel worried?</h1>
      <input name="title" type='text' placeholder='Add event' onKeyDown={onSubmit} />
      <h1>Why is it making you feel worried?</h1>
      <input name="description" type='textarea' placeholder="Don\'t be shy!"/>
    </form>
  );
}
