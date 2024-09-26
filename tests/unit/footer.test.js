import React from 'react';
import { render } from '@testing-library/react';
import Footer from '../../src/components/Footer';

test('renders footer with correct content', () => {
  const { getByText } = render(<Footer />);
  const footerElement = getByText(/2023 我的个人网站/i);
  expect(footerElement).toBeInTheDocument();
});
