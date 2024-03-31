import { BrowserRouter, Route, Routes } from 'react-router-dom';
import SiginCom from '../components/Login';
import HomeCom from '../components/home';
import Navbar from '../components/Navbar';

import HomeClient from '../components/client/home';
import SettingCom from '../components/setting/Table';
import CertifcateCom from '../components/Certifcate/Table';

function App() {
  return (
    <BrowserRouter>
      <Routes>
      <Route path="/" element={<HomeClient />} />
        <Route path="/login" element={<SiginCom />} />
        <Route path="/*" element={<MainLayout />} />
      </Routes>
    </BrowserRouter>
  );
}

function MainLayout() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/home" element={<HomeCom />} />
        <Route path="/certifcate" element={<CertifcateCom/>} />
        <Route path="/setting" element={<SettingCom/>} />
        {/* <Route path="/home/:id" element={<View/>} /> */}
        <Route path="*" element={<h1>Not found</h1>} />
      </Routes>
    </>
  );
}

export default App;
