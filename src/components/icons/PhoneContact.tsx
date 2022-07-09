import React, {FC} from "react";
import {IIconProps} from "./types";
import {Icon} from "./Icon";

export const PhoneContactIcon: FC<IIconProps> = (props) => (
  <Icon baseWidth={36.579} baseHeight={36.511} {...props}>
    {(width, height, color) => (
      <svg width={width} height={height} viewBox="0 0 36.579 36.511">
        <path
          fill={color}
          d="M-360.983,215.474l-11.858-.024c0,.375.015.717-.006,1.057a2.586,2.586,0,0,1-.55,1.521,38.743,38.743,0,0,1-2.66,3.03,5.315,5.315,0,0,1-6.5.638,37.73,37.73,0,0,1-12.958-12.143,12.85,12.85,0,0,1-1.753-3.216,5.247,5.247,0,0,1,1.248-5.425,24.881,24.881,0,0,1,2.814-2.473,3.33,3.33,0,0,1,4.557.4c.912.988,1.8,2,2.653,3.041a3.528,3.528,0,0,1-.25,4.855c-.257.265-.531.516-.763.8a2.174,2.174,0,0,0,.01,2.822,20.238,20.238,0,0,0,1.556,1.572,4.931,4.931,0,0,0,.857.505c0-.376,0-.646,0-.917.006-.8,0-1.6.024-2.393a4.174,4.174,0,0,1,3.206-3.9c1.584-.427,3.155-.9,4.737-1.332.244-.067.3-.17.313-.411a2.127,2.127,0,0,0-.618-1.891,5.66,5.66,0,0,1-.75-1.24c-.072-.117-.187-.265-.3-.287a2.928,2.928,0,0,1-2.45-3.062c-.017-1.345-.019-2.692.056-4.034a7.632,7.632,0,0,1,6.439-6.885,7.62,7.62,0,0,1,8.18,4.474,7.028,7.028,0,0,1,.65,2.94c.006,1.344,0,2.69-.058,4.032a2.762,2.762,0,0,1-2.232,2.5.715.715,0,0,0-.532.43c-.312.542-.7,1.042-1.03,1.572a1.55,1.55,0,0,0-.237.592c-.04.292,0,.595-.016.891-.013.232.073.327.3.391,1.556.437,3.107.893,4.661,1.34a4.179,4.179,0,0,1,3.282,4.35q0,2.733-.011,5.465Zm-32.27-15.494c-.638.574-1.344,1.13-1.954,1.776a4.17,4.17,0,0,0-1.072,3.73,6.994,6.994,0,0,0,1.129,2.444,36.579,36.579,0,0,0,13.208,12.763,4.22,4.22,0,0,0,3.871.3c1.362-.55,2.063-1.811,3-2.765l-6.04-6.064c-.115.125-.243.279-.387.417a3.374,3.374,0,0,1-4.279.549,7.19,7.19,0,0,1-1.282-1.124,7.186,7.186,0,0,1-1.12-1.286,3.372,3.372,0,0,1,.578-4.3,3,3,0,0,1,.441-.322Zm27.048,5.912-2.889,5.168-3.126-2.612-.009,4.627-1.175,0,.009-4.607-3.107,2.576c-.083-.145-.143-.247-.2-.35q-1.252-2.264-2.5-4.528c-.083-.15-.146-.292-.372-.222-.624.194-1.264.342-1.877.564a2.707,2.707,0,0,0-1.907,2.406c-.1,1.132-.025,2.278-.028,3.522.344-.21.655-.372.932-.58a6.526,6.526,0,0,0,.615-.6,3.571,3.571,0,0,1,5.074-.145c.877.77,1.755,1.537,2.627,2.312a3.9,3.9,0,0,1,.567.59.587.587,0,0,0,.539.258c1.917,0,3.834,0,5.751.006.115,0,.23-.012.389-.021l.008-4.065,1.2,0-.008,4.055,3.507.007c0-1.769.054-3.507-.006-5.241a2.62,2.62,0,0,0-1.741-2.408C-364.657,206.311-365.427,206.133-366.205,205.892Zm-.113-11.027c.248-3.011-.684-5.419-3.331-6.882a6.112,6.112,0,0,0-6.953.463c-2.14,1.556-2.831,3.765-2.607,6.4a3.959,3.959,0,0,1,2.508-.644,5.165,5.165,0,0,0,3.215-1.294c.249-.214.484-.446.767-.708.12.141.22.277.337.394a5.28,5.28,0,0,0,3.586,1.625A4.077,4.077,0,0,1-366.319,194.864Zm-10.564.528c0,1.057-.024,2.069,0,3.079a4.109,4.109,0,0,0,3.537,3.967,3.976,3.976,0,0,0,4.511-3.017,25.085,25.085,0,0,0,.168-3.941c0-.018-.026-.037-.054-.075a6.645,6.645,0,0,1-4.044-1.552A6.678,6.678,0,0,1-376.883,195.393Zm-9.594,9.536a2.343,2.343,0,0,0-.5-2.388q-.888-1.024-1.782-2.042a13.37,13.37,0,0,0-.967-1.045,2.076,2.076,0,0,0-2.459-.255Zm12.2,12.283a2.025,2.025,0,0,0,.275-1.225,2.156,2.156,0,0,0-.7-1.477c-1.037-.926-2.075-1.852-3.143-2.741a2.034,2.034,0,0,0-2.138-.284Zm6.9-11.642c-.739-.212-1.441-.418-2.147-.61a.31.31,0,0,0-.249.075c-.71.7-1.412,1.4-2.138,2.127l2.485,2.078Zm-10.812-.011,2.03,3.668,2.5-2.073c-.729-.731-1.431-1.439-2.141-2.138a.309.309,0,0,0-.253-.062C-376.757,205.143-377.45,205.346-378.192,205.558Zm5.391.82c.67-.668,1.273-1.33,1.943-1.916a1.277,1.277,0,0,0,.433-1.35,5.546,5.546,0,0,1-4.722.046c.015.351-.029.755.152.961C-374.314,204.9-373.56,205.609-372.8,206.378Zm-5.3-7.605.006-3.182a1.628,1.628,0,0,0-1.148,1.56A1.629,1.629,0,0,0-378.1,198.772Zm10.656-3.163-.006,3.184a1.628,1.628,0,0,0,1.149-1.581A1.635,1.635,0,0,0-367.443,195.61Z"
          transform="translate(397.551 -186)"
        />
      </svg>
    )}
  </Icon>
);
