"use strict";

const Web3Connect = window.Web3Connect.default;

let web3Connect = null;

function onInit() {
  web3Connect = new Web3Connect.Core();

  // subscribe to connect
  web3Connect.on("connect", provider => {
    console.log("provider", provider);
  });

  // subscribe to close
  web3Connect.on("close", () => {
    console.log("Web3Connect Modal Closed"); // modal has closed
  });

  web3Connect.toggleModal(); // open modal on button click
}
