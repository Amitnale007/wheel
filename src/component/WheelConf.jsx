import { Wheel } from "https://cdn.jsdelivr.net/npm/spin-wheel@4.3.1/dist/spin-wheel-esm.js";
const configureWheel = (container) => {
  const wheelProps = {
    items: [
      { label: "0" },
      { label: "1" },
      { label: "2" },
      { label: "3" },
      { label: "4" },
      { label: "5" },
      { label: "6" },
      { label: "7" },
      { label: "8" },
      { label: "9" },
    ],
  };

  const wheel = new Wheel(container, wheelProps);
  // wheel.radius = 0.75;
  wheel.itemLabelFontSizeMax = 100;
  wheel.rotationSpeedMax = 40000;
  wheel.itemLabelRadius = 0.7;
  wheel.itemBackgroundColors = ["#00ff00"];
  wheel.itemLabelRotation = 90;
  wheel.itemLabelAlign = "center";
  wheel.itemLabelColors = ["white"];
  // wheel.isInteractive = false;
  // wheel.borderWidth = 30;
  // wheel.borderColor = "#Ffdd00";
  wheel.image = "../../assets/center1.svg";

  // wheel.overlayImage =
  //   "https://raw.githubusercontent.com/Amitnale007/Image-Proccessing/main/no%20stand.png";
  return wheel;
  // wheel.overlayImage =
  //   "https://raw.githubusercontent.com/CrazyTim/spin-wheel/9d98bc1ed06f832bc1d5f3499477df7a9fcf7c7a/examples/themes/img/example-2-overlay.svg";
  // return wheel;
};
export default configureWheel;
