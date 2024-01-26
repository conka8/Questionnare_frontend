import styled from "styled-components";

export const Icon = styled.svg`
  fill: none;
  stroke: white;
  stroke-width: 2px;
`;

export const CustomCheckbox = styled.label`
  display: inline-flex;
  align-items: center;
  cursor: pointer;
  user-select: none;
`;

export const CheckboxInput = styled.input`
  position: absolute;
  opacity: 0;
  cursor: pointer;
  width: 0;
  height: 0;
`;

export const Checkmark = styled.div<{ checked: boolean }>`
  width: 17px;
  height: 17px;
  border: 1px solid ${(props) => (props.checked ? "#3384E3" : "#585858")};
  background-color: ${(props) =>
    props.checked
      ? "linear-gradient(135deg, #513CFF, #23ABD4)"
      : "transparent"};
  border-radius: 4px;
  margin-right: 10px;
  background-image: ${(props) =>
    props.checked
      ? "-webkit-linear-gradient(360deg, #513CFF, #23ABD4);"
      : "transparent"};
`;

export const CheckboxLabel = styled.span<{ checked: boolean, fw?: number }>`
  font-size: 14px;
  color: ${(props) => (props.checked ? "#FFFFFF" : "#AAAAAA")};
  font-weight:${(props) => props.fw || ""}
`;
