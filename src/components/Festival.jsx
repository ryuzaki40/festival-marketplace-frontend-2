import React, { Component } from 'react';
import renderNotification from '../utils/notification-handler';

export default function festival(){
    return (
        <div class="container center" >
          <div class="row">
            <div class="container ">
              <div class="container ">
                <h5 style={{ padding: "30px 0px 0px 10px" }}>Create new Festival</h5>
                <form class="">
                  <label class="left">Fest Name</label><input id="name" class="validate" placeholder="Fest Name" type="text" name="name" /><br /><br />
                  <label class="left">Fest Symbol</label><input id="symbol" class="validate" placeholder="Fest Symbol" type="text" className="input-control" name="symbol"  /><br /><br />
                  <label class="left">Ticket Price</label><input id="price" placeholder="Ticket Price" type="text" className="input-control" name="price"  /><br /><br />
                  <label class="left">Total Supply</label><input id="supply" placeholder="Total SUpply" type="text" className="input-control" name="supply"></input><br /><br />
  
                  <button type="submit" className="custom-btn login-btn">Create Festival</button>
                </form>
              </div>
            </div>
          </div>
        </div >
      )
  
}