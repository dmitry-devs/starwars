import React, { Component } from 'react';
import requestItem from '../../Actions/RequestItem';
import Filter from '../Filter';
import Loading from '../Loading';
import WrapperContentCenter from './Helpers/WrapperContentCenter'
import TableOutput from './Helpers/TableOutput'
import Pagination from '../Pagination'

type appProps = {
    item: string;
};
type appState = {
    items: Array<string>;
    loading: boolean;
    tableLoading: boolean;
    countItemsOnePage: number;
    paging: {
        count: number;
        next: number | null;
        previous: number | null;
    };
    query: {
        search: string;
        page: number;
    };
};

class Content extends Component<appProps, appState> {
    constructor(props: appProps) {
        super(props);
        this.state = {
            items: [],
            loading: true,
            tableLoading: false,
            countItemsOnePage: 10,
            paging: {
                count: 0,
                next: null,
                previous: null,
            },
            query: {
                search: '',
                page: 1,
            },
        };
    }
    componentDidMount() {
        this.getItem();
    }
    clearState = () => this.setState({ loading: true });
    getItem = () => {
        requestItem(this.props.item, this.state.query)
            .then((response: any) => {
                const { count, next, previous, results } = response.data;
                this.setState({
                    paging: { count, next, previous },
                    items: results,
                });
            })
            .finally(() => this.setState({ loading: false, tableLoading: false }));
    };
    changeField = (field: string, value: any) => {
        this.setState(
            prevState => ({
                tableLoading: true,
                query: {
                    ...prevState.query,
                    [field]: value,
                },
            }),
            () => this.getItem(),
        );
    };
    changeFilter = (search: string) => this.changeField('search', search);
    changePage = (page: number): void => this.changeField('page', page);
    render() {
        const { items, loading, tableLoading, countItemsOnePage, paging, query } = this.state
        const table = <TableOutput
                            items={items}
                            item={this.props.item}
                            countItemsOnePage={countItemsOnePage}
                            paging={paging}
                            query={query}/>;
        if (!loading) {
            return (
                <div>
                    <Filter item={this.props.item} request={this.changeFilter} />
                    {!tableLoading
                        ? table
                        : <WrapperContentCenter element={<Loading/>}/>
                    }

                    {(paging.next || paging.previous) &&
                        <Pagination
                            data={items}
                            paging={paging}
                            countItemsOnePage={countItemsOnePage}
                            request={this.changePage}/>
                    }
                </div>
            );
        } else {
            return <WrapperContentCenter element={<Loading/>}/>;
        }
    }
}
export default Content;
