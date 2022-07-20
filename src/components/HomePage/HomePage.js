/* eslint-disable linebreak-style */
/* eslint-disable no-unused-vars */
/* eslint-disable quotes */
import { Link } from "react-router-dom";

function HomePage() {
  return (
    <>
      <div className="homepage">
        <video className="v-background" autoPlay muted loop>
          <source
            src="https://user-images.githubusercontent.com/101924220/180069597-84a570d5-b256-416e-9110-085082cf074d.mp4"
            type="video/mp4"
          />
          Browser is not supporting this web site assets
        </video>
        <Link to="main/*">Go TO main page</Link>
      </div>
    </>
  );
}

export default HomePage;
