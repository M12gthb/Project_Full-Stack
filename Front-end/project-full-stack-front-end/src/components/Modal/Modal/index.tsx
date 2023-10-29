import { ReactNode, useEffect, useRef } from "react";
import { Container } from "./styles";
import { createPortal } from "react-dom";

interface ModalProps {
  toggleModal: () => void;
  blockClosing?: boolean;
  children: ReactNode;
}

export const Modal = ({ children, toggleModal, blockClosing }: ModalProps) => {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleclick = (event: MouseEvent) => {
      if (!ref.current) {
        return;
      }

      if (!event.target) {
        return;
      }

      if (!ref.current.contains(event.target as HTMLElement)) {
        toggleModal();
      }
    };

    // window.addEventListener("mousedown", handleclick);

    return () => {
      window.removeEventListener("mousedown", handleclick);
    };
  }, [toggleModal]);

  return createPortal(
    <Container>
      <div ref={blockClosing ? null : ref}>{children}</div>
    </Container>,
    document.body
  );
};
