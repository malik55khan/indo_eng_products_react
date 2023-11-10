import React, { useEffect, useRef, useState } from 'react'
import { ProductType } from '../../services/types';
import { API } from '../../services/userApi';
import { AxiosResponse } from 'axios';
import Loader from '../../common/Loader';
import { getThumbImage } from '../../hooks/imageLink';

export const PendingMachines = () => {
    const [productList, setProductList] = useState<ProductType[]>([]);
    const [loading, setLoading] = useState(false);
    const initialized = useRef(false);
    const setStatus = (product: ProductType) => {
        let is_active = Number(!product.is_active);
        let updatedList = productList.map((prod: ProductType) => {
            if (product.id == prod.id) {
                return {
                    ...prod, is_active
                }
            } else return prod
        })
        setProductList(updatedList)
    }


    useEffect(() => {
        initialized.current = true;
        console.log('USEEFFEE');
        setLoading(true);
        API.getAllPendingMachines().then((response: AxiosResponse<any, any>) => {
            if (response?.data?.data) setProductList(response.data.data);
            setLoading(false);
        }).catch(err => setLoading(false))
        return () => { initialized.current = false };

    }, [])
    if (loading) return <Loader />

    return (
        <div className="flex flex-col gap-10">

            <div className="rounded-sm border border-stroke bg-white shadow-default dark:border-strokedark dark:bg-boxdark">
                <div className="py-6 px-4 md:px-6 xl:px-7.5">
                    <h4 className="text-xl font-semibold text-black dark:text-white">
                        Pending Machines
                    </h4>
                </div>

                <div className="grid grid-cols-6 border-t border-stroke py-4.5 px-4 dark:border-strokedark sm:grid-cols-8 md:px-6 2xl:px-7.5">
                    <div className="col-span-3 flex items-center">
                        <p className="font-medium">Product Name</p>
                    </div>
                    <div className="col-span-2 hidden items-center sm:flex">
                        <p className="font-medium">Category</p>
                    </div>
                    <div className="col-span-1 flex items-center">
                        <p className="font-medium">Price</p>
                    </div>
                    <div className="col-span-1 flex items-center">
                        <p className="font-medium">Is Approved</p>
                    </div>
                    <div className="col-span-1 flex items-center">
                        <p className="font-medium">Is Active</p>
                    </div>
                </div>
                {productList.map((product: ProductType) => <div key={product.id} className="grid grid-cols-6 border-t border-stroke py-4.5 px-4 dark:border-strokedark sm:grid-cols-8 md:px-6 2xl:px-7.5">
                    <div className="col-span-3 flex items-center">
                        <div className="flex flex-col gap-4 sm:flex-row sm:items-center">
                            <div className="h-12.5 w-15 rounded-md">
                                <img src={getThumbImage(product.image)} alt={product.name} />
                            </div>
                            <p className="text-sm text-black dark:text-white">{product.name}</p>
                        </div>
                    </div>
                    <div className="col-span-2 hidden items-center sm:flex">
                        <p className="text-sm text-black dark:text-white">{product.main_category}</p>
                    </div>
                    <div className="col-span-1 flex items-center">
                        <p className="text-sm text-black dark:text-white">{product.price || 0} Rs.</p>
                    </div>
                    <div className="col-span-1 flex items-center">
                        {!!product.is_approved && <p className="inline-flex rounded-full bg-success bg-opacity-10 py-1 px-3 text-sm font-medium text-success">Y</p>}
                        {!product.is_approved && <p className="inline-flex rounded-full bg-danger bg-opacity-10 py-1 px-3 text-sm font-medium text-danger">N</p>}
                    </div>
                    <div className="col-span-1 flex items-center">
                        {!!product.is_active && <p onClick={() => setStatus(product)} className="cursor-pointer inline-flex rounded-full bg-success bg-opacity-10 py-1 px-3 text-sm font-medium text-success">Y</p>}
                        {!product.is_active && <p onClick={() => setStatus(product)} className="cursor-pointer inline-flex rounded-full bg-danger bg-opacity-10 py-1 px-3 text-sm font-medium text-danger">N</p>}
                    </div>
                </div>)}




            </div>

        </div>
    )
}
