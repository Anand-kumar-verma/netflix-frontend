import React, { useEffect } from "react";
import SportsVolleyballIcon from "@mui/icons-material/SportsVolleyball";
import SportsKabaddiIcon from "@mui/icons-material/SportsKabaddi";
import PersonPinCircleIcon from "@mui/icons-material/PersonPinCircle";
import CurrencyExchangeIcon from "@mui/icons-material/CurrencyExchange";
import MonetizationOnIcon from "@mui/icons-material/MonetizationOn";
import PriceCheckIcon from "@mui/icons-material/PriceCheck";
import CurrencyRubleIcon from "@mui/icons-material/CurrencyRuble";
import AddBusinessIcon from "@mui/icons-material/AddBusiness";
import CreditScoreIcon from "@mui/icons-material/CreditScore";
import CreditCardIcon from "@mui/icons-material/CreditCard";
import GavelIcon from "@mui/icons-material/Gavel";
import MoneyIcon from "@mui/icons-material/Money";
import { useQuery } from "react-query";
import { CircularProgress } from "@mui/material";
import axios from "axios";
import { useNavigate } from "react-router-dom";
const Dashboard = () => {
    const navigate  = useNavigate()
    const islodingadmin = localStorage.getItem("admin")
  async function getMovieList() {
    try {
      const res = axios.get("https://netflix-backend-3.onrender.com/api/user/get-movie-count");
      return res;
    } catch (e) {
      console.log(e);
    }
  }
  const { isLoading, data: dashboard_data } = useQuery(
    ["dashboard"],
    () => getMovieList(),
    {
      refetchOnMount: false,
      refetchOnReconnect: true,
    }
  );
  const dashboard_new_data = dashboard_data?.data?.movies;

  const data = [
    {
      id: 1,
      item: "Total Movies",
      icon: (
        <SportsVolleyballIcon className="!h-[5rem] !w-[5rem] !text-[#2a2785]" />
      ),
      count: dashboard_new_data || 0,
    },
    {
      id: 2,
      item: "Active Movies",
      icon: (
        <SportsKabaddiIcon className="!h-[5rem] !w-[5rem] !text-[#2a2785]" />
      ),
      count: dashboard_new_data || 0,
    },
    {
      id: 3,
      item: "Total Watched",
      icon: (
        <PersonPinCircleIcon className="!h-[5rem] !w-[5rem] !text-[#2a2785]" />
      ),
      count: 20 || 0,
    },
    {
      id: 4,
      item: "Today Watched",
      icon: (
        <CurrencyExchangeIcon className="!h-[5rem] !w-[5rem] !text-[#2a2785]" />
      ),
      count: 5 || 0,
    },
    {
      id: 5,
      item: "Today Booked",
      icon: (
        <MonetizationOnIcon className="!h-[5rem] !w-[5rem] !text-[#2a2785]" />
      ),
      count: 3 || 0,
    },
    {
      id: 6,
      item: "Today Active",
      icon: <PriceCheckIcon className="!h-[5rem] !w-[5rem] !text-[#2a2785]" />,
      count: 3 || 0,
    },
    {
      id: 7,
      item: "Today Payin",
      icon: (
        <CurrencyRubleIcon className="!h-[5rem] !w-[5rem] !text-[#2a2785]" />
      ),
      count: 4000 || 0,
    },
    {
      id: 8,
      item: "Today Payout",
      icon: <AddBusinessIcon className="!h-[5rem] !w-[5rem] !text-[#2a2785]" />,
      count: 1000 || 0,
    },
    {
      id: 9,
      item: "Total Users",
      icon: <CreditScoreIcon className="!h-[5rem] !w-[5rem] !text-[#2a2785]" />,
      count: 3 || 0,
    },
    {
      id: 10,
      item: "Pending Movies",
      icon: <CreditCardIcon className="!h-[5rem] !w-[5rem] !text-[#2a2785]" />,
      count: 20 || 0,
    },
    {
      id: 11,
      item: "Turnover",
      icon: <GavelIcon className="!h-[5rem] !w-[5rem] !text-[#2a2785]" />,
      count: 10000 || 0,
    },
    {
      id: 12,
      item: "Total Commision",
      icon: <MoneyIcon className="!h-[5rem] !w-[5rem] !text-[#2a2785]" />,
      count: 3000 || 0,
    },
    {
      id: 13,
      item: "Today Turnover",
      icon: <GavelIcon className="!h-[5rem] !w-[5rem] !text-[#2a2785]" />,
      count: 5000 || 0,
    },
    {
      id: 14,
      item: "Total Turnover",
      icon: <MoneyIcon className="!h-[5rem] !w-[5rem] !text-[#2a2785]" />,
      count: 6600000 || 0,
    },
  ];

  useEffect(()=>{
    !islodingadmin && navigate('/admin/login')
  },[islodingadmin])
  if (isLoading)
    return (
      <div className="w-[100%] h-[100%] flex justify-center items-center">
        <CircularProgress />
      </div>
    );
  return (
    <div className="grid lg:!grid-cols-4 md:!grid-cols-3 sm:grid-cols-1 p-5 gap-[2%] gap-y-4 ">
      {data?.map((i, index) => {
        return (
          <div
            key={index}
            className="!text-center !bg-white !bg-opacity-50 !rounded-lg !py-5 !cursor-pointer "
          >
            <div className="!text-lg !font-bold">{i?.icon}</div>
            <p className="!font-bold !text-blue-900">{i?.item}</p>
            <p className="!font-extrabold !text-blue-700 !text-lg">
              {i?.count}
            </p>
          </div>
        );
      })}
    </div>
  );
};

export default Dashboard;
