import styled from "styled-components";

export const FooterContainer = styled.footer`
  padding: 1rem 2rem;
  background-color: #6f7889;
  color: white;
  bottom: 0;
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
  font-family: "Poppins", sans-serif;
  font-size: 13px;
`;

export const FooterContent = styled.div`
  display: flex;
  gap: 10px;

  @media (max-width: 768px) {
    flex-direction: column;
    align-items: center;
  }
`;
