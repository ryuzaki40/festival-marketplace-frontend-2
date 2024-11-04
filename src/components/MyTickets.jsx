import React from "react";
import renderNotification from '../utils/notification-handler';

export default function MyTicket(){
    return (
        <div class="container center" >
          <div class="row">
            <div class="container ">
              <div class="container ">
                <h5 style={{ padding: "30px 0px 0px 10px" }}>My Tickets</h5>
                <form class="">
  
                  <label class="left">Festival</label>
                  <select className="browser-default" name='fest'>
                    <option value="" disabled >Select Festival</option>
                    FESTS
                  </select><br /><br />
  
                  <label class="left">Ticket Id</label>
                  <select className="browser-default" name='ticket'>
                    <option value="" disabled>Select Ticket</option>
                    SAMPLE TICKET
                  </select><br /><br />
  
                  <label class="left">Sale Price</label><input id="price" placeholder="Sale Price" type="text" className="input-control" name="price" /><br /><br />
  
                  <button type="submit" className="custom-btn login-btn">List for Sale</button>
                </form>
              </div>
            </div>
          </div>
        </div >
      )
}