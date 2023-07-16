import { Suspense } from 'react';
import { NavLink, Outlet } from 'react-router-dom';
import { Loader } from 'components/Loader/Loader';
import css from './Layout.module.css';

export const Layout = () => {
  const links = [
    { path: '/', title: 'Home' },
    { path: '/movies', title: 'Movies' },
  ];

  return (
    <>
      <header className={css.header}>
        <nav>
          <ul className={css.pageNavList}>
            {links.map(({ path, title }) => (
              <li className={css.pageNavItem} key={path}>
                <NavLink className={css.pageNavLink} to={path}>
                  {title}
                </NavLink>
              </li>
            ))}
          </ul>
        </nav>
      </header>
      <Suspense fallback={<Loader />}>
        <main>
          <div className={css.container}>
            <Outlet />
          </div>
        </main>
      </Suspense>
    </>
  );
};
