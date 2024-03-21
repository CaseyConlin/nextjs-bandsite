import Button from "@mui/material/Button";

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
