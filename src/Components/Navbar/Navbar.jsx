import { useState } from "react";
import './Navbar.css';
import SearchIcon from '@mui/icons-material/Search';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import PersonIcon from '@mui/icons-material/Person';

const Navbar = ({ onSelectCategory }) => {
    const handleCategoryClick = (category) => {
        onSelectCategory(category);
    };

    return (
        <div>
            <div className="Items">
                <div className='title'>
                    <p onClick={() => handleCategoryClick()}>ShopSphere</p>
                </div>
                <div className='Items_classification'>
                    <p onClick={() => handleCategoryClick("men's clothing")}>Men</p>
                    <p onClick={() => handleCategoryClick("women's clothing")}>Women</p>
                    <p onClick={() => handleCategoryClick("electronics")}>Electronics</p>
                    <p onClick={() => handleCategoryClick("jewelery")}>Jewellery</p>
                </div>
                <div className='Icons'>
                    {/* <SearchIcon />
                    <ShoppingCartIcon /> */}
                    <PersonIcon />
                </div>
            </div>
        </div>
    );
};

export default Navbar;
