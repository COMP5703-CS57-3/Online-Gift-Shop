import {useState} from 'react';
import PerfectScrollbar from 'react-perfect-scrollbar';
import PropTypes from 'prop-types';
import {Box, Card, Table, TableBody, TableCell, TableHead, TablePagination, TableRow, Typography} from '@mui/material';
import {useAdmin} from "../../../tools/useAdmin";
import {SeverityPill} from "../dashboard/severity-pill";
import IconButton from "@mui/material/IconButton";
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import KeyboardArrowUpIcon from '@mui/icons-material/KeyboardArrowUp';
import {Collapse} from "@material-ui/core";
import Avatar from "@mui/material/Avatar";
import {getInitials} from "../../../logic/get-initials";


export const OrderListResults = ({orders, ...rest}) => {
    const [limit, setLimit] = useState(10);
    const [page, setPage] = useState(0);
    const {ChangeStatus} = useAdmin()
    const [open, setOpen] = useState()
    const [selected, setSelected] = useState(-1)
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

                                    </TableCell>
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
                                {orders.slice(limit * (page), limit * (page + 1)).map((order) => (<>
                                        <TableRow
                                            hover
                                            key={order.id}
                                        >
                                            <TableCell>
                                                <IconButton
                                                    aria-label="expand row"
                                                    size="small"
                                                    onClick={() => {
                                                        if (selected === order.id) {
                                                            setOpen(!open)
                                                        }else{
                                                            setSelected(order.id)
                                                            setOpen(true)
                                                        }
                                                    }}
                                                >
                                                    {open ? <KeyboardArrowUpIcon/> : <KeyboardArrowDownIcon/>}
                                                </IconButton>
                                            </TableCell>
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
                                            <TableCell>
                                                {order.user_expected_delivery_time}
                                            </TableCell>
                                        </TableRow>

                                        <TableRow>
                                            <TableCell style={{paddingBottom: 0, paddingTop: 0}} colSpan={6}>
                                                <Collapse in={open && selected === order.id} timeout="auto"
                                                          onClick={() => setSelected(selected === order.id)}
                                                          unmountOnExit>
                                                    <Box sx={{margin: 1}}>
                                                        <Typography variant="h6" gutterBottom component="div">
                                                            Gift
                                                        </Typography>
                                                        <Table size="small" aria-label="purchases">
                                                            <TableHead>
                                                                <TableRow>
                                                                    <TableCell>
                                                                        Name
                                                                    </TableCell>
                                                                    <TableCell>Size</TableCell>
                                                                    <TableCell align="right">Amount</TableCell>
                                                                    <TableCell align="right">Total price ($)</TableCell>
                                                                </TableRow>
                                                            </TableHead>
                                                            <TableBody>
                                                                {order.products.map((gift) => (
                                                                    <TableRow key={gift.id}>
                                                                        <TableCell>
                                                                            <Box
                                                                                sx={{
                                                                                    alignItems: 'center',
                                                                                    display: 'flex'
                                                                                }}
                                                                            >
                                                                                <Avatar
                                                                                    src={gift.gift_cover_url}
                                                                                    sx={{mr: 2}}
                                                                                >
                                                                                    {getInitials(gift.name)}
                                                                                </Avatar>
                                                                                <Typography
                                                                                    color="textPrimary"
                                                                                    variant="body1"
                                                                                >
                                                                                    {gift.gift_name}
                                                                                </Typography>
                                                                            </Box>
                                                                        </TableCell>
                                                                        <TableCell>{gift.size}</TableCell>
                                                                        <TableCell
                                                                            align="right">{gift.count}</TableCell>
                                                                        <TableCell align="right">
                                                                            {gift.each_total_price}
                                                                        </TableCell>
                                                                    </TableRow>
                                                                ))}
                                                            </TableBody>
                                                        </Table>
                                                    </Box>
                                                </Collapse>
                                            </TableCell>
                                        </TableRow>
                                    </>
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

OrderListResults.propTypes =
    {
        orders: PropTypes.array.isRequired
    }
;
