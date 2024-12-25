import * as React from "react";
import Svg, { G, Path } from "react-native-svg";

function MovieIcon({ color, size }) {
  return (
    <Svg
      height={size}
      viewBox="-31 0 512 512"
      width={size}
      xmlns="http://www.w3.org/2000/svg"
    >
      <G fillRule="evenodd">
        <Path d="M440.59 206.676H99.418l327.7-94.93a10.018 10.018 0 005.976-4.781 9.989 9.989 0 00.847-7.606L416.793 40.16C409.941 16.516 387.926 0 363.253 0c-5.198 0-10.378.738-15.401 2.191L40.176 91.321c-14.23 4.12-26.024 13.581-33.215 26.632-7.188 13.05-8.875 28.078-4.754 42.305l16.754 57.836v238.254C18.96 487.035 43.926 512 74.609 512h120.164c5.524 0 10-4.477 10-10s-4.476-10-10-10H74.613c-19.66 0-35.652-15.992-35.652-35.652V320.262H430.589v136.086c0 19.66-15.991 35.652-35.651 35.652H274.773c-5.52 0-10 4.477-10 10s4.48 10 10 10h120.165c30.687 0 55.652-24.965 55.652-55.652V216.676c0-5.524-4.477-10-10-10zm-176.332 93.586l42.488-73.586h55.262l-42.485 73.586zm-78.36 0l42.489-73.586h55.261l-42.484 73.586zm-78.355 0l42.484-73.586h55.266l-42.488 73.586zm37.18-129.457l-71.149-68.336 53.309-15.442a9.92 9.92 0 001.312 1.543l71.149 68.336-53.309 15.442a9.951 9.951 0 00-1.312-1.543zm134-125.84L349.87 113.3l-53.308 15.441a9.742 9.742 0 00-1.313-1.543l-71.148-68.336 53.308-15.441a9.92 9.92 0 001.313 1.543zM203.457 66.77l71.148 68.332-53.308 15.445a9.742 9.742 0 00-1.313-1.543l-71.148-68.336 53.309-15.441c.378.543.816 1.062 1.312 1.543zm149.961-45.368c3.21-.93 6.52-1.402 9.836-1.402 15.824 0 29.937 10.578 34.328 25.727l14.367 49.59-40.12 11.62a10.165 10.165 0 00-1.317-1.542l-71.145-68.333zM24.48 127.602c4.61-8.372 12.16-14.434 21.262-17.07l5.875-1.704a10.17 10.17 0 001.313 1.543l71.148 68.336-88.293 25.578-14.367-49.59c-2.637-9.097-1.547-18.718 3.062-27.093zm14.48 99.074h87.974l-42.485 73.586H38.961zm303.657 73.586l42.485-73.586h45.488v73.586zm0 0" />
        <Path d="M303.922 405.113a9.997 9.997 0 00-5-8.66l-87.856-50.723a10.006 10.006 0 00-10 0 9.997 9.997 0 00-5 8.66v101.446a9.995 9.995 0 005 8.656 9.983 9.983 0 0010 0l87.856-50.719a9.997 9.997 0 005-8.66zm-87.856 33.403V371.71l57.856 33.402zm0 0M234.773 492c-5.507 0-10 4.492-10 10s4.493 10 10 10c5.512 0 10-4.492 10-10s-4.488-10-10-10zm0 0" />
      </G>
    </Svg>
  );
}

export default MovieIcon;