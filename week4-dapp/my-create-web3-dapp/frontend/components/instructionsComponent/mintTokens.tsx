import React, { useState } from "react";
import axios from "axios";
import { Button, TextField, Box, Typography } from "@mui/material";

function MintTokensForm() {
  const [formData, setFormData] = useState({ address: "", amount: "" });

  const handleInputChange = (e: { target: { name: any; value: any } }) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e: { preventDefault: () => void }) => {
    e.preventDefault();

    try {
      const response = await axios.post(
        "http://localhost:3001/mint-tokens",
        formData
      );
      console.log("Minting response:", response.data);
      // You can handle the response here (e.g., show a success message)
    } catch (error) {
      console.error("Error minting tokens:", error);
      // Handle errors here (e.g., show an error message)
    }
  };

  return (
    <Box
      display="flex"
      flexDirection="column"
      gap={3}
      maxWidth="400px"
      margin="20px auto"
    >
      <Typography variant="h5">Mint Tokens</Typography>
      <form onSubmit={handleSubmit}>
        <TextField
          fullWidth
          label="Address"
          variant="outlined"
          id="address"
          name="address"
          value={formData.address}
          onChange={handleInputChange}
          required
        />
        <Box marginTop={2}>
          <TextField
            fullWidth
            label="Amount"
            variant="outlined"
            type="number"
            id="amount"
            name="amount"
            value={formData.amount}
            onChange={handleInputChange}
            required
          />
        </Box>
        <Box marginTop={2}>
          <Button variant="contained" color="primary" type="submit" fullWidth>
            Mint Tokens
          </Button>
        </Box>
      </form>
    </Box>
  );
}

export default MintTokensForm;
