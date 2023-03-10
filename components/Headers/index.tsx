import React, { useEffect, useState } from 'react';
import Link from 'next/link';
import { getAccessToken, setDeleteUserLogin } from '../../states/User/action';
import { useSelector } from 'react-redux';
import { useAppDispatch, useAppSelector } from '../../states';
import { useRouter } from 'next/router';
import { setDeleteAllCart } from '../../states/Cart/action';

type HeadersProps = {};

const Headers = (props: HeadersProps) => {
  const [user, setUser] = useState();
  const getUserLogin = () => {
    const token = getAccessToken();
  };
  const route = useRouter();
  const users = useAppSelector((state) => state.usersLogin);
  const dispatch = useAppDispatch();
  const handleLogout = () => {
    dispatch(setDeleteUserLogin());
    dispatch(setDeleteAllCart());
    route.push('/login');
  };
  useEffect(() => {
    getUserLogin();
  }, []);
  return (
    <header aria-label="Site Header" className="bg-green">
      <div className="mx-auto flex h-16 max-w-screen-xl items-center gap-8 px-4 sm:px-6 lg:px-8">
        <Link className="hidden md:block text-white" href="/">
          <p>Home</p>
        </Link>

        <div className="flex flex-1 md:divide-x divide-solid divide-white items-center  justify-start md:justify-end md:justify-between">
          <nav aria-label="Site Nav" className="hidden md:w-full  md:block">
            <ul className="flex justify-around items-center gap-6 text-sm">
              <li>
                <Link
                  className="text-white transition hover:text-gray-500/75"
                  href="/catalog"
                >
                  Category
                </Link>
              </li>
            </ul>
          </nav>

          <div className="flex justify-between  w-full md:w-[400px]  items-center gap-4 ">
            <div className="sm:flex  w-full sm:gap-4">
              <div
                className="block flex items-center flex-row rounded-md px-5 py-2.5 text-sm font-medium text-white transition hover:bg-jingga hover:cursor-pointer"
                onClick={handleLogout}
              >
                <img src="/icon/logout2.svg" className="p-2" />
                {users.username} |{' '}
                {users.username === undefined ? 'Login' : 'Logout'}
              </div>
            </div>

            <button className="block rounded bg-gray-100 p-2.5 text-gray-600 transition hover:text-gray-600/75 md:hidden">
              <span className="sr-only">Toggle menu</span>
              <img src="/icon/navigation.svg" />
            </button>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Headers;
