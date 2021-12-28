import "./VideoFooter.css";

export const VideoFooter = ({ channel, description, song }) => {
  return (
    <div className="videoFooter">
      <div className="videoFooter__text">
        <h3>@{channel}</h3>
        <h4>{song}</h4>
        <p>{description}</p>
      </div>
    </div>
  );
};
