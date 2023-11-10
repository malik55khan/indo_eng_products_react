import Breadcrumb from '../../components/Breadcrumb'
import { Link, useNavigate } from 'react-router-dom'
import Input, { FileInput, TextArea } from '../../controls'
import { useEffect, useRef, useState } from 'react'
import { CategoryType, ProductType } from '../../services/types'
import { API } from '../../services/userApi'
import toast from 'react-hot-toast'
import { AxiosResponse } from 'axios'

const UploadProduct = () => {
    const navigate = useNavigate();
    const initialized = useRef(false)
    let [mainCategories, setMainCategories] = useState([]);
    let [mainCategory, setMainCategory] = useState<number>(0);
    let [subCategories, setSubCategories] = useState([]);
    let [subCategory, setSubCategory] = useState<number>(0);
    let [product, setProduct] = useState<ProductType>({
        name: '', image: '', description: '', category_id: 0, sub_category_id: 0, price: 0, other_category: ""
    })
    let formRef = useRef(null)
    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        const formElem: any = formRef.current;
        const formData = new FormData(formElem);
        let i = 0;
        for (let file of product.image) {
            formData.append(`images[${i++}]`, file)
        }
        API.ProductInsert(formData).then(response => {
            console.log(response)
            if (response.data.code != 200) {
                return toast.error(response.data.msg)
            } else {
                toast.success(response.data.msg)
                navigate("/");
            }
        }).catch(err => {
            console.log(err)
        })

    }
    const handleMainCategory = (value: any) => {
        setMainCategory(value);
        debugger
        setProduct((prev: any) => ({ ...prev, category_id: value, sub_category_id: '', other_category: '' }))
        if (value == -1 || value == 0) {
            setSubCategories([])
            return;
        }
        API.GetCategory(value).then((categories: AxiosResponse<any, any>) => {
            if (categories?.data?.data) setSubCategories(categories.data.data)
        })
    }
    const handleSubCategory = (value: any) => {
        setSubCategory(value);
        setProduct((prev: any) => ({ ...prev, sub_category_id: value, other_category: '' }))
    }
    useEffect(() => {
        if (!initialized.current) {
            initialized.current = true
            API.GetCategory(0).then((categories: AxiosResponse<any, any>) => {
                if (categories?.data?.data) setMainCategories(categories.data.data)
            })
        }
    }, [])
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
                        <form ref={formRef} onSubmit={e => handleSubmit(e)} encType="multipart/form-data">
                            <div className="flex flex-col gap-5.5 p-6.5">

                                <div className="w-full">
                                    <label className="mb-2.5 block text-black dark:text-white">
                                        Name
                                    </label>
                                    <Input
                                        required
                                        name='name'
                                        setUserForm={setProduct}
                                        type="text"
                                        placeholder="Name..."
                                        className="w-full rounded border-[1.5px] border-stroke bg-transparent py-3 px-5 font-medium outline-none transition focus:border-primary active:border-primary disabled:cursor-default disabled:bg-whiter dark:border-form-strokedark dark:bg-form-input dark:focus:border-primary"
                                    />
                                </div>
                                <div className='mb-4.5 flex flex-col gap-6 xl:flex-row'>
                                    <div className="w-full">
                                        <label className="mb-2.5 block text-black dark:text-white">
                                            Category
                                        </label>
                                        <select
                                            name="category_id"
                                            required
                                            onChange={(e) => handleMainCategory(Number(e.target.value))}
                                            className="relative z-20 w-full appearance-none rounded border border-stroke bg-transparent py-3 px-3 outline-none transition focus:border-primary active:border-primary dark:border-form-strokedark dark:bg-form-input">
                                            <option value="">Select Category</option>
                                            {mainCategories.map((category: CategoryType) => <option key={category.id} value={category.id}>{category.name}</option>)}
                                            <option value="-1">Others</option>
                                        </select>
                                    </div>
                                    {!!mainCategory && !!subCategories.length && <div className="w-full xl:w-1/2">
                                        <label className="mb-2.5 block text-black dark:text-white">
                                            Sub Category
                                        </label>
                                        <select
                                            name='sub_category_id'
                                            onChange={(e) => handleSubCategory(Number(e.target.value))}
                                            className="relative z-20 w-full appearance-none rounded border border-stroke bg-transparent py-3 px-3 outline-none transition focus:border-primary active:border-primary dark:border-form-strokedark dark:bg-form-input">
                                            <option value="">Select Sub Category</option>
                                            {subCategories.map((category: CategoryType) => <option key={category.id} value={category.id}>{category.name}</option>)}
                                            <option value="-1">Others</option>
                                        </select>
                                    </div>}

                                </div>
                                {(product.category_id == -1 || product.sub_category_id == -1) && <div className="w-full">
                                    <label className="mb-2.5 block text-black dark:text-white">
                                        Enter the name of missing category
                                    </label>
                                    <Input
                                        required
                                        name='other_category'
                                        setUserForm={setProduct}
                                        type="text"
                                        placeholder="Missing category name..."
                                        className="w-full rounded border-[1.5px] border-stroke bg-transparent py-3 px-5 font-medium outline-none transition focus:border-primary active:border-primary disabled:cursor-default disabled:bg-whiter dark:border-form-strokedark dark:bg-form-input dark:focus:border-primary"
                                    />
                                </div>}

                                <div>
                                    <label className="mb-3 block text-black dark:text-white">
                                        Description
                                    </label>
                                    <TextArea
                                        required
                                        name='description'
                                        setUserForm={setProduct}
                                        rows={6}
                                        placeholder="Description"
                                        className="w-full rounded-lg border-[1.5px] border-stroke bg-transparent py-3 px-5 font-medium outline-none transition focus:border-primary active:border-primary disabled:cursor-default disabled:bg-whiter dark:border-form-strokedark dark:bg-form-input dark:focus:border-primary"
                                    />
                                </div>
                                <div className='mb-4.5 flex flex-col gap-6 xl:flex-row'>
                                    <div className="w-full xl:w-1/4">
                                        <label className="mb-2.5 block text-black dark:text-white">
                                            Price
                                        </label>
                                        <Input
                                            type="number"
                                            min={0}
                                            name='price'
                                            setUserForm={setProduct}
                                            placeholder="Price"
                                            className="w-full rounded border-[1.5px] border-stroke bg-transparent py-3 px-5 font-medium outline-none transition focus:border-primary active:border-primary disabled:cursor-default disabled:bg-whiter dark:border-form-strokedark dark:bg-form-input dark:focus:border-primary"
                                        />
                                    </div>
                                    <div className="w-full xl:w-1/2">
                                        <label className="mb-3 block text-black dark:text-white">
                                            Attach Image
                                        </label>
                                        <FileInput
                                            required
                                            name='image'
                                            onChange={setProduct}
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
                        </form>
                    </div>
                </div >
            </div >
        </>
    )
}
export default UploadProduct