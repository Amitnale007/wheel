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
  wheel.itemLabelFontSizeMax = 80;
  wheel.rotationSpeedMax = 40000;
  wheel.itemLabelRadius = 0.68;
  wheel.itemBackgroundColors = ["#43a510"];
  wheel.itemLabelRotation = 90;
  wheel.itemLabelAlign = "center";
  wheel.itemLabelColors = ["white"];
  // wheel.isInteractive = false;
  // wheel.borderWidth = 30;
  // wheel.borderColor = "#Ffdd00";
  // wheel.image = "../../assets/center1.svg";

  return wheel;
 
};
export default configureWheel;
