"use client";

import { createContext, useContext, useEffect, useState } from "react";
import axios from "axios";

const DealerContext = createContext(null);

const DOMAIN = "www.propertydealerinfaridabad.com";

export const DealerProvider = ({ children }) => {
  const [dealers, setDealers] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const [currentPage, setCurrentPage] = useState(1);
  const [itemsPerPage] = useState(100);

  const [totalItems, setTotalItems] = useState(0);
  const [totalPages, setTotalPages] = useState(0);

  const fetchDealers = async (page = currentPage) => {
    try {
      setLoading(true);
      setError(null);

      const res = await axios.get(
        `https://property-dealer-xa5g.onrender.com/api/get/getDealers/${DOMAIN}?page=${page}&limit=${itemsPerPage}`
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