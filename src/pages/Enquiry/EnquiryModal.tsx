import React, { useState } from 'react'
import Input, { InputPhone, TextArea } from '../../controls';
import { EnquiryType } from '../../services/types';
import { API } from '../../services/userApi';
import toast from 'react-hot-toast';

const EnquiryModal = (props: any) => {
  const [enquiry, setEnquiry] = useState<EnquiryType>({
    company_name: '', phone: 0, email: '', designation: '', comment: ''
  })
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    props.setShowModal(false)
    API.sendEnquiry({ ...enquiry, product_id: props.enquiryProduct.id, user_id: props.enquiryProduct.user_id }).then((response) => {
      if (response.data.code != 200) {
        return toast.error(response.data.msg)
      } else {
        toast.success(response.data.msg)
      }
    }).catch(() => {
    })
  }
  return (
    <>
      <div className='fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity bg-bodydark1'></div>
      <div className="modal-container left-2 sm:left-0 sm:right-0 md:left-0 md:right-0 lg:left-0 lg:right-0  fixed z-50 flex justify-around top-25 bottom-5">
        <div className="w-[94vw] lg:h-fit lg:w-[70vw] max-w-5xl lg:mr-0  modal rounded-sm border border-stroke bg-white shadow-default dark:border-strokedark dark:bg-boxdark overflow-auto">
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
              <form onSubmit={(e) => handleSubmit(e)}>
                <div className="p-6.5">

                  <div className="mb-4.5">
                    <label className="mb-2.5 block text-black dark:text-white">
                      Company Name <span className="text-meta-1">*</span>
                    </label>
                    <Input
                      required
                      name="company_name"
                      setUserForm={setEnquiry}
                      type="text"
                      placeholder="Enter your first name"
                      className="w-full rounded border-[1.5px] border-stroke bg-transparent py-3 px-5 font-medium outline-none transition focus:border-primary active:border-primary disabled:cursor-default disabled:bg-whiter dark:border-form-strokedark dark:bg-form-input dark:focus:border-primary"
                    />
                  </div>
                  <div className="mb-4.5">
                    <label className="mb-2.5 block text-black dark:text-white">
                      Designation
                    </label>
                    <Input
                      type="text"
                      name="designation"
                      setUserForm={setEnquiry}
                      placeholder="Designation"
                      className="w-full rounded border-[1.5px] border-stroke bg-transparent py-3 px-5 font-medium outline-none transition focus:border-primary active:border-primary disabled:cursor-default disabled:bg-whiter dark:border-form-strokedark dark:bg-form-input dark:focus:border-primary"
                    />
                  </div>
                  <div className="mb-4.5">
                    <label className="mb-2.5 block text-black dark:text-white">
                      Email
                    </label>
                    <Input
                      name="email"
                      type="email"
                      setUserForm={setEnquiry}
                      placeholder="Enter your email address"
                      className="w-full rounded border-[1.5px] border-stroke bg-transparent py-3 px-5 font-medium outline-none transition focus:border-primary active:border-primary disabled:cursor-default disabled:bg-whiter dark:border-form-strokedark dark:bg-form-input dark:focus:border-primary"
                    />
                  </div>
                  <div className="mb-4.5">
                    <label className="mb-2.5 block text-black dark:text-white">
                      Phone <span className="text-meta-1">*</span>
                    </label>
                    <InputPhone
                      required
                      name="phone"
                      pattern="[0-9]{10}|[+][0-9]{12}|[0-9]{12}"
                      type="tel"
                      setUserForm={setEnquiry}
                      placeholder="Enter your phone number"
                      className="w-full rounded border-[1.5px] border-stroke bg-transparent py-3 px-5 font-medium outline-none transition focus:border-primary active:border-primary disabled:cursor-default disabled:bg-whiter dark:border-form-strokedark dark:bg-form-input dark:focus:border-primary"
                    />
                    <small className='text-danger'>Must be 10 digits or with country code</small>
                  </div>


                  <div className="mb-6">
                    <label className="mb-2.5 block text-black dark:text-white">
                      Message <span className="text-meta-1">*</span>
                    </label>
                    <TextArea
                      required
                      name="comment"
                      setUserForm={setEnquiry}
                      rows={6}
                      placeholder="Type your message"
                      className="w-full rounded border-[1.5px] border-stroke bg-transparent py-3 px-5 font-medium outline-none transition focus:border-primary active:border-primary disabled:cursor-default disabled:bg-whiter dark:border-form-strokedark dark:bg-form-input dark:focus:border-primary"
                    />
                  </div>

                  <button className="flex w-full justify-center rounded bg-primary p-3 font-medium text-gray">
                    Send Enquiry
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </>

  )
}

export default EnquiryModal;