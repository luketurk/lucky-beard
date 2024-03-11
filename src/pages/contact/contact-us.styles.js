import styled from 'styled-components';

import { DownArrowSVG } from '../../assets/images/icon.svgs';

export const PageLayout = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100vh;
  background-color: #5A89EA; 
`;

export const Header = styled.header`
  width: 100%;
  padding: 1rem;
  background-color: #ffffff; 
`;

export const MainSection = styled.main`
  flex-grow: 1;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: #5A8EA; 

`;

export const FormContainer = styled.div`
  background-color: #ffffff;
  padding: 2rem;
  border-radius: 8px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1); 
  width: 100%;
  max-width: 400px;
`;

export const FormTitle = styled.h2`
  color: #333333;
  margin-bottom: 1rem;
`;

export const FormSubtitle = styled.p`
  color: #666666; 
  margin-bottom: 2rem;
`;

export const Form = styled.form`
  display: flex;
  flex-direction: column;
  gap: 1rem;
`;

export const Input = styled.input`
  padding: 0.5rem; 
  width: 100%; 
  border: 0px solid #ccc; 
  border-bottom: 1px solid #ccc; 
  border-radius: 0px; 
  margin-bottom: 1rem; 

  color: #6F7889; 
  font-family: 'Poppins', sans-serif;
  font-size: 27.425px; 
  font-weight: 400; 
  line-height: 32.91px; 

  
  ::placeholder {
    color: #6F7889; 
  }



  &:focus {
    outline: none;
    border-color: #5A89EA;
  }
`;

export const Select = styled.select`
  padding: 0.5rem 2rem 0.5rem 0.5rem; 
  border: 1px solid #ccc;
  border-radius: 8px;
  margin-bottom: 1rem;
  appearance: none; 
  background: url(${DownArrowSVG}) no-repeat right 1rem center;
  background-size: 1.5rem; 

  &:focus {
    outline: none;
    border-color: #5A89EA;
    box-shadow: 0 0 0 2px rgba(90, 137, 234, 0.5);
  }
`;



export const SubmitButton = styled.button`
  padding: 0.75rem;
  border: none;
  border-radius: 4px;
  background-color: #5A89EA;
  color: white;
  font-weight: bold;
  cursor: pointer;
  
  &:hover {
    background-color: #4877c2;
  }

  &:disabled {
    background-color: #AAB4BE; 
    cursor: not-allowed; 
    opacity: 0.5; 
  }
`;

export const Footer = styled.footer`
  padding: 1rem;
  background-color: #000000;
  color: white;
  width: 100%;
  text-align: center;
`;
