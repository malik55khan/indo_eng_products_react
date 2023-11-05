import React, { useState } from 'react'
import ProductOne from '../../images/product/product-01.png';
import EnquiryModal from './EnquiryModal';

const Product = () => {
    const [showModal, setShowModal] = useState(false);
    return (
        <>
            {showModal && <EnquiryModal setShowModal={setShowModal} />}
            <div className="flex flex-col gap-10">
                <div className="rounded-sm border border-stroke bg-white shadow-default dark:border-strokedark dark:bg-boxdark">
                    <div className="py-6 px-4 md:px-6 xl:px-7.5">
                        <h4 className="text-xl font-semibold text-black dark:text-white">
                            High Speed Rotary Ampoule Washing Machine
                        </h4>
                        <div>
                            <img className='w-full mt-5' src={ProductOne} />
                        </div>
                        <div className='mt-5'>Category: Ampule Filling Line</div>
                        <button onClick={() => setShowModal(true)} className='inline-flex items-center justify-center gap-2.5 bg-primary w-full mt-5 py-4 px-10 text-center font-medium text-white hover:bg-opacity-90 lg:px-8 xl:px-10'>Enquiry</button>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Product