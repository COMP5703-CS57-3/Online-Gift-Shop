import {useState} from 'react';
import PerfectScrollbar from 'react-perfect-scrollbar';
import PropTypes from 'prop-types';
import {
    Avatar,
    Box,
    Card,
    Checkbox,
    Table,
    TableBody,
    TableCell,
    TableHead,
    TablePagination,
    TableRow,
    Typography
} from '@mui/material';
import {getInitials} from '../../../logic/get-initials';
import BasicModal from "./Gift-list-change";
import {useAdmin} from "../../../tools/useAdmin";

export const GiftListResults = ({gift, ...rest}) => {
    const {selectedGiftIds, setSelectedGiftIds} = useAdmin();
    const [limit, setLimit] = useState(10);
    const [page, setPage] = useState(0);

    const handleSelectAll = (event) => {
        let newSelectedGiftIds;

        if (event.target.checked) {
            newSelectedGiftIds = gift.map((customer) => customer.id);
        } else {
            newSelectedGiftIds = [];
        }

        setSelectedGiftIds(newSelectedGiftIds);
    };

    const handleSelectOne = (event, id) => {
        const selectedIndex = selectedGiftIds.indexOf(id);
        let newSelectedGiftIds = [];
        if (selectedIndex === -1) {
            newSelectedGiftIds = newSelectedGiftIds.concat(selectedGiftIds, id);
        } else if (selectedIndex === 0) {
            newSelectedGiftIds = newSelectedGiftIds.concat(selectedGiftIds.slice(1));
        } else if (selectedIndex === selectedGiftIds.length - 1) {
            newSelectedGiftIds = newSelectedGiftIds.concat(selectedGiftIds.slice(0, -1));
        } else if (selectedIndex > 0) {
            newSelectedGiftIds = newSelectedGiftIds.concat(
                selectedGiftIds.slice(0, selectedIndex),
                selectedGiftIds.slice(selectedIndex + 1)
            );
        }
        // console.log(newSelectedGiftIds)
        setSelectedGiftIds(newSelectedGiftIds);
    };

    const handleLimitChange = (event) => {
        setLimit(event.target.value);
    };

    const handlePageChange = (event, newPage) => {
        setPage(newPage);
    };

    return (
        <Card {...rest}>
            <PerfectScrollbar>
                <Box sx={{minWidth: 1050}}>
                    <Table>
                        <TableHead>
                            <TableRow>
                                <TableCell padding="checkbox">
                                    <Checkbox
                                        checked={selectedGiftIds.length === gift.length}
                                        color="primary"
                                        indeterminate={
                                            selectedGiftIds.length > 0
                                            && selectedGiftIds.length < gift.length
                                        }
                                        onChange={handleSelectAll}
                                    />
                                </TableCell>
                                <TableCell>
                                    Name
                                </TableCell>
                                <TableCell>
                                    Price
                                </TableCell>
                                <TableCell>
                                    Sales
                                </TableCell>
                                <TableCell>
                                    Income
                                </TableCell>
                                <TableCell>
                                    Category
                                </TableCell>
                                <TableCell>
                                    Operation
                                </TableCell>
                            </TableRow>
                        </TableHead>
                        <TableBody>
                            {gift.slice(limit * (page), limit * (page + 1)).map((gift) => (
                                <TableRow
                                    hover
                                    key={gift.id}
                                    selected={selectedGiftIds.indexOf(gift.id) !== -1}
                                >
                                    <TableCell padding="checkbox">
                                        <Checkbox
                                            checked={selectedGiftIds.indexOf(gift.id) !== -1}
                                            onChange={(event) => handleSelectOne(event, gift.id)}
                                            value="true"
                                        />
                                    </TableCell>
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
                                    <TableCell>
                                        {gift.gift_discount_state !== "100%" ?
                                            <>
                                                <Box sx={{
                                                    textDecoration: "line-through"
                                                }}>${gift.gift_price}
                                                </Box>
                                                <span>${gift.gift_discount_price}</span>
                                            </> :
                                            <Box>${gift.gift_price}</Box>}
                                    </TableCell>
                                    <TableCell>
                                        {gift.gift_sales}
                                    </TableCell>
                                    <TableCell>
                                        ${gift.gift_income}
                                    </TableCell>
                                    <TableCell>
                                        {`${gift.gift_category}/${gift.gift_side_category1}/${gift.gift_side_category2}`}
                                    </TableCell>
                                    <TableCell>
                                        <BasicModal/>
                                    </TableCell>
                                </TableRow>
                            ))}
                        </TableBody>
                    </Table>
                </Box>
            </PerfectScrollbar>
            <TablePagination
                component="div"
                count={gift.length}
                onPageChange={handlePageChange}
                onRowsPerPageChange={handleLimitChange}
                page={page}
                rowsPerPage={limit}
                rowsPerPageOptions={[5, 10, 25]}
            />
        </Card>
    );
};

GiftListResults.propTypes = {
    gift: PropTypes.array.isRequired
};
