import React from 'react';

class Dashboard extends React.Component{
  render() {
    return (
      <div>
        <h1>STATUS PAGE</h1>
        <div className="flex-container">
          <div>MASTER</div>
          <div>100 EVENTS</div>
          <div>555 CONNECTIONS</div>

        </div>
        <div className="divback">
          <h1 className="statusPage">WEEKLY GOAL</h1>
          <div className="new-container">
            <h2>Events</h2>
          <br/>
          <div className="new-flex-container">

          <form>
            <input type="checkbox" name="event1" value="WomenHack - The All-Women Hackathon San Francisco" />
            <a href="https://www.facebook.com/events/1581985555437397/">
              WomenHack - The All-Women Hackathon San Francisco
            </a>
            <br />
            <br />
          <input type="checkbox" name="event2" value="Workshop for women in Big Data" />
           <a href="https://www.google.ru/">
           Workshop for women in Big Data
          </a><br /><br />
          <input type="checkbox" name="event3" value="Fireside chat with Noga Eshed and Natasha Noy" checked />
          <a href="https://www.eventbrite.com/e/fireside-chat-with-noga-eshed-and-natasha-noy-russian-speaking-women-in-tech-dinner-33-tickets-26063374254">
          Fireside chat with Noga Eshed and Natasha Noy
          </a>
          <br /><br />
          <input type="checkbox" name="event4" value="Women Calling for Women Tuesdays" checked />
          <a href="https://www.eventbrite.com/e/women-calling-for-women-tuesdays-tickets-50892066541?aff=ebdssbdestsearch">
          Women Calling for Women Tuesdays
          </a><br /><br />
             <input type="checkbox" name="event5" value="Women in Engineering Career Fair" checked />
             <a href="https://www.eventbrite.com/e/women-in-engineering-career-fair-tickets-50510304681?aff=ebdssbdestsearch">
             Women in Engineering Career Fair </a><br /><br />
               <input type="checkbox" name="event6" value="Women in the Workplace in 2018" checked />
               <a href="https://www.eventbrite.com/e/women-in-the-workplace-in-2018-tickets-48900356282?aff=ebdssbdestsearch">
               Women in the Workplace in 2018 </a><br /><br />
                 <a className="buttonStyle" href="https://www.eventbrite.com">
                  Add events
                </a>

          </form>

          </div>
          </div>


        </div>

      </div>
    );
  }
}
export default Dashboard;
