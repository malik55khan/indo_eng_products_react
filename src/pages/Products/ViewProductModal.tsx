import { getRealImage } from "../../hooks/imageLink";


const ViewProductModal = (props: any) => {
  console.log(props.productInfo)
  return (
    <>
      <div className='fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity bg-bodydark1'></div>
      <div className="modal-container left-2 sm:left-0 sm:right-0 md:left-0 md:right-0 lg:left-0 lg:right-0  fixed z-50 flex justify-around top-25 bottom-5">
        <div className="w-[94vw] lg:h-fit lg:w-[90vw] max-w-5xl lg:mr-0 modal rounded-sm border border-stroke bg-white shadow-default dark:border-strokedark dark:bg-boxdark overflow-auto">
          <div className="border-b border-stroke py-4 px-3 dark:border-strokedark">
            <div className="w-full flex justify-end">
              <strong className="text-2xl align-center cursor-pointer "
                onClick={() => props.setShowModal(false)}
              >&times;</strong>
            </div>
            <div className="mt-5 rounded-sm border border-stroke bg-white shadow-default dark:border-strokedark dark:bg-boxdark">
              <div className="border-b border-stroke py-4 px-6.5 dark:border-strokedark">
                <h3 className="font-medium text-black dark:text-white">
                  Enquiry
                </h3>
              </div>
              <div className="overflow-hidden overflow-y-auto max-h-[80vh] grid grid-cols-1 border-t border-stroke py-4.5 px-4 dark:border-strokedark sm:grid-cols-1 md:px-6 2xl:px-7.5">
                <div className="grid grid-rows-18 border-t border-stroke dark:border-strokedark sm:grid-rows-12">
                  <div className="col-span-1 flex flex-col items-center">
                    <p className="font-medium mt-1 mb-1 text-lg">{props.productInfo.name}</p>
                    <img className='h-fit w-full mt-5' src={getRealImage(props.productInfo.image)} />

                  </div>
                  <div className="col-span-1 flex flex-col">
                    <div className="border-b border-stroke px-6.5 dark:border-strokedark"></div>
                    <p className="font-medium mt-1 mb-1">Category: {props.productInfo.main_category}</p>
                  </div>
                  {props.productInfo.sub_category_name && <div className="col-span-1 flex flex-col">
                    <div className="border-b border-stroke px-6.5 dark:border-strokedark"></div>
                    <p className="font-medium mt-1 mb-1">Sub Category: {props.productInfo.sub_category_name}</p>
                  </div>}

                  <div className="col-span-1 flex flex-col">
                    <div className="border-b border-stroke px-6.5 dark:border-strokedark"></div>
                    <p className="font-medium mt-1 mb-1">Posted On: {new Date(props.productInfo.created_at).toLocaleString()}</p>
                  </div>
                  <div className="col-span-1 flex flex-col items-left">
                    <div className="border-b border-stroke px-6.5 dark:border-strokedark"></div>
                    <p className="font-medium mt-1 mb-1">Description:</p>
                    <p className="font-medium">{props.productInfo.description}</p>
                  </div>
                </div>





              </div>



            </div>



          </div>
        </div>
      </div>
    </>

  )
}

export default ViewProductModal;