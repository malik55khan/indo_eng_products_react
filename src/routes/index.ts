import { lazy } from 'react';
const Products = lazy(() => import('../pages/Products/Products'));
const MyProducts = lazy(() => import('../pages/Products/MyProduct'));
const Machines = lazy(() => import('../pages/Admin/Machines'));
const UnApporved = lazy(() => import('../pages/Admin/UnApproved'));
const UploadProduct = lazy(() => import('../pages/Products/UploadProduct'));
const Enquiries = lazy(() => import('../pages/Enquiry/Enquiries'));
const NotFoundView = lazy(() => import('../pages/ErrorPages/NotFoundView'));
const AdminLayout = lazy(() => import('../layout/AdminLayout'));
const SellerLayout = lazy(() => import('../layout/SellerLayout'));
const coreRoutes = [
  {
    path: 'admin',
    component: AdminLayout,
    children: [
      {path: '', component: Products },
      { path: 'machine-enquiry', component: Enquiries, title: 'Enquiries' },
      { path: 'all-machines', component: Machines, title: 'All Machines' },
      { path: 'pending-approval', component: UnApporved, title: 'Pending for Approval' },
      { path: '*', component: NotFoundView },
      ]
  },
  {
    path: 'seller',
    component: SellerLayout,
    children: [
      { path: '*', component: NotFoundView },
      {path: '', component: Products,title: 'Products', },
      {path: 'my-products', component: MyProducts,title: 'My Products' },
      {path: 'upload-product', component: UploadProduct ,title: 'Sell Machine' }
      
      ]
  }

]
/*
const coreRoutes = [
  {
    path: '/',
    title: 'Products',
    component: Products,
  },
  {
    path: '/my-products',
    title: 'My Products',
    component: MyProducts,
  },
  {
    path: '/upload-product',
    title: 'Sell Machine',
    component: UploadProduct,
  },
  {
    path: '/machine-enquiry',
    title: 'Machine Enquiry',
    component: Enquiries,
  },
  {
    path: '/calendar',
    title: 'Calender',
    component: Calendar,
  },
  {
    path: '/profile',
    title: 'Profile',
    component: Profile,
  },
  {
    path: '/forms/form-elements',
    title: 'Forms Elements',
    component: FormElements,
  },
  {
    path: '/forms/form-layout',
    title: 'Form Layouts',
    component: FormLayout,
  },
  {
    path: '/tables',
    title: 'Tables',
    component: Tables,
  },
  {
    path: '/settings',
    title: 'Settings',
    component: Settings,
  },
  {
    path: '/chart',
    title: 'Chart',
    component: Chart,
  },
  {
    path: '/ui/alerts',
    title: 'Alerts',
    component: Alerts,
  },
  {
    path: '/ui/buttons',
    title: 'Buttons',
    component: Buttons,
  },
];
*/
const routes = [...coreRoutes];
export default routes;
