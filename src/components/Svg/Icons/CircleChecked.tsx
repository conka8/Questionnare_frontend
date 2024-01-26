import React from "react";
import Svg from "../Svg";
import { SvgProps } from "../types";

interface ICheckedProps extends SvgProps {
  color?: string;
}
const Icon: React.FC<ICheckedProps> = (props: ICheckedProps) => {
  return (
    <Svg
      width={props?.width}
      height={props.height}
      viewBox="0 0 24 24"
      fill={props.fill}
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M12 21C16.9706 21 21 16.9706 21 12C21 7.02944 16.9706 3 12 3C7.02944 3 3 7.02944 3 12C3 16.9706 7.02944 21 12 21Z"
        stroke="#54AE57"
        strokeWidth="2"
        strokeMiterlimit="10"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M15.7071 10.7071C16.0976 10.3166 16.0976 9.68342 15.7071 9.29289C15.3166 8.90237 14.6834 8.90237 14.2929 9.29289L15.7071 10.7071ZM11 14L10.2929 14.7071C10.6834 15.0976 11.3166 15.0976 11.7071 14.7071L11 14ZM9.70711 11.2929C9.31658 10.9024 8.68342 10.9024 8.29289 11.2929C7.90237 11.6834 7.90237 12.3166 8.29289 12.7071L9.70711 11.2929ZM14.2929 9.29289L10.2929 13.2929L11.7071 14.7071L15.7071 10.7071L14.2929 9.29289ZM11.7071 13.2929L9.70711 11.2929L8.29289 12.7071L10.2929 14.7071L11.7071 13.2929Z"
        fill="#54AE57"
      />
    </Svg>
  );
};

export default Icon;
