import "./tooltip.css";

export const Tooltip = ({ text }) => {
  return (
    <article className='tooltip'>
      <p className="tooltip__text">{text}</p>
    </article>
  );
};
