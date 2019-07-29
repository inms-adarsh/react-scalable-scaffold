import React from 'react';
import {Pane, Heading} from 'evergreen-ui';

const DashBoardView = () => {
    return (
        <Pane display="flex" padding={16} background="tint2" borderRadius={3}>
            <Pane flex={1} alignItems="center" display="flex">
                <Heading size={600}>DashBoard</Heading>
            </Pane>
        
        </Pane>
    )

}

export default DashBoardView;