
import { mockTransactions } from "../mockData";
import Title from "./Title";
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';

export default function Transactions() {
    return (
        <div id="scroll">
            <>
                <Title>Transactions</Title>
                <Table size="small" >
                    <TableHead>
                        <TableRow>
                            <TableCell>User</TableCell>
                            <TableCell>Date</TableCell>
                            <TableCell>Cost</TableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody >
                        {mockTransactions.map((row) => (
                            <TableRow key={row.id}>
                                <TableCell>{row.user}</TableCell>
                                <TableCell>{row.date}</TableCell>
                                <TableCell>{row.cost}</TableCell>
                            </TableRow>
                        ))}
                    </TableBody>
                </Table>
            </>
        </div>
    )
}