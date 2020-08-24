import React from 'react';

export const Preview = (props) => (
    <div>
        <img width="200px" src={props.imageprovider()} alt="Preview Image" />
    </div>
);
