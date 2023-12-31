const Button = {
  variants: {
    solid: (props) => ({
      paddingBlock: "18px",
      borderRadius: "3xl",
      width: "170px",
      height: "50px",
      color: "white",
      borderWidth: "2px",
      transition: "all 0.5s ease",
      fontFamily: "body",
    }),
    outline: (props) => ({
      paddingBlock: "18px",
      borderRadius: "3xl",
      width: "170px",
      height: "50px",
      color: "white",
      borderWidth: "2px",
      transition: "all 0.5s ease",
      fontFamily: "body",
      backgroundColor: "transparent",
      borderColor: "white",
      _hover: {
        backgroundColor: "white",
        color: "#585858",
      },
    }),
    blob: (props) => ({
      zIndex: "1",
      position: "relative",
      textAlign: "center",
      backgroundColor: "transparent",
      outline: "none",
      border: "none",
      transition: "color 0.5s",
      cursor: "pointer",
      color: "white",
      _before: {
        zIndex: 1,
        left: 0,
        top: 0,
        border: "2px solid",
        borderColor: "white",
        position: "absolute",
        content: `""`,
        width: "full",
        height: "full",
        borderRadius: "3xl",
      },
      _after: {
        position: "absolute",
        content: `""`,
        width: "full",
        height: "full",
        borderRadius: "3xl",
        zIndex: "-2",
        left: "3px",
        top: "3px",
        transition: "all 0.3s 0.2s",
      },
      height: "50px",
      fontFamily: "body",
      fontWeight: "extrabold",
      width: "170px",
      borderRadius: "3xl",
      _hover: {
        color: "#585858",
        _after: {
          transition: "all 0.3s",
          left: 0,
          top: 0,
          borderRadius: "3xl",
        },
      },
      _focus: {
        color: "#585858",
        _after: {
          transition: "all 0.3s",
          left: 0,
          top: 0,
          borderRadius: "3xl",
        },
      },
    }),
  },
};

export default Button;
