import React from "react";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import Modal from "@mui/material/Modal";
import "./ModalPhone.css";
import Phone from "../../image/icons8-phone-40.svg";
const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 400,
  height:200,
  bgcolor: "background.paper",
  // border: '2px solid #000',
  boxShadow: 24,
  p: 4,
  textAlign: "center",
  borderRadius:"8px"
};

const ModalPhone = () => {
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  return (
    <div>
      <Button className="PossBtn" onClick={handleOpen}>
        <img src={Phone} />
        <h5>با ما تماس بگیرید</h5>
      </Button>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style} className="bg-style ">
          <div className="stleMobile">
            <img
              src={require("../../image/photo slider/icons8-smartphone-96.png")}
            />
          </div>
          <Typography
            className="styleHeader"
            id="modal-modal-title"
            variant="h6"
            component="h2"
          >
          <p>  شماره تماس ما</p>
          </Typography>
          <Typography
            className="styleHeader"
            id="modal-modal-description"
            sx={{ mt: 2 }}
          >
           <h4> 09188808587</h4>
          </Typography>
        </Box>
      </Modal>
    </div>
  );
};

export default ModalPhone;
