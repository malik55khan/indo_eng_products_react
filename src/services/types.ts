export type UserType = {
  email: string
  password: string
  name?: string
  confirmPassword?:''
}
export type LoggedUserType = {
  id: number
  jwt: string
  name: string
  role:number
}
export type ProductType = {
  id?:number
  name: string
  image: any
  user_id?: number
  description:string
  category_id: any
  sub_category_id?: any
  other_category?: string
  is_active?: number
  main_category?:''
  is_approved?:''
  is_deleted?:number
  price:number
}
export type CategoryType = {
  name?: string
  id?: number
  parent_category_id?: number
  is_active?: number,
  is_deleted?:number
}

export type EnquiryType = {
  id?:number
  company_name: string
  designation: string
  phone: number
  email: string
  comment: string
  product_id?: number
  user_id?: number,
  created_at?:any
}