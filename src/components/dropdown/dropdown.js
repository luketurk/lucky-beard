import React, { useState } from 'react';
import { Chevron, DropdownButton, DropdownContainer, DropdownItem, DropdownList } from './dropdown.styles';

export const CustomDropdown = ({ options, onSelect, placeholder = "Select an option" }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedOption, setSelectedOption] = useState(null);

  const toggleDropdown = () => setIsOpen(!isOpen);

  const handleSelectOption = (option) => {
    setSelectedOption(option); 
    onSelect(option); 
    setIsOpen(false); 
  };

  return (
    <DropdownContainer>
      <DropdownButton onClick={toggleDropdown}>
        {selectedOption !== null ? selectedOption : placeholder}
        <Chevron isOpen={isOpen} />
      </DropdownButton>
      {isOpen && (
        <DropdownList>
          {options.map((option, index) => (
            <DropdownItem key={index} onClick={() => handleSelectOption(option)}>
              {option}
            </DropdownItem>
          ))}
        </DropdownList>
      )}
    </DropdownContainer>
  );
};
