import React from 'react';
import reactDOM from 'react-dom';
import './styles/base/base.scss';

const Template = () => {
    return <div>
                    <h1>React Boiler Plate</h1>
            </div>;
} 

reactDOM.render(<Template />, document.getElementById('app'));