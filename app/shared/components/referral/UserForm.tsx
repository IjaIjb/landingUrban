import React, { useState } from "react";
import {
  TextField,
  Button,
  Box,
  Typography,
  FormHelperText,
  FormControlLabel,
  Checkbox,
} from "@mui/material";
import axios from "axios"; // For making HTTP requests
import { useFormik } from "formik";
import * as Yup from "yup";
import { envbaseURL } from "@/app/service/api";
import { toast } from "react-toastify";

const validationSchema = Yup.object().shape({
  firstname: Yup.string().required("First name is required"),
  lastname: Yup.string().required("Last name is required"),
  phone: Yup.string().required("Phone number is required"),
  password: Yup.string()
    .required("Password is required")
    .matches(
      /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/,
      "Password must contain at least 8 characters, one uppercase, one lowercase, one number and one special character"
    ),
  email: Yup.string()
    .email("Invalid email address")
    .required("Email is required"),
  role: Yup.string().required("Role is required"),
  city: Yup.string().default("unknown"),
  userType: Yup.string().required("User type is required"),
  userCategory: Yup.string().required("User category is required"),
  termsAndConditions: Yup.boolean().oneOf(
    [true],
    "You must agree to the terms and conditions"
  ),
});

const UserForm = () => {
  const [submissionStatus, setSubmissionStatus] = useState<string | null>(null);
  const [errorMessage, setErrorMessage] = useState("");
  const [savedData, setSavedData] = React.useState<any>(null);
  const formik = useFormik({
    initialValues: {
      firstname: "",
      lastname: "",
      phone: "",
      password: "", // Set default password if needed, or remove
      email: "",
      city: "unknown",
      role: "USER",
      userType: "PASSENGERS",
      userCategory: "PASSENGERS",
      termsAndConditions: true,
    },
    validationSchema: validationSchema,
    onSubmit: async (values) => {
      setSubmissionStatus("submitting");
      setErrorMessage("");

      try {
        const response = await axios.post(
          envbaseURL + "/add-individual",
          values
        ); // Replace with your API endpoint
        console.log("User created:", response?.data);
        setSubmissionStatus(response?.data?.status > 300 ? "error" : "success");
        setErrorMessage(response?.data?.message);
        setSavedData(response?.data?.data);
        formik.resetForm();
      } catch (error: any) {
        console.error("Error creating user:", error);
        setSubmissionStatus("error");
        if (
          error.response &&
          error.response.data &&
          error.response.data.message
        ) {
          setErrorMessage(error.response.data.message);
        } else {
          setErrorMessage("Failed to create user. Please try again later.");
        }
      }
    },
  });

  return (
    <>
      {savedData?.user?.username ? (
        <Box sx={{ width: "100%", margin: "auto", padding: 3 }}>
          <Box>
            <Typography variant="h6" gutterBottom>
              Your Referral Link:
            </Typography>
            <Typography
              className="bg-gray-600 py-2 px-5 text-white"
              variant="body1"
              sx={{ wordBreak: "break-word" }}
            >
              {`https://fleet.urban.ng/register?referral=${savedData.user.username}`}
            </Typography>
            <Button
              className="bg-[#036E03] py-2 px-5 hover:bg-[#036E03] rounded-sm text-white"
              variant="outlined"
              size="small"
              sx={{ mt: 1 }}
              onClick={() => {
                navigator.clipboard.writeText(
                  `https://fleet.urban.ng/register?referral=${savedData.user.username}`
                );
                alert("Referral link copied to clipboard!"); // Or use a more user-friendly notification
              }}
            >
              Copy Link
            </Button>
          </Box>
        </Box>
      ) : (
        <Box sx={{ width: "100%", margin: "auto", padding: 5 }}>
          <Typography variant="h5" gutterBottom>
            Application Form
          </Typography>

          <form
            className="gap-5 flex flex-col justify-start items-start"
            onSubmit={formik.handleSubmit}
          >
            <TextField
              className=""
              fullWidth
              id="firstname"
              name="firstname"
              label="First Name"
              value={formik.values.firstname}
              onChange={formik.handleChange}
              error={
                formik.touched.firstname && Boolean(formik.errors.firstname)
              }
              helperText={formik.touched.firstname && formik.errors.firstname}
            />

            <TextField
              className=""
              fullWidth
              id="lastname"
              name="lastname"
              label="Last Name"
              value={formik.values.lastname}
              onChange={formik.handleChange}
              error={formik.touched.lastname && Boolean(formik.errors.lastname)}
              helperText={formik.touched.lastname && formik.errors.lastname}
            />

            <TextField
              className=""
              fullWidth
              id="phone"
              name="phone"
              label="Phone"
              value={formik.values.phone}
              onChange={formik.handleChange}
              error={formik.touched.phone && Boolean(formik.errors.phone)}
              helperText={formik.touched.phone && formik.errors.phone}
            />

            <TextField
              className=""
              fullWidth
              id="email"
              name="email"
              label="Email"
              type="email"
              value={formik.values.email}
              onChange={formik.handleChange}
              error={formik.touched.email && Boolean(formik.errors.email)}
              helperText={formik.touched.email && formik.errors.email}
            />

            <TextField
              className=""
              fullWidth
              id="password"
              name="password"
              label="Password"
              type="password"
              value={formik.values.password}
              onChange={formik.handleChange}
              error={formik.touched.password && Boolean(formik.errors.password)}
              helperText={formik.touched.password && formik.errors.password}
            />

            {/* Terms and Conditions Checkbox */}
            <FormControlLabel
              control={
                <Checkbox
                  id="termsAndConditions"
                  name="termsAndConditions"
                  checked={formik.values.termsAndConditions}
                  onChange={formik.handleChange}
                />
              }
              label={
                <>
                  I agree to the{" "}
                  <a
                    className="text-[#036E03] capitalize underline"
                    href="/URBAN_REFERRAL_CAMPAIGN_TANDC.pdf"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Terms & Conditions
                  </a>
                </>
              }
            />
            {formik.touched.termsAndConditions &&
              formik.errors.termsAndConditions && (
                <FormHelperText error>
                  {formik.errors.termsAndConditions}
                </FormHelperText>
              )}

            {submissionStatus === "error" && (
              <Typography color="error" sx={{ mt: 1 }}>
                {errorMessage}
              </Typography>
            )}

            {submissionStatus === "success" && (
              <Typography color="success" sx={{ mt: 1 }}>
                User created successfully
              </Typography>
            )}

            <Button
              type="submit"
              className="capitalize bg-[#036E03] hover:bg-[#036E03] rounded-full text-white px-10 py-4"
              fullWidth
              sx={{ mt: 1 }}
              disabled={submissionStatus === "submitting"}
            >
              {submissionStatus === "submitting"
                ? "Generating..."
                : "Generate Referral link"}
            </Button>
          </form>
        </Box>
      )}
    </>
  );
};

export default UserForm;
