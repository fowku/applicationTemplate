import * as React from 'react';
import './Application.scss';
import { observer } from 'mobx-react';
import SomeComponent from './SomeComponent/SomeComponent';

import defaultStore from '../stores/defaultStore';

@observer
class Workplace extends React.Component<{}, {}> {
    render() {
        return (
            <div className="wrapper">
                <SomeComponent />
                <div
                    className="block"
                    style={{
                        display: defaultStore.something ? 'block' : 'none'
                    }}
                />
            </div>
        );
    }
}

export default Workplace;