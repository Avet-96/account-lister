import React, {FC, useEffect} from 'react';
import {useSelector} from "react-redux";
import {Link, useParams, withRouter} from "react-router-dom";
import { Col, Descriptions, Row } from 'antd';

import history from "../history";
import { selectAccount } from "../store/account/selectors";
import { queryAccount } from "../store/account/actions";
import { useAppDispatch } from "../store/hooks/reduxHooks";

export interface MatchParams {
  id: string;
}
const Account: FC = () => {

  const { id: accountId } = useParams<MatchParams>()
  const appDispatch = useAppDispatch();

  const account= useSelector(selectAccount);

  useEffect(() => {
    appDispatch<any>(queryAccount(accountId, ()=> {
      history.push('/')
    }))
  }, [appDispatch, accountId])

  return (
    <Row justify='start'>
      <Col span={12}>
        <Descriptions title={`Account ${accountId}`}>
          <Descriptions.Item label="ID" span={3}>
            {account?._id}
          </Descriptions.Item>
          <Descriptions.Item label="Name" span={3}>
            {account?.name}
          </Descriptions.Item>
          <Descriptions.Item label="Owner" span={3}>
            {account?.owner}
          </Descriptions.Item>
          <Descriptions.Item label="Created On" span={3} >
            {account?.createdOn}
          </Descriptions.Item>
          <Descriptions.Item label="Update On" span={3}>
            {account?.updatedOn}
          </Descriptions.Item>
          <Descriptions.Item label="Go to Accounts" span={3}>
            <Link to={'/'} >Accounts</Link>
          </Descriptions.Item>
        </Descriptions>
      </Col>
    </Row>
  )
}
export default withRouter(Account);
