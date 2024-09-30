import { BrowserRouter as Router } from "react-router-dom";
import "./App.css";
import Navbar from "./components/layout/NavBar";
import AppRoutes from "./configs/AppRoutes";
import ImageViewer from "./components/widget/imageViewer";
import { createContext, useState } from "react";
import { ImageModelContext } from "./providers/Providers";
import Footer from "./components/widget/footer";

const App = () => {
  const [imageViewerValue, setImageViewValue] = useState({
    isOpen: false,
    images: [""],
    currentIndex: 0,
  });
  return (
    <Router>
      <div className="flex flex-col min-h-screen w-full">
        <Navbar></Navbar>
        {/* <!-- <<<<<<< tuan
        <main className='flex-grow flex mt-12'>
======= --> */}
        <ImageModelContext.Provider
          value={{
            value: imageViewerValue,
            setImageModelContext: setImageViewValue,
          }}
        >
          <ImageViewer />
        </ImageModelContext.Provider>
        <main className="flex-grow flex mt-[10.2rem]">
          <AppRoutes></AppRoutes>
        </main>
      </div>
    </Router>
  );
};

export default App;
