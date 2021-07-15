import NumberFormat from 'react-number-format';
export const URL = "https://canopy-frontend-task.vercel.app/api/holdings"

export const COLUMNS = [
    {
        Header: 'Holding name(string)',
        accessor: 'name'
    },
    {
        Header: 'Ticker(string)',
        accessor: 'ticker'
    },
    {
        Header: 'Asset Class(string)',
        accessor: 'asset_class'
    },
    {
        Header: 'Avg Price(amount)',
        accessor: 'avg_price',
        Cell: ({ value }) => { return <NumberFormat value={value} displayType={'text'} thousandSeparator={true} /> }
    },
    {
        Header: 'Market Price(amount)',
        accessor: 'market_price',
        Cell: ({ value }) => { return <NumberFormat value={value} displayType={'text'} thousandSeparator={true} /> }
    },
    {
        Header: 'Latest change percentage(float)',
        accessor: 'latest_chg_pct',
        Cell: ({ value }) => value.toFixed(2)
    },
    {
        Header: 'Market Value in Base CCY (float)',
        accessor: 'market_value_ccy',
        Cell: ({ value }) => { return <NumberFormat value={value.toFixed(2)} displayType={'text'} thousandSeparator={true} /> }
    }

]

