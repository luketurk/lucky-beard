import React, { useState } from 'react';
import {
  PageLayout,
  Header,
  MainSection,
  FormContainer,
  FormTitle,
  FormSubtitle,
  Form,
  Input,
  Select,
  SubmitButton,
  Footer,
} from './contact-us.styles';
import NavBar from '../../components/navbar/navbar';

const DemoRequestPage = () => {

  const [formData, setFormData] = useState({
    name: '',
    email: '',
    mobile: '',
    company: '',
    role: '',
  });

  const [errors, setErrors] = useState({
    name: null,
    email: null,
    mobile: null,
    company: null,
    role: null,
    submit: null,
  });

  const validateInput = (name, value) => {
    let errorMessage = null;
    switch (name) {
      case 'name':
        if (!value.match(/^[A-Za-z ]{0,50}$/)) {
          errorMessage = 'Please enter a valid name.';
        }
        break;
      case 'email':
        if (!value.match(/^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/) || value.length > 50) {
          errorMessage = 'Please enter a valid email.';
        }
        break;
      case 'mobile':
        if (!value.match(/^\+?[0-9]{0,13}$/)) {
          errorMessage = 'Please enter a valid mobile number.';
        }
        break;
      case 'company':
        if (!value.match(/^[A-Za-z0-9 ]{0,50}$/)) {
          errorMessage = 'Please enter a valid company name.';
        }
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
    return (
      formData.name &&
      formData.email &&
      formData.mobile &&
      formData.company &&
      formData.role &&
      Object.values(errors).every((error) => !error)
    );
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (isFormValid()) {
      
    } else {
      setErrors({ ...errors, submit: 'Please enter a valid response for all fields.' });
    }
  };


  return (
    <PageLayout>
      <Header>
        <NavBar />
      </Header>
      <MainSection>
        <FormContainer>
          <FormTitle>Request a demo</FormTitle>
          <FormSubtitle>If you are a professional, we offer a desktop admin platform...</FormSubtitle>
          <Form onSubmit={handleSubmit}>
            <Input
              name="name"
              placeholder="Your name"
              maxLength="50"
              value={formData.name}
              onChange={handleInputChange}
              isError={errors.name}
            />
            {errors.name && <p style={{ color: 'red' }}>{errors.name}</p>}

            <Input
              name="email"
              type="email"
              placeholder="Your email"
              maxLength="50"
              value={formData.email}
              onChange={handleInputChange}
              isError={!!errors.email}
            />
            {errors.email && <p style={{ color: 'red' }}>{errors.email}</p>}

            <Input
              name="mobile"
              placeholder="Mobile number"
              maxLength="13"
              value={formData.mobile}
              onChange={handleInputChange}
              isError={!!errors.mobile}
            />
            {errors.mobile && <p style={{ color: 'red' }}>{errors.mobile}</p>}

            <Input
              name="company"
              placeholder="Company"
              maxLength="50"
              value={formData.company}
              onChange={handleInputChange}
              isError={!!errors.company}
            />
            {errors.company && <p style={{ color: 'red' }}>{errors.company}</p>}

            <Select
              name="role"
              value={formData.role}
              onChange={handleInputChange}
              isError={!!errors.role}
            >
              <option value="">Role in the company</option>
              <option value="developer">Developer</option>
              <option value="qa_analyst">QA Analyst</option>
              <option value="business_analyst">Business Analyst</option>
            </Select>
            {errors.role && <p style={{ color: 'red' }}>{errors.role}</p>}

            <SubmitButton type="submit" disabled={!isFormValid()}>
              Request
            </SubmitButton>
            {errors.submit && <p style={{ color: 'red' }}>{errors.submit}</p>}
          </Form>
        </FormContainer>
      </MainSection>
      <Footer>
      //todo
      </Footer>
    </PageLayout>
  );
};

export default DemoRequestPage;
