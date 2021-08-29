import { useEffect, useState } from "react";

export const Component = ({ children, open, onDismiss }) => {
  const [isOpen, setIsOpen] = useState(open);

  const onModalClick = (e) => {
    onDismiss();
  };

  const onFormclick = (e) => {
    e.stopPropagation();
  };

  useEffect(() => {
    if (open) {
      document.body.style.overflow = "hidden";
      setIsOpen(true);
    } else {
      document.body.style.overflow = "unset";
      setIsOpen(false);
    }
  }, [open]);

  return (
    <div
      onClick={onModalClick}
      style={{
        display: isOpen ? "flex" : "none",
        backgroundColor: "black",
        opacity: 0.5,
        position: "absolute",
        height: "100vh",
        width: "100vw",
        top: 0,
        left: 0,
        bottom: 0,
        right: 0,
        height: "100%",
        justifyContent: "center",
        alignItems: "center",
        overflow: "hidden",
      }}
    >
      <div
        onClick={onFormclick}
        style={{
          height: "50%",
          width: "50%",
          backgroundColor: "white",
          padding: 10,
          display: "flex",
          flexDirection: "column",
        }}
      >
        {children}
      </div>
    </div>
  );
};
