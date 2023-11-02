/* eslint-disable react/prop-types */
import { useRef, useState } from "react";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import ButtonBase from "@mui/material/ButtonBase";

const SimpleFileLoader = ({ label, onChange }) => {                   // error
    const ref = useRef();
    const [attachment, setAttachment] = useState('');

    function encodeFile(file) {
        const reader = new FileReader();

        // eslint-disable-next-line func-names
        reader.onload = function () {
            const encodedData = btoa(reader.result); // Закодировать в Base64
            if (onChange) onChange({ name: file.name, base64: encodedData });
        };

        reader.readAsBinaryString(file);
    }

    const handleChange = (event) => {
        const files = Array.from(event.target.files);
        const file = files[0];
        if (file) {
          setAttachment(file.name);
          encodeFile(file);
        }
    };

    return (
        <Box
            position="relative"
            height={70}
        // color={
        //     !!error ? theme.palette.error.main : theme.palette.background.paper
        // }
        >
            <Box position="absolute" top={0} bottom={0} left={0} right={0} mx={0}>
                <TextField
                    margin="normal"
                    fullWidth
                    disabled
                    label={label}
                    value={attachment}
                // error={!!error}
                // helperText={error?.message || " "}
                />
            </Box>
            <ButtonBase
                sx={{
                    width: "100%",
                    height: "100%",
                    overflow: "hidden",
                }}
                component="label"
                onKeyDown={() => ref.current?.click()}
            >
                <input
                    ref={ref}
                    type="file"
                    accept=".xlsx,.xls,.doc,.docx"
                    hidden
                    onChange={handleChange}
                />
            </ButtonBase>
        </Box>
    );
};

export default SimpleFileLoader;