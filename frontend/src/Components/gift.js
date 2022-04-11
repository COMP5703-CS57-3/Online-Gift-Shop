
import { Box, Container } from '@mui/material';
import { GiftListResults } from './admin/gift/gift-list-results';
import { GiftListToolbar } from './admin/gift/gift-list-toolbar';

const Gifts = () => (
  <>

    <Box
      component="main"
      sx={{
        flexGrow: 1,
        py: 8
      }}
    >
      <Container maxWidth={false}>
        <GiftListToolbar />
        <Box sx={{ mt: 3 }}>
          <GiftListResults gift={gifts} />
        </Box>
      </Container>
    </Box>
  </>
);


export default Gifts;
