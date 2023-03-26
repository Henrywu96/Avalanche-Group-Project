// SPDX-License-Identifier: MIT 

pragma solidity ^0.8.6; 

import "hardhat/console.sol";

contract HelloWorld { 

    string private message; 
 

    constructor (string memory _message) { 

        console.log(_message); 

        message = _message; 

    } 
 

    function hello() public view returns (string memory) { 

        return message; 

    } 
 

    function setHello(string memory _message) public { 

        console.log("Message changed"); 

        message = _message; 

    } 

} 

