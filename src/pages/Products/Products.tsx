import { useEffect, useRef, useState } from 'react';
import Breadcrumb from '../../components/Breadcrumb';

import Product from './Product';
import { API } from '../../services/userApi';
import { AxiosResponse } from 'axios';
import { ProductType } from '../../services/types';
import Loader from '../../common/Loader';
import EnquiryModal from '../Enquiry/EnquiryModal';
import ViewProductModal from './ViewProductModal';

const Products = () => {
  const initialized = useRef(false)
  const [loading, setLoading] = useState(false);
  const [products, setProducts] = useState([]);
  const [showModal, setShowModal] = useState(false);
  const [showDetailModal, setDetailModal] = useState(false);
  const [enquiryProduct, setEnquiryProduct] = useState<ProductType>();
  useEffect(() => {
    setLoading(true);
    API.GetPublicProducts().then((response: AxiosResponse<any, any>) => {
      if (response?.data?.data) setProducts(response.data.data);
      setLoading(false);
    }).catch(err => setLoading(false))
    return () => { initialized.current = false };
  }, [])
  if (loading) return <Loader />
  return (
    <>
      <Breadcrumb pageName="Products" />
      {showModal && <EnquiryModal setShowModal={setShowModal} enquiryProduct={enquiryProduct} />}
      {showDetailModal && <ViewProductModal setShowModal={setDetailModal} productInfo={enquiryProduct} />}
      <div className="grid grid-cols-1 gap-9 md:grid-cols-2 lg:grid-cols-3">
        {products.map((product: ProductType) => <Product setDetailModal={setDetailModal} setEnquiryProduct={setEnquiryProduct} setShowModal={setShowModal} key={product.id} productInfo={product} />)}
      </div>
    </>
  );
};

export default Products;
