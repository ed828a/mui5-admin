import { Box, Button, TextField, useMediaQuery } from "@mui/material";
import { Formik } from "formik";
import React from "react";
import Header from "../../components/Header";
import * as yup from "yup";

const initialValues = {
    firstname: "",
    lastname: "",
    email: "",
    contact: "",
    address1: "",
    address2: "",
};

const phoneRegExp =
    /^((\+[1-9]{1,4}[ -]?)|(\([0-9]{2,3}\)[ -]?)|([0-9]{2,4})[ -]?)*?[0-9]{3,4}[ -]?[0-9]{3,4}$/;

const userSchema = yup.object().shape({
    firstname: yup.string().required("Required"),
    lastname: yup.string().required("Required"),
    email: yup.string().email("invalid email.").required("Required"),
    contact: yup
        .string()
        .matches(phoneRegExp, "Phone number is not valid")
        .required("Required"),
    address1: yup.string().required("Required"),
    address2: yup.string().required("Required"),
});

const Form = () => {
    const isNonMobile = useMediaQuery("(min-width: 600px)");
    const handleFormSubmit = (values) => {
        console.log(values);
    };

    return (
        <Box m="20px">
            <Header title="CREATE USER" subtitle="Create a new User Profile" />
            <Formik
                onSubmit={handleFormSubmit}
                initialValues={initialValues}
                validationSchema={userSchema}
            >
                {({
                    values,
                    errors,
                    touched,
                    handleBlur,
                    handleChange,
                    handleSubmit,
                }) => {
                    return (
                        <form onSubmit={handleSubmit}>
                            <Box
                                display="grid"
                                gap="30px"
                                gridTemplateColumns="repeat(4, minmax(0, 1fr))"
                                sx={{
                                    "& > div": {
                                        gridColumn: isNonMobile
                                            ? undefined
                                            : "span 4",
                                    },
                                }}
                            >
                                <TextField
                                    fullWidth
                                    variant="filled"
                                    type="text"
                                    label="First Name"
                                    onBlur={handleBlur}
                                    onChange={handleChange}
                                    value={values.firstname}
                                    name="firstname"
                                    error={
                                        !!touched.firstname &&
                                        !!errors.firstname
                                    }
                                    helperText={
                                        touched.firstname && errors.firstname
                                    }
                                    sx={{ gridColumn: "span 2" }}
                                />
                                <TextField
                                    fullWidth
                                    variant="filled"
                                    type="text"
                                    label="Last Name"
                                    onBlur={handleBlur}
                                    onChange={handleChange}
                                    value={values.lastname}
                                    name="lastname"
                                    error={
                                        !!touched.lastname &&
                                        !!errors.lastname
                                    }
                                    helperText={
                                        touched.lastname && errors.lastname
                                    }
                                    sx={{ gridColumn: "span 2" }}
                                />
                                <TextField
                                    fullWidth
                                    variant="filled"
                                    type="text"
                                    label="Email"
                                    onBlur={handleBlur}
                                    onChange={handleChange}
                                    value={values.email}
                                    name="email"
                                    error={
                                        !!touched.email &&
                                        !!errors.email
                                    }
                                    helperText={
                                        touched.email && errors.email
                                    }
                                    sx={{ gridColumn: "span 4" }}
                                />
                                <TextField
                                    fullWidth
                                    variant="filled"
                                    type="text"
                                    label="Contact"
                                    onBlur={handleBlur}
                                    onChange={handleChange}
                                    value={values.contact}
                                    name="contact"
                                    error={
                                        !!touched.contact &&
                                        !!errors.contact
                                    }
                                    helperText={
                                        touched.contact && errors.contact
                                    }
                                    sx={{ gridColumn: "span 4" }}
                                />
                                <TextField
                                    fullWidth
                                    variant="filled"
                                    type="text"
                                    label="Address 1"
                                    onBlur={handleBlur}
                                    onChange={handleChange}
                                    value={values.address1}
                                    name="address1"
                                    error={
                                        !!touched.address1 &&
                                        !!errors.address1
                                    }
                                    helperText={
                                        touched.address1 && errors.address1
                                    }
                                    sx={{ gridColumn: "span 4" }}
                                />
                                <TextField
                                    fullWidth
                                    variant="filled"
                                    type="text"
                                    label="Address 2"
                                    onBlur={handleBlur}
                                    onChange={handleChange}
                                    value={values.address2}
                                    name="address2"
                                    error={
                                        !!touched.address2 &&
                                        !!errors.address2
                                    }
                                    helperText={
                                        touched.address2 && errors.address2
                                    }
                                    sx={{ gridColumn: "span 4" }}
                                />
                            </Box>
                            <Box display="flex" justifyContent='flex-end' mt="20px" >
                              <Button type="submit" color="secondary" variant="contained">
                                Create New User
                              </Button>
                            </Box>
                        </form>
                    );
                }}
            </Formik>
        </Box>
    );
};

export default Form;
