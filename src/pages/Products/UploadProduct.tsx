import React from 'react'
import Breadcrumb from '../../components/Breadcrumb'
import { Link } from 'react-router-dom'

const UploadProduct = () => {
    return (
        <>
            <Breadcrumb pageName="Upload Machine" />
            <div className="grid grid-cols-1 gap-9">
                <div className="flex flex-col gap-9">
                    <div className="rounded-sm border border-stroke bg-white shadow-default dark:border-strokedark dark:bg-boxdark">
                        <div className="border-b border-stroke py-4 px-6.5 dark:border-strokedark">
                            <h3 className="font-medium text-black dark:text-white">
                                Add Machine Informations
                            </h3>
                        </div>
                        <div className="flex flex-col gap-5.5 p-6.5">
                            <div className='mb-4.5 flex flex-col gap-6 xl:flex-row'>
                                <div className="w-full xl:w-1/2">
                                    <label className="mb-2.5 block text-black dark:text-white">
                                        Name
                                    </label>
                                    <input
                                        type="text"
                                        placeholder="Name..."
                                        className="w-full rounded border-[1.5px] border-stroke bg-transparent py-3 px-5 font-medium outline-none transition focus:border-primary active:border-primary disabled:cursor-default disabled:bg-whiter dark:border-form-strokedark dark:bg-form-input dark:focus:border-primary"
                                    />
                                </div>

                                <div className="w-full xl:w-1/2">
                                    <label className="mb-2.5 block text-black dark:text-white">
                                        Category
                                    </label>
                                    <input
                                        type="text"
                                        placeholder="Category"
                                        className="w-full rounded border-[1.5px] border-stroke bg-transparent py-3 px-5 font-medium outline-none transition focus:border-primary active:border-primary disabled:cursor-default disabled:bg-whiter dark:border-form-strokedark dark:bg-form-input dark:focus:border-primary"
                                    />
                                </div>
                            </div>


                            <div>
                                <label className="mb-3 block text-black dark:text-white">
                                    Default textarea
                                </label>
                                <textarea
                                    rows={6}
                                    placeholder="Default textarea"
                                    className="w-full rounded-lg border-[1.5px] border-stroke bg-transparent py-3 px-5 font-medium outline-none transition focus:border-primary active:border-primary disabled:cursor-default disabled:bg-whiter dark:border-form-strokedark dark:bg-form-input dark:focus:border-primary"
                                ></textarea>
                            </div>
                            <div className='mb-4.5 flex flex-col gap-6 xl:flex-row'>
                                <div className="w-full xl:w-1/2">
                                    <label className="mb-3 block text-black dark:text-white">
                                        Attach Image
                                    </label>
                                    <input
                                        type="file"
                                        accept='image/*'
                                        className="w-full cursor-pointer rounded-lg border-[1.5px] border-stroke bg-transparent font-medium outline-none transition file:mr-5 file:border-collapse file:cursor-pointer file:border-0 file:border-r file:border-solid file:border-stroke file:bg-whiter file:py-3 file:px-5 file:hover:bg-primary file:hover:bg-opacity-10 focus:border-primary active:border-primary disabled:cursor-default disabled:bg-whiter dark:border-form-strokedark dark:bg-form-input dark:file:border-form-strokedark dark:file:bg-white/30 dark:file:text-white dark:focus:border-primary"
                                    />
                                </div>
                                <div className="w-full xl:w-1/2">
                                    <label className="mb-3 block text-black dark:text-white">
                                        &nbsp;
                                    </label>
                                    <button className="inline-flex items-center justify-center gap-2.5 bg-primary py-4 px-10 text-center font-medium text-white hover:bg-opacity-90 lg:px-8 xl:px-10">Save</button>
                                    <Link to="/product-list" className="inline-flex items-center justify-center gap-2.5 bg-bodydark2 ml-2 py-4 px-10 text-center font-medium text-white hover:bg-opacity-90 lg:px-8 xl:px-10">Cancel</Link>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}
export default UploadProduct