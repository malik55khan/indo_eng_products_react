

const ViewEnquiryModal = (props: any) => {
  console.log(props.enquiry)
  return (
    <>
      <div className='fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity bg-bodydark1'></div>
      <div className="modal-container left-2 sm:left-0 sm:right-0 md:left-0 md:right-0 lg:left-0 lg:right-0  fixed z-50 flex justify-around top-25 bottom-5">
        <div className="w-[94vw] lg:h-fit lg:w-[70vw] max-w-3xl lg:mr-0 modal rounded-sm border border-stroke bg-white shadow-default dark:border-strokedark dark:bg-boxdark overflow-auto">
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
              <div className="grid grid-cols-1 border-t border-stroke py-4.5 px-4 dark:border-strokedark sm:grid-cols-1 md:px-6 2xl:px-7.5">
                <div className="grid grid-rows-18 border-t border-stroke py-4.5 px-4 dark:border-strokedark sm:grid-rows-12 md:px-6 2xl:px-7.5">
                  <div className="col-span-1 flex items-center">
                    <p className="font-medium mt-1 mb-1">Company Name: {props.enquiry.company_name}</p>
                  </div>
                  <div className="col-span-1 flex flex-col">
                    <div className="border-b border-stroke px-6.5 dark:border-strokedark"></div>
                    <p className="font-medium mt-1 mb-1">Designation: {props.enquiry.designation}</p>
                  </div>
                  <div className="col-span-1 flex flex-col">
                    <div className="border-b border-stroke px-6.5 dark:border-strokedark"></div>
                    <p className="font-medium mt-1 mb-1">Phone: {props.enquiry.phone}</p>
                  </div>
                  <div className="col-span-1 flex flex-col">
                    <div className="border-b border-stroke px-6.5 dark:border-strokedark"></div>
                    <p className="font-medium mt-1 mb-1">Email: {props.enquiry.email}</p>
                  </div>
                  <div className="col-span-1 flex flex-col">
                    <div className="border-b border-stroke px-6.5 dark:border-strokedark"></div>
                    <p className="font-medium mt-1 mb-1">Date: {new Date(props.enquiry.created_at).toLocaleString()}</p>
                  </div>
                  <div className="col-span-1 flex flex-col items-left">
                    <div className="border-b border-stroke px-6.5 dark:border-strokedark"></div>
                    <p className="font-medium mt-1 mb-1">Comment:</p>
                    <p className="font-medium">{props.enquiry.comment}</p>
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

export default ViewEnquiryModal;