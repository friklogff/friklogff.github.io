import React from 'react';
import { render } from '@testing-library/react';
import Header from '../../src/components/Header';
import Footer from '../../src/components/Footer';

test('renders homepage with header and footer', () => {
  const { getByText } = render(
    <div>
      <Header />
      <main>
        <h1>欢迎来到我的个人网站</h1>
        <p>这是一个简单的个人网站示例。</p>
      </main>
      <Footer />
    </div>
  );

  const headerElement = getByText(/我的个人网站/i);
  const footerElement = getByText(/2023 我的个人网站/i);
  expect(headerElement).toBeInTheDocument();
  expect(footerElement).toBeInTheDocument();
});
