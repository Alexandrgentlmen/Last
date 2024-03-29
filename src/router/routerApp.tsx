import { Route, Routes } from 'react-router-dom';
import { memo } from 'react';
import { routes } from './routerPaths';
import { PageNotFound } from '~/components/page-not-found';
import { Main } from '~/App/main';
import { SignUp } from '~/App/sign-up';
import { List } from '~/App/list';
import { Profile } from '~/App/profile';
import { PageLayout } from '~/components/page-layout';
import { RequireAuth } from '~/auth/components/require-auth';

function RouterApp() {
  return (
    <>
      <Routes>
        <Route path={routes.LOGIN_PAGE} element={<SignUp />} />
        <Route path={routes.ROOT} element={<PageLayout />}>
          <Route index element={<Main />} />
          <Route
            path={routes.TODO_LIST}
            element={
              <RequireAuth>
                <List />
              </RequireAuth>
            }
          />
          <Route
            path={routes.PROFILE}
            element={
              <RequireAuth>
                <Profile />
              </RequireAuth>
            }
          />
        </Route>
        <Route path={'*'} element={<PageNotFound />} />
      </Routes>
    </>
  );
}

export default memo(RouterApp);
