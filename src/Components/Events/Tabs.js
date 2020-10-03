import React, { useState } from 'react'

import Tab from './Tab'
import './EventsUI.css'

function Tabs(props) {

    // let children = []

    const [activeTab, setActiveTab] = useState(props.children[0].props.label)

    const onClickTabItem = (tab) => {
        setActiveTab(tab);
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

export default Tabs
