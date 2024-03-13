import React, { useState } from "react";
import {
  PageLayout,
  Header,
  MainSection,
  FormContainer,
  FormTitle,
  Form,
  Input,
  SubmitButton,
  ErrorMessage,
  ContactUsTitle,
  ContactUsSubTitle,
  TitleContainer,
  BlackBanner,
} from "./contact-us.styles";
import NavBar from "../../components/navbar/navbar";

import SharedFooter from "../../components/footer/footer";

import { CustomDropdown } from "../../components/dropdown/dropdown";

const DemoRequestPage = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    mobile: "",
    company: "",
    role: "",
  });

  const [errors, setErrors] = useState({
    name: null,
    email: null,
    mobile: null,
    company: null,
    role: null,
  });

  const validateInput = (name, value) => {
    let errorMessage = null;
    switch (name) {
      case "name":
        if (!value.match(/^[A-Za-z ]{0,50}$/)) {
          errorMessage = "Please enter a valid name.";
        }
        break;
      case "email":
        if (
          !value.match(/^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/) ||
          value.length > 50
        ) {
          errorMessage = "Please enter a valid email.";
        }
        break;
      case "mobile":
        if (!value.match(/^\+?[0-9]{0,13}$/)) {
          errorMessage = "Please enter a valid mobile number.";
        }
        break;
      case "company":
        if (!value.match(/^[A-Za-z0-9 ]{0,50}$/)) {
          errorMessage = "Please enter a valid company name.";
        }
        break;
      case "role":
        if (!value || value === "") {
          errorMessage = "Please select a role.";
        }
        break;
      default:
        break;
    }
    return errorMessage;
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });

    const error = validateInput(name, value);
    setErrors({ ...errors, [name]: error });
  };

  const isFormValid = () => {
    const noErrors = Object.values(errors).every(
      (error) => error === null || error === ""
    );
    const allFieldsFilled =
      formData.name &&
      formData.email &&
      formData.mobile &&
      formData.company &&
      formData.role;
    return noErrors && allFieldsFilled;
  };

 
  const handleSubmit = (e) => {
    e.preventDefault();

    if (isFormValid()) {
      console.log(formData);
    }
  };

  const roles = ["Developer", "QA Analyst", "Business Analyst"];

  const handleSelectRole = (role) => {
    setFormData({ ...formData, role: role });

    const error = validateInput("role", role);
    setErrors({ ...errors, ["role"]: error });
  };

  return (
    <>
      <PageLayout>
        <Header>
          <NavBar />
        </Header>

        <MainSection>
          <TitleContainer>
            <ContactUsTitle>Request a demo</ContactUsTitle>
            <ContactUsSubTitle>
              If you are a professional, we offer a desktop admin platform, to
              allow a better and faster management of your whole business
            </ContactUsSubTitle>
          </TitleContainer>
          <FormContainer>
            <FormTitle>Please fill your application</FormTitle>
            <Form onSubmit={handleSubmit}>
              <Input
                name="name"
                placeholder="Your name"
                maxLength="50"
                value={formData.name}
                onChange={handleInputChange}
                isError={errors.name}
              />
              {errors.name && <ErrorMessage>{errors.name}</ErrorMessage>}

              <Input
                name="email"
                type="email"
                placeholder="Your email"
                maxLength="50"
                value={formData.email}
                onChange={handleInputChange}
                isError={!!errors.email}
              />
              {errors.email && <ErrorMessage>{errors.email}</ErrorMessage>}

              <Input
                name="mobile"
                placeholder="Mobile number"
                maxLength="13"
                value={formData.mobile}
                onChange={handleInputChange}
                isError={!!errors.mobile}
              />
              {errors.mobile && <ErrorMessage>{errors.mobile}</ErrorMessage>}

              <Input
                name="company"
                placeholder="Company"
                maxLength="50"
                value={formData.company}
                onChange={handleInputChange}
                isError={!!errors.company}
              />
              {errors.company && <ErrorMessage>{errors.company}</ErrorMessage>}
              <CustomDropdown
                options={roles}
                selectedValue={formData.role}
                onSelect={handleSelectRole}
              />

              {errors.role && <ErrorMessage>{errors.role}</ErrorMessage>}

              <SubmitButton data-testid="submit-button" type="submit" disabled={!isFormValid()}>
                Request
              </SubmitButton>
            </Form>
          </FormContainer>
        </MainSection>
      </PageLayout>
      <BlackBanner />
      <SharedFooter />
    </>
  );
};

export default DemoRequestPage;
