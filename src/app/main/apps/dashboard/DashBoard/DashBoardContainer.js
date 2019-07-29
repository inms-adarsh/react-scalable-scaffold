import React, {Component} from 'react';
import DashBoardView from './DashBoardView';

class DashBoardContainer extends Component  {
    render () {
        return (
            <DashBoardView
            modelData={[
              { name: "name", label: "Name", props: { required: true } },
              { name: "age", label: "Age", type: "number" }
            ]}
            onSubmit={model => {
              this.onSubmit(model);
            }}
          />
        )
    }
}

export default DashBoardContainer;