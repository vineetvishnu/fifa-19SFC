import React, {useState} from 'react';
import "./SearchBar.css";
import { RiSearch2Line } from 'react-icons/ri';
import { RiCloseLine } from 'react-icons/ri';
import { NavLink } from 'react-router-dom';

function SearchBar({placeholder, data}) {

  const [filteredPlayerData, setFilteredData] = useState([]);
  const [wordEntered, setWordEntered] = useState("");

  const excludeData = ['age', 'value', 'wage', 'preferred foot', 'work rate', 'position', 'joined', 'contract', 'height', 'weight', 'crossing', 'finishing', 'head accuracy', 'short pass', 'volleys'];

  const handleFilter = (event) => {
    const searchWord = event.target.value;
    setWordEntered(searchWord);

    const newFilter = data.filter((item) => {
      return Object.keys(item).some(key => {
        return excludeData.includes(key) ? false : item[key].toString().toLowerCase().includes(searchWord);
      });
    });

    if (searchWord === "") {
      setFilteredData([]);

    } else{
      setFilteredData(newFilter);
    }
  };

  const clearInput = () => {
    setFilteredData([]);
    setWordEntered("");
  };


    return (
        <div className="search">
            <div className="searchinput">
                <input type="text" placeholder="Search Player by Name, Jersey No., Club, Nationality" value={wordEntered} onChange={handleFilter} />
                <div className="searchIcon"> {filteredPlayerData.length === 0 ? (
            <RiSearch2Line className="searchicon"/>
          ) : (
            <RiCloseLine id="clearBtn" onClick={clearInput} />
          )} </div>
            </div>
           { filteredPlayerData.length !== 0 && (
            <div className="dataresult">
                {filteredPlayerData.map((value,key) => {
                return <NavLink to='/Profile' activeClassName="activeClass" className="dataItem" >{value.name}</NavLink>
                })
                }
            </div>
)}
        </div>
    );
}

export default SearchBar