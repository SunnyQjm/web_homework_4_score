import React, { Component } from 'react';
import 'antd/dist/antd.css';  // or 'antd/dist/antd.less'
import {
    BrowserRouter as Router,
    Route,
    Switch
} from 'react-router-dom';
import {
    Provider
} from 'react-redux';
import {
    AllContainer,
    FinishedContainer,
    UnfinishedContainer,
    HeaderContainer,
    FooterContainer
} from './containers'
import store from './store';
import styled from 'styled-components';
import LocalRouter from './LocalRouter'
import {
    Layout
} from 'antd'


const {Content} = Layout;
const AppBody = styled(Layout)`
    height: 100%;
    display: flex;
    flex-direction: column;
`;

const MyContent = styled(Content)`
    flex-grow: 1;
    padding: 50px;
    display: flex;
    justify-content: center;
`;

class App extends Component {
  render() {
    return (
        <Provider store={store}>
            <Router>
                <AppBody style={{
                    // backgroundColor: '#13171a',
                    minHeight: '100%',
                }}>
                    <HeaderContainer/>
                    <MyContent>
                        <Switch>
                            <Route key={'a'} exact path={LocalRouter.HOME} component={AllContainer}/>
                            <Route key={'b'} path={LocalRouter.FINISHED} component={FinishedContainer}/>
                            <Route key={'c'} path={LocalRouter.UNFINISHED} component={UnfinishedContainer}/>
                        </Switch>
                    </MyContent>
                    <FooterContainer/>
                </AppBody>
            </Router>
        </Provider>
    );
  }
}

export default App;
