import './ImageFlipCard.scss'
function ImageFlipCard() {
  return (
    <div>
      <div className="flip-card">
        <img src="../../../dist/assets/team-img-x0bqZEfh.jpg" />
        <div className="flip-card__content">
          <p className="flip-card__title">Card Title</p>
          <p className="flip-card__description">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco.
          </p>
        </div>
      </div>
    </div>
  );
}

export default ImageFlipCard