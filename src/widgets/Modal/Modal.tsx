import React from "react";
import {
  ModalBody,
  ModalHeader,
  ModalTitle,
  ModalContainer,
  ModalCloseButton,
  ModalBackButton,
  ModalBorder,
  BackIcon,
} from "./styles";
import { ModalProps } from "./types";
import useViewport from "hooks/useViewport";

const Modal: React.FC<ModalProps> = ({
  title,
  onDismiss,
  onBack,
  children,
  hideCloseButton = false,
  bodyPadding,
  headerBackground = "transparent",
  minWidth = "320px",
  minHeight = "320px",
  ...props
}) => {
  const { width } = useViewport();
  const isMobile = width <= 990;
  return (
    <ModalContainer
      className="modal-overflow"
      minWidth={minWidth}
      minHeight={minHeight}
      {...props}
    >
      <ModalBorder
        padding={isMobile ? "24px" : "100px 24px 24px"}
        height={"100%"}
      >
        <ModalHeader background={headerBackground}>
          <ModalTitle padding={bodyPadding}>
            {onBack && (
              <ModalBackButton onBack={onBack}>
                <BackIcon />
              </ModalBackButton>
            )}
            {title}
          </ModalTitle>
          {!hideCloseButton && <ModalCloseButton onDismiss={onDismiss} />}
        </ModalHeader>
        <ModalBody p={bodyPadding}>{children}</ModalBody>
        {/* <CancelWrapperButton>
        <ModalCloseButton onDismiss={onDismiss} />
        </CancelWrapperButton> */}
      </ModalBorder>
    </ModalContainer>
  );
};

export default Modal;
