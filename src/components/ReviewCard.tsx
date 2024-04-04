import { Box } from "@mui/material";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";

export type ReviewCardProps = {
  review: Review;
};
export type Review = {
  id: string;
  title: string;
  link?: string;
  subtitle?: string;
  reviewText: string[];
  reviewer: string;
  reviewerLink?: string;
  reviewerImageSrc?: string;
};

export const ReviewCard = ({ review }: ReviewCardProps) => {
  return (
    <Card
      component="article"
      sx={{
        m: { xs: 1, sm: 2 },
        p: 2,
        maxWidth: { xs: "xs", md: "xl" },
        borderRadius: "25px",
        backgroundColor: "rgba(255,255,255,85%)",
      }}
    >
      <a id={`#${review.id}`}></a>
      {review.reviewerImageSrc && (
        <CardMedia
          sx={{ ml: 2, width: 150, height: 150, borderRadius: "25px" }}
          image={`/${review.reviewerImageSrc}`}
          title={`${review.reviewer} logo`}
        />
      )}
      <CardContent>
        <Typography variant="accent" fontSize={"1.125rem"} component="h2">
          {review.title}
        </Typography>

        {review.link && (
          <Typography
            component="a"
            href={review.link}
            fontSize={".875rem"}
            color="text.secondary"
            gutterBottom
            fontWeight={600}
          >
            Article Link
          </Typography>
        )}
        {review.subtitle && (
          <Typography gutterBottom component="h3" py={1}>
            {review.subtitle}
          </Typography>
        )}
        <Box pb={2}>
          {review.reviewText.map((text, i) => {
            return (
              <Typography
                key={i.toString()}
                variant="body2"
                fontSize="1rem"
                color="text.secondary"
                py={1}
              >
                {text}
              </Typography>
            );
          })}
        </Box>
        <Typography
          gutterBottom
          fontSize="1.125rem"
          variant="accent"
          component="a"
          target="_blank"
          href={review.reviewerLink}
        >
          {review.reviewer}
        </Typography>
      </CardContent>
    </Card>
  );
};
