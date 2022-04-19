import {useState} from 'react';
import PerfectScrollbar from 'react-perfect-scrollbar';
import PropTypes from 'prop-types';
import {Box, Card, Table, TableBody, TableCell, TableHead, TablePagination, TableRow, Typography} from '@mui/material';
import {useAdmin} from "../../../tools/useAdmin";
import {SeverityPill} from "../dashboard/severity-pill";
import {CircularProgress} from "@material-ui/core";

export const OrderListResults = ({orders, ...rest}) => {
    const [limit, setLimit] = useState(10);
    const [page, setPage] = useState(0);

    const {ChStateOpen, setChStateOpen} = useAdmin()
    const {currOpen, setCurrOpen} = useAdmin()
    const {ChangeStatus} = useAdmin()
    const handleLimitChange = (event) => {
        setLimit(event.target.value);
    };

    const handlePageChange = (event, newPage) => {
        setPage(newPage);
    };

    return (
        <div>

            <Card {...rest}>
                <PerfectScrollbar>
                    <Box sx={{minWidth: 1050}}>
                        <Table>
                            <TableHead>
                                <TableRow>
                                    <TableCell>
                                        Status
                                    </TableCell>
                                    <TableCell>
                                        Receiver
                                    </TableCell>
                                    <TableCell>
                                        Buyer
                                    </TableCell>
                                    <TableCell>
                                        Receiver Mobile
                                    </TableCell>
                                    <TableCell>
                                        Delivery Address
                                    </TableCell>
                                </TableRow>
                            </TableHead>
                            <TableBody>
                                {orders.slice(limit * (page), limit * (page + 1)).map((order) => (
                                    <TableRow
                                        hover
                                        key={order.id}
                                    >
                                        <TableCell>
                                            <SeverityPill
                                                color={(order.order_state === 'waiting' && 'error')
                                                || (order.order_state === 'completed' && 'success')
                                                || 'warning'}
                                                onClick={() => {
                                                    ChangeStatus(order.order_number)
                                                }}
                                            >
                                                {order.order_state}
                                            </SeverityPill>
                                        </TableCell>
                                        <TableCell>
                                            <Box
                                                sx={{
                                                    alignItems: 'center',
                                                    display: 'flex'
                                                }}
                                            >
                                                <Typography
                                                    color="textPrimary"
                                                    variant="body1"
                                                >
                                                    {`${order.first_name} ${order.last_name}`}
                                                </Typography>
                                            </Box>
                                        </TableCell>
                                        <TableCell>
                                            <Box
                                                sx={{
                                                    alignItems: 'center',
                                                    display: 'flex'
                                                }}
                                            >
                                                <Typography
                                                    color="textPrimary"
                                                    variant="body1"
                                                >
                                                    {order.payer_name}
                                                </Typography>
                                            </Box>
                                        </TableCell>
                                        <TableCell>
                                            {order.phone}
                                        </TableCell>
                                        <TableCell>
                                            {`${order.address}, ${order.postcode}`}
                                        </TableCell>
                                    </TableRow>
                                ))}
                            </TableBody>
                        </Table>
                    </Box>
                </PerfectScrollbar>
                <TablePagination
                    component="div"
                    count={orders.length}
                    onPageChange={handlePageChange}
                    onRowsPerPageChange={handleLimitChange}
                    page={page}
                    rowsPerPage={limit}
                    rowsPerPageOptions={[5, 10, 25]}
                />
            </Card>
        </div>
    );
};

OrderListResults.propTypes = {
    orders: PropTypes.array.isRequired
};
