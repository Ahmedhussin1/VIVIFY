import FirstButton from "../../../Components/Buttons/Btn-1/FirstButton";
import icon from "../../../assets/Logo/logo2.png";
function HomePageSustainabilitySection() {
  return (
    <div className="sustainability-section-container">
      <div className="left-sustainability-section-container">
        <h1>
          SUSTAINABILITY
          <br /> IS AT THE CORE
          <br /> OF EVERYTHING
          <br /> WE DO
        </h1>
        <p>
          Digital Component Construction uses less material, reduces emissions
          in manufacturing + freight + virtually eliminates waste onsite.
          Digital components are designed for disassembly, so wall systems can
          be easily reconfigured onsite or recycled at the end of the lifecycle.
        </p>
        <FirstButton title={"Learn More"} link={"/"} />
      </div>

      <div className="right-sustainability-section-container">
        {/* <div className="first-sustainability-row">
            <div className="sustainability-icon-container">
              <img src={boxIcon} />
              <p>Connected Design</p>
            </div>
            <div className="sustainability-icon-container">
              <img src={cloud} />
              <p>Smaller Footprint</p>
            </div>
          </div>

          <div className="second-sustainability-row">
            <div className="sustainability-icon-container">
              <img src={company} />
              <p>Reduced Freight</p>
            </div>
            <div className="sustainability-icon-container">
              <img src="../../assets/Icons/1622589215-reduce-waste-onsite-85-2.png" />
              <p>Fewer Materials</p>
            </div>
            <div className="sustainability-icon-container">
              <img src={leave} />
              <p>Reduced Waste Onsite</p>
            </div>
          </div>

          <div className="third-sustainability-row">
            <div className="sustainability-icon-container">
              <img src={recycle} />
              <p>Designed For Disassembly</p>
            </div>
            <div className="sustainability-icon-container">
              <img src={secondTruck} />
              <p>Recyclable Materials</p>
            </div>
          </div> */}
        <img className="flex justify-center align-middle" src={icon} />
      </div>
    </div>
  );
}

export default HomePageSustainabilitySection