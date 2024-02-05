import './LinkButton.scss'
function LinkButton({title, link}) {
  return (
    <div>
      <a href={link} className="menu__link">
        {title}
      </a>
    </div>
  );
}

export default LinkButton