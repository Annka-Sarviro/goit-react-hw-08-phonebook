import { Route, Routes } from 'react-router-dom';
import { Layout } from './Layout/Layout';
import { useSelector } from 'react-redux';
import { Suspense } from 'react';
import Contacts from '../pages/Contacts/Contacts';
import { Register } from '../pages/Register/Register';
import { Login } from '../pages/Login/Login';
import { NotFoundPage } from 'pages/NotFoundPage/NotFoundPage';
import {
  useRegisterMutation,
  useLoginMutation,
  useCurrentUserQuery,
} from 'redux/userApi';
import PrivateRoutes from './PrivateRoutes/PrivateRoutes';

export const App = () => {
  const { token } = useSelector(state => state.user);

  useCurrentUserQuery(undefined, {
    skip: !token,
  });

  useRegisterMutation(undefined, {
    skip: !token,
  });
  useLoginMutation(undefined, {
    skip: !token,
  });

  return (
    <Suspense fallback={<div>Loading...</div>}>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route path="/" element={<PrivateRoutes />}>
            <Route index element={<Contacts />} />
          </Route>
          <Route path="register" element={<Register />} />
          <Route path="login" element={<Login />} />
          <Route path="*" element={<NotFoundPage />} />
        </Route>
      </Routes>
    </Suspense>
  );
};
