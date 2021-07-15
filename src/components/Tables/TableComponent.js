import React from 'react'
import { useTable, useSortBy, usePagination, useColumnOrder } from 'react-table'
import { Secondary, Success } from '../Button/Button.stories'
import './TableStyle.css'

function TableComponent(props) {

    const tableInstance = useTable({
        columns: props.columns,
        data: props.url
    }, useSortBy, usePagination, useColumnOrder)

    // Order of columns
    const ord1 = ['name', 'ticker', 'asset_class', 'avg_price', 'market_price', 'latest_chg_pct', 'market_value_ccy']
    const ord2 = ['name', 'ticketref', 'currency', 'settlement_amount', 'traded_on', 'quantity']

    const {
        getTableProps,
        getTableBodyProps,
        headerGroups,
        page,
        nextPage,
        previousPage,
        canNextPage,
        canPreviousPage,
        pageOptions,
        gotoPage,
        pageCount,
        setPageSize,
        state,
        setColumnOrder,
        prepareRow
    } = tableInstance

    const { pageIndex, pageSize } = state

    // Change order of columns when clicked
    let changeOrder = () => {
        if (props.url.length === 107) {
            setColumnOrder(ord1.sort(() => 0.5 - Math.random()))
        } else {
            setColumnOrder(ord2.sort(() => 0.5 - Math.random()))
        }
    }

    return (
        <>
            {props.url.length === 107 ? <Secondary name="Holdings Table" /> : <Secondary name="Transactions Table" />}
            <button style={{ border: "none", backgroundColor: "white", margin: '1em' }} onClick={changeOrder}><Success name="Change column order" /></button>
            <table {...getTableProps()}>
                <thead>
                    {headerGroups.map(headerGroup => (
                        <tr {...headerGroup.getHeaderGroupProps()}>
                            {headerGroup.headers.map(column => (
                                <th {...column.getHeaderProps(column.getSortByToggleProps())}>{column.render('Header')}
                                    <span>
                                        {column.isSorted ? (column.isSortedDesc ? " ↓" : " ↑") : ' ↔'}
                                    </span>
                                </th>
                            ))}
                        </tr>
                    ))}
                </thead>
                <tbody {...getTableBodyProps()}>
                    {page.map(row => {
                        prepareRow(row)
                        return (
                            <tr {...row.getRowProps()}>
                                {row.cells.map(cell => {
                                    return <td {...cell.getCellProps()}>{cell.render('Cell')}</td>
                                })}
                            </tr>
                        )
                    })}
                </tbody>
            </table>
            <div style={{ padding: "2em" }}>
                <span>
                    Page{' '}<strong>{pageIndex + 1}</strong> of {pageOptions.length}{' '}
                </span>
                <span>
                    | Go to page: {' '}
                    <input type="number" defaultValue={pageIndex + 1}
                        onChange={
                            e => {
                                const pageNumber = e.target.value ? Number(e.target.value) - 1 : 0
                                gotoPage(pageNumber)
                            }
                        }
                        style={{ width: '50px' }}
                    />
                </span>
                <select
                    value={pageSize}
                    onChange={e => setPageSize(Number(e.target.value))}
                >
                    {
                        [10, 25, 30].map((pageSize) => (
                            <option key={pageSize} value={pageSize}>
                                Show {pageSize}
                            </option>
                        ))
                    }
                </select>
                <div style={{ padding: "1em" }}>
                    <button style={{ margin: "0.3em" }} onClick={() => gotoPage(0)} disabled={!canPreviousPage}>{'<<'}</button>
                    <button style={{ margin: "0.3em" }} onClick={() => previousPage()} disabled={!canPreviousPage}>Previous</button>
                    <button style={{ margin: "0.3em" }} onClick={() => nextPage()} disabled={!canNextPage}>Next</button>
                    <button style={{ margin: "0.3em" }} onClick={() => gotoPage(pageCount - 1)} disabled={!canNextPage}>{'>>'}</button>
                </div>
            </div>
        </>
    )
}

export default TableComponent

