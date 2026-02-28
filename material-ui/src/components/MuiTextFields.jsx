import React from "react";
import { TextField } from "@mui/material";
import MenuItem from '@mui/material/MenuItem';

function MuiTextFields() {
  const currencies = [
    {
      value: "USD",
      label: "$",
    },
    {
      value: "EUR",
      label: "€",
    },
    {
      value: "BTC",
      label: "฿",
    },
    {
      value: "JPY",
      label: "¥",
    },
  ];

  return (
    <div>
      <TextField
        required
        id="outlined-basic"
        label="Adınız"
        variant="outlined"
      />
      <TextField
        defaultValue="Rüstem"
        id="filled-basic"
        label="Soyadınz"
        variant="filled"
      />
      <TextField id="standard-basic" label="Telefon" variant="standard" />

      <TextField
          id="outlined-select-currency"
          select
          label="Select"
          defaultValue="EUR"
          helperText="Please select your currency"
          size="small"
        >
          {currencies.map((option) => (
            <MenuItem key={option.value} value={option.value}>
              {option.label}
            </MenuItem>
          ))}
        </TextField>
    </div>
  );
}

export default MuiTextFields;
