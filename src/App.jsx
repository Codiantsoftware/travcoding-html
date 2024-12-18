import { routes } from './routes';
import { useRoutes } from 'react-router-dom';
import { Suspense } from 'react';
import './App.scss';
import { Image } from './components/CommonElement';

function App() {
  function RouteLayout({ path }) {
    const element = useRoutes(path);
    return element;
  }
  return (
    <>
      <Suspense fallback={
       <div className="w-100 h-100 position-fixed preloader">
        <div id="loader" className="loader">
          <div className="loader-container">
            <div className="loader-icon text-center"> <Image source="loader.svg" className="img-fluid" alt="loader" />
            </div>
          </div>
        </div>
     </div>
      }>
        <RouteLayout path={routes()} />
      </Suspense>
    </>
  );
}

export default App
