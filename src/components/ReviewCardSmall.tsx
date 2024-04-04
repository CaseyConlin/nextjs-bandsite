import Link from "next/link";

export type ReviewCardSmallProps = {
  id: string;
  text: string;
  reviewer: string;
};
export const ReviewCardSmall = ({
  id,
  text,
  reviewer,
}: ReviewCardSmallProps) => {
  return (
    <div key={id}>
      <p
        style={{
          margin: "10px",
          overflow: "hidden",
          whiteSpace: "normal",
          background: "white",
          textOverflow: "ellipsis",
        }}
      >
        {text}
      </p>
      <p>{reviewer}</p>
      <Link scroll={false} href={`/reviews#${id}`}>
        Read More
      </Link>
    </div>
  );
};
