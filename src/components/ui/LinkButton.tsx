import emotionStyled from "@emotion/styled";
import Button from "@mui/material/Button";

const UBTextButton = emotionStyled(Button)(({ theme }) => ({
  //   padding: 16,
  borderRadius: "25px",

  // width: "100%",
  // maxWidth: "100%",
  // margin: "auto",
  // position: "relative",
  // zIndex: 1,
  // display: "flex",

  // flexDirection: "column",
  // alignContent: "center",
  // justifyContent: "center",
  //   alignItems: "center",

  //   backgroundColor: "rgba(255,255,255,0.4)",
  //   backdropFilter: "blur(40px)",
}));

export type UBTextButtonProps = {
  text: string;
  link: string;
  newWindow?: boolean;
};

export const LinkButton = ({ text, link, newWindow }: UBTextButtonProps) => {
  return (
    <Button
      variant="uBYellow"
      href={link}
      target={newWindow ? "_blank" : "_self"}
    >
      {text}
    </Button>
  );
};
