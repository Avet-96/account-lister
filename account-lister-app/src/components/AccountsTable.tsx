import React, { FC, useMemo } from "react";
import { Space, Table } from "antd";

import { DataType } from "../types/components/IAccount";
import { Accounts } from "../store/accounts/types";
import { Link } from "react-router-dom";
import { ColumnsType } from "antd/es/table";
import { Account } from "../store/account/types";


type Props = { accounts: Accounts }

const AccountsTable: FC<Props> = ({ accounts }) => {

  const TABLE_DEFAULT_COLUMNS: ColumnsType<DataType> = useMemo(
    () => [
    {
      title: 'ID',
      dataIndex: 'key',
      key: 'key',
      render: (text) => <span>{text}</span>,
    },
    {
      title: 'Name',
      dataIndex: 'name',
      key: 'name',
      render: (text) => <span>{text}</span>,
    },
    {
      title: 'Created On',
      dataIndex: 'createdOn',
      key: 'createdOn',
    },
    {
      title: 'Owner',
      dataIndex: 'owner',
      key: 'owner',
    },
    {
      title: 'Action',
      key: 'action',
      render: ( {action, key}) => {
        return (
          <Space size="middle">
            <Link to={`/account/${key}`}>{action}</Link>
          </Space>
        )
      },
    },
  ],
    []
  );
  const data: DataType[] = useMemo(
    () => accounts
      .map(({ _id, name, createdOn, owner}: Account) =>
        ({ key: _id, name, createdOn, owner, action: 'View' })
      ),
    [accounts]
  )

  return <Table columns={TABLE_DEFAULT_COLUMNS} dataSource={data} pagination={false}/>
}

export default AccountsTable
