import React from "react";
import { CalendarWrapper, CalendarHeader, CalendarBody, CountryIcon, CalendarFirstLine, CalendarEventName, CalendarFirstLineLeft, CalendarBottom, CalendarData, CalendarImpact, CalendarImpactIcon } from "./styles/styles.ts";
import {
  FXSGlobals,
  FXSBackgrounds,
  FXSTextUtilities,
  FXSTextColors,
  FXSTextSizes,
  FXSTextProperties
} from 'fxs-styles';

function Calendar({ calendarParams: { Name, Description, Actual, Consensus, Previous, DateUtc, UrlSource, Source, CountryCode, IsSpeech, IsReport, IsAllDay, Id, impact } }) {
  const hasData = !IsSpeech && !IsReport && !IsAllDay
  const handleClick = () => { window.open(`https://www.fxstreet.com/economic-calendar/event/${Id}`) };
  return (
    <>
      <FXSGlobals />
      <FXSBackgrounds />
      <FXSTextColors />
      <FXSTextSizes />
      <FXSTextProperties />
      <FXSTextUtilities />

      <CalendarWrapper onClick={handleClick}>
        <CalendarHeader className="fxs_txt_size_xsmall">
          {DateUtc}
        </CalendarHeader>
        <CalendarBody>
          <CalendarFirstLine>
            <CalendarFirstLineLeft>
              <CountryIcon countryUrl={`https://staticcontent.fxstreet.com/website/img/icons/flag_${CountryCode.toLowerCase()}.svg`} />
              <CalendarEventName className="fxs_insights_calendar_name fxs_txt_size_small fxs_txt_weight_400">{Name}</CalendarEventName>
            </CalendarFirstLineLeft>
              <CalendarImpact><span className="fxs_txt_size_xsmall">Impact: </span> <CalendarImpactIcon className="medium" /></CalendarImpact>
          </CalendarFirstLine>
          <p className="fxs_txt_size_xsmall">
            <strong>source: </strong>{UrlSource ? <a href={UrlSource} onClick="function(e){e.stopPropagation()}">{Source}</a> : { Source }} </p>
          <CalendarBottom>
            <p className="fxs_txt_size_xsmall fxs_txt_light_1_clr" dangerouslySetInnerHTML={{ __html: Description }} />
            {hasData &&
              <CalendarData className="fxs_bg_light_5_clr">
                <thead>
                  <tr>
                    <th className="fxs_txt_size_xsmall fxs_txt_light_1_clr">Actual</th>
                    <th className="fxs_txt_size_xsmall fxs_txt_light_1_clr">Previous</th>
                    <th className="fxs_txt_size_xsmall fxs_txt_light_1_clr">Consensus</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td className="fxs_txt_size_small fxs_txt_dark_4_clr fxs_txt_weight_700">{Actual ? Actual : '-'}</td>
                    <td className="fxs_txt_size_small fxs_txt_dark_4_clr fxs_txt_weight_700">{Consensus ? Consensus : '-'}</td>
                    <td className="fxs_txt_size_small fxs_txt_dark_4_clr fxs_txt_weight_700">{Previous ? Previous : '-'}</td>
                  </tr>
                </tbody>
              </CalendarData>
            }
          </CalendarBottom>
        </CalendarBody>
      </CalendarWrapper>
    </>
  );
}

export default Calendar;