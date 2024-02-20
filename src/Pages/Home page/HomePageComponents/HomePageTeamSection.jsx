import TextAnimation from "../../../Components/Text Animations/TextAnimation";
import FirstButton from "../../../Components/Buttons/Btn-1/FirstButton";
import teamImg from "../../../assets/team-img.jpg";
import "./HomePageTeamSection.scss";
function HomePageTeamSection() {
  return (
    <div className="team-section-container">
      <img src={teamImg} alt="" />
      <div className="team-section-overlay-text">
        <TextAnimation
          textData={"BRANCHES  \n PROVIDE \n END-TO-END \n SERVICE"}
        />
        <p>
          105+ Factory Direct Branches provide complete service including
          pre-construction,
          <br />
          submittals + project management.
        </p>
        <div className="team-section-btn">
          <FirstButton title={"Learn More"} link={"/"} />
          {/* <SecondButton /> */}
          {/* <ThirdButton/> */}
        </div>
      </div>
    </div>
  );
}

export default HomePageTeamSection;
