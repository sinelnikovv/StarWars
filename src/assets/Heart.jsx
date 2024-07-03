import React from "react";
import { ClipPath, Defs, G, Path, Svg } from "react-native-svg";

const Heart = ({ fill = "fff", stroke = "red" }) => {
  return (
    <Svg
      xmlns='http://www.w3.org/2000/svg'
      width='24'
      height='24'
      fill='none'
      viewBox='0 0 24 24'>
      <G clipPath='url(#clip0_225_12362)'>
        <Path
          stroke={stroke}
          fill={fill}
          d='M12 21a1.002 1.002 0 01-.71-.29l-7.77-7.78a5.26 5.26 0 010-7.4 5.24 5.24 0 017.4 0L12 6.61l1.08-1.08a5.24 5.24 0 017.4 0 5.26 5.26 0 010 7.4l-7.77 7.78A1 1 0 0112 21z'></Path>
      </G>
      <Defs>
        <ClipPath id='clip0_225_12362'>
          <Path fill={fill} d='M0 0H24V24H0z'></Path>
        </ClipPath>
      </Defs>
    </Svg>
  );
};

export default Heart;
