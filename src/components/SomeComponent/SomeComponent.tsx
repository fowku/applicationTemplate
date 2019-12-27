import * as React from 'react';
import { observer } from 'mobx-react';
import defaultStore from '../../stores/defaultStore';
import './SomeComponent.scss';
 
@observer
class SomeComponent extends React.Component<{}, {}> {
    state = {};

    render() { 
        return (
            <div onClick={() => defaultStore.toggleSomething()} 
            className="some-component"/>
        );
    }
}
 
export default SomeComponent;