import { render, screen } from '@testing-library/react';
import App from './App';
 
describe("<TrendingSongs />", () => {
 
  test('render email input', () => {
    render(<App />);

    screen.debug();
  });
  
});