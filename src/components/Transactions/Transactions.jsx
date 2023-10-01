import {
  Table,
  TableData,
  TableHeader,
} from '../Transactions/Transactions.Styled';

export const TransactionHistory = ({ items }) => (
  <Table>
    <thead>
      <tr>
        <TableHeader>Type</TableHeader>
        <TableHeader>Amount</TableHeader>
        <TableHeader>Currency</TableHeader>
      </tr>
    </thead>

    <tbody>
      {items.map(({ id, type, amount, currency }) => (
        <tr key={id}>
          <TableData>{type}</TableData>
          <TableData>{amount}</TableData>
          <TableData>{currency}</TableData>
        </tr>
      ))}
    </tbody>
  </Table>
);
