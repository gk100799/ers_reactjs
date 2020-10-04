import React, { useState, useEffect } from 'react'
import { withRouter } from 'react-router-dom'

import Tab from './Tab'
import './EventsUI.css'

function Tabs(props) {

    // let children = []

    const [activeTab, setActiveTab] = useState(props.children[0].props.label)
    // const [activeTab, setActiveTab] = useState()

    useEffect(() => {
        switch(props.location.pathname) {
            case "/" : 
                setActiveTab("UPCOMING")
                break;
            case "/registered": 
                setActiveTab("REGISTERED")
                break;
            case "/feedback": 
                setActiveTab("FEEDBACK")
                break;
            default: 
                setActiveTab("UPCOMING")
        }
        // } === "/" ? setActiveTab("UPCOMING") 
        //     : props.location.pathname === "/registered" ? setActiveTab("REGISTERED") 
        //     : props.location.pathname === "/feedback" ? setActiveTab("FEEDBACK") 
    }, [props.location.pathname])

    const onClickTabItem = (tab) => {
        if(tab === "UPCOMING") {
            props.history.push(`/`)
        }else {
            props.history.push(`/${tab.toLowerCase()}`)
        }
        // setActiveTab(tab);
    }
    
    const children = props.children

    return (
        <div className="tabs">
        <ul className="main-nav">
          {children.map((child) => {
            const { label } = child.props;

            return (
              <Tab
                activeTab={activeTab}
                key={label}
                label={label}
                onClick={onClickTabItem}
                class={props.class}
              />
            );
          })}
        </ul>
        <div className="tab-content">
          {children.map((child) => {
            if (child.props.label !== activeTab) return undefined;
            return child.props.children;
          })}
        </div>
      </div>
    )
}

export default withRouter(Tabs)
