import { Routes, Route } from 'react-router-dom';
import GlobalStyle from './globalStyles';

import Layout from './Layout/Layout';

import Homepage from './pages/Homepage';

function App() {
  return (
    <Layout>
      <GlobalStyle />
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="services" element={<div>services</div>} />
        <Route path="blog" element={<div>blog</div>}/>
      </Routes>
    </Layout>
  );
}

export default App;
