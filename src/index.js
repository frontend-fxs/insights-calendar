import React from 'react';
import ReactDOM from 'react-dom';
import Calendar from './calendar';

const calendarParams={
  "eventDateId":56745745674 ,
  "eventId":7698567856856 ,
  "eventDateName":"event date name" ,
  "source":"source" ,
  "summary":"summary" ,
  "impact":1 ,
  "previous":1.2 ,
  "consensus":1.3 ,
  "actual":1.15 ,
  "country":"free catalonia" ,
  "isSpeech":true ,
  "isReport":true ,
  "isAllDay":true
}

ReactDOM.render(
  <React.StrictMode>
    <Calendar calendarParams={calendarParams}/>
  </React.StrictMode>,
  document.getElementById('root')
);
