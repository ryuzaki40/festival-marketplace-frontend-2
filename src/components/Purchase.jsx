import React from "react";


export default function Murchase(){
    return (
        <div class="container col s12 m6 offset-m3 l4 offset-l4 z-depth-6 card-panel">
          <h4 class="center">Purchase Tickets</h4>
          <table id='requests' class="responsive-table striped" >
            <thead>
              <tr>
                <th key='name' class="center">Name</th>
                <th key='price' class="center">Price(in FEST)</th>
                <th key='left' class="center">Tickets Left</th>
                <th key='purchase' class="center">Purchase</th>
              </tr>
            </thead>
            <tbody class="striped highlight">
              SAMPLE FESTIVAL
            </tbody>
          </table>
        </div >
      )
}