"use client"
import BusinessList from '@/app/_components/BusinessList';
import GlobalApi from '@/app/_services/GlobalApi'
import React, { useEffect, useState } from 'react'

function BusinessByCategory({ params }) {

  const [businessList, setBusinessList] = useState([]);

  useEffect(() => {
    params && getBusinessList();
  }, [params])

  const getBusinessList = () =>{
    const response = GlobalApi.getBusinessByCategory(params.category);
    setBusinessList(response)

  }

  return (
    <div>
      <BusinessList businessList={businessList} title={params.category}/>
    </div>
  )
}

export default BusinessByCategory