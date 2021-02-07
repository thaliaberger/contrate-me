import React, { useState, useEffect } from "react";
import "./Header.css";
import axios from "axios";
import companyprofile from "../../images/companyprofile.svg";
import search from "../../images/search.svg";
import notification from "../../images/new.svg";

function Header() {
  const [company, setCompany] = useState({});
  useEffect(() => {
    async function fetchData() {
      try {
        const response = await axios.get(
          "https://contrate-me-api.herokuapp.com/companies"
        );

        console.log(response.data);
        setCompany(response.data[0]);
        console.log(company);
      } catch (err) {}
    }
    fetchData();
  }, []);
  return (
    <div className="header-company-container">
      <img className="logo" src={search} alt="Contrate" />
      <img className="logo" src={notification} alt="Contrate" />
      <p>Olá, {company.nome}</p>
      <img className="logo" src={companyprofile} alt="Contrate" />
    </div>
  );
}

export default Header;
