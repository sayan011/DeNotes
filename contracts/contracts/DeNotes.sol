// SPDX-License-Identifier: UNLICENSED
pragma solidity ^0.8.7;

// import "@openzeppelin/contracts/token/ERC721/extensions/ERC721URIStorage.sol";
// import "@openzeppelin/contracts/access/Ownable.sol";
// import "@openzeppelin/contracts/utils/Counters.sol";


// 1.'listNote'
// 2.'buyNote'

contract DeNotes {
    event Paid(address indexed _from, uint _value);
    
    Seller[] public seller;
    Note[] public notes;
    mapping(string=>uint) public priceofNote;
    struct Seller{
        string sellerName;

    }
    struct Note{
        string name;
        string department;
        string college;
        string subject;
        uint price;
        address seler;


    }


    Seller public person=Seller({sellerName:"john"});


        function addNote(
        string memory _name,
        string memory _department,
        string memory _college,
        string memory _subject,
        uint _price,
        address payable _seller
        ) external{

        _seller=payable(msg.sender);
        notes.push(Note(_name,_department,_college,_subject,_price,_seller));
        priceofNote[_name]=_price;
    }




    function listNote() external {
      
       
    }
    

    constructor() payable{
   
    }



    address payable _addr;
    _addr=_seller;
    function Buy(address payable _addr,uint _amount) payable external{
            
        require(msg.value >= _amount);
        _addr.transfer(msg.value);
    
        emit Paid(msg.sender, msg.value);
    }
    function balance() public view returns (uint256){
    return payable(address(msg.sender)).balance;
     }

}
