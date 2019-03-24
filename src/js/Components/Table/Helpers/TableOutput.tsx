import React, { Component } from 'react';
import Table from '../Table';
import WrapperContentCenter from "./WrapperContentCenter";
import NotFound from '../../NotFound';

const TableOutput = (props: any) => {
    if(props.items.length){
        return (
            <Table
                data={props.items}
                item={props.item}
                countItemsOnePage={props.countItemsOnePage}
                paging={props.paging}
                query={props.query}/>
        )
    }
    return <WrapperContentCenter element={<NotFound/>}/>
};
export default TableOutput;