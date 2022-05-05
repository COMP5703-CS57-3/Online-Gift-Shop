import React from "react";
import Button from "@mui/material/Button";
import Box from "@mui/material/Box";
import {alpha} from "@mui/material/styles";
import {useNavigate} from "react-router-dom";
import Stack from "@mui/material/Stack";


export default function ProductForNoOwner({products_id, product_name, product_cover, size, price, count, detail}) {
    let navigate = useNavigate();
    const nav = () => navigate("/gift/" + products_id);
    return (
        <Box
            sx={{
                display: 'flex',
                flexDirection: {xs: 'column', sm: 'column', md: 'row'},
                alignItems: 'center',
                bgcolor: 'background.paper',
                overflow: 'hidden',
                borderRadius: '12px',
                boxShadow: 3,
                fontWeight: 'bold',
                maxWidth: {xs: 800, sm: 750, md: 700},
                minWidth: {xs: 350, sm: 490},
                mx: 2,
            }}
        >
            <Box
                component="img"
                sx={{
                    height: 233,
                    width: 350,
                    maxHeight: {xs: 233, md: 200},
                    maxWidth: {xs: 350, sm: 300, md: 250},
                }}
                alt="pic"
                src={product_cover}
            />
            <Box
                sx={{
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: {xs: 'center', md: 'flex-start'},
                    m: 2,
                    minWidth: {md: 350},
                    maxWidth: {md: 400}
                }}
            >
                <Stack direction="column"
                       justifyContent="space-around"
                       alignItems="flex-start">

                    <Stack direction="row"
                           justifyContent="space-between"
                           alignItems="center"
                           spacing={2}
                           sx={{md: 2}}>
                        <Box component="span" sx={{fontSize: 16, mt: 0.5}}>
                            {product_name}
                        </Box>
                        <Box component="span" sx={{color: 'primary.main', fontSize: 22}}>
                            ${price}
                        </Box>
                    </Stack>
                    <Stack direction="row"
                           justifyContent="flex-start"
                           alignItems="center"
                           spacing={6}
                           sx={{mt: 1}}>
                        <Box
                            sx={{
                                mt: 0.5,
                                p: 0.5,
                                backgroundColor: (theme) => alpha(theme.palette.primary.main, 0.1),
                                borderRadius: '5px',
                                color: 'primary.main',
                                fontWeight: 'medium',
                                display: 'flex',
                                fontSize: 12,
                                alignItems: 'center',
                                '& svg': {
                                    fontSize: 21,
                                    mr: 0.5,
                                },
                            }}
                        >
                            Size:{size}
                        </Box>
                        <Box
                            sx={{
                                mt: 0.5,
                                p: 0.5,
                                backgroundColor: (theme) => alpha(theme.palette.primary.main, 0.1),
                                borderRadius: '5px',
                                color: 'primary.main',
                                fontWeight: 'medium',
                                display: 'flex',
                                fontSize: 12,
                                alignItems: 'center',
                                '& svg': {
                                    fontSize: 21,
                                    mr: 0.5,
                                },
                            }}
                        >
                            Count:{count}
                        </Box>
                        <Button size="small" onClick={nav}>Learn More</Button>
                    </Stack>
                </Stack>
            </Box>
        </Box>
    );
}//