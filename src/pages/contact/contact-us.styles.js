import styled from "styled-components";
import { FaChevronDown } from 'react-icons/fa';

export const PageLayout = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 100vh;
  background-color: #5a89ea;

  @media (max-width: 576px) {
    height: 100%;
  }
`;

export const Header = styled.header`
  width: 100%;
  background-color: #ffffff;
`;

export const MainSection = styled.main`
  flex-grow: 1;
  display: flex;
  align-items: center;
  flex-direction: column;
  justify-content: center;
  background-color: #5A8EA;
`;

export const TitleContainer = styled.div`
  text-align: center;
  margin-bottom: 2rem;
`;

export const FormContainer = styled.div`
  background-color: #ffffff;
  padding: 2rem;
  border-radius: 8px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  width: 80%;

  @media (max-width: 768px) {
    padding: 1rem; 
  }
  @media (max-width: 576px) {
    margin-bottom: 200px;
    width: 75%;
  }
`;

export const FormTitle = styled.h2`
  color: #333333;
  margin-bottom: 1rem;
  font-size: 24px;
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
  border: 0px;
  border-bottom: 1px solid #ccc;
  border-radius: 0px;
  margin-bottom: 1rem;

  color: #6f7889;
  font-family: "Poppins", sans-serif;
  font-size: 12px;
  font-weight: 400;
  line-height: 32.91px;

  &&::-webkit-input-placeholder {
    color: #6f7889;
    font-size: 12px;
  }
  &::-moz-placeholder {
    color: #6f7889;
    opacity: 1;
  }
  &:-ms-input-placeholder {
    color: #6f7889;
  }
  &:-moz-placeholder {
    color: #6f7889;
    opacity: 1;
  }

  &:focus {
    outline: none;
    border-color: #5a89ea;
  }
`;

export const SelectWrapper = styled.div`
  position: relative;
  width: 100%;
`;

export const Chevron = styled(FaChevronDown)`
  position: absolute;
  right: 1rem;
  top: 50%;
  transform: ${({ isRotated }) => isRotated ? 'translateY(-50%) rotate(180deg)' : 'translateY(-50%) rotate(0deg)'};
  transition: transform 0.3s ease-in-out;
  pointer-events: none; 
`;


export const Select = styled.select`
  padding: 0.5rem 2rem 0.5rem 0.5rem;
  border: 0px solid #ccc;
  border-bottom: 1px solid #ccc;
  margin-bottom: 1rem;
  appearance: none; 
  width: 100%; 
  font-family: "Poppins", sans-serif;

  &:focus {
    outline: none;
    border-color: #5a89ea;
  }
`;

export const BlackBanner = styled.div`
  background: var(--Dark-1, #030303);
  height: 100px;
  width: 100%;
`;

export const SubmitButton = styled.button`
  padding: 0.75rem;
  border: none;
  border-radius: 4px;
  background-color: #5a89ea;
  color: white;
  font-weight: bold;
  cursor: pointer;

  &:hover {
    background-color: #4877c2;
  }

  &:disabled {
    background-color: #aab4be;
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

export const ErrorMessage = styled.p`
  color: #ff6565;
  font-family: "Poppins", sans-serif;
  font-size: 14px;
  margin: -1rem 0 1rem 0;
  animation: fadeIn 0.3s ease-in-out;

  @keyframes fadeIn {
    from {
      opacity: 0;
    }
    to {
      opacity: 1;
    }
  }
`;

export const ContactUsTitle = styled.h1`
  color: #fff;
  text-align: center;
  font-family: "Poppins", sans-serif;
  font-size: 62px;
  font-weight: 600;
  line-height: 105%; 
  letter-spacing: -1.86px;

  @media (max-width: 768px) {
    font-size: 42px;
    line-height: normal;
    letter-spacing: normal;
  }

  @media (max-width: 480px) {
    font-size: 24px; 
    line-height: normal;
    letter-spacing: normal;
    margin-top: 100px;
  }
`;

export const ContactUsSubTitle = styled.h5`
  width: 583px;
  font-size: 16px;
  font-weight: 400;
  line-height: 22.4px;
  color: white;

  @media (max-width: 768px) {
    width: auto;
    font-size: 1rem;
  }

  @media (max-width: 480px) {
    font-size: 0.8rem;
    padding: 30px;
  }
`;
