import styled from "styled-components";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import images from "../images";
import { useRef, useEffect, useState } from "react";

const Carousel = () => {
  const [width, setWidth] = useState(0);
  const carousel = useRef();

  useEffect(() => {
    setWidth(carousel.current.scrollWidth - carousel.current.offsetWidth);
  }, []);

  return (
    <StyledCarousel>
      <Link to="/create" id="create-job">
        Create Job
      </Link>
      <motion.div
        ref={carousel}
        className="carousel"
        whileTap={{ cursor: "grabbing" }}
      >
        <motion.div
          drag="x"
          dragConstraints={{ right: 0, left: -width }}
          className="inner-carousel"
        >
          {images.map((image) => {
            return (
              <motion.div className="item" key={image}>
                <img src={image} />
              </motion.div>
            );
          })}
        </motion.div>
      </motion.div>
    </StyledCarousel>
  );
};

const StyledCarousel = styled.div`
  margin: 0 20%;

  #create-job {
    display: inline-block;
    padding: 0.6rem 1.5rem;
    background-color: #e7e7e7;
    border-radius: 1rem;
    border: 1px black solid;
    margin: 0.5rem;
  }

  .item {
    min-height: 40rem;
    min-width: 30rem;
    padding: 40px;
  }

  .item img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    border-radius: 1rem;
    pointer-events: none;
  }

  .inner-carousel {
    display: flex;
  }

  .carousel {
    cursor: grab;
    overflow: hidden;
  }
`;

export default Carousel;
