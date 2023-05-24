import { useState, useEffect } from 'react';
import csv from 'csv-parser';

function CSVTable({ fileUrl }) {
  const [data, setData] = useState([]);

  useEffect(() => {
    async function fetchData() {
      const response = await fetch(fileUrl);
      const text = await response.text();
      const parsedData = [];

      const stream = csv();
      stream.write(text);
      stream.end();
      
      stream.on('data', (row) => {
        parsedData.push(row);
      });
      
      stream.on('end', () => {
        setData(parsedData);
      });
    }

    fetchData();
  }, [fileUrl]);

  return (
    <table>
      <thead>
        <tr >
          {Object.keys(data[0] || {}).map((key) => (
            <th key={key}>{key}</th>
          ))}
        </tr>
      </thead>
      <tbody>
        {data.map((row, rowIndex) => (
          <tr key={rowIndex}>
            {Object.values(row).map((cell, cellIndex) => (
              <td key={`${rowIndex}-${cellIndex}`}>{cell}</td>
            ))}
          </tr>
        ))}
      </tbody>
    </table>
  );
}

export default CSVTable;
