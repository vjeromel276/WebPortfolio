import "./VideoFooter.css";

import { MusicNote } from "@material-ui/icons";

export const VideoFooter = () => {
  return (
    <div className="videoFooter">
      <div className="videoFooter__text">
        <h3>@nabendu82</h3>
        <p>Macbook Air to new Windows editing beast</p>
        <div className="videoFooter__ticker">
          <MusicNote className="videoFooter__icon" />
        </div>
      </div>
    </div>
  );
};
