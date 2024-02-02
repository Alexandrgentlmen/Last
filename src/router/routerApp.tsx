import { Route, Routes } from 'react-router-dom';
import { memo } from 'react';
import { ROUTES } from './routerPaths';
import { PageNotFound } from '~/components/page-not-found';
import { Main } from '~/App/main';
import { SignUp } from '~/App/sign-up';
import { List } from '~/App/list';
import { Profile } from '~/App/profile';
import { PageLayout } from '~/components/page-layout';

function RouterApp() {
  return (
    <>
      <Routes>
        <Route path={ROUTES.ROOT} element={<PageLayout />}>
          <Route index element={<Main />} />
          <Route path={ROUTES.TODO_LIST} element={<List />} />
          <Route path={ROUTES.PROFILE} element={<Profile />} />
          <Route path={'*'} element={<PageNotFound />} />
        </Route>
        <Route path={ROUTES.LOGIN_PAGE} element={<SignUp />} />
      </Routes>
    </>
  );
}

export default memo(RouterApp);
