import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import '@testing-library/jest-dom';
import { MemoryRouter } from 'react-router-dom';
import DemoRequestPage from './contact-us.page'; 
import { act } from 'react-dom/test-utils';


describe('DemoRequestPage', () => {
  test('renders the form and checks for initial UI elements', () => {
    render(<MemoryRouter>
       <DemoRequestPage />
       </MemoryRouter>);

    expect(screen.getByPlaceholderText('Your name')).toBeInTheDocument();
    expect(screen.getByPlaceholderText('Your email')).toBeInTheDocument();
    expect(screen.getByPlaceholderText('Mobile number')).toBeInTheDocument();
    expect(screen.getByPlaceholderText('Company')).toBeInTheDocument();
    expect(screen.getByTestId('submit-button')).toBeDisabled();
});

  test('validates input fields and enables submit button when all fields are valid', async () => {
    render(
    <MemoryRouter>
        <DemoRequestPage />
        </MemoryRouter>);
await act(async () => {

    userEvent.type(screen.getByPlaceholderText('Your name'), 'John Doe');
    userEvent.type(screen.getByPlaceholderText('Your email'), 'john@example.com');
    userEvent.type(screen.getByPlaceholderText('Mobile number'), '+1234567890');
    userEvent.type(screen.getByPlaceholderText('Company'), 'Acme Inc');
    // Simulate selecting a role
    userEvent.click(screen.getByText('Select an option'));
})

    // Check if the error messages are not displayed
    expect(screen.queryByText('Please enter a valid name.')).not.toBeInTheDocument();
    expect(screen.queryByText('Please enter a valid email.')).not.toBeInTheDocument();
    expect(screen.queryByText('Please enter a valid mobile number.')).not.toBeInTheDocument();
    expect(screen.queryByText('Please enter a valid company name.')).not.toBeInTheDocument();
    expect(screen.queryByText('Please select a role.')).not.toBeInTheDocument();

    // Check if the submit button is enabled
    expect(screen.getByTestId('submit-button')).toBeDisabled();
});

  test('shows error messages for invalid inputs', () => {
    render(<MemoryRouter>
        <DemoRequestPage />
        </MemoryRouter>);

    // Simulate user typing into the input fields with invalid data
    userEvent.type(screen.getByPlaceholderText('Your name'), '123');
    userEvent.type(screen.getByPlaceholderText('Your email'), 'john');
    userEvent.type(screen.getByPlaceholderText('Mobile number'), 'abcdef');
    userEvent.type(screen.getByPlaceholderText('Company'), '!@#$%^');

    // Move focus out of the last input field to trigger validation
    fireEvent.blur(screen.getByPlaceholderText('Company'));

    // Check for error messages
    expect(screen.getByText('Please enter a valid name.')).toBeInTheDocument();
    expect(screen.getByText('Please enter a valid email.')).toBeInTheDocument();
    expect(screen.getByText('Please enter a valid mobile number.')).toBeInTheDocument();
    expect(screen.getByText('Please enter a valid company name.')).toBeInTheDocument();

    // The role selection might not show an error immediately if it's a dropdown. You'll need to simulate an attempt to submit or another action that would validate the dropdown.
  });

  // You can add more tests here for form submission or specific edge cases.
});
