// Jest 单元测试示例
import Header from '../../src/components/Header';
import { render } from '@testing-library/react';

test('renders header', () => {
    const { getByText } = render(<Header />);
    const linkElement = getByText(/个人网站/i);
    expect(linkElement).toBeInTheDocument();
});
