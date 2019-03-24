import React from 'react';
import { Tab } from '@material-ui/core';
import { Link } from 'react-router-dom';

interface TabProps {
    to: string;
    label: string;
}
const LinkTab = (props: TabProps) => {
    return <Tab {...props} component={Link as any} />
};

export default LinkTab;