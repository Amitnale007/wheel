import React, { useEffect, useRef } from "react";
import configureWheel from "./WheelConf";
import "./wheelcss.css";
import gifSrc from './ctrlgif.gif';

function Wheel(props) {
  const containerRef = useRef(null);

  useEffect(() => {
    if (containerRef.current) {
      configureWheel(containerRef.current);
    }
  }, []);

  return (
    <div className="wheel-container" ref={containerRef}>
      <svg
        className="wheel-svg"
        width="593"
        height="596"
        viewBox="0 0 593 596"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <rect width="593" height="596" fill="none" />
        <g id="Group 64">
          <g id="Group 63">
            <g id="Ellipse 4" style={{ mixBlendMode: "darken" }}>
              <path
                d="M571.5 299.5C571.5 453.812 448.155 578.5 296.5 578.5C144.845 578.5 21.5 453.812 21.5 299.5C21.5 145.188 144.845 20.5 296.5 20.5C448.155 20.5 571.5 145.188 571.5 299.5Z"
                stroke="#270E14"
                strokeWidth="35"
              />
            </g>
            <g id="Ellipse 1">
              <mask id="path-2-inside-1_0_1" fill="white">
                <path d="M593 299.5C593 463.252 460.141 596 296.251 596C132.36 596 0 463.252 0 299.5C0 135.748 132.36 3 296.251 3C460.141 3 593 135.748 593 299.5Z" />
              </mask>
              <path
                d="M593 299.5C593 463.252 460.141 596 296.251 596C132.36 596 0 463.252 0 299.5C0 135.748 132.36 3 296.251 3C460.141 3 593 135.748 593 299.5Z"
                stroke="#E7C439"
                strokeWidth="12"
                mask="url(#path-2-inside-1_0_1)"
              />
            </g>
            <g id="Group 8" filter="url(#filter0_f_0_1)">
              <circle id="Ellipse 2" cx="312" cy="24" r="11" fill="#FFE635" />
              <g id="Ellipse 3" filter="url(#filter1_b_0_1)">
                <path
                  d="M316 27C316 29.7614 313.538 32 310.5 32C307.462 32 305 29.7614 305 27C305 24.2386 307.462 22 310.5 22C313.538 22 316 24.2386 316 27Z"
                  fill="#FFFED2"
                />
              </g>
            </g>
            <g id="Group 62">
              <g id="Group 9" filter="url(#filter2_f_0_1)">
                <circle id="Ellipse 2_2" cx="350" cy="32" r="11" fill="#FFE635" />
                <g id="Ellipse 3_2" filter="url(#filter3_b_0_1)">
                  <path
                    d="M354 35C354 37.7614 351.538 40 348.5 40C345.462 40 343 37.7614 343 35C343 32.2386 345.462 30 348.5 30C351.538 30 354 32.2386 354 35Z"
                    fill="#FFFED2"
                  />
                </g>
              </g>
              <g id="Group 10" filter="url(#filter4_f_0_1)">
                <circle id="Ellipse 2_3" cx="384" cy="40" r="11" fill="#FFE635" />
                <g id="Ellipse 3_3" filter="url(#filter5_b_0_1)">
                  <path
                    d="M388 43C388 45.7614 385.538 48 382.5 48C379.462 48 377 45.7614 377 43C377 40.2386 379.462 38 382.5 38C385.538 38 388 40.2386 388 43Z"
                    fill="#FFFED2"
                  />
                </g>
              </g>
              <g id="Group 52" filter="url(#filter6_f_0_1)">
                <circle id="Ellipse 2_4" cx="421" cy="53" r="11" fill="#FFE635" />
                <g id="Ellipse 3_4" filter="url(#filter7_b_0_1)">
                  <path
                    d="M425 56C425 58.7614 422.538 61 419.5 61C416.462 61 414 58.7614 414 56C414 53.2386 416.462 51 419.5 51C422.538 51 425 53.2386 425 56Z"
                    fill="#FFFED2"
                  />
                </g>
              </g>
              <g id="Group 12" filter="url(#filter8_f_0_1)">
                <circle id="Ellipse 2_5" cx="449" cy="70" r="11" fill="#FFE635" />
                <g id="Ellipse 3_5" filter="url(#filter9_b_0_1)">
                  <path
                    d="M453 73C453 75.7614 450.538 78 447.5 78C444.462 78 442 75.7614 442 73C442 70.2386 444.462 68 447.5 68C450.538 68 453 70.2386 453 73Z"
                    fill="#FFFED2"
                  />
                </g>
              </g>
            </g>
          </g>
        </g>
        <defs>
          <filter
            id="filter0_f_0_1"
            x="297"
            y="9"
            width="30"
            height="30"
            filterUnits="userSpaceOnUse"
            colorInterpolationFilters="sRGB"
          >
            <feFlood floodOpacity="0" result="BackgroundImageFix" />
            <feBlend
              mode="normal"
              in="SourceGraphic"
              in2="BackgroundImageFix"
              result="shape"
            />
            <feGaussianBlur stdDeviation="2" result="effect1_foregroundBlur_0_1" />
          </filter>
          <filter
            id="filter1_b_0_1"
            x="301"
            y="18"
            width="19"
            height="18"
            filterUnits="userSpaceOnUse"
            colorInterpolationFilters="sRGB"
          >
            <feFlood floodOpacity="0" result="BackgroundImageFix" />
            <feGaussianBlur in="BackgroundImageFix" stdDeviation="2" />
            <feComposite in2="SourceAlpha" operator="in" result="effect1_backgroundBlur_0_1" />
            <feBlend
              mode="normal"
              in="SourceGraphic"
              in2="effect1_backgroundBlur_0_1"
              result="shape"
            />
          </filter>
          <filter
            id="filter2_f_0_1"
            x="335"
            y="17"
            width="30"
            height="30"
            filterUnits="userSpaceOnUse"
            colorInterpolationFilters="sRGB"
          >
            <feFlood floodOpacity="0" result="BackgroundImageFix" />
            <feBlend
              mode="normal"
              in="SourceGraphic"
              in2="BackgroundImageFix"
              result="shape"
            />
            <feGaussianBlur stdDeviation="2" result="effect1_foregroundBlur_0_1" />
          </filter>
          <filter
            id="filter3_b_0_1"
            x="339"
            y="26"
            width="19"
            height="18"
            filterUnits="userSpaceOnUse"
            colorInterpolationFilters="sRGB"
          >
            <feFlood floodOpacity="0" result="BackgroundImageFix" />
            <feGaussianBlur in="BackgroundImageFix" stdDeviation="2" />
            <feComposite in2="SourceAlpha" operator="in" result="effect1_backgroundBlur_0_1" />
            <feBlend
              mode="normal"
              in="SourceGraphic"
              in2="effect1_backgroundBlur_0_1"
              result="shape"
            />
          </filter>
          <filter
            id="filter4_f_0_1"
            x="369"
            y="25"
            width="30"
            height="30"
            filterUnits="userSpaceOnUse"
            colorInterpolationFilters="sRGB"
          >
            <feFlood floodOpacity="0" result="BackgroundImageFix" />
            <feBlend
              mode="normal"
              in="SourceGraphic"
              in2="BackgroundImageFix"
              result="shape"
            />
            <feGaussianBlur stdDeviation="2" result="effect1_foregroundBlur_0_1" />
          </filter>
          <filter
            id="filter5_b_0_1"
            x="373"
            y="34"
            width="19"
            height="18"
            filterUnits="userSpaceOnUse"
            colorInterpolationFilters="sRGB"
          >
            <feFlood floodOpacity="0" result="BackgroundImageFix" />
            <feGaussianBlur in="BackgroundImageFix" stdDeviation="2" />
            <feComposite in2="SourceAlpha" operator="in" result="effect1_backgroundBlur_0_1" />
            <feBlend
              mode="normal"
              in="SourceGraphic"
              in2="effect1_backgroundBlur_0_1"
              result="shape"
            />
          </filter>
        </defs>
      </svg>

      <div className="center">
    <img src={gifSrc} alt="gif" className="centergif" style={{ zIndex: 1 }} />
  </div>
   
    </div>
  );
}

export default Wheel;
