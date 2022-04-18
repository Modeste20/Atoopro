import { Table } from "antd"
import moment from "moment";
import 'moment/locale/fr'
import React from 'react'

const columns = (filters) => [
  {
    title:'ip',
    dataIndex:'ip',
    width:'30%'
  },
    {
      title: 'Country',
      dataIndex: 'country',
      key:'country',
      filters:filters,
      width: '30%',
    },
    {
      title: 'Date',
      dataIndex: 'date',
      width: '30%',
      render: date => <p>{moment(date).fromNow()}</p>
    },
  ];


const TableVisitor = ({data,filters}) => {
    return (
      <Table columns={columns(filters)} dataSource={data} />
    )
}

export default TableVisitor ;