import './FirstButton.scss'
function FirstButton({title,link}) {
  return (
    <button className="btn-17">
      <span className="text-container">
        <span className="text"><a href={link}>{title}</a></span>
      </span>
    </button>
  );
}

export default FirstButton