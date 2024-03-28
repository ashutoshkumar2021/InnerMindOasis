import React from "react";
import FullCalendar from "@fullcalendar/react"; // must go before plugins
import dayGridPlugin from "@fullcalendar/daygrid"; // a plugin!
import { Card } from "react-bootstrap";

const Calendar = ({ posts }) => {
  const events = [];

  function getDate(dayString) {
    let yourDate = new Date(dayString);
    const offset = yourDate.getTimezoneOffset();
    yourDate = new Date(yourDate.getTime() - offset * 60 * 1000);
    return yourDate.toISOString().split("T")[0];
  }

  for (let ele of posts) {
    let eventColor;
    let textColor = "white";
    let eventTitle;
    let sentimentDecimal = Number(ele.sentiment.$numberDecimal);
    if (sentimentDecimal < -0.5) {
      eventColor = "#FF0000"; // Red
      eventTitle = "v.negative";
    } else if (sentimentDecimal < 0) {
      eventColor = "#FFA500"; // Orange
      eventTitle = "negative";
    } else if (sentimentDecimal === 0) {
      eventColor = "#FFFF00"; // Yellow
      eventTitle = "neutral";
      textColor = "black";
    } else if (sentimentDecimal < 0.5) {
      eventColor = "#90EE90"; // LightGreen
      textColor = "black";
      eventTitle = "positive";
    } else {
      eventColor = "#008000"; // Green
      eventTitle = "v.postitive";
    }
    events.push({
      title: eventTitle,
      start: getDate(ele.date),
      end: getDate(ele.date),
      backgroundColor: eventColor,
      textColor: textColor,
    });
  }
  return (
    <Card className="shadow" style={{backgroundColor: '#3E4A61', color: '#64C9CF'}}>
      <Card.Body>
        <FullCalendar
          plugins={[dayGridPlugin]}
          initialView="dayGridMonth"
          events={events}
        />
      </Card.Body>
    </Card>
  );
};

export default Calendar;
