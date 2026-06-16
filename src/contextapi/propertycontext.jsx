"use client";

import { createContext, useContext, useEffect, useState } from "react";
import axios from "axios";

const DealerContext = createContext(null);



export const DealerProvider = ({ children }) => {
  const [dealers, setDealers] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const [currentPage, setCurrentPage] = useState(1);
  const [itemsPerPage] = useState(200);

  const [totalItems, setTotalItems] = useState(0);
  const [totalPages, setTotalPages] = useState(0);

  const fetchDealers = async (page = currentPage) => {
    try {
      setLoading(true);
      setError(null);

      const res = await axios.get(
        `https://faridabad-backend.onrender.com/api/getServiceProvidersByCity/faridabad`
      );

      console.log("Dealer API:", res.data);

      setDealers(res?.data?.data || []);

      setTotalItems(
        res?.data?.total ||
        res?.data?.totalItems ||
        0
      );

      setTotalPages(
        res?.data?.totalPages ||
        Math.ceil(
          (res?.data?.total || 0) / itemsPerPage
        )
      );
    } catch (err) {
      console.error(err);
      setError("Failed to fetch dealers");
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchDealers(currentPage);
  }, [currentPage]);

  return (
    <DealerContext.Provider
      value={{
        dealers,
        loading,
        error,

        currentPage,
        setCurrentPage,

        totalItems,
        totalPages,
        itemsPerPage,

        refetch: fetchDealers,
      }}
    >
      {children}
    </DealerContext.Provider>
  );
};

export const useDealer = () => {
  const context = useContext(DealerContext);

  if (!context) {
    throw new Error(
      "useDealer must be used within DealerProvider"
    );
  }

  return context;
};