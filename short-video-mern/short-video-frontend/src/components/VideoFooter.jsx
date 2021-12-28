import "./VideoFooter.css";

import { MusicNote } from "@material-ui/icons";
import Ticker from "react-ticker";

export const VideoFooter = () => {
  return (
    <div className="videoFooter">
      <div className="videoFooter__text">
        <h3>@nabendu82</h3>
        <p>Macbook Air to new Windows editing beast</p>
        <div className="videoFooter__ticker">
          <MusicNote className="videoFooter__icon" />
          <Ticker>
            {({ index }) => (
              <>
                <h1 style={{ paddingRight: "0.5em" }}>
                  This is the Headline of element #{index}!
                </h1>
              </>
            )}
          </Ticker>
        </div>
      </div>
    </div>
  );
};
