import { useEffect } from "react";
import { preLoaderAnim } from "./PreloaderAnimation";
import './Preloader.scss'

const PreLoader = () => {
  useEffect(() => {
    preLoaderAnim();
  }, []);
  return (
    <div className="preloader">
      <div className="texts-container">
        <span>visualize,</span>
        <span>create,</span>
        <span>transform.</span>
      </div>
    </div>
  );
};

export default PreLoader;
