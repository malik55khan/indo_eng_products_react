import { useState } from 'react';
import Breadcrumb from '../components/Breadcrumb';

import Product from './Products/Product';
import EnquiryModal from './Products/EnquiryModal';

const Products = () => {
  const [showModal, setShowModal] = useState(true);
  return (
    <>
      <Breadcrumb pageName="Products" />
      <div className="grid grid-cols-1 gap-9 md:grid-cols-2 lg:grid-cols-3">
        <Product />
        <Product />
        <Product />
        <Product />
        <Product />
        <Product />

      </div>
    </>
  );
};

export default Products;
