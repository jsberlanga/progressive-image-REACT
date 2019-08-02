import React, { useState, useEffect } from "react";

const BlurImage = props => {
  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    setTimeout(() => {
      setLoaded(true);
    }, 0);
  }, [loaded]);

  const { src, base64, alt } = props;
  const currentSrc = loaded ? src : base64;
  return <img {...props} src={currentSrc} alt={alt} />;
};

export default BlurImage;
