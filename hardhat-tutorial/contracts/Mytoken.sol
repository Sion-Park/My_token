// SPDX-License-Identifier: MIT

pragma solidity ^0.8.20;

import "@openzeppelin/contracts/token/ERC20/ERC20.sol";

contract My_Token is ERC20{
    string public _name="ParkSion";
    string public _symbol="PSO";
    uint _totalSupply=100;
    constructor() ERC20(_name,_symbol){
        _mint(msg.sender,_totalSupply*(10**18));
    }
}