import React, { useEffect, useRef } from "react";
import configureWheel from "./WheelConf";
import "./wheelcss.css";
import gifSrc from './ctrlgif.gif';
import sun from './sun.png';
import stand from './stand.svg';

function Wheel(props) {
  const containerRef = useRef(null);

  useEffect(() => {
    if (containerRef.current) {
      configureWheel(containerRef.current);
    }
  }, []);

  return (
    <div className="complatewheel">
      <div className="wheel-container" ref={containerRef}>
        <svg className="wheel-svg" width="605" height="605" viewBox="0 0 605 605" fill="none" xmlns="http://www.w3.org/2000/svg">
          <rect width="605" height="605" fill="none" />
          <g id="Group 64">
            <g id="Group 63">
              <g id="Ellipse 1">
                <mask id="path-1-inside-1_0_1" fill="white">
                  <path d="M605 302.5C605 469.566 469.452 605 302.246 605C135.039 605 0 469.566 0 302.5C0 135.434 135.039 0 302.246 0C469.452 0 605 135.434 605 302.5Z" />
                </mask>
                <path d="M605 302.5C605 469.566 469.452 605 302.246 605C135.039 605 0 469.566 0 302.5C0 135.434 135.039 0 302.246 0C469.452 0 605 135.434 605 302.5Z" stroke="#E7C439" stroke-width="12" mask="url(#path-1-inside-1_0_1)" />
              </g>
              <g id="Ellipse 5">
                <mask id="path-2-inside-2_0_1" fill="white">
                  <path d="M570 302C570 449.46 450.46 569 303 569C155.54 569 36 449.46 36 302C36 154.54 155.54 35 303 35C450.46 35 570 154.54 570 302Z" />
                </mask>
                <path d="M570 302C570 449.46 450.46 569 303 569C155.54 569 36 449.46 36 302C36 154.54 155.54 35 303 35C450.46 35 570 154.54 570 302Z" stroke="#865A05" stroke-width="20" mask="url(#path-2-inside-2_0_1)" />
              </g>
              <g id="Ellipse 6">
                <mask id="path-3-inside-3_0_1" fill="white">
                  <path d="M560 302.5C560 444.713 444.713 560 302.5 560C160.287 560 45 444.713 45 302.5C45 160.287 160.287 45 302.5 45C444.713 45 560 160.287 560 302.5Z" />
                </mask>
                <path d="M560 302.5C560 444.713 444.713 560 302.5 560C160.287 560 45 444.713 45 302.5C45 160.287 160.287 45 302.5 45C444.713 45 560 160.287 560 302.5Z" stroke="black" stroke-width="6" mask="url(#path-3-inside-3_0_1)" />
              </g>
              <g id="Ellipse 4" style={{ mixBlendMode: 'darken' }}>
                <circle cx="302.5" cy="302.5" r="281.5" stroke="#2B1110" stroke-width="30" />
              </g>
              <g id="Group 62">
                <g id="Group 10" filter="url(#filter0_f_0_1)">
                  <circle id="Ellipse 2" cx="372.5" cy="28.5" r="12.5" fill="#EFA007" fill-opacity="0.15" />
                  <g id="Ellipse 3" filter="url(#filter1_bd_0_1)">
                    <path d="M377 28.5C377 30.7091 375.209 32.5 373 32.5C370.791 32.5 369 30.7091 369 28.5C369 26.2909 370.791 24.5 373 24.5C375.209 24.5 377 26.2909 377 28.5Z" fill="#FFF887" />
                  </g>
                </g>
                <g id="Group 65">
                  <g id="Group 10_2" filter="url(#filter2_f_0_1)">
                    <circle id="Ellipse 2_2" cx="452.5" cy="63.5" r="12.5" fill="#EFA007" fill-opacity="0.15" />
                    <g id="Ellipse 3_2" filter="url(#filter3_bd_0_1)">
                      <path d="M457 63.5C457 65.7091 455.209 67.5 453 67.5C450.791 67.5 449 65.7091 449 63.5C449 61.2909 450.791 59.5 453 59.5C455.209 59.5 457 61.2909 457 63.5Z" fill="#FFF887" />
                    </g>
                  </g>
                </g>
                <g id="Group 63_2">
                  <g id="Group 10_3" filter="url(#filter4_f_0_1)">
                    <circle id="Ellipse 2_3" cx="415.5" cy="43.5" r="12.5" fill="#EFA007" fill-opacity="0.15" />
                    <g id="Ellipse 3_3" filter="url(#filter5_bd_0_1)">
                      <path d="M420 43.5C420 45.7091 418.209 47.5 416 47.5C413.791 47.5 412 45.7091 412 43.5C412 41.2909 413.791 39.5 416 39.5C418.209 39.5 420 41.2909 420 43.5Z" fill="#FFF887" />
                    </g>
                  </g>
                </g>
                <g id="Group 76">
                  <g id="Group 10_4" filter="url(#filter6_f_0_1)">
                    <circle id="Ellipse 2_4" cx="26.5" cy="355.5" r="12.5" fill="#EFA007" fill-opacity="0.15" />
                    <g id="Ellipse 3_4" filter="url(#filter7_bd_0_1)">
                      <path d="M31 355.5C31 357.709 29.2091 359.5 27 359.5C24.7909 359.5 23 357.709 23 355.5C23 353.291 24.7909 351.5 27 351.5C29.2091 351.5 31 353.291 31 355.5Z" fill="#FFF887" />
                    </g>
                  </g>
                </g>
                <g id="Group 98">
                  <g id="Group 10_5" filter="url(#filter8_f_0_1)">
                    <circle id="Ellipse 2_5" cx="564.5" cy="199.5" r="12.5" fill="#EFA007" fill-opacity="0.15" />
                    <g id="Ellipse 3_5" filter="url(#filter9_bd_0_1)">
                      <path d="M569 199.5C569 201.709 567.209 203.5 565 203.5C562.791 203.5 561 201.709 561 199.5C561 197.291 562.791 195.5 565 195.5C567.209 195.5 569 197.291 569 199.5Z" fill="#FFF887" />
                    </g>
                  </g>
                </g>
                <g id="Group 77">
                  <g id="Group 10_6" filter="url(#filter10_f_0_1)">
                    <circle id="Ellipse 2_6" cx="36.5" cy="395.5" r="12.5" fill="#EFA007" fill-opacity="0.15" />
                    <g id="Ellipse 3_6" filter="url(#filter11_bd_0_1)">
                      <path d="M41 395.5C41 397.709 39.2091 399.5 37 399.5C34.7909 399.5 33 397.709 33 395.5C33 393.291 34.7909 391.5 37 391.5C39.2091 391.5 41 393.291 41 395.5Z" fill="#FFF887" />
                    </g>
                  </g>
                </g>
                <g id="Group 81">
                  <g id="Group 10_7" filter="url(#filter12_f_0_1)">
                    <circle id="Ellipse 2_7" cx="149.5" cy="538.5" r="12.5" fill="#EFA007" fill-opacity="0.15" />
                    <g id="Ellipse 3_7" filter="url(#filter13_bd_0_1)">
                      <path d="M154 538.5C154 540.709 152.209 542.5 150 542.5C147.791 542.5 146 540.709 146 538.5C146 536.291 147.791 534.5 150 534.5C152.209 534.5 154 536.291 154 538.5Z" fill="#FFF887" />
                    </g>
                  </g>
                </g>
                <g id="Group 95">
                  <g id="Group 10_8" filter="url(#filter14_f_0_1)">
                    <circle id="Ellipse 2_8" cx="577.5" cy="243.5" r="12.5" fill="#EFA007" fill-opacity="0.15" />
                    <g id="Ellipse 3_8" filter="url(#filter15_bd_0_1)">
                      <path d="M582 243.5C582 245.709 580.209 247.5 578 247.5C575.791 247.5 574 245.709 574 243.5C574 241.291 575.791 239.5 578 239.5C580.209 239.5 582 241.291 582 243.5Z" fill="#FFF887" />
                    </g>
                  </g>
                </g>
                <g id="Group 100">
                  <g id="Group 10_9" filter="url(#filter16_f_0_1)">
                    <circle id="Ellipse 2_9" cx="488.5" cy="91.5" r="12.5" fill="#EFA007" fill-opacity="0.15" />
                    <g id="Ellipse 3_9" filter="url(#filter17_bd_0_1)">
                      <path d="M493 91.5C493 93.7091 491.209 95.5 489 95.5C486.791 95.5 485 93.7091 485 91.5C485 89.2909 486.791 87.5 489 87.5C491.209 87.5 493 89.2909 493 91.5Z" fill="#FFF887" />
                    </g>
                  </g>
                </g>
                <g id="Group 99">
                  <g id="Group 10_10" filter="url(#filter18_f_0_1)">
                    <circle id="Ellipse 2_10" cx="517.5" cy="122.5" r="12.5" fill="#EFA007" fill-opacity="0.15" />
                    <g id="Ellipse 3_10" filter="url(#filter19_bd_0_1)">
                      <path d="M522 122.5C522 124.709 520.209 126.5 518 126.5C515.791 126.5 514 124.709 514 122.5C514 120.291 515.791 118.5 518 118.5C520.209 118.5 522 120.291 522 122.5Z" fill="#FFF887" />
                    </g>
                  </g>
                </g>
                <g id="Group 96">
                  <g id="Group 10_11" filter="url(#filter20_f_0_1)">
                    <circle id="Ellipse 2_11" cx="544.5" cy="159.5" r="12.5" fill="#EFA007" fill-opacity="0.15" />
                    <g id="Ellipse 3_11" filter="url(#filter21_bd_0_1)">
                      <path d="M549 159.5C549 161.709 547.209 163.5 545 163.5C542.791 163.5 541 161.709 541 159.5C541 157.291 542.791 155.5 545 155.5C547.209 155.5 549 157.291 549 159.5Z" fill="#FFF887" />
                    </g>
                  </g>
                </g>
                <g id="Group 94">
                  <g id="Group 10_12" filter="url(#filter22_f_0_1)">
                    <circle id="Ellipse 2_12" cx="582.5" cy="286.5" r="12.5" fill="#EFA007" fill-opacity="0.15" />
                    <g id="Ellipse 3_12" filter="url(#filter23_bd_0_1)">
                      <path d="M587 286.5C587 288.709 585.209 290.5 583 290.5C580.791 290.5 579 288.709 579 286.5C579 284.291 580.791 282.5 583 282.5C585.209 282.5 587 284.291 587 286.5Z" fill="#FFF887" />
                    </g>
                  </g>
                </g>
                <g id="Group 93">
                  <g id="Group 10_13" filter="url(#filter24_f_0_1)">
                    <circle id="Ellipse 2_13" cx="582.5" cy="331.5" r="12.5" fill="#EFA007" fill-opacity="0.15" />
                    <g id="Ellipse 3_13" filter="url(#filter25_bd_0_1)">
                      <path d="M587 331.5C587 333.709 585.209 335.5 583 335.5C580.791 335.5 579 333.709 579 331.5C579 329.291 580.791 327.5 583 327.5C585.209 327.5 587 329.291 587 331.5Z" fill="#FFF887" />
                    </g>
                  </g>
                </g>
                <g id="Group 92">
                  <g id="Group 10_14" filter="url(#filter26_f_0_1)">
                    <circle id="Ellipse 2_14" cx="575.5" cy="371.5" r="12.5" fill="#EFA007" fill-opacity="0.15" />
                    <g id="Ellipse 3_14" filter="url(#filter27_bd_0_1)">
                      <path d="M580 371.5C580 373.709 578.209 375.5 576 375.5C573.791 375.5 572 373.709 572 371.5C572 369.291 573.791 367.5 576 367.5C578.209 367.5 580 369.291 580 371.5Z" fill="#FFF887" />
                    </g>
                  </g>
                </g>
                <g id="Group 91">
                  <g id="Group 10_15" filter="url(#filter28_f_0_1)">
                    <circle id="Ellipse 2_15" cx="562.5" cy="412.5" r="12.5" fill="#EFA007" fill-opacity="0.15" />
                    <g id="Ellipse 3_15" filter="url(#filter29_bd_0_1)">
                      <path d="M567 412.5C567 414.709 565.209 416.5 563 416.5C560.791 416.5 559 414.709 559 412.5C559 410.291 560.791 408.5 563 408.5C565.209 408.5 567 410.291 567 412.5Z" fill="#FFF887" />
                    </g>
                  </g>
                </g>
                <g id="Group 89">
                  <g id="Group 10_16" filter="url(#filter30_f_0_1)">
                    <circle id="Ellipse 2_16" cx="511.5" cy="491.5" r="12.5" fill="#EFA007" fill-opacity="0.15" />
                    <g id="Ellipse 3_16" filter="url(#filter31_bd_0_1)">
                      <path d="M516 491.5C516 493.709 514.209 495.5 512 495.5C509.791 495.5 508 493.709 508 491.5C508 489.291 509.791 487.5 512 487.5C514.209 487.5 516 489.291 516 491.5Z" fill="#FFF887" />
                    </g>
                  </g>
                </g>
                <g id="Group 88">
                  <g id="Group 10_17" filter="url(#filter32_f_0_1)">
                    <circle id="Ellipse 2_17" cx="480.5" cy="522.5" r="12.5" fill="#EFA007" fill-opacity="0.15" />
                    <g id="Ellipse 3_17" filter="url(#filter33_bd_0_1)">
                      <path d="M485 522.5C485 524.709 483.209 526.5 481 526.5C478.791 526.5 477 524.709 477 522.5C477 520.291 478.791 518.5 481 518.5C483.209 518.5 485 520.291 485 522.5Z" fill="#FFF887" />
                    </g>
                  </g>
                </g>
                <g id="Group 87">
                  <g id="Group 10_18" filter="url(#filter34_f_0_1)">
                    <circle id="Ellipse 2_18" cx="442.5" cy="547.5" r="12.5" fill="#EFA007" fill-opacity="0.15" />
                    <g id="Ellipse 3_18" filter="url(#filter35_bd_0_1)">
                      <path d="M447 547.5C447 549.709 445.209 551.5 443 551.5C440.791 551.5 439 549.709 439 547.5C439 545.291 440.791 543.5 443 543.5C445.209 543.5 447 545.291 447 547.5Z" fill="#FFF887" />
                    </g>
                  </g>
                </g>
                <g id="Group 86">
                  <g id="Group 10_19" filter="url(#filter36_f_0_1)">
                    <circle id="Ellipse 2_19" cx="404.5" cy="565.5" r="12.5" fill="#EFA007" fill-opacity="0.15" />
                    <g id="Ellipse 3_19" filter="url(#filter37_bd_0_1)">
                      <path d="M409 565.5C409 567.709 407.209 569.5 405 569.5C402.791 569.5 401 567.709 401 565.5C401 563.291 402.791 561.5 405 561.5C407.209 561.5 409 563.291 409 565.5Z" fill="#FFF887" />
                    </g>
                  </g>
                </g>
                <g id="Group 70">
                  <g id="Group 10_20" filter="url(#filter38_f_0_1)">
                    <circle id="Ellipse 2_20" cx="65.5" cy="150.5" r="12.5" fill="#EFA007" fill-opacity="0.15" />
                    <g id="Ellipse 3_20" filter="url(#filter39_bd_0_1)">
                      <path d="M70 150.5C70 152.709 68.2091 154.5 66 154.5C63.7909 154.5 62 152.709 62 150.5C62 148.291 63.7909 146.5 66 146.5C68.2091 146.5 70 148.291 70 150.5Z" fill="#FFF887" />
                    </g>
                  </g>
                </g>
                <g id="Group 83">
                  <g id="Group 10_21" filter="url(#filter40_f_0_1)">
                    <circle id="Ellipse 2_21" cx="273.5" cy="582.5" r="12.5" fill="#EFA007" fill-opacity="0.15" />
                    <g id="Ellipse 3_21" filter="url(#filter41_bd_0_1)">
                      <path d="M278 582.5C278 584.709 276.209 586.5 274 586.5C271.791 586.5 270 584.709 270 582.5C270 580.291 271.791 578.5 274 578.5C276.209 578.5 278 580.291 278 582.5Z" fill="#FFF887" />
                    </g>
                  </g>
                </g>
                <g id="Group 82">
                  <g id="Group 10_22" filter="url(#filter42_f_0_1)">
                    <circle id="Ellipse 2_22" cx="231.5" cy="574.5" r="12.5" fill="#EFA007" fill-opacity="0.15" />
                    <g id="Ellipse 3_22" filter="url(#filter43_bd_0_1)">
                      <path d="M236 574.5C236 576.709 234.209 578.5 232 578.5C229.791 578.5 228 576.709 228 574.5C228 572.291 229.791 570.5 232 570.5C234.209 570.5 236 572.291 236 574.5Z" fill="#FFF887" />
                    </g>
                  </g>
                </g>
                <g id="Group 80">
                  <g id="Group 10_23" filter="url(#filter44_f_0_1)">
                    <circle id="Ellipse 2_23" cx="186.5" cy="559.5" r="12.5" fill="#EFA007" fill-opacity="0.15" />
                    <g id="Ellipse 3_23" filter="url(#filter45_bd_0_1)">
                      <path d="M191 559.5C191 561.709 189.209 563.5 187 563.5C184.791 563.5 183 561.709 183 559.5C183 557.291 184.791 555.5 187 555.5C189.209 555.5 191 557.291 191 559.5Z" fill="#FFF887" />
                    </g>
                  </g>
                </g>
                <g id="Group 84">
                  <g id="Group 10_24" filter="url(#filter46_f_0_1)">
                    <circle id="Ellipse 2_24" cx="317.5" cy="582.5" r="12.5" fill="#EFA007" fill-opacity="0.15" />
                    <g id="Ellipse 3_24" filter="url(#filter47_bd_0_1)">
                      <path d="M322 582.5C322 584.709 320.209 586.5 318 586.5C315.791 586.5 314 584.709 314 582.5C314 580.291 315.791 578.5 318 578.5C320.209 578.5 322 580.291 322 582.5Z" fill="#FFF887" />
                    </g>
                  </g>
                </g>
                <g id="Group 79">
                  <g id="Group 10_25" filter="url(#filter48_f_0_1)">
                    <circle id="Ellipse 2_25" cx="113.5" cy="511.5" r="12.5" fill="#EFA007" fill-opacity="0.15" />
                    <g id="Ellipse 3_25" filter="url(#filter49_bd_0_1)">
                      <path d="M118 511.5C118 513.709 116.209 515.5 114 515.5C111.791 515.5 110 513.709 110 511.5C110 509.291 111.791 507.5 114 507.5C116.209 507.5 118 509.291 118 511.5Z" fill="#FFF887" />
                    </g>
                  </g>
                </g>
                <g id="Group 75">
                  <g id="Group 10_26" filter="url(#filter50_f_0_1)">
                    <circle id="Ellipse 2_26" cx="53.5" cy="435.5" r="12.5" fill="#EFA007" fill-opacity="0.15" />
                    <g id="Ellipse 3_26" filter="url(#filter51_bd_0_1)">
                      <path d="M58 435.5C58 437.709 56.2091 439.5 54 439.5C51.7909 439.5 50 437.709 50 435.5C50 433.291 51.7909 431.5 54 431.5C56.2091 431.5 58 433.291 58 435.5Z" fill="#FFF887" />
                    </g>
                  </g>
                </g>
                <g id="Group 78">
                  <g id="Group 10_27" filter="url(#filter52_f_0_1)">
                    <circle id="Ellipse 2_27" cx="83.5" cy="479.5" r="12.5" fill="#EFA007" fill-opacity="0.15" />
                    <g id="Ellipse 3_27" filter="url(#filter53_bd_0_1)">
                      <path d="M88 479.5C88 481.709 86.2091 483.5 84 483.5C81.7909 483.5 80 481.709 80 479.5C80 477.291 81.7909 475.5 84 475.5C86.2091 475.5 88 477.291 88 479.5Z" fill="#FFF887" />
                    </g>
                  </g>
                </g>
                <g id="Group 73">
                  <g id="Group 10_28" filter="url(#filter54_f_0_1)">
                    <circle id="Ellipse 2_28" cx="23.5" cy="272.5" r="12.5" fill="#EFA007" fill-opacity="0.15" />
                    <g id="Ellipse 3_28" filter="url(#filter55_bd_0_1)">
                      <path d="M28 272.5C28 274.709 26.2091 276.5 24 276.5C21.7909 276.5 20 274.709 20 272.5C20 270.291 21.7909 268.5 24 268.5C26.2091 268.5 28 270.291 28 272.5Z" fill="#FFF887" />
                    </g>
                  </g>
                </g>
                <g id="Group 85">
                  <g id="Group 10_29" filter="url(#filter56_f_0_1)">
                    <circle id="Ellipse 2_29" cx="362.5" cy="577.5" r="12.5" fill="#EFA007" fill-opacity="0.15" />
                    <g id="Ellipse 3_29" filter="url(#filter57_bd_0_1)">
                      <path d="M367 577.5C367 579.709 365.209 581.5 363 581.5C360.791 581.5 359 579.709 359 577.5C359 575.291 360.791 573.5 363 573.5C365.209 573.5 367 575.291 367 577.5Z" fill="#FFF887" />
                    </g>
                  </g>
                </g>
                <g id="Group 74">
                  <g id="Group 10_30" filter="url(#filter58_f_0_1)">
                    <circle id="Ellipse 2_30" cx="20.5" cy="314.5" r="12.5" fill="#EFA007" fill-opacity="0.15" />
                    <g id="Ellipse 3_30" filter="url(#filter59_bd_0_1)">
                      <path d="M25 314.5C25 316.709 23.2091 318.5 21 318.5C18.7909 318.5 17 316.709 17 314.5C17 312.291 18.7909 310.5 21 310.5C23.2091 310.5 25 312.291 25 314.5Z" fill="#FFF887" />
                    </g>
                  </g>
                </g>
                <g id="Group 71">
                  <g id="Group 10_31" filter="url(#filter60_f_0_1)">
                    <circle id="Ellipse 2_31" cx="45.5" cy="188.5" r="12.5" fill="#EFA007" fill-opacity="0.15" />
                    <g id="Ellipse 3_31" filter="url(#filter61_bd_0_1)">
                      <path d="M50 188.5C50 190.709 48.2091 192.5 46 192.5C43.7909 192.5 42 190.709 42 188.5C42 186.291 43.7909 184.5 46 184.5C48.2091 184.5 50 186.291 50 188.5Z" fill="#FFF887" />
                    </g>
                  </g>
                </g>
                <g id="Group 69">
                  <g id="Group 10_32" filter="url(#filter62_f_0_1)">
                    <circle id="Ellipse 2_32" cx="93.5" cy="114.5" r="12.5" fill="#EFA007" fill-opacity="0.15" />
                    <g id="Ellipse 3_32" filter="url(#filter63_bd_0_1)">
                      <path d="M98 114.5C98 116.709 96.2091 118.5 94 118.5C91.7909 118.5 90 116.709 90 114.5C90 112.291 91.7909 110.5 94 110.5C96.2091 110.5 98 112.291 98 114.5Z" fill="#FFF887" />
                    </g>
                  </g>
                </g>
                <g id="Group 68">
                  <g id="Group 10_33" filter="url(#filter64_f_0_1)">
                    <circle id="Ellipse 2_33" cx="126.5" cy="82.5" r="12.5" fill="#EFA007" fill-opacity="0.15" />
                    <g id="Ellipse 3_33" filter="url(#filter65_bd_0_1)">
                      <path d="M131 82.5C131 84.7091 129.209 86.5 127 86.5C124.791 86.5 123 84.7091 123 82.5C123 80.2909 124.791 78.5 127 78.5C129.209 78.5 131 80.2909 131 82.5Z" fill="#FFF887" />
                    </g>
                  </g>
                </g>
                <g id="Group 67">
                  <g id="Group 10_34" filter="url(#filter66_f_0_1)">
                    <circle id="Ellipse 2_34" cx="163.5" cy="57.5" r="12.5" fill="#EFA007" fill-opacity="0.15" />
                    <g id="Ellipse 3_34" filter="url(#filter67_bd_0_1)">
                      <path d="M168 57.5C168 59.7091 166.209 61.5 164 61.5C161.791 61.5 160 59.7091 160 57.5C160 55.2909 161.791 53.5 164 53.5C166.209 53.5 168 55.2909 168 57.5Z" fill="#FFF887" />
                    </g>
                  </g>
                </g>
                <g id="Group 66">
                  <g id="Group 10_35" filter="url(#filter68_f_0_1)">
                    <circle id="Ellipse 2_35" cx="203.5" cy="38.5" r="12.5" fill="#EFA007" fill-opacity="0.15" />
                    <g id="Ellipse 3_35" filter="url(#filter69_bd_0_1)">
                      <path d="M208 38.5C208 40.7091 206.209 42.5 204 42.5C201.791 42.5 200 40.7091 200 38.5C200 36.2909 201.791 34.5 204 34.5C206.209 34.5 208 36.2909 208 38.5Z" fill="#FFF887" />
                    </g>
                  </g>
                </g>
                <g id="Group 63_3">
                  <g id="Group 10_36" filter="url(#filter70_f_0_1)">
                    <circle id="Ellipse 2_36" cx="242.5" cy="27.5" r="12.5" fill="#EFA007" fill-opacity="0.15" />
                    <g id="Ellipse 3_36" filter="url(#filter71_bd_0_1)">
                      <path d="M247 27.5C247 29.7091 245.209 31.5 243 31.5C240.791 31.5 239 29.7091 239 27.5C239 25.2909 240.791 23.5 243 23.5C245.209 23.5 247 25.2909 247 27.5Z" fill="#FFF887" />
                    </g>
                  </g>
                </g>
                <g id="Group 72">
                  <g id="Group 10_37" filter="url(#filter72_f_0_1)">
                    <circle id="Ellipse 2_37" cx="30.5" cy="229.5" r="12.5" fill="#EFA007" fill-opacity="0.15" />
                    <g id="Ellipse 3_37" filter="url(#filter73_bd_0_1)">
                      <path d="M35 229.5C35 231.709 33.2091 233.5 31 233.5C28.7909 233.5 27 231.709 27 229.5C27 227.291 28.7909 225.5 31 225.5C33.2091 225.5 35 227.291 35 229.5Z" fill="#FFF887" />
                    </g>
                  </g>
                </g>
                <g id="Group 90">
                  <g id="Group 10_38" filter="url(#filter74_f_0_1)">
                    <circle id="Ellipse 2_38" cx="541.5" cy="450.5" r="12.5" fill="#EFA007" fill-opacity="0.15" />
                    <g id="Ellipse 3_38" filter="url(#filter75_bd_0_1)">
                      <path d="M546 450.5C546 452.709 544.209 454.5 542 454.5C539.791 454.5 538 452.709 538 450.5C538 448.291 539.791 446.5 542 446.5C544.209 446.5 546 448.291 546 450.5Z" fill="#FFF887" />
                    </g>
                  </g>
                </g>
              </g>
            </g>
            <g id="Ellipse 7">
              <mask id="path-81-inside-4_0_1" fill="white">
                <path d="M326 28.5C326 39.2696 315 51.5 302.5 67.5C293.5 55.5 280 39.2696 280 28.5C280 17.7304 291.178 9 302.5 9C313.822 9 326 17.7304 326 28.5Z" />
              </mask>
              <path d="M326 28.5C326 39.2696 315 51.5 302.5 67.5C293.5 55.5 280 39.2696 280 28.5C280 17.7304 291.178 9 302.5 9C313.822 9 326 17.7304 326 28.5Z" stroke="#D5BFBF" stroke-opacity="0.2" stroke-width="10" stroke-linejoin="round" mask="url(#path-81-inside-4_0_1)" />
              <path d="M326 28.5C326 39.2696 315 51.5 302.5 67.5C293.5 55.5 280 39.2696 280 28.5C280 17.7304 291.178 9 302.5 9C313.822 9 326 17.7304 326 28.5Z" stroke="#D68A3B" stroke-width="10" stroke-linejoin="round" mask="url(#path-81-inside-4_0_1)" />
            </g>
            <path id="Ellipse 8" d="M324 28.5C324 38.165 311 54 302.5 63.5C297 56.5 282 38.165 282 28.5C282 18.835 293 11 302.5 11.5C311.889 11.5 324 18.835 324 28.5Z" fill="#FEF78A" />
            <g id="Line 1" filter="url(#filter76_f_0_1)">
              <path d="M289.5 31.1946L301.5 30.5L316.009 31.5072" stroke="#C26C1C" stroke-width="19" stroke-linecap="round" />
            </g>
          </g>
          <defs>
            <filter id="filter0_f_0_1" x="356" y="12" width="33" height="33" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
              <feFlood flood-opacity="0" result="BackgroundImageFix" />
              <feBlend mode="normal" in="SourceGraphic" in2="BackgroundImageFix" result="shape" />
              <feGaussianBlur stdDeviation="2" result="effect1_foregroundBlur_0_1" />
            </filter>
            <filter id="filter1_bd_0_1" x="365" y="20.5" width="16" height="20" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
              <feFlood flood-opacity="0" result="BackgroundImageFix" />
              <feGaussianBlur in="BackgroundImageFix" stdDeviation="2" />
              <feComposite in2="SourceAlpha" operator="in" result="effect1_backgroundBlur_0_1" />
              <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha" />
              <feOffset dy="4" />
              <feGaussianBlur stdDeviation="2" />
              <feComposite in2="hardAlpha" operator="out" />
              <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0" />
              <feBlend mode="normal" in2="effect1_backgroundBlur_0_1" result="effect2_dropShadow_0_1" />
              <feBlend mode="normal" in="SourceGraphic" in2="effect2_dropShadow_0_1" result="shape" />
            </filter>
            <filter id="filter2_f_0_1" x="436" y="47" width="33" height="33" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
              <feFlood flood-opacity="0" result="BackgroundImageFix" />
              <feBlend mode="normal" in="SourceGraphic" in2="BackgroundImageFix" result="shape" />
              <feGaussianBlur stdDeviation="2" result="effect1_foregroundBlur_0_1" />
            </filter>
            <filter id="filter3_bd_0_1" x="445" y="55.5" width="16" height="20" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
              <feFlood flood-opacity="0" result="BackgroundImageFix" />
              <feGaussianBlur in="BackgroundImageFix" stdDeviation="2" />
              <feComposite in2="SourceAlpha" operator="in" result="effect1_backgroundBlur_0_1" />
              <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha" />
              <feOffset dy="4" />
              <feGaussianBlur stdDeviation="2" />
              <feComposite in2="hardAlpha" operator="out" />
              <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0" />
              <feBlend mode="normal" in2="effect1_backgroundBlur_0_1" result="effect2_dropShadow_0_1" />
              <feBlend mode="normal" in="SourceGraphic" in2="effect2_dropShadow_0_1" result="shape" />
            </filter>
            <filter id="filter4_f_0_1" x="399" y="27" width="33" height="33" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
              <feFlood flood-opacity="0" result="BackgroundImageFix" />
              <feBlend mode="normal" in="SourceGraphic" in2="BackgroundImageFix" result="shape" />
              <feGaussianBlur stdDeviation="2" result="effect1_foregroundBlur_0_1" />
            </filter>
            <filter id="filter5_bd_0_1" x="408" y="35.5" width="16" height="20" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
              <feFlood flood-opacity="0" result="BackgroundImageFix" />
              <feGaussianBlur in="BackgroundImageFix" stdDeviation="2" />
              <feComposite in2="SourceAlpha" operator="in" result="effect1_backgroundBlur_0_1" />
              <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha" />
              <feOffset dy="4" />
              <feGaussianBlur stdDeviation="2" />
              <feComposite in2="hardAlpha" operator="out" />
              <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0" />
              <feBlend mode="normal" in2="effect1_backgroundBlur_0_1" result="effect2_dropShadow_0_1" />
              <feBlend mode="normal" in="SourceGraphic" in2="effect2_dropShadow_0_1" result="shape" />
            </filter>
            <filter id="filter6_f_0_1" x="10" y="339" width="33" height="33" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
              <feFlood flood-opacity="0" result="BackgroundImageFix" />
              <feBlend mode="normal" in="SourceGraphic" in2="BackgroundImageFix" result="shape" />
              <feGaussianBlur stdDeviation="2" result="effect1_foregroundBlur_0_1" />
            </filter>
            <filter id="filter7_bd_0_1" x="19" y="347.5" width="16" height="20" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
              <feFlood flood-opacity="0" result="BackgroundImageFix" />
              <feGaussianBlur in="BackgroundImageFix" stdDeviation="2" />
              <feComposite in2="SourceAlpha" operator="in" result="effect1_backgroundBlur_0_1" />
              <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha" />
              <feOffset dy="4" />
              <feGaussianBlur stdDeviation="2" />
              <feComposite in2="hardAlpha" operator="out" />
              <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0" />
              <feBlend mode="normal" in2="effect1_backgroundBlur_0_1" result="effect2_dropShadow_0_1" />
              <feBlend mode="normal" in="SourceGraphic" in2="effect2_dropShadow_0_1" result="shape" />
            </filter>
            <filter id="filter8_f_0_1" x="548" y="183" width="33" height="33" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
              <feFlood flood-opacity="0" result="BackgroundImageFix" />
              <feBlend mode="normal" in="SourceGraphic" in2="BackgroundImageFix" result="shape" />
              <feGaussianBlur stdDeviation="2" result="effect1_foregroundBlur_0_1" />
            </filter>
            <filter id="filter9_bd_0_1" x="557" y="191.5" width="16" height="20" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
              <feFlood flood-opacity="0" result="BackgroundImageFix" />
              <feGaussianBlur in="BackgroundImageFix" stdDeviation="2" />
              <feComposite in2="SourceAlpha" operator="in" result="effect1_backgroundBlur_0_1" />
              <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha" />
              <feOffset dy="4" />
              <feGaussianBlur stdDeviation="2" />
              <feComposite in2="hardAlpha" operator="out" />
              <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0" />
              <feBlend mode="normal" in2="effect1_backgroundBlur_0_1" result="effect2_dropShadow_0_1" />
              <feBlend mode="normal" in="SourceGraphic" in2="effect2_dropShadow_0_1" result="shape" />
            </filter>
            <filter id="filter10_f_0_1" x="20" y="379" width="33" height="33" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
              <feFlood flood-opacity="0" result="BackgroundImageFix" />
              <feBlend mode="normal" in="SourceGraphic" in2="BackgroundImageFix" result="shape" />
              <feGaussianBlur stdDeviation="2" result="effect1_foregroundBlur_0_1" />
            </filter>
            <filter id="filter11_bd_0_1" x="29" y="387.5" width="16" height="20" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
              <feFlood flood-opacity="0" result="BackgroundImageFix" />
              <feGaussianBlur in="BackgroundImageFix" stdDeviation="2" />
              <feComposite in2="SourceAlpha" operator="in" result="effect1_backgroundBlur_0_1" />
              <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha" />
              <feOffset dy="4" />
              <feGaussianBlur stdDeviation="2" />
              <feComposite in2="hardAlpha" operator="out" />
              <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0" />
              <feBlend mode="normal" in2="effect1_backgroundBlur_0_1" result="effect2_dropShadow_0_1" />
              <feBlend mode="normal" in="SourceGraphic" in2="effect2_dropShadow_0_1" result="shape" />
            </filter>
            <filter id="filter12_f_0_1" x="133" y="522" width="33" height="33" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
              <feFlood flood-opacity="0" result="BackgroundImageFix" />
              <feBlend mode="normal" in="SourceGraphic" in2="BackgroundImageFix" result="shape" />
              <feGaussianBlur stdDeviation="2" result="effect1_foregroundBlur_0_1" />
            </filter>
            <filter id="filter13_bd_0_1" x="142" y="530.5" width="16" height="20" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
              <feFlood flood-opacity="0" result="BackgroundImageFix" />
              <feGaussianBlur in="BackgroundImageFix" stdDeviation="2" />
              <feComposite in2="SourceAlpha" operator="in" result="effect1_backgroundBlur_0_1" />
              <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha" />
              <feOffset dy="4" />
              <feGaussianBlur stdDeviation="2" />
              <feComposite in2="hardAlpha" operator="out" />
              <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0" />
              <feBlend mode="normal" in2="effect1_backgroundBlur_0_1" result="effect2_dropShadow_0_1" />
              <feBlend mode="normal" in="SourceGraphic" in2="effect2_dropShadow_0_1" result="shape" />
            </filter>
            <filter id="filter14_f_0_1" x="561" y="227" width="33" height="33" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
              <feFlood flood-opacity="0" result="BackgroundImageFix" />
              <feBlend mode="normal" in="SourceGraphic" in2="BackgroundImageFix" result="shape" />
              <feGaussianBlur stdDeviation="2" result="effect1_foregroundBlur_0_1" />
            </filter>
            <filter id="filter15_bd_0_1" x="570" y="235.5" width="16" height="20" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
              <feFlood flood-opacity="0" result="BackgroundImageFix" />
              <feGaussianBlur in="BackgroundImageFix" stdDeviation="2" />
              <feComposite in2="SourceAlpha" operator="in" result="effect1_backgroundBlur_0_1" />
              <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha" />
              <feOffset dy="4" />
              <feGaussianBlur stdDeviation="2" />
              <feComposite in2="hardAlpha" operator="out" />
              <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0" />
              <feBlend mode="normal" in2="effect1_backgroundBlur_0_1" result="effect2_dropShadow_0_1" />
              <feBlend mode="normal" in="SourceGraphic" in2="effect2_dropShadow_0_1" result="shape" />
            </filter>
            <filter id="filter16_f_0_1" x="472" y="75" width="33" height="33" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
              <feFlood flood-opacity="0" result="BackgroundImageFix" />
              <feBlend mode="normal" in="SourceGraphic" in2="BackgroundImageFix" result="shape" />
              <feGaussianBlur stdDeviation="2" result="effect1_foregroundBlur_0_1" />
            </filter>
            <filter id="filter17_bd_0_1" x="481" y="83.5" width="16" height="20" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
              <feFlood flood-opacity="0" result="BackgroundImageFix" />
              <feGaussianBlur in="BackgroundImageFix" stdDeviation="2" />
              <feComposite in2="SourceAlpha" operator="in" result="effect1_backgroundBlur_0_1" />
              <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha" />
              <feOffset dy="4" />
              <feGaussianBlur stdDeviation="2" />
              <feComposite in2="hardAlpha" operator="out" />
              <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0" />
              <feBlend mode="normal" in2="effect1_backgroundBlur_0_1" result="effect2_dropShadow_0_1" />
              <feBlend mode="normal" in="SourceGraphic" in2="effect2_dropShadow_0_1" result="shape" />
            </filter>
            <filter id="filter18_f_0_1" x="501" y="106" width="33" height="33" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
              <feFlood flood-opacity="0" result="BackgroundImageFix" />
              <feBlend mode="normal" in="SourceGraphic" in2="BackgroundImageFix" result="shape" />
              <feGaussianBlur stdDeviation="2" result="effect1_foregroundBlur_0_1" />
            </filter>
            <filter id="filter19_bd_0_1" x="510" y="114.5" width="16" height="20" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
              <feFlood flood-opacity="0" result="BackgroundImageFix" />
              <feGaussianBlur in="BackgroundImageFix" stdDeviation="2" />
              <feComposite in2="SourceAlpha" operator="in" result="effect1_backgroundBlur_0_1" />
              <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha" />
              <feOffset dy="4" />
              <feGaussianBlur stdDeviation="2" />
              <feComposite in2="hardAlpha" operator="out" />
              <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0" />
              <feBlend mode="normal" in2="effect1_backgroundBlur_0_1" result="effect2_dropShadow_0_1" />
              <feBlend mode="normal" in="SourceGraphic" in2="effect2_dropShadow_0_1" result="shape" />
            </filter>
            <filter id="filter20_f_0_1" x="528" y="143" width="33" height="33" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
              <feFlood flood-opacity="0" result="BackgroundImageFix" />
              <feBlend mode="normal" in="SourceGraphic" in2="BackgroundImageFix" result="shape" />
              <feGaussianBlur stdDeviation="2" result="effect1_foregroundBlur_0_1" />
            </filter>
            <filter id="filter21_bd_0_1" x="537" y="151.5" width="16" height="20" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
              <feFlood flood-opacity="0" result="BackgroundImageFix" />
              <feGaussianBlur in="BackgroundImageFix" stdDeviation="2" />
              <feComposite in2="SourceAlpha" operator="in" result="effect1_backgroundBlur_0_1" />
              <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha" />
              <feOffset dy="4" />
              <feGaussianBlur stdDeviation="2" />
              <feComposite in2="hardAlpha" operator="out" />
              <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0" />
              <feBlend mode="normal" in2="effect1_backgroundBlur_0_1" result="effect2_dropShadow_0_1" />
              <feBlend mode="normal" in="SourceGraphic" in2="effect2_dropShadow_0_1" result="shape" />
            </filter>
            <filter id="filter22_f_0_1" x="566" y="270" width="33" height="33" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
              <feFlood flood-opacity="0" result="BackgroundImageFix" />
              <feBlend mode="normal" in="SourceGraphic" in2="BackgroundImageFix" result="shape" />
              <feGaussianBlur stdDeviation="2" result="effect1_foregroundBlur_0_1" />
            </filter>
            <filter id="filter23_bd_0_1" x="575" y="278.5" width="16" height="20" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
              <feFlood flood-opacity="0" result="BackgroundImageFix" />
              <feGaussianBlur in="BackgroundImageFix" stdDeviation="2" />
              <feComposite in2="SourceAlpha" operator="in" result="effect1_backgroundBlur_0_1" />
              <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha" />
              <feOffset dy="4" />
              <feGaussianBlur stdDeviation="2" />
              <feComposite in2="hardAlpha" operator="out" />
              <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0" />
              <feBlend mode="normal" in2="effect1_backgroundBlur_0_1" result="effect2_dropShadow_0_1" />
              <feBlend mode="normal" in="SourceGraphic" in2="effect2_dropShadow_0_1" result="shape" />
            </filter>
            <filter id="filter24_f_0_1" x="566" y="315" width="33" height="33" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
              <feFlood flood-opacity="0" result="BackgroundImageFix" />
              <feBlend mode="normal" in="SourceGraphic" in2="BackgroundImageFix" result="shape" />
              <feGaussianBlur stdDeviation="2" result="effect1_foregroundBlur_0_1" />
            </filter>
            <filter id="filter25_bd_0_1" x="575" y="323.5" width="16" height="20" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
              <feFlood flood-opacity="0" result="BackgroundImageFix" />
              <feGaussianBlur in="BackgroundImageFix" stdDeviation="2" />
              <feComposite in2="SourceAlpha" operator="in" result="effect1_backgroundBlur_0_1" />
              <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha" />
              <feOffset dy="4" />
              <feGaussianBlur stdDeviation="2" />
              <feComposite in2="hardAlpha" operator="out" />
              <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0" />
              <feBlend mode="normal" in2="effect1_backgroundBlur_0_1" result="effect2_dropShadow_0_1" />
              <feBlend mode="normal" in="SourceGraphic" in2="effect2_dropShadow_0_1" result="shape" />
            </filter>
            <filter id="filter26_f_0_1" x="559" y="355" width="33" height="33" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
              <feFlood flood-opacity="0" result="BackgroundImageFix" />
              <feBlend mode="normal" in="SourceGraphic" in2="BackgroundImageFix" result="shape" />
              <feGaussianBlur stdDeviation="2" result="effect1_foregroundBlur_0_1" />
            </filter>
            <filter id="filter27_bd_0_1" x="568" y="363.5" width="16" height="20" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
              <feFlood flood-opacity="0" result="BackgroundImageFix" />
              <feGaussianBlur in="BackgroundImageFix" stdDeviation="2" />
              <feComposite in2="SourceAlpha" operator="in" result="effect1_backgroundBlur_0_1" />
              <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha" />
              <feOffset dy="4" />
              <feGaussianBlur stdDeviation="2" />
              <feComposite in2="hardAlpha" operator="out" />
              <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0" />
              <feBlend mode="normal" in2="effect1_backgroundBlur_0_1" result="effect2_dropShadow_0_1" />
              <feBlend mode="normal" in="SourceGraphic" in2="effect2_dropShadow_0_1" result="shape" />
            </filter>
            <filter id="filter28_f_0_1" x="546" y="396" width="33" height="33" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
              <feFlood flood-opacity="0" result="BackgroundImageFix" />
              <feBlend mode="normal" in="SourceGraphic" in2="BackgroundImageFix" result="shape" />
              <feGaussianBlur stdDeviation="2" result="effect1_foregroundBlur_0_1" />
            </filter>
            <filter id="filter29_bd_0_1" x="555" y="404.5" width="16" height="20" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
              <feFlood flood-opacity="0" result="BackgroundImageFix" />
              <feGaussianBlur in="BackgroundImageFix" stdDeviation="2" />
              <feComposite in2="SourceAlpha" operator="in" result="effect1_backgroundBlur_0_1" />
              <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha" />
              <feOffset dy="4" />
              <feGaussianBlur stdDeviation="2" />
              <feComposite in2="hardAlpha" operator="out" />
              <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0" />
              <feBlend mode="normal" in2="effect1_backgroundBlur_0_1" result="effect2_dropShadow_0_1" />
              <feBlend mode="normal" in="SourceGraphic" in2="effect2_dropShadow_0_1" result="shape" />
            </filter>
            <filter id="filter30_f_0_1" x="495" y="475" width="33" height="33" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
              <feFlood flood-opacity="0" result="BackgroundImageFix" />
              <feBlend mode="normal" in="SourceGraphic" in2="BackgroundImageFix" result="shape" />
              <feGaussianBlur stdDeviation="2" result="effect1_foregroundBlur_0_1" />
            </filter>
            <filter id="filter31_bd_0_1" x="504" y="483.5" width="16" height="20" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
              <feFlood flood-opacity="0" result="BackgroundImageFix" />
              <feGaussianBlur in="BackgroundImageFix" stdDeviation="2" />
              <feComposite in2="SourceAlpha" operator="in" result="effect1_backgroundBlur_0_1" />
              <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha" />
              <feOffset dy="4" />
              <feGaussianBlur stdDeviation="2" />
              <feComposite in2="hardAlpha" operator="out" />
              <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0" />
              <feBlend mode="normal" in2="effect1_backgroundBlur_0_1" result="effect2_dropShadow_0_1" />
              <feBlend mode="normal" in="SourceGraphic" in2="effect2_dropShadow_0_1" result="shape" />
            </filter>
            <filter id="filter32_f_0_1" x="464" y="506" width="33" height="33" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
              <feFlood flood-opacity="0" result="BackgroundImageFix" />
              <feBlend mode="normal" in="SourceGraphic" in2="BackgroundImageFix" result="shape" />
              <feGaussianBlur stdDeviation="2" result="effect1_foregroundBlur_0_1" />
            </filter>
            <filter id="filter33_bd_0_1" x="473" y="514.5" width="16" height="20" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
              <feFlood flood-opacity="0" result="BackgroundImageFix" />
              <feGaussianBlur in="BackgroundImageFix" stdDeviation="2" />
              <feComposite in2="SourceAlpha" operator="in" result="effect1_backgroundBlur_0_1" />
              <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha" />
              <feOffset dy="4" />
              <feGaussianBlur stdDeviation="2" />
              <feComposite in2="hardAlpha" operator="out" />
              <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0" />
              <feBlend mode="normal" in2="effect1_backgroundBlur_0_1" result="effect2_dropShadow_0_1" />
              <feBlend mode="normal" in="SourceGraphic" in2="effect2_dropShadow_0_1" result="shape" />
            </filter>
            <filter id="filter34_f_0_1" x="426" y="531" width="33" height="33" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
              <feFlood flood-opacity="0" result="BackgroundImageFix" />
              <feBlend mode="normal" in="SourceGraphic" in2="BackgroundImageFix" result="shape" />
              <feGaussianBlur stdDeviation="2" result="effect1_foregroundBlur_0_1" />
            </filter>
            <filter id="filter35_bd_0_1" x="435" y="539.5" width="16" height="20" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
              <feFlood flood-opacity="0" result="BackgroundImageFix" />
              <feGaussianBlur in="BackgroundImageFix" stdDeviation="2" />
              <feComposite in2="SourceAlpha" operator="in" result="effect1_backgroundBlur_0_1" />
              <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha" />
              <feOffset dy="4" />
              <feGaussianBlur stdDeviation="2" />
              <feComposite in2="hardAlpha" operator="out" />
              <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0" />
              <feBlend mode="normal" in2="effect1_backgroundBlur_0_1" result="effect2_dropShadow_0_1" />
              <feBlend mode="normal" in="SourceGraphic" in2="effect2_dropShadow_0_1" result="shape" />
            </filter>
            <filter id="filter36_f_0_1" x="388" y="549" width="33" height="33" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
              <feFlood flood-opacity="0" result="BackgroundImageFix" />
              <feBlend mode="normal" in="SourceGraphic" in2="BackgroundImageFix" result="shape" />
              <feGaussianBlur stdDeviation="2" result="effect1_foregroundBlur_0_1" />
            </filter>
            <filter id="filter37_bd_0_1" x="397" y="557.5" width="16" height="20" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
              <feFlood flood-opacity="0" result="BackgroundImageFix" />
              <feGaussianBlur in="BackgroundImageFix" stdDeviation="2" />
              <feComposite in2="SourceAlpha" operator="in" result="effect1_backgroundBlur_0_1" />
              <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha" />
              <feOffset dy="4" />
              <feGaussianBlur stdDeviation="2" />
              <feComposite in2="hardAlpha" operator="out" />
              <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0" />
              <feBlend mode="normal" in2="effect1_backgroundBlur_0_1" result="effect2_dropShadow_0_1" />
              <feBlend mode="normal" in="SourceGraphic" in2="effect2_dropShadow_0_1" result="shape" />
            </filter>
            <filter id="filter38_f_0_1" x="49" y="134" width="33" height="33" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
              <feFlood flood-opacity="0" result="BackgroundImageFix" />
              <feBlend mode="normal" in="SourceGraphic" in2="BackgroundImageFix" result="shape" />
              <feGaussianBlur stdDeviation="2" result="effect1_foregroundBlur_0_1" />
            </filter>
            <filter id="filter39_bd_0_1" x="58" y="142.5" width="16" height="20" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
              <feFlood flood-opacity="0" result="BackgroundImageFix" />
              <feGaussianBlur in="BackgroundImageFix" stdDeviation="2" />
              <feComposite in2="SourceAlpha" operator="in" result="effect1_backgroundBlur_0_1" />
              <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha" />
              <feOffset dy="4" />
              <feGaussianBlur stdDeviation="2" />
              <feComposite in2="hardAlpha" operator="out" />
              <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0" />
              <feBlend mode="normal" in2="effect1_backgroundBlur_0_1" result="effect2_dropShadow_0_1" />
              <feBlend mode="normal" in="SourceGraphic" in2="effect2_dropShadow_0_1" result="shape" />
            </filter>
            <filter id="filter40_f_0_1" x="257" y="566" width="33" height="33" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
              <feFlood flood-opacity="0" result="BackgroundImageFix" />
              <feBlend mode="normal" in="SourceGraphic" in2="BackgroundImageFix" result="shape" />
              <feGaussianBlur stdDeviation="2" result="effect1_foregroundBlur_0_1" />
            </filter>
            <filter id="filter41_bd_0_1" x="266" y="574.5" width="16" height="20" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
              <feFlood flood-opacity="0" result="BackgroundImageFix" />
              <feGaussianBlur in="BackgroundImageFix" stdDeviation="2" />
              <feComposite in2="SourceAlpha" operator="in" result="effect1_backgroundBlur_0_1" />
              <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha" />
              <feOffset dy="4" />
              <feGaussianBlur stdDeviation="2" />
              <feComposite in2="hardAlpha" operator="out" />
              <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0" />
              <feBlend mode="normal" in2="effect1_backgroundBlur_0_1" result="effect2_dropShadow_0_1" />
              <feBlend mode="normal" in="SourceGraphic" in2="effect2_dropShadow_0_1" result="shape" />
            </filter>
            <filter id="filter42_f_0_1" x="215" y="558" width="33" height="33" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
              <feFlood flood-opacity="0" result="BackgroundImageFix" />
              <feBlend mode="normal" in="SourceGraphic" in2="BackgroundImageFix" result="shape" />
              <feGaussianBlur stdDeviation="2" result="effect1_foregroundBlur_0_1" />
            </filter>
            <filter id="filter43_bd_0_1" x="224" y="566.5" width="16" height="20" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
              <feFlood flood-opacity="0" result="BackgroundImageFix" />
              <feGaussianBlur in="BackgroundImageFix" stdDeviation="2" />
              <feComposite in2="SourceAlpha" operator="in" result="effect1_backgroundBlur_0_1" />
              <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha" />
              <feOffset dy="4" />
              <feGaussianBlur stdDeviation="2" />
              <feComposite in2="hardAlpha" operator="out" />
              <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0" />
              <feBlend mode="normal" in2="effect1_backgroundBlur_0_1" result="effect2_dropShadow_0_1" />
              <feBlend mode="normal" in="SourceGraphic" in2="effect2_dropShadow_0_1" result="shape" />
            </filter>
            <filter id="filter44_f_0_1" x="170" y="543" width="33" height="33" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
              <feFlood flood-opacity="0" result="BackgroundImageFix" />
              <feBlend mode="normal" in="SourceGraphic" in2="BackgroundImageFix" result="shape" />
              <feGaussianBlur stdDeviation="2" result="effect1_foregroundBlur_0_1" />
            </filter>
            <filter id="filter45_bd_0_1" x="179" y="551.5" width="16" height="20" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
              <feFlood flood-opacity="0" result="BackgroundImageFix" />
              <feGaussianBlur in="BackgroundImageFix" stdDeviation="2" />
              <feComposite in2="SourceAlpha" operator="in" result="effect1_backgroundBlur_0_1" />
              <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha" />
              <feOffset dy="4" />
              <feGaussianBlur stdDeviation="2" />
              <feComposite in2="hardAlpha" operator="out" />
              <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0" />
              <feBlend mode="normal" in2="effect1_backgroundBlur_0_1" result="effect2_dropShadow_0_1" />
              <feBlend mode="normal" in="SourceGraphic" in2="effect2_dropShadow_0_1" result="shape" />
            </filter>
            <filter id="filter46_f_0_1" x="301" y="566" width="33" height="33" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
              <feFlood flood-opacity="0" result="BackgroundImageFix" />
              <feBlend mode="normal" in="SourceGraphic" in2="BackgroundImageFix" result="shape" />
              <feGaussianBlur stdDeviation="2" result="effect1_foregroundBlur_0_1" />
            </filter>
            <filter id="filter47_bd_0_1" x="310" y="574.5" width="16" height="20" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
              <feFlood flood-opacity="0" result="BackgroundImageFix" />
              <feGaussianBlur in="BackgroundImageFix" stdDeviation="2" />
              <feComposite in2="SourceAlpha" operator="in" result="effect1_backgroundBlur_0_1" />
              <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha" />
              <feOffset dy="4" />
              <feGaussianBlur stdDeviation="2" />
              <feComposite in2="hardAlpha" operator="out" />
              <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0" />
              <feBlend mode="normal" in2="effect1_backgroundBlur_0_1" result="effect2_dropShadow_0_1" />
              <feBlend mode="normal" in="SourceGraphic" in2="effect2_dropShadow_0_1" result="shape" />
            </filter>
            <filter id="filter48_f_0_1" x="97" y="495" width="33" height="33" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
              <feFlood flood-opacity="0" result="BackgroundImageFix" />
              <feBlend mode="normal" in="SourceGraphic" in2="BackgroundImageFix" result="shape" />
              <feGaussianBlur stdDeviation="2" result="effect1_foregroundBlur_0_1" />
            </filter>
            <filter id="filter49_bd_0_1" x="106" y="503.5" width="16" height="20" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
              <feFlood flood-opacity="0" result="BackgroundImageFix" />
              <feGaussianBlur in="BackgroundImageFix" stdDeviation="2" />
              <feComposite in2="SourceAlpha" operator="in" result="effect1_backgroundBlur_0_1" />
              <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha" />
              <feOffset dy="4" />
              <feGaussianBlur stdDeviation="2" />
              <feComposite in2="hardAlpha" operator="out" />
              <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0" />
              <feBlend mode="normal" in2="effect1_backgroundBlur_0_1" result="effect2_dropShadow_0_1" />
              <feBlend mode="normal" in="SourceGraphic" in2="effect2_dropShadow_0_1" result="shape" />
            </filter>
            <filter id="filter50_f_0_1" x="37" y="419" width="33" height="33" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
              <feFlood flood-opacity="0" result="BackgroundImageFix" />
              <feBlend mode="normal" in="SourceGraphic" in2="BackgroundImageFix" result="shape" />
              <feGaussianBlur stdDeviation="2" result="effect1_foregroundBlur_0_1" />
            </filter>
            <filter id="filter51_bd_0_1" x="46" y="427.5" width="16" height="20" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
              <feFlood flood-opacity="0" result="BackgroundImageFix" />
              <feGaussianBlur in="BackgroundImageFix" stdDeviation="2" />
              <feComposite in2="SourceAlpha" operator="in" result="effect1_backgroundBlur_0_1" />
              <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha" />
              <feOffset dy="4" />
              <feGaussianBlur stdDeviation="2" />
              <feComposite in2="hardAlpha" operator="out" />
              <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0" />
              <feBlend mode="normal" in2="effect1_backgroundBlur_0_1" result="effect2_dropShadow_0_1" />
              <feBlend mode="normal" in="SourceGraphic" in2="effect2_dropShadow_0_1" result="shape" />
            </filter>
            <filter id="filter52_f_0_1" x="67" y="463" width="33" height="33" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
              <feFlood flood-opacity="0" result="BackgroundImageFix" />
              <feBlend mode="normal" in="SourceGraphic" in2="BackgroundImageFix" result="shape" />
              <feGaussianBlur stdDeviation="2" result="effect1_foregroundBlur_0_1" />
            </filter>
            <filter id="filter53_bd_0_1" x="76" y="471.5" width="16" height="20" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
              <feFlood flood-opacity="0" result="BackgroundImageFix" />
              <feGaussianBlur in="BackgroundImageFix" stdDeviation="2" />
              <feComposite in2="SourceAlpha" operator="in" result="effect1_backgroundBlur_0_1" />
              <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha" />
              <feOffset dy="4" />
              <feGaussianBlur stdDeviation="2" />
              <feComposite in2="hardAlpha" operator="out" />
              <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0" />
              <feBlend mode="normal" in2="effect1_backgroundBlur_0_1" result="effect2_dropShadow_0_1" />
              <feBlend mode="normal" in="SourceGraphic" in2="effect2_dropShadow_0_1" result="shape" />
            </filter>
            <filter id="filter54_f_0_1" x="7" y="256" width="33" height="33" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
              <feFlood flood-opacity="0" result="BackgroundImageFix" />
              <feBlend mode="normal" in="SourceGraphic" in2="BackgroundImageFix" result="shape" />
              <feGaussianBlur stdDeviation="2" result="effect1_foregroundBlur_0_1" />
            </filter>
            <filter id="filter55_bd_0_1" x="16" y="264.5" width="16" height="20" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
              <feFlood flood-opacity="0" result="BackgroundImageFix" />
              <feGaussianBlur in="BackgroundImageFix" stdDeviation="2" />
              <feComposite in2="SourceAlpha" operator="in" result="effect1_backgroundBlur_0_1" />
              <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha" />
              <feOffset dy="4" />
              <feGaussianBlur stdDeviation="2" />
              <feComposite in2="hardAlpha" operator="out" />
              <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0" />
              <feBlend mode="normal" in2="effect1_backgroundBlur_0_1" result="effect2_dropShadow_0_1" />
              <feBlend mode="normal" in="SourceGraphic" in2="effect2_dropShadow_0_1" result="shape" />
            </filter>
            <filter id="filter56_f_0_1" x="346" y="561" width="33" height="33" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
              <feFlood flood-opacity="0" result="BackgroundImageFix" />
              <feBlend mode="normal" in="SourceGraphic" in2="BackgroundImageFix" result="shape" />
              <feGaussianBlur stdDeviation="2" result="effect1_foregroundBlur_0_1" />
            </filter>
            <filter id="filter57_bd_0_1" x="355" y="569.5" width="16" height="20" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
              <feFlood flood-opacity="0" result="BackgroundImageFix" />
              <feGaussianBlur in="BackgroundImageFix" stdDeviation="2" />
              <feComposite in2="SourceAlpha" operator="in" result="effect1_backgroundBlur_0_1" />
              <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha" />
              <feOffset dy="4" />
              <feGaussianBlur stdDeviation="2" />
              <feComposite in2="hardAlpha" operator="out" />
              <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0" />
              <feBlend mode="normal" in2="effect1_backgroundBlur_0_1" result="effect2_dropShadow_0_1" />
              <feBlend mode="normal" in="SourceGraphic" in2="effect2_dropShadow_0_1" result="shape" />
            </filter>
            <filter id="filter58_f_0_1" x="4" y="298" width="33" height="33" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
              <feFlood flood-opacity="0" result="BackgroundImageFix" />
              <feBlend mode="normal" in="SourceGraphic" in2="BackgroundImageFix" result="shape" />
              <feGaussianBlur stdDeviation="2" result="effect1_foregroundBlur_0_1" />
            </filter>
            <filter id="filter59_bd_0_1" x="13" y="306.5" width="16" height="20" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
              <feFlood flood-opacity="0" result="BackgroundImageFix" />
              <feGaussianBlur in="BackgroundImageFix" stdDeviation="2" />
              <feComposite in2="SourceAlpha" operator="in" result="effect1_backgroundBlur_0_1" />
              <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha" />
              <feOffset dy="4" />
              <feGaussianBlur stdDeviation="2" />
              <feComposite in2="hardAlpha" operator="out" />
              <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0" />
              <feBlend mode="normal" in2="effect1_backgroundBlur_0_1" result="effect2_dropShadow_0_1" />
              <feBlend mode="normal" in="SourceGraphic" in2="effect2_dropShadow_0_1" result="shape" />
            </filter>
            <filter id="filter60_f_0_1" x="29" y="172" width="33" height="33" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
              <feFlood flood-opacity="0" result="BackgroundImageFix" />
              <feBlend mode="normal" in="SourceGraphic" in2="BackgroundImageFix" result="shape" />
              <feGaussianBlur stdDeviation="2" result="effect1_foregroundBlur_0_1" />
            </filter>
            <filter id="filter61_bd_0_1" x="38" y="180.5" width="16" height="20" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
              <feFlood flood-opacity="0" result="BackgroundImageFix" />
              <feGaussianBlur in="BackgroundImageFix" stdDeviation="2" />
              <feComposite in2="SourceAlpha" operator="in" result="effect1_backgroundBlur_0_1" />
              <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha" />
              <feOffset dy="4" />
              <feGaussianBlur stdDeviation="2" />
              <feComposite in2="hardAlpha" operator="out" />
              <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0" />
              <feBlend mode="normal" in2="effect1_backgroundBlur_0_1" result="effect2_dropShadow_0_1" />
              <feBlend mode="normal" in="SourceGraphic" in2="effect2_dropShadow_0_1" result="shape" />
            </filter>
            <filter id="filter62_f_0_1" x="77" y="98" width="33" height="33" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
              <feFlood flood-opacity="0" result="BackgroundImageFix" />
              <feBlend mode="normal" in="SourceGraphic" in2="BackgroundImageFix" result="shape" />
              <feGaussianBlur stdDeviation="2" result="effect1_foregroundBlur_0_1" />
            </filter>
            <filter id="filter63_bd_0_1" x="86" y="106.5" width="16" height="20" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
              <feFlood flood-opacity="0" result="BackgroundImageFix" />
              <feGaussianBlur in="BackgroundImageFix" stdDeviation="2" />
              <feComposite in2="SourceAlpha" operator="in" result="effect1_backgroundBlur_0_1" />
              <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha" />
              <feOffset dy="4" />
              <feGaussianBlur stdDeviation="2" />
              <feComposite in2="hardAlpha" operator="out" />
              <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0" />
              <feBlend mode="normal" in2="effect1_backgroundBlur_0_1" result="effect2_dropShadow_0_1" />
              <feBlend mode="normal" in="SourceGraphic" in2="effect2_dropShadow_0_1" result="shape" />
            </filter>
            <filter id="filter64_f_0_1" x="110" y="66" width="33" height="33" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
              <feFlood flood-opacity="0" result="BackgroundImageFix" />
              <feBlend mode="normal" in="SourceGraphic" in2="BackgroundImageFix" result="shape" />
              <feGaussianBlur stdDeviation="2" result="effect1_foregroundBlur_0_1" />
            </filter>
            <filter id="filter65_bd_0_1" x="119" y="74.5" width="16" height="20" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
              <feFlood flood-opacity="0" result="BackgroundImageFix" />
              <feGaussianBlur in="BackgroundImageFix" stdDeviation="2" />
              <feComposite in2="SourceAlpha" operator="in" result="effect1_backgroundBlur_0_1" />
              <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha" />
              <feOffset dy="4" />
              <feGaussianBlur stdDeviation="2" />
              <feComposite in2="hardAlpha" operator="out" />
              <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0" />
              <feBlend mode="normal" in2="effect1_backgroundBlur_0_1" result="effect2_dropShadow_0_1" />
              <feBlend mode="normal" in="SourceGraphic" in2="effect2_dropShadow_0_1" result="shape" />
            </filter>
            <filter id="filter66_f_0_1" x="147" y="41" width="33" height="33" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
              <feFlood flood-opacity="0" result="BackgroundImageFix" />
              <feBlend mode="normal" in="SourceGraphic" in2="BackgroundImageFix" result="shape" />
              <feGaussianBlur stdDeviation="2" result="effect1_foregroundBlur_0_1" />
            </filter>
            <filter id="filter67_bd_0_1" x="156" y="49.5" width="16" height="20" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
              <feFlood flood-opacity="0" result="BackgroundImageFix" />
              <feGaussianBlur in="BackgroundImageFix" stdDeviation="2" />
              <feComposite in2="SourceAlpha" operator="in" result="effect1_backgroundBlur_0_1" />
              <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha" />
              <feOffset dy="4" />
              <feGaussianBlur stdDeviation="2" />
              <feComposite in2="hardAlpha" operator="out" />
              <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0" />
              <feBlend mode="normal" in2="effect1_backgroundBlur_0_1" result="effect2_dropShadow_0_1" />
              <feBlend mode="normal" in="SourceGraphic" in2="effect2_dropShadow_0_1" result="shape" />
            </filter>
            <filter id="filter68_f_0_1" x="187" y="22" width="33" height="33" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
              <feFlood flood-opacity="0" result="BackgroundImageFix" />
              <feBlend mode="normal" in="SourceGraphic" in2="BackgroundImageFix" result="shape" />
              <feGaussianBlur stdDeviation="2" result="effect1_foregroundBlur_0_1" />
            </filter>
            <filter id="filter69_bd_0_1" x="196" y="30.5" width="16" height="20" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
              <feFlood flood-opacity="0" result="BackgroundImageFix" />
              <feGaussianBlur in="BackgroundImageFix" stdDeviation="2" />
              <feComposite in2="SourceAlpha" operator="in" result="effect1_backgroundBlur_0_1" />
              <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha" />
              <feOffset dy="4" />
              <feGaussianBlur stdDeviation="2" />
              <feComposite in2="hardAlpha" operator="out" />
              <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0" />
              <feBlend mode="normal" in2="effect1_backgroundBlur_0_1" result="effect2_dropShadow_0_1" />
              <feBlend mode="normal" in="SourceGraphic" in2="effect2_dropShadow_0_1" result="shape" />
            </filter>
            <filter id="filter70_f_0_1" x="226" y="11" width="33" height="33" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
              <feFlood flood-opacity="0" result="BackgroundImageFix" />
              <feBlend mode="normal" in="SourceGraphic" in2="BackgroundImageFix" result="shape" />
              <feGaussianBlur stdDeviation="2" result="effect1_foregroundBlur_0_1" />
            </filter>
            <filter id="filter71_bd_0_1" x="235" y="19.5" width="16" height="20" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
              <feFlood flood-opacity="0" result="BackgroundImageFix" />
              <feGaussianBlur in="BackgroundImageFix" stdDeviation="2" />
              <feComposite in2="SourceAlpha" operator="in" result="effect1_backgroundBlur_0_1" />
              <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha" />
              <feOffset dy="4" />
              <feGaussianBlur stdDeviation="2" />
              <feComposite in2="hardAlpha" operator="out" />
              <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0" />
              <feBlend mode="normal" in2="effect1_backgroundBlur_0_1" result="effect2_dropShadow_0_1" />
              <feBlend mode="normal" in="SourceGraphic" in2="effect2_dropShadow_0_1" result="shape" />
            </filter>
            <filter id="filter72_f_0_1" x="14" y="213" width="33" height="33" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
              <feFlood flood-opacity="0" result="BackgroundImageFix" />
              <feBlend mode="normal" in="SourceGraphic" in2="BackgroundImageFix" result="shape" />
              <feGaussianBlur stdDeviation="2" result="effect1_foregroundBlur_0_1" />
            </filter>
            <filter id="filter73_bd_0_1" x="23" y="221.5" width="16" height="20" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
              <feFlood flood-opacity="0" result="BackgroundImageFix" />
              <feGaussianBlur in="BackgroundImageFix" stdDeviation="2" />
              <feComposite in2="SourceAlpha" operator="in" result="effect1_backgroundBlur_0_1" />
              <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha" />
              <feOffset dy="4" />
              <feGaussianBlur stdDeviation="2" />
              <feComposite in2="hardAlpha" operator="out" />
              <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0" />
              <feBlend mode="normal" in2="effect1_backgroundBlur_0_1" result="effect2_dropShadow_0_1" />
              <feBlend mode="normal" in="SourceGraphic" in2="effect2_dropShadow_0_1" result="shape" />
            </filter>
            <filter id="filter74_f_0_1" x="525" y="434" width="33" height="33" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
              <feFlood flood-opacity="0" result="BackgroundImageFix" />
              <feBlend mode="normal" in="SourceGraphic" in2="BackgroundImageFix" result="shape" />
              <feGaussianBlur stdDeviation="2" result="effect1_foregroundBlur_0_1" />
            </filter>
            <filter id="filter75_bd_0_1" x="534" y="442.5" width="16" height="20" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
              <feFlood flood-opacity="0" result="BackgroundImageFix" />
              <feGaussianBlur in="BackgroundImageFix" stdDeviation="2" />
              <feComposite in2="SourceAlpha" operator="in" result="effect1_backgroundBlur_0_1" />
              <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha" />
              <feOffset dy="4" />
              <feGaussianBlur stdDeviation="2" />
              <feComposite in2="hardAlpha" operator="out" />
              <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0" />
              <feBlend mode="normal" in2="effect1_backgroundBlur_0_1" result="effect2_dropShadow_0_1" />
              <feBlend mode="normal" in="SourceGraphic" in2="effect2_dropShadow_0_1" result="shape" />
            </filter>
            <filter id="filter76_f_0_1" x="277" y="17.9809" width="51.5093" height="26.0266" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
              <feFlood flood-opacity="0" result="BackgroundImageFix" />
              <feBlend mode="normal" in="SourceGraphic" in2="BackgroundImageFix" result="shape" />
              <feGaussianBlur stdDeviation="1.5" result="effect1_foregroundBlur_0_1" />
            </filter>
          </defs>
        </svg>

        <div className="center">
          <img src={sun} alt="sun" className="sunimg" />
          <div className="">
            <img src={gifSrc} alt="gif" className="gif" />
          </div>
        </div>
        
      </div>
      <div className="stand">
        
      </div>
    </div>

  );
}

export default Wheel;
