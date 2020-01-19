import React, { useEffect, useState, useRef } from "react";
import LazyLoadedCardStyles from "./CardStyles.jsx";
import inView from "vanillajs-browser-helpers/inView";
import useAppState from "../../statemachine/useAppState";

const Card = () => {
  const cardRef = useRef(null);
  const [visible, setVisible] = useState(false);
  const { scrollY } = useAppState("scrollposition");

  useEffect(() => {
    const viewed = inView(cardRef.current);
    setVisible(viewed.inside === true);
  }, [scrollY]);

  return (
    <LazyLoadedCardStyles selected={visible}>
      <div ref={cardRef}>
        {visible && <span>IN VIEW</span>}
        {!visible && <span>NOT VIEW</span>}
      </div>
    </LazyLoadedCardStyles>
  );
};

export default Card;
