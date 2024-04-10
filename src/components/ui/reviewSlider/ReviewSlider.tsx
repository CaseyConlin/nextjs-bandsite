"use client";

import { useState } from "react";
import Link from "next/link";
import Box from "@mui/material/Box";
import MobileStepper from "@mui/material/MobileStepper";
import Paper from "@mui/material/Paper";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import KeyboardArrowLeft from "@mui/icons-material/KeyboardArrowLeft";
import KeyboardArrowRight from "@mui/icons-material/KeyboardArrowRight";
import { albumReviewType, reviews } from "@/data/reviews";

export type ReviewSliderProps = {
  albumTitle: string;
  albumReviews: albumReviewType[];
};
export const SwipeableTextMobileStepper = ({
  albumTitle,
  albumReviews,
}: ReviewSliderProps) => {
  const [activeStep, setActiveStep] = useState(0);

  const maxSteps = albumReviews.length;

  const handleNext = () => {
    setActiveStep((prevActiveStep) => prevActiveStep + 1);
  };

  const handleBack = () => {
    setActiveStep((prevActiveStep) => prevActiveStep - 1);
  };

  // const handleStepChange = (step: number) => {
  //   setActiveStep(step);
  // };

  return (
    <Box
      component="div"
      sx={{
        m: { xs: 1, sm: 2 },
        maxWidth: { xs: "xs", md: "xl" },
        borderRadius: "25px",
        backgroundColor: "rgba(255,255,255,85%)",
        margin: 0,
        padding: 0,
      }}
    >
      <Paper
        elevation={0}
        sx={{
          display: "flex",
          alignItems: "flex-start",
          flexDirection: "column",
          borderRadius: "25px",
          p: 2,
          pb: 0,
        }}
      >
        <Typography component="h2" variant="accent">
          {albumTitle} Reviews
        </Typography>
        <Box
          my={1}
          sx={{
            borderRadius: "25px",
            p: 2,
            backgroundColor: "#DEDADA",
          }}
        >
          <Typography component="p">
            {reviews[activeStep].reviewText[0]}
            <Typography component="span" fontStyle="italic" fontWeight={600}>
              {" "}
              <Link scroll={false} href={`/reviews#${reviews[activeStep].id}`}>
                Read More.
              </Link>
            </Typography>
          </Typography>
          <Typography variant="accent" component="p" mt={2}>
            {reviews[activeStep].reviewer}
          </Typography>
        </Box>
      </Paper>

      <MobileStepper
        sx={{
          mt: 0,

          borderRadius: "25px",
          display: "flex",
          justifyContent: "flex-start",
          ".MuiMobileStepper-dots": {
            display: "none",
          },
        }}
        steps={maxSteps}
        position="static"
        activeStep={activeStep}
        nextButton={
          <Button
            size="small"
            onClick={handleNext}
            disabled={activeStep === maxSteps - 1}
            sx={{ color: "black" }}
          >
            Next
            <KeyboardArrowRight />
          </Button>
        }
        backButton={
          <Button
            size="small"
            onClick={handleBack}
            disabled={activeStep === 0}
            sx={{ color: "black" }}
          >
            <KeyboardArrowLeft />
            Back
          </Button>
        }
      />
    </Box>
  );
};

export default SwipeableTextMobileStepper;
