import React from "react";

const preloadImageWithPromise = src => {
  return new Promise((resolve, reject) => {
    const image = new Image();

    image.onload = () => {
      resolve();
    };

    image.src = src;
  });
};

class BlurImage extends React.Component {
  state = {
    loaded: false
  };

  componentDidMount() {
    this.loadImage();
  }

  loadImage = async () => {
    await preloadImageWithPromise(this.props.src);
    this.setState({ loaded: true });
  };

  render() {
    const { src, base64, alt } = this.props;
    const currentSrc = this.state.loaded ? src : base64;
    const currentClass = this.state.loaded
      ? "image image__large"
      : "image image__small";
    return (
      <img
        {...this.props}
        className={currentClass}
        src={currentSrc}
        alt={alt}
      />
    );
  }
}

export default BlurImage;
