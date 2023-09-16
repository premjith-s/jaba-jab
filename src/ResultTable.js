// ResultTable.js
import React from 'react';

function ResultTable({ data }) {
  return (
    <div>
      <h2>Result Table</h2>
      <table>
        <thead>
          <tr>
            <th>Company Name</th>
            <th>NAV</th>
            <th>ROR</th>
          </tr>
        </thead>
        <tbody>
          {data.map((item, index) => (
            <tr key={index}>
              <td>{item.companyName}</td>
              <td>{item.nav}</td>
              <td>{item.ror}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default ResultTable;
