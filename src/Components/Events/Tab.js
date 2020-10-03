import React from 'react'

function Tab(props) {

    const onClick = () => {
        const { label, onClick } = props;
        onClick(label);
    }

    let className = props.class;

    if (props.activeTab === props.label) {
      className += ' tabs-list-active';
    }


    return (
        <li
        className={className}
        onClick={onClick}
      ><a>
        {props.label}
        </a>
      </li>
    )
}

export default Tab
