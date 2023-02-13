import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { AppRoute } from '../../types';
import Main from '../../pages/Main/Main';
import Login from '../../pages/Login/Login';
import Property from '../../pages/Property/Property';
import MainEmpty from '../../pages/MainEmpty/MainEmpty';
import PropertyNotLogged from '../../pages/PropertyNotLogged/PropertyNotLogged';
import NotFound from '../../pages/NotFound/NotFound';

function App(): JSX.Element {
  return (
    <BrowserRouter>
      <Routes>
        <Route
          path={AppRoute.Root}
          element={<Main />}
        />
        <Route
          path={'/test'}
          element={<MainEmpty />}
        />
        <Route
          path={AppRoute.Login}
          element={<Login />}
        />
        <Route
          path={AppRoute.Room}
          element={<Property />}
        />
        <Route
          path={'/test2'}
          element={<PropertyNotLogged />}
        />
        <Route
          path={'*'}
          element={<NotFound />}
        />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
