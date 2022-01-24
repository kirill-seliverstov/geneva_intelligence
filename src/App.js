import { Routes, Route } from 'react-router-dom';

import Layout from './Layout/Layout';

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index />
          <Route path="services"/>
          <Route path="blog"/>
        </Route>
      </Routes>
    </>
  );
}

export default App;
