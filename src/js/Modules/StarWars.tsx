import React, { Component } from 'react';
import { Tabs } from '@material-ui/core';
import LinkTab from '../components/LinkTab';
import TabContainer from '../Components/Table/TabContainer';
import { Switch, Route } from 'react-router-dom';

type appProps = {
    location: {
        pathname: string;
    };
};
type appState = {
    tab: number | null;
};

class Content extends Component<appProps, appState> {
    state = {
        tab: this.selectionTab(),
    };
    selectionTab() {
        const path = this.props.location.pathname.replace(/\//g, '');
        const tabs = ['', 'people', 'planets', 'species'];
        return tabs.indexOf(path);
    }
    handleChange = (event: any, tab: number) => this.setState({ tab });
    render() {
        return (
            <div className={'app__content'}>
                <Tabs value={this.state.tab} onChange={this.handleChange}>
                    <LinkTab label="Films" to="/" />
                    <LinkTab label="People" to="/people" />
                    <LinkTab label="Planets" to="/planets" />
                    <LinkTab label="Species" to="/species" />
                </Tabs>
                <Switch>
                    <Route exact path="/" component={() => <TabContainer item={'films'} />} />
                    <Route path="/people" component={() => <TabContainer item={'people'} />} />
                    <Route path="/planets" component={() => <TabContainer item={'planets'} />} />
                    <Route path="/species" component={() => <TabContainer item={'species'} />} />
                </Switch>
            </div>
        );
    }
}
export default Content;
