// Jest 单元测试示例
import Footer from '../../src/components/Footer';
import { render } from '@testing-library/react';

test('renders footer', () => {
    const { getByText } = render(<Footer />);
    const linkElement = getByText(/2023 个人网站/i);
    expect(linkElement).toBeInTheDocument();
});
