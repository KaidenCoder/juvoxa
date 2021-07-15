import { format } from 'date-fns'
import NumberFormat from 'react-number-format';

export const URLTWO = "https://canopy-frontend-task.vercel.app/api/transactions"

export const COLUMNSTWO = [
    {
        Header: 'Name(string)',
        accessor: 'name'
    },
    {
        Header: 'Ticket Ref(string)',
        accessor: 'ticketref'
    },
    {
        Header: 'Trade Date(date)',
        accessor: 'traded_on',
        Cell: ({ value }) => { return format(new Date(value.slice(6), value.slice(0, 2), value.slice(3, 5)), 'dd/MM/yyyy') }
    },
    {
        Header: 'QTY(amount)',
        accessor: 'quantity',
        Cell: ({ value }) => { return <NumberFormat value={value} displayType={'text'} thousandSeparator={true} /> }
    },
    {
        Header: 'CCY(amount)',
        accessor: 'currency',
    },
    {
        Header: 'Settlement Amount(amount)',
        accessor: 'settlement_amount',
        Cell: ({ value }) => { return <NumberFormat value={value} displayType={'text'} thousandSeparator={true} /> }
    }
]
