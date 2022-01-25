import { Routes, Route } from 'react-router-dom';

import Layout from './Layout/Layout';

function App() {
  return (
    <Layout>
      <Routes>
        <Route path="/" element={<div>test</div>} />
        <Route path="services" element={<div>services</div>} />
        <Route path="blog" element={<div>blog</div>}/>
      </Routes>
    </Layout>
  );
}

export default App;
