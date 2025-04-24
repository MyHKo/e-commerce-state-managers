import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Logo from "../img/logo.svg";
import { BsBag } from "react-icons/bs";
import {useDispatch, useSelector} from "react-redux";
import {toggleSidebar} from "../redux/slice/sideBarSlice";
import {RootDispatch, RootState} from "../redux/store";

const Header = () => {
    // header state
    const [isActive, setIsActive] = useState(false);
    const itemAmount = useSelector((state: RootState) => state.cart.amount);
    const dispatch = useDispatch<RootDispatch>();

    // event listener
    useEffect(() => {
        window.addEventListener("scroll", () => {
            window.scrollY > 60 ? setIsActive(true) : setIsActive(false);
        });
    });

    return (
        <header
            className={`${
            isActive ? "bg-white py-4 shadow-md" : "bg-none py-6"
        } fixed w-full z-10 lg:px-8 transition-all`}
>
    <div className="container mx-auto flex items-center justify-between h-full">
    <Link to={"/"}>
    <div className="w-[40px]">
    <img src={Logo} alt="" />
        </div>
        </Link>

    {/* cart */}
    <div
        onClick={() => {
        dispatch(toggleSidebar())
    }}
    className="cursor-pointer flex relative"
    >
    <BsBag className="text-2xl" />
    <div className="bg-red-500 absolute -right-2 -bottom-2 text-[12px] w-[18px] h-[18px] text-white rounded-full flex justify-center items-center">
        {itemAmount}
        </div>
        </div>
        </div>
        </header>
);
};

export default Header;