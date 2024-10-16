import * as React from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import "../App.css";

// Update BasicTable to receive station data as props
export default function BasicTable({ stationData }) {
  if (!stationData) {
    return <p>No data available</p>;
  }

  // Only one row needed as we are displaying the data of the fetched location
  const row = {
    city: stationData.city,
    aqi: stationData.aqi,
    pollutant: stationData.pollutant === 'p2' ? 'PM2.5' : stationData.pollutant,
  };

  return (
    <TableContainer component={Paper} className="mt-4">
      <Table sx={{ minWidth: 650 }} aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell>City</TableCell>
            <TableCell align="right">Air Quality Index (AQI)</TableCell>
            <TableCell align="right">Main Pollutant</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          <TableRow>
            <TableCell component="th" scope="row">
              {row.city}
            </TableCell>
            <TableCell align="right">{row.aqi}</TableCell>
            <TableCell align="right">{row.pollutant}</TableCell>
          </TableRow>
        </TableBody>
      </Table>
    </TableContainer>
  );
}
