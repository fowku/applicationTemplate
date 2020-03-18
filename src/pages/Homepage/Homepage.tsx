import * as React from 'react';
import './Homepage.scss';
import { observer } from 'mobx-react';

import SomeComponent from '../../components/SomeComponent/SomeComponent';

import defaultStore from '../../stores/defaultStore';

@observer
class Homepage extends React.Component<{}, {}> {
  render(): JSX.Element {
    return (
      <div className="wrapper">
        <SomeComponent />
        <div
          className="block"
          style={{
            display: defaultStore.something ? 'block' : 'none',
          }}
        />
      </div>
    );
  }
}

export default Homepage;
