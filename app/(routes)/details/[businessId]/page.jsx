"use client"
import GlobalApi from '@/app/_services/GlobalApi'
import React, { useEffect, useState } from 'react'
import BusinessInfo from '../_components/BusinessInfo';
import SuggestedBusinessList from '../_components/SuggestedBusinessList';
import BusinessDescription from '../_components/BusinessDescription';

function BusinessDetail({params}) {
    const [business, setBusiness] = useState();

    useEffect(() => {
        params && getBusinessById();
    }, [params])

    const getBusinessById = () => {
        const response = GlobalApi.getBusinessById(params.businessId);
        setBusiness(response);
    }
    return (
        <div className='py-8 md:py-20 px-10 md:px-36'>
            <BusinessInfo business={business} />

            <div className='grid grid-cols-3 mt-16'>
                <div className='col-span-3 md:col-span-2 order-last md:order-first'>
                    <BusinessDescription business={business} />
                </div>

                <div className=''>
                    <SuggestedBusinessList business={business} />
                </div>
            </div>
        </div>
    )
}

export default BusinessDetail