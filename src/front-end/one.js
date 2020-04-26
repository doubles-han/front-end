import React from "react";
import "../App.css";

function One() {
  return (
    <div className="App">
      <header className="App-header">
        <table className="Table" width="500px">
          <tr className="Tr">
            <td className="Td" colspan="2" height="300px">
              1
            </td>
          </tr>
          <tr className="Tr" height="300px">
            <td className="Td2">2</td>
            <td className="Td3">3</td>
          </tr>
        </table>
      </header>
    </div>
  );
}

export default One;
