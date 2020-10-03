import React from 'react'
import './EventsUI.css'
import Tabs from './Tabs'
import '../../Css/simple-grid.css'
import Registered from './Registered'

function EventsUI(props) {

    return (
        <div>
            <header>
            <div className="texts">
                <div className= "admin">
                
                   Hello, user1!
    
                    <div className="dropdown">
                      <button className="dropbtn"><i className="glyphicon glyphicon-user icon-top"></i></button>
                      <div className="dropdown-content">
                        <a href="#">My Details</a>
                        <a href="../">Logout</a>
                      </div>
                    </div>
                    
                </div>

                <Tabs>
                    <div label="UPCOMING" className="events" id="first">
                        <br />
                        <br />
                        <div>
                        <div className="row" style={{maxWidth: "1200px", marginLeft: "auto", marginRight: "auto", marginTop:"40px", padding:"20px"}}>

                        <div className="col col-6-sm">
                                <div className="box-events">
                                <h4 className="title-box">" upcoming.event_name "</h4>
                                <button type="submit" name="event" className="btn-onimg" value="{{ upcoming.event_id }}">View More</button>  
                                </div>
                        </div>

                        <div className="col col-6-sm">
                                <div className="box-events">
                                <h4 className="title-box">"upcoming.event_name "</h4>
                                <button type="submit" name="event" className="btn-onimg" value="{{ upcoming.event_id }}">View More</button>  
                                </div>
                        </div>
                        </div>
                        </div> 
                    </div>

                    <div label="REGISTERED" className="activities" id="acti">
                        <br />
                        <br />
                        <div className="row" style={{maxWidth: "1200px", marginLeft: "auto", marginRight: "auto", marginTop:"40px", padding:"20px"}}>
                        
                            {/* <table id ="t02">
                                <tr>
                                    <th>Events</th>    
                                    <th>Details</th>
                                </tr>    

                                <form method="POST" action="/home/details2/">
                                <tr>
                                    <td>" registered.event_name "</td>
                                    <td><button className="testt" type="submit"  name="event" style={{border:"none"}} value="{{ registered.eventid }}">View More</button></td>
                                </tr> 
                                </form>
                        </table> */}
                        <Registered />
                        </div>
                    </div>
                    <div label="FEEDBACK" className = "survey" id="attendedtable">
                        <br />
                        <br />
                        <div className="row" style={{maxWidth: "1200px", marginLeft: "auto", marginRight: "auto", marginTop:"40px", padding:"20px"}}>
                            {/* <table id ="t02">
                                <tr>
                                    <th>Events Attended</th>    
                                    <th>Survey</th>
                                </tr>    

                                <tr>
                                    <td>"survey.event_name"</td>
                                    <td><button id="b100" style={{ border:"none" }} type="submit" name="event1"  value="{{ survey.eventid }}">Take Me</button></td>
                                </tr> 
                            </table> */}
                        {/* < /> */}


                        </div>
                            {/* <h1>You're all caught up!!<h1> */}

                    </div>
                </Tabs>

            </div>            
        </header>
            
            



         
           
        

        </div>
    )
}

export default EventsUI
