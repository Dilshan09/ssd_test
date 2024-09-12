import { render, screen, waitFor } from '@testing-library/react';
import userEvent from '@testing-library/user-event'; // for user interactions

import MarsRoverPhotos from '../MarsRover'; // Assuming the file is in the same directory

describe('MarsRoverPhotos component', () => {

  // Test 3: Renders Loading State Initially
  test('should render loading state initially', () => {
    render(<MarsRoverPhotos />);
    const loadingSpinner = screen.getByRole('status'); // Find element with role="status"
    expect(loadingSpinner).toBeInTheDocument();
  });

  // Test 4: Renders Error State if Data Fetching Fails (Simple)
  test('should render error state if data fetching fails (simple)', async () => {
    // Mock axios to simulate an error (replace with more complex mocking if needed)
    jest.spyOn(axios, 'get').mockRejectedValue(new Error('Network Error'));
    render(<MarsRoverPhotos />);
    await waitFor(() => expect(screen.getByText('Error')).toBeInTheDocument()); // Simple check for any error message
  });
});
