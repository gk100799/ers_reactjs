import React from 'react'
import './EventsUI.css'
import Tabs from './Tabs'
import '../../Css/simple-grid.css'
import Registered from './Registered'
import Feedback from './Feedback'
import Upcoming from './Upcoming'

function EventsUI(props) {

    return (
        <div>
            <header>
                <div className="texts">
                    <div className="admin">
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
                            <Upcoming />
                        </div>

                        <div label="REGISTERED" className="activities" id="acti">
                            <br />
                            <br />
                            <div className="row" style={{ maxWidth: "1200px", marginLeft: "auto", marginRight: "auto", marginTop: "40px", padding: "20px" }}>
                                <Registered />
                            </div>
                        </div>
                        <div label="FEEDBACK" className="survey" id="attendedtable">
                            <br />
                            <br />
                            <div className="row" style={{ maxWidth: "1200px", marginLeft: "auto", marginRight: "auto", marginTop: "40px", padding: "20px" }}>
                                <Feedback />
                            </div>
                        </div>
                    </Tabs>
                </div>
            </header>









        </div>
    )
}

export default EventsUI
