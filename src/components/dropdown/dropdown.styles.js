import { FaChevronDown } from "react-icons/fa";
import styled from "styled-components";

export const DropdownContainer = styled.div`
  position: relative;
  width: 100%;
`;

export const DropdownButton = styled.button`
  padding: 0.5rem;
  width: 100%;
  border: 0px;
  font-family: "Poppins", sans-serif;
  font-size: 12px;

  border-bottom:1px solid #E0E0E0;
  background-color: #fff;
  display: flex;
  justify-content: space-between;
  align-items: center;
  cursor: pointer;

  &:focus {
    outline: none;
  }
`;

export const Chevron = styled(FaChevronDown)`
  transition: transform 0.3s ease-in-out;
  transform: ${({ isOpen }) => (isOpen ? 'rotate(180deg)' : 'rotate(0deg)')};
`;

export const DropdownList = styled.ul`
  position: absolute;
  width: 100%;
  border: 1px solid #ccc;
  background-color: #fff;
  list-style: none;
  font-family: "Poppins", sans-serif;
  font-size: 12px;

  padding: 0;
  margin: 0;
  max-height: 200px;
  overflow-y: auto;
  z-index: 1000;
`;

export const DropdownItem = styled.li`
  padding: 0.5rem;
  font-family: "Poppins", sans-serif;
  font-size: 12px;

  cursor: pointer;

  &:hover {
    background-color: #f0f0f0;
  }
`;
