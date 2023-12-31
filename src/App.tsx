import { Suspense, lazy, useEffect, useState } from 'react';
import { Route, Routes } from 'react-router-dom';
import { Toaster } from 'react-hot-toast';
import SignIn from './pages/Authentication/SignIn';
import SignUp from './pages/Authentication/SignUp';
import Loader from './common/Loader';
import routes from './routes';
import Products from './pages/Products/Products';
import { LoggedUserType } from './services/types';

const DefaultLayout = lazy(() => import('./layout/DefaultLayout'));

function App() {
  const [loading, setLoading] = useState<boolean>(true);
  let loggedUser: LoggedUserType = JSON.parse(localStorage.getItem('loggedUser') || JSON.stringify({ jwt: '', role: '0' }));
  loggedUser.role = Number(loggedUser.role);
  useEffect(() => {
    loggedUser = JSON.parse(localStorage.getItem('loggedUser') || JSON.stringify({ jwt: '', role: '0' }));
    loggedUser.role = Number(loggedUser.role);
    setTimeout(() => setLoading(false), 1000);
  }, []);

  return (loading) ? (
    <Loader />
  ) : (
    <>
      <Toaster
        position="top-right"
        reverseOrder={false}
        containerClassName="overflow-auto"
      />
      <Routes>
        <Route path="/signin" element={<SignIn setLoading={setLoading} />} />
        <Route path="/signup" element={<SignUp setLoading={setLoading} />} />
        <Route path="/" element={<DefaultLayout />}>
          <Route index element={<Products />} />
        </Route>
        {routes.map((routes, index) => {
          const { path, component: Component, children = [] } = routes;
          return (
            <Route
              key={index}
              path={path}
              element={<Suspense fallback={<Loader />}><Component /></Suspense>}
            >
              {children.map((child, Childindex) => {
                const { path: childPath, component: Component } = child;
                return (
                  <Route
                    key={Childindex}
                    path={childPath}
                    element={<Suspense fallback={<Loader />}><Component /></Suspense>}
                  />
                );
              })}

            </Route>
          );
        })}


        {/* <Route path="/seller/*" element={<SellerLayout />}><Route index element={<Products />} />

        </Route> */}




      </Routes>
    </>
  );
}

export default App;
