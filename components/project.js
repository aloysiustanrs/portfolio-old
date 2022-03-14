import styles from "../styles/project.module.css";

import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from "react-responsive-carousel";

const Project = () => {
  return (
    <>
      <h1 id="project-header">Projects</h1>
      <div className={styles.div}>
        <Carousel
          className={styles.carousel}
          transitionTime="400"
          showThumbs={false}
        >
          <div>
            <img src="https://picsum.photos/id/237/536/354" />
            <p className="legend">Legend 1</p>
          </div>
          <div>
            <img src="https://picsum.photos/id/237/536/354" />
            <p className="legend">Legend 2</p>
          </div>
          <div>
            <img src="https://picsum.photos/id/237/536/354" />
            <p className="legend">Legend 3</p>
          </div>
        </Carousel>
      </div>
    </>
  );
};

export default Project;
