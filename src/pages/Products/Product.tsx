import { getThumbImage } from '../../hooks/imageLink';
import { LoggedUserType, ProductType } from '../../services/types';

const Product = ({ setShowModal, setEnquiryProduct, setDetailModal, productInfo }: any) => {
    let loggedUser: LoggedUserType = JSON.parse(localStorage.getItem('loggedUser') || JSON.stringify({ jwt: '' }));
    loggedUser.role = Number(loggedUser.role);
    const setProductData = (productInfo: ProductType) => {
        setShowModal(true);
        setEnquiryProduct(productInfo)
    }
    return (
        <>
            <div className="flex flex-col gap-10">
                <div className="rounded-sm border border-stroke bg-white shadow-default dark:border-strokedark dark:bg-boxdark">
                    <div className="py-6 px-4 md:px-6 xl:px-7.5">
                        <h4 className="text-xl font-semibold text-black dark:text-white">
                            {productInfo.name}
                        </h4>
                        <div>
                            <img className='h-30 w-full mt-5' src={getThumbImage(productInfo.image)} />
                        </div>
                        <div className='mt-5'>Category: {productInfo.main_category}</div>
                        {productInfo.sub_category_name && <div className='mt-5'>Sub Category: {productInfo.main_category}</div>}
                        <div className='flex gap-1'>
                            {(loggedUser.role !== 5 && loggedUser.id !== productInfo.user_id) && <button onClick={() => setProductData(productInfo)} className='inline-flex items-center justify-center gap-2.5 bg-primary w-full mt-5 py-4 px-10 text-center font-medium text-white hover:bg-opacity-90 lg:px-8 xl:px-10'>Enquiry</button>}
                            <button onClick={() => { setDetailModal(true); setEnquiryProduct(productInfo) }} className='inline-flex items-center justify-center gap-2.5 bg-success w-full mt-5 py-4 px-10 text-center font-medium text-white hover:bg-opacity-90 lg:px-8 xl:px-10'>View </button>

                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Product