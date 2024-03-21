import Image, { StaticImageData } from "next/image";
import IconButton from "@mui/material/IconButton";

export type LinkIconButtonProps = {
  iconNextImage: StaticImageData;
  alt: string;
  link: string;
  newWindow?: boolean;
};

export const LinkIconButton = ({
  iconNextImage,
  alt,
  link,
  newWindow = true,
}: LinkIconButtonProps) => {
  return (
    <IconButton target={newWindow ? "_blank" : "_self"} href={link}>
      <Image width={35} src={iconNextImage} alt={alt} />
    </IconButton>
  );
};
