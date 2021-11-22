
function Calendar({calendarParams}) {
    const {eventDateId,eventId,eventDateName,source,summary,impact,previous,consensus,actual,country,isSpeech,isReport,isAllDay}=calendarParams;
    return (
      <>
      <h1>Calendar</h1>
      {eventDateId}
      {eventId}
      {eventDateName}
      {source}
      {summary}
      {impact}
      {previous}
      {consensus}
      {actual}
      {country}
      {isSpeech && <p>Is speech</p>}
      {isReport && <p>Is Report</p>}
      {isAllDay && <p>Is All Day</p>}
      </>
    );
  }
  
  export default Calendar;