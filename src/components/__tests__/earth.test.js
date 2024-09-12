import { render, screen, waitFor, fireEvent } from '@testing-library/react'
import Earth from '../Earth';


  test('should render Earth component', () => {
    render(<Earth />);
    const selectElements = screen.getAllByRole('combobox');
    expect(selectElements.length).toBe(2);
  });

//   test('should call sendfetch function on button click', () => {
//     const sendfetchMock = jest.fn();
//     render(<Earth sendfetch={sendfetchMock} />);
//     const longitudeSelect = screen.getByRole('combobox', { name: 'Select Longitude' });
//     const latitudeSelect = screen.getByRole('combobox', { name: 'Select Latitude' });
//     const buttonElement = screen.getByText('Fetch Earth Image');
  
//     fireEvent.change(longitudeSelect, { target: { value: '-90' } });
//     fireEvent.change(latitudeSelect, { target: { value: '30' } });
//     fireEvent.click(buttonElement);
  
//     expect(sendfetchMock).toHaveBeenCalledTimes(1);
//   });

//   test('should call sendfetch function on button click with correct longitude and latitude', () => {
//     const sendfetchMock = jest.fn();
//     const longitude = '12';
//     const latitude = '34';
//     render(<Earth sendfetch={sendfetchMock} />);
//     const longitudeSelect = screen.getByRole('combobox', { name: 'Select Longitude' });
//     const latitudeSelect = screen.getByRole('combobox', { name: 'Select Latitude' });
//     fireEvent.change(longitudeSelect, { target: { value: longitude } });
//     fireEvent.change(latitudeSelect, { target: { value: latitude } });
//     const buttonElement = screen.getByText('Fetch Earth Image');
//     fireEvent.click(buttonElement);
//     expect(sendfetchMock).toHaveBeenCalledWith(`https://api.nasa.gov/planetary/earth/assets?lon=${longitude}&lat=${latitude}&api_key=qDIvJaK7d6inIVi5eOk1lSqfvTaRjdeHFodze0QN`);
//   });

//   test('should display error message when fetch fails', async () => {
//     const errorMessage = 'Failed to fetch Earth image';
//     global.fetch = jest.fn(() => Promise.reject(new Error(errorMessage)));
//     const { getByText } = render(<Earth />);
//     const buttonElement = screen.getByText('Fetch Earth Image');
//     fireEvent.click(buttonElement);
//     await waitFor(() => expect(getByText(errorMessage)).toBeInTheDocument());
//   });
// });