// Jest 集成测试示例
import { render } from '@testing-library/react';
import App from '../../src/App';

test('renders homepage', () => {
    const { getByText } = render(<App />);
    const linkElement = getByText(/个人网站/i);
    expect(linkElement).toBeInTheDocument();
});
