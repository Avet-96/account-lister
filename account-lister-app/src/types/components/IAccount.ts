import { RouteComponentProps } from 'react-router';


// RcTableProps<RecordType>["data"]

export interface DataType {
  key: string;
  name: string;
  createdOn: string;
  owner: string;
  action: string;
}
