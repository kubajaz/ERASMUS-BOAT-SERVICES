"use client"
import { useEffect, useState } from "react";
import CategoryList from "./_components/CategoryList";
import Hero from "./_components/Hero";
import GlobalApi from "./_services/GlobalApi";
import BusinessList from "./_components/BusinessList";

export default function Home() {
  const [categoryList, setCategoryList] = useState([]);
  const [businessList, setBusinessList] = useState([]);

  useEffect(() => {
    getCategoryList();
    getAllBusinessList();
  }, [])

  const getCategoryList = () => {
    const categoryList = GlobalApi.getCategory();
    setCategoryList(categoryList);
  }

  const getAllBusinessList = ()=>{
    const businessList = GlobalApi.getAllBusinessList();
    setBusinessList(businessList);
  }

  return (
    <div>
      <Hero />
      <CategoryList categoryList={categoryList} />
      <BusinessList businessList={businessList} title={'Popular Business'} />
    </div>
  );
}
