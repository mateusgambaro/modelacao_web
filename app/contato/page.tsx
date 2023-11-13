"use client";

import { Button, TextField, Snackbar } from "@mui/material";
import MuiAlert from "@mui/material/Alert";

import { useState } from "react";
import emailjs from "emailjs-com";
import {
  AiOutlineEnvironment,
  AiOutlineMail,
  AiOutlinePhone,
} from "react-icons/ai";

const Contact: React.FC = () => {
  const [isLoading, setLoading] = useState(false);

  const [notification, setNotification] = useState({
    open: false,
    message: "",
    severity: "success", // can be "error", "warning", "info", "success"
  });

  // Function to handle closing the Snackbar
  // const handleClose = (event, reason) => {
  //   if (reason === "clickaway") {
  //     return;
  //   }
  //   setNotification({ ...notification, open: false });
  // };

  const textFieldStyle = {
    "& label.Mui-focused": {
      color: "#97D384", // Cor do texto do label quando focado
    },
    "& .MuiOutlinedInput-root": {
      "& fieldset": {
        borderColor: "#97D384", // Cor da borda padrão
      },
      "&:hover fieldset": {
        borderColor: "#97D384", // Cor da borda no hover
      },
      "&.Mui-focused fieldset": {
        borderColor: "#97D384", // Cor da borda quando focado
      },
    },
  };

  const textFieldStyled = {
    style: {
      color: "white", // altere para a cor da fonte desejada
    },
  };

  const inputLabelStyle = {
    shrink: true,
    style: {
      color: "#97D384", // altere para a cor da fonte desejada
    },
  };

  // const sendEmail = (e) => {
  //   e.preventDefault();
  //   setLoading(true);

  //   emailjs
  //     .sendForm(
  //       "service_cqnd86b",
  //       "template_osv942b",
  //       e.target
  //       // "jxuTfVKU-ESevX362"
  //     )
  //     .then(
  //       (result) => {
  //         setLoading(false);
  //         setNotification({
  //           open: true,
  //           message: "Email sent successfully!",
  //           severity: "success",
  //         });
  //       },
  //       (error) => {
  //         setLoading(false);
  //         setNotification({
  //           open: true,
  //           message: "Failed to send email. Please try again later.",
  //           severity: "error",
  //         });
  //       }
  //     );
  // };
  return (
    <>
      <section className="bg-green-90 py-10">
        <h1 className="bold-52 sm:bold-88 text-white text-center">Contato</h1>
        <p className="regular-16 text-white text-center mx-auto px-4">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin
          vestibulum risus mauris, pharetra semper sem fermentum id. Phasellus
          facilisis quis orci quis molestie.
        </p>
        <div className="flex flex-col justify-center items-center">
          <div className="flex flex-col sm:flex-row items-center justify-center gap-2 pt-10">
            <div className="flex flex-col w-[350px] sm:w-[250px] h-[150px] justify-center items-center bg-green-120 rounded-2xl">
              <AiOutlinePhone color="#97D384" size={40} />
              <p className="regular-16 text-green-150 pt-4">(15) 3226-4801</p>
              <p className="regular-16 text-green-150">(15) 3226-4801</p>
            </div>
            <div className="flex flex-col w-[350px] h-[150px] justify-center items-center bg-green-120 rounded-2xl">
              <AiOutlineMail color="#97D384" size={40} />
              <p className="regular-16 text-green-150 pt-4">
                modelsor@modelacaosorocabana.com.br{" "}
              </p>
            </div>
            <div className="flex flex-col w-[350px] sm:w-[250px] h-[150px] justify-center items-center bg-green-120 rounded-2xl">
              <AiOutlineEnvironment color="#97D384" size={40} />
              <p className="regular-16 text-green-150 pt-4">
                Av. Itavuvu, nº 4.455
              </p>
              <p className="regular-16 text-green-150">Sorocaba/SP</p>
            </div>
          </div>
          <div className="flex flex-col sm:w-[870px] sm:h-[450px] w-[85%] items-center bg-green-120 rounded-2xl mt-2">
            <div className="flex flex-col items-center w-full">
              <div className="flex sm:flex-row flex-col gap-4 sm:gap-10 pt-10 w-[90%]">
                <TextField
                  id="name"
                  label="Nome"
                  variant="outlined"
                  fullWidth
                  sx={textFieldStyle}
                  InputProps={textFieldStyled}
                  InputLabelProps={inputLabelStyle}
                />
                <TextField
                  id="city"
                  label="Cidade"
                  variant="outlined"
                  fullWidth
                  sx={textFieldStyle}
                  InputProps={textFieldStyled}
                  InputLabelProps={inputLabelStyle}
                />
              </div>
              <div className="flex sm:flex-row flex-col gap-4 sm:gap-10 pt-4 w-[90%]">
                <TextField
                  id="email"
                  label="Email"
                  variant="outlined"
                  sx={textFieldStyle}
                  InputProps={textFieldStyled}
                  InputLabelProps={inputLabelStyle}
                  fullWidth
                />
                <TextField
                  id="phone"
                  label="Telefone"
                  variant="outlined"
                  sx={textFieldStyle}
                  InputProps={textFieldStyled}
                  InputLabelProps={inputLabelStyle}
                  fullWidth
                />
              </div>
              <div className="flex gap-10 pt-4 w-[90%] h-[200px]">
                <TextField
                  id="message"
                  label="Mensagem"
                  variant="outlined"
                  multiline
                  sx={textFieldStyle}
                  InputProps={textFieldStyled}
                  InputLabelProps={inputLabelStyle}
                  rows={4}
                  fullWidth
                />
              </div>
            </div>
            <div className="flex justify-center sm:justify-start w-full sm:px-10 mb-10">
              <Button
                variant="contained"
                // onClick={() => sendEmail(event)}
                style={{
                  backgroundColor: "#256D4A",
                  color: "#97D384",
                }}
              >
                Enviar
              </Button>
            </div>
          </div>
        </div>
      </section>
      {/* <Snackbar
        open={notification.open}
        autoHideDuration={6000}
        onClose={handleClose}
        anchorOrigin={{ vertical: "bottom", horizontal: "center" }}
      >
        <MuiAlert
          onClose={handleClose}
          severity={notification.severity}
          elevation={6}
          variant="filled"
        >
          {notification.message}
        </MuiAlert>
      </Snackbar> */}
    </>
  );
};

export default Contact;
