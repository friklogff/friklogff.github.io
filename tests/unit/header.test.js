import React from 'react';
import { render } from '@testing-library/react';
import Header from '../../src/components/Header';

test('renders header with correct content', () => {
  const { getByText } = render(<Header />);
  const headerElement = getByText(/我的个人网站/i);
  expect(headerElement).toBeInTheDocument();
});
