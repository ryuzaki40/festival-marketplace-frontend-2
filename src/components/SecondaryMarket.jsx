import React from "react";

export default function SecondaryMarket(){
    return (
        <div class="container center" >
          <div class="row">
            <div class="container ">
              <div class="container ">
  
                <h5 style={{ padding: "30px 0px 0px 10px" }}>Secondary Marketplace</h5>
  
                <label class="left">Festival</label>
                <select className="browser-default" name='fest'>
                  <option value="" disabled >Select Festival</option>
                  FESTS
                </select><br /><br />
  
                <h4 class="center">Purchase Tickets</h4>
  
                <table id='requests' class="responsive-table striped" >
                  <thead>
                    <tr>
                      <th key='name' class="center">Fest Name</th>
                      <th key='ticketId' class="center">Ticket Id</th>
                      <th key='cost' class="center">Cost(in FEST)</th>
                      <th key='purchase' class="center">Purchase</th>
                    </tr>
                  </thead>
                  <tbody class="striped highlight">
                    SAMPLE RESOLD TICKETS
                  </tbody>
                </table>
  
              </div>
            </div>
          </div>
        </div >
      )
}