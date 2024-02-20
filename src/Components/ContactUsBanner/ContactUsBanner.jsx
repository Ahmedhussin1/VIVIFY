import LinkButton from "../Buttons/Btn-4/LinkButton";
function ContactUsBanner() {
  return (
    <div className="contact-banner-container">
      <div className="left-contact-banner-container">
        <div className="left-contact-banner-desc">
          <p>Find your friendly neighborhood Branch.</p>
        </div>
        <div className="left-contact-banner-title">
          <h1>CONTACT US NOW</h1>
        </div>
        <div className="left-contact-banner-btn">
          <LinkButton title={"GET IN TOUCH"} link={"/contact"} />
        </div>
      </div>
      <div className="right-contact-banner-container">
        <p>
          Contact your Falkbuilt Factory-direct Branch for unparalleled
          end-to-end service including pre-construction, project management,
          order entry, building permit submittals and installation. We’re
          looking forward to bringing the power of Digital Component
          Construction to your project.
        </p>
      </div>
    </div>
  );
}

export default ContactUsBanner