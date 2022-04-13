import * as React from 'react';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';
import EditItemForm from "../EditItemForm";
import {TextField} from "@mui/material";
import {useInput} from "../../../tools/useInput";
import {useAdmin} from "../../../tools/useAdmin";

const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 700,
  hight: 800,
  bgcolor: 'background.paper',
  border: '2px solid #000',
  boxShadow: 24,
  p: 4,
};

export default function BasicModal(id) {
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  let {gifts} = useAdmin();
  let foundGift = gifts.find(
       item => item.id === id
    );

  const [giftNameProps,resetGiftName] = useInput();
    const [giftPriceProps,resetGiftPrice] = useInput();
    const [giftDiscountPriceProps,resetGiftDiscountPrice] = useInput();
    const [giftDiscountStateProps,resetGiftDiscountState] = useInput();
    const [descriptionProps,resetDescription3] = useInput();
    const [categoryProps,resetCategory] =useInput();
    const [sideCategory1Props,resetSide1] = useInput();
    const [sideCategory2Props,resetSide2] = useInput();
    const [coverProps,resetCover] = useInput();
    const [show1Props,resetShow1] = useInput();
    const [show2Props,resetShow2] = useInput();
    const [show3Props,resetShow3] = useInput();
    const [show4Props,resetShow4] = useInput();
    const {changeItemCount} = useAdmin();
    // console.log(wishTitle.current.valueOf());

    const size = [
        {
            size: "L",
            size_stock: 2
        }
    ]
    const submit = e=>{
        e.preventDefault();
        changeItemCount(id,
            giftNameProps.value,
            giftPriceProps.value,
            giftDiscountPriceProps.value,
            giftDiscountStateProps.value,
            descriptionProps.value,
            categoryProps.value,
            sideCategory1Props.value,
            sideCategory2Props.value,
            coverProps.value,
            show1Props.value,
            show2Props.value,
            show3Props.value,
            show4Props.value,
            size);
    }

  return (
    <div>
      <Button onClick={handleOpen}>Operation</Button>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
             <Box component="form" onSubmit={submit}>
                        <TextField {...giftNameProps} label="giftName"/>
                        <TextField {...giftPriceProps}  label="giftPrice"/>
                        <TextField {...giftDiscountPriceProps} label="giftDiscountPrice"/>
                        <TextField {...giftDiscountStateProps} label="giftDiscountState"/>
                        <TextField {...descriptionProps} label="description"/>
                        <TextField {...categoryProps} label="category"/>
                        <TextField {...sideCategory1Props} label="sideCategory1"/>
                        <TextField {...sideCategory2Props} label="sideCategory2"/>
                        <TextField {...coverProps} label="coverP"/>
                        <TextField {...show1Props} label="show1"/>
                        <TextField {...show2Props} label="show2"/>
                        <TextField {...show3Props} label="show3"/>
                        <TextField {...show4Props} label="show4"/>
                        <button>change</button>
                    </Box>
        </Box>
      </Modal>
    </div>
  );
}
