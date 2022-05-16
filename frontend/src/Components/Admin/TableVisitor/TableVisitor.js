import { Table } from "antd"
import moment from "moment";
import 'moment/locale/fr'
import React from 'react'
import { useState } from "react";

const columns = (filters) => [
    {
      title: 'Country',
      dataIndex: 'country',
      key:'country',
      filters:filters,
      width: '50%',
    },
    {
      title: 'Date',
      dataIndex: 'date',
      width: '50%',
      render: date => <p>{moment(date).fromNow()}</p>
    },
  ];



const TableVisitor = ({data,filters}) => {
  

  const [pagination,setPagination] = useState({
    current: 1,
    pageSize: 3,
  })

  const onChange = (pagination, filters, sorter) => {
    setPagination(pagination)
  }
    return (
      <Table style={{background:'transparent !important',marginTop:25}} columns={columns(filters)} pagination={pagination} dataSource={data} onChange={onChange} />
    )
}

export default TableVisitor ;