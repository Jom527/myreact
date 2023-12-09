// TableComponent.js
import React, { useState } from "react";
import "./style.css"
import {
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Paper,
  TextField,
} from "@mui/material";

export const TableComponent = ({ data }) => {
  const [searchTerm, setSearchTerm] = useState("");
  const [filteredData, setFilteredData] = useState(data);

  const handleSearch = (event) => {
    const term = event.target.value;
    setSearchTerm(term);

    const filtered = data.filter((item) =>
      Object.values(item).some((value) =>
        value.toString().toLowerCase().includes(term.toLowerCase())
      )
    );
    setFilteredData(filtered);
  };

  return (
    <div>
      <div className="search">
        <TextField
          label="Search"
          variant="outlined"
          onChange={handleSearch}
          value={searchTerm}
          style={{
            marginBottom: "10px",
          }}
        />
      </div>

      <TableContainer component={Paper}>
        <Table>
          <TableHead>
            <TableRow>
              {/* Assuming your data has keys as column names */}
              {Object.keys(data[0]).map((key) => (
                <TableCell key={key}>{key}</TableCell>
              ))}
            </TableRow>
          </TableHead>
          <TableBody>
            {filteredData.map((row, index) => (
              <TableRow key={index}>
                {Object.values(row).map((value, index) => (
                  <TableCell key={index}>{value}</TableCell>
                ))}
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </div>
  );
};

export default TableComponent;
