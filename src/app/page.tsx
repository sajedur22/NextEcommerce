import { getCurrentSession } from '@/actions/auth';
import { getAllProducts } from '@/sanity/lib/client';
import React from 'react';

const page = async() => {
  const {user}=await getCurrentSession();
  const products=getAllProducts();


  return (
    <div>
      {JSON.stringify(products)};
    </div>
  );
};

export default page;