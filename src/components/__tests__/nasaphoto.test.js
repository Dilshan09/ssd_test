import { render } from '@testing-library/react';
import NasaPhoto from '../NasaPhoto';

describe('NasaPhoto component', () => {
    test('should render without crashing', () => {
      render(<NasaPhoto />);
    });
  
    // test('should display the image date', async () => {
    //   render(<NasaPhoto />);
    //   const date = await waitFor(() => screen.getByText('2023-03-15'));
    //   expect(date).toBeInTheDocument();
    // });
  });