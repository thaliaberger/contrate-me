import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import axios from "axios";

function DashboardCandidate() {
  useEffect(() => {
    async function fetchData() {
      try {
        const response = await axios.get(
          "https://contrate-me-api.herokuapp.com/solutions"
        );

        console.log(response);
        // setState();
      } catch (err) {}
    }
    fetchData();
  }, []);

  useEffect(() => {
    async function fetchData() {
      try {
        const response = await axios.get(
          "https://contrate-me-api.herokuapp.com/challenges"
        );

        console.log(response);
        // setState();
      } catch (err) {}
    }
    fetchData();
  }, []);

  return <div></div>;
}

export default DashboardCandidate;
