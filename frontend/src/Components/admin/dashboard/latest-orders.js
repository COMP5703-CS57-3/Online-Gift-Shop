import PerfectScrollbar from 'react-perfect-scrollbar';
import {Box, Button, Card, Table, TableBody, TableCell, TableHead, TableRow, Typography} from '@mui/material';
import ArrowRightIcon from '@mui/icons-material/ArrowRight';
import {SeverityPill} from './severity-pill';
import {useNavigate} from "react-router-dom";


export const LatestOrders = ({orders}) => {
    const navigate = useNavigate()

    return (
        <Card >
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
                                <TableCell>
                                    Expected Receive Date
                                </TableCell>
                            </TableRow>
                        </TableHead>
                        <TableBody>
                            {orders.map((order) => (
                                <TableRow
                                    hover
                                    key={order.id}
                                >
                                    <TableCell>
                                        <SeverityPill
                                            color={(order.order_state === 'waiting' && 'error')
                                            || (order.order_state === 'completed' && 'success')
                                            || 'warning'}
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
                                    <TableCell>
                                        {order.user_expected_delivery_time}
                                    </TableCell>
                                </TableRow>
                            ))}
                        </TableBody>
                    </Table>
                </Box>
            </PerfectScrollbar>


            <Box
                sx={{
                    display: 'flex',
                    justifyContent: 'flex-end',
                    p: 2
                }}
            >
                <Button
                    color="primary"
                    endIcon={<ArrowRightIcon fontSize="small"/>}
                    size="small"
                    variant="text"
                    onClick={() => navigate("oui")}
                >
                    View all
                </Button>
            </Box>
        </Card>
    );
}

