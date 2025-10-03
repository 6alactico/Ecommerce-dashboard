import React from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCircleInfo } from '@fortawesome/free-solid-svg-icons';

type HeadingProps = {
    title: string;
};

export function SectionHeading({title}: HeadingProps) {
    return (
        <div style={{
           display: 'flex',
           flexDirection: 'row',
           alignItems: 'center',
        }}>

            <h2>{title}</h2>
            <FontAwesomeIcon 
                icon={faCircleInfo} 
                style={{
                    padding: 12,
                }}
            />
        </div>
    )
}

export default SectionHeading;