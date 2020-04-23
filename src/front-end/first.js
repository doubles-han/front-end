import React from "react";
import "../App.css";

function First() {
  return (
    <div className="App">
      <header className="App-header">
        <table className="Table" width="500px">
          <tr className="Tr">
            <td colspan="2" height="300px">
              1
            </td>
          </tr>
          <tr className="Tr" height="300px">
            <td>2</td>
            <td>3</td>
          </tr>
        </table>
      </header>
    </div>
  );
}

export default First;
