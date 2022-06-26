// SPDX-License-Identifier: UNLICENSED
pragma solidity ^0.8.7;

// import "@openzeppelin/contracts/token/ERC721/extensions/ERC721URIStorage.sol";
// import "@openzeppelin/contracts/access/Ownable.sol";
// import "@openzeppelin/contracts/utils/Counters.sol";

// 1.'listNote'
// 2.'buyNote'

contract DeNotes {
    event Paid(address indexed _from, uint256 _value);
    address payable public owner;
    Seller[] public seller;
    Note[] public notes;
    mapping(string => uint256) public priceofNote;
    struct Seller {
        string sellerName;
    }
    struct Note {
        string name;
        string department;
        string college;
        string subject;
        uint256 price;
    }

    Seller public person = Seller({sellerName: "john"});

    function listNote() external {}

    function addNote(
        string memory _name,
        string memory _department,
        string memory _college,
        string memory _subject,
        uint256 _price
    ) external {
        notes.push(Note(_name, _department, _college, _subject, _price));
        priceofNote[_name] = _price;
    }

    function Buy(address payable _addr, uint256 _amount) external payable {
        require(msg.value >= _amount);
        _addr.transfer(msg.value);

        emit Paid(msg.sender, msg.value);
    }

    function balance() public view returns (uint256) {
        return payable(address(msg.sender)).balance;
    }
}
