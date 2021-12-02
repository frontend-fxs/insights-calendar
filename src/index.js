import React from 'react';
import ReactDOM from 'react-dom';
import Calendar from './calendar';

const calendarParams = {
  "Id": "f21a55ef-8d4b-4970-8f7e-0100bae77407", 
  "Name": "Chicago Fed National Activity Index ",
  "Description": "The Chicago Fed National Activity Index (CFNAI), released by <a href=\"http://www.chicagofed.org/webpages/index.cfm\" target=\"_blank\" >Federal Reserve Bank of Chicago</a>, is a monthly index designed to gauge overall economic activity and related inflationary pressure.",
  "Actual": null,
  "Consensus": 1.2094,
  "Previous": 1.2242,
  "DateUtc": "2021-11-22T16:15:31.8069041Z",
  "UrlSource": "https://www.fxstreet.com/",
  "Source": "source name",
  "CountryCode": "US",
  "IsSpeech": false,
  "IsReport": false,
  "IsAllDay": false
}

ReactDOM.render(
  <React.StrictMode>
    <Calendar calendarParams={calendarParams} />
  </React.StrictMode>,
  document.getElementById('root')
);
