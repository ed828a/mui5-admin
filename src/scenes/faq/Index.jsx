import React from "react";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import {
    Accordion,
    AccordionDetails,
    AccordionSummary,
    Box,
    Typography,
    useTheme,
} from "@mui/material";
import { tokens } from "../../theme";
import Header from "../../components/Header";

const questions = [
    {
        summary: " An Important Question",
        details:
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse malesuada lacus ex, sit amet blandit leo lobortis eget.",
    },
    {
        summary: "Another Important Question",
        details:
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse malesuada lacus ex, sit amet blandit leo lobortis eget.",
    },
    {
        summary: "Your Favorite Question",
        details:
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse malesuada lacus ex, sit amet blandit leo lobortis eget.",
    },
    {
        summary: " Some Random Question",
        details:
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse malesuada lacus ex, sit amet blandit leo lobortis eget.",
    },
    {
        summary: "The Final Question",
        details:
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse malesuada lacus ex, sit amet blandit leo lobortis eget.",
    },
];

const Faq = () => {
    const theme = useTheme();
    const colors = tokens(theme.palette.mode);
    return (
        <Box m="20px">
            <Header title="FAQ" subtitle="Frequently Asked Questions Page" />
            {questions.map(({ summary, details }, index) => (
                <Accordion defaultExpanded key={index} >
                    <AccordionSummary expandIcon={<ExpandMoreIcon />}>
                        <Typography
                            color={colors.greenAccent[500]}
                            variant="h5"
                        >
                            {summary}
                        </Typography>
                    </AccordionSummary>
                    <AccordionDetails>
                        <Typography>{details}</Typography>
                    </AccordionDetails>
                </Accordion>
            ))}
        </Box>
    );
};

export default Faq;
