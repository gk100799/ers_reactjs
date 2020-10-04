import React, { useState, useEffect } from 'react'
import { Modal, Button } from 'antd';

function Upcoming(props) {

    const [visible, setVisible] = useState(false)
    const [confirmLoading, setConfirmLoading] = useState(false)

    const showModal = () => {
        setVisible(true)
    };

    const handleOk = () => {
        setConfirmLoading(true);
        setTimeout(() => {
            setVisible(false)
            setConfirmLoading(false)
        }, 1000);
    };

    const handleCancel = () => {
        console.log('Clicked cancel button');
        setVisible(false)
    };


    return (
        <div>
            <Modal
                title="A little bit about the event"
                visible={visible}
                onOk={handleOk}
                confirmLoading={confirmLoading}
                onCancel={handleCancel}
            >
                <p>Hello people this is an event!!</p>
            </Modal>
            <div className="row" style={{ maxWidth: "1200px", marginLeft: "auto", marginRight: "auto", marginTop: "40px", padding: "20px" }}>
                <div className="col col-6-sm">
                    <div className="box-events">
                        <h4 className="title-box">" upcoming.event_name "</h4>
                        <button name="event" className="btn-onimg" value="{{ upcoming.event_id }}" onClick={showModal}>View More</button>
                    </div>
                </div>

                <div className="col col-6-sm">
                    <div className="box-events">
                        <h4 className="title-box">"upcoming.event_name "</h4>
                        <button name="event" className="btn-onimg" value="{{ upcoming.event_id }}" onClick={showModal}>View More</button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Upcoming
