好的，下面是一个简化的个人网站代码目录结构，并附上每个文件的具体代码示例。由于篇幅限制，我会提供一些关键文件的代码示例，其他文件可以根据需要进行扩展。

### 1. `index.html`

```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>个人网站</title>
    <link rel="stylesheet" href="css/styles.css">
</head>
<body>
    <header>
        <!-- 包含头部内容 -->
        <script src="js/components/header.js"></script>
    </header>
    <main>
        <h1>欢迎来到我的个人网站</h1>
        <p>这是一个简单的个人网站示例。</p>
    </main>
    <footer>
        <!-- 包含底部内容 -->
        <script src="js/components/footer.js"></script>
    </footer>
    <script src="js/script.js"></script>
</body>
</html>
```

### 2. `css/styles.css`

```css
/* 主要样式表 */
body {
    font-family: Arial, sans-serif;
    margin: 0;
    padding: 0;
    background-color: #f4f4f4;
}

header, footer {
    background-color: #333;
    color: #fff;
    text-align: center;
    padding: 1em 0;
}

main {
    padding: 2em;
    text-align: center;
}
```

### 3. `css/responsive.css`

```css
/* 响应式设计样式表 */
@media (max-width: 600px) {
    header, footer {
        padding: 1em;
    }

    main {
        padding: 1em;
    }
}
```

### 4. `js/script.js`

```javascript
// 主要 JavaScript 脚本
document.addEventListener('DOMContentLoaded', function() {
    console.log('页面加载完成');
});
```

### 5. `js/components/header.js`

```javascript
// 头部组件 JavaScript
document.addEventListener('DOMContentLoaded', function() {
    const header = document.querySelector('header');
    header.innerHTML = `
        <div class="header-content">
            <h1>我的个人网站</h1>
            <nav>
                <a href="index.html">首页</a>
                <a href="pages/about.html">关于</a>
                <a href="pages/projects.html">项目</a>
            </nav>
        </div>
    `;
});
```

### 6. `js/components/footer.js`

```javascript
// 底部组件 JavaScript
document.addEventListener('DOMContentLoaded', function() {
    const footer = document.querySelector('footer');
    footer.innerHTML = `
        <div class="footer-content">
            <p>&copy; 2023 我的个人网站</p>
        </div>
    `;
});
```

### 7. `pages/about.html`

```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>关于我</title>
    <link rel="stylesheet" href="../css/styles.css">
</head>
<body>
    <header>
        <!-- 包含头部内容 -->
        <script src="../js/components/header.js"></script>
    </header>
    <main>
        <h1>关于我</h1>
        <p>这是关于我的页面。</p>
    </main>
    <footer>
        <!-- 包含底部内容 -->
        <script src="../js/components/footer.js"></script>
    </footer>
    <script src="../js/script.js"></script>
</body>
</html>
```

### 8. `pages/projects.html`

```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>我的项目</title>
    <link rel="stylesheet" href="../css/styles.css">
</head>
<body>
    <header>
        <!-- 包含头部内容 -->
        <script src="../js/components/header.js"></script>
    </header>
    <main>
        <h1>我的项目</h1>
        <p>这是我的项目页面。</p>
    </main>
    <footer>
        <!-- 包含底部内容 -->
        <script src="../js/components/footer.js"></script>
    </footer>
    <script src="../js/script.js"></script>
</body>
</html>
```

### 9. `includes/header.html`

```html
<div class="header-content">
    <h1>我的个人网站</h1>
    <nav>
        <a href="index.html">首页</a>
        <a href="pages/about.html">关于</a>
        <a href="pages/projects.html">项目</a>
    </nav>
</div>
```

### 10. `includes/footer.html`

```html
<div class="footer-content">
    <p>&copy; 2023 我的个人网站</p>
</div>
```

### 11. `vendor/bootstrap/`

你可以从 [Bootstrap 官方网站](https://getbootstrap.com/)下载最新版本的 Bootstrap，并将其解压到 `vendor/bootstrap/` 目录中。

### 12. `.gitignore`

```
# Node modules
node_modules/

# Build artifacts
dist/
build/

# Logs
logs
*.log

# npm debug logs
npm-debug.log*
yarn-debug.log*
yarn-error.log*

# Editor directories and files
.vscode/
.idea/
*.suo
*.ntvs*
*.njsproj
*.sln
*.sw?
```

### 13. `package.json`

```json
{
  "name": "personal-website",
  "version": "1.0.0",
  "description": "个人网站",
  "main": "index.html",
  "scripts": {
    "start": "webpack serve --open",
    "build": "webpack --mode production",
    "test": "jest"
  },
  "author": "Your Name",
  "license": "MIT",
  "devDependencies": {
    "babel-loader": "^8.2.2",
    "jest": "^27.0.6",
    "webpack": "^5.38.1",
    "webpack-cli": "^4.7.0",
    "webpack-dev-server": "^3.11.2"
  }
}
```

### 14. `webpack.config.js`

```javascript
const path = require('path');

module.exports = {
  entry: './src/index.js',
  output: {
    filename: 'bundle.js',
    path: path.resolve(__dirname, 'dist'),
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
        },
      },
      {
        test: /\.scss$/,
        use: ['style-loader', 'css-loader', 'sass-loader'],
      },
    ],
  },
  devServer: {
    contentBase: path.join(__dirname, 'dist'),
    compress: true,
    port: 9000,
  },
};
```

### 15. `babel.config.js`

```javascript
module.exports = {
  presets: [
    '@babel/preset-env',
  ],
};
```

### 16. `jest.config.js`

```javascript
module.exports = {
  testEnvironment: 'jsdom',
  transform: {
    '^.+\\.js$': 'babel-jest',
  },
};
```

### 17. `.eslintrc.js`

```javascript
module.exports = {
  env: {
    browser: true,
    es2021: true,
  },
  extends: [
    'eslint:recommended',
    'plugin:react/recommended',
    'plugin:prettier/recommended',
  ],
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
    },
    ecmaVersion: 12,
    sourceType: 'module',
  },
  plugins: [
    'react',
    'prettier',
  ],
  rules: {
    'prettier/prettier': 'error',
  },
};
```

### 18. `.prettierrc`

```json
{
  "semi": true,
  "singleQuote": true,
  "printWidth": 80,
  "tabWidth": 2,
  "trailingComma": "es5"
}
```

### 19. `src/components/Header.js`

```javascript
import React from 'react';

const Header = () => {
  return (
    <header>
      <div className="header-content">
        <h1>我的个人网站</h1>
        <nav>
          <a href="index.html">首页</a>
          <a href="pages/about.html">关于</a>
          <a href="pages/projects.html">项目</a>
        </nav>
      </div>
    </header>
  );
};

export default Header;
```

### 20. `src/components/Footer.js`

```javascript
import React from 'react';

const Footer = () => {
  return (
    <footer>
      <div className="footer-content">
        <p>&copy; 2023 我的个人网站</p>
      </div>
    </footer>
  );
};

export default Footer;
```

### 21. `src/styles/main.scss`

```scss
@import 'variables';
@import 'mixins';

body {
  font-family: $font-family;
  margin: 0;
  padding: 0;
  background-color: $background-color;
}

header, footer {
  background-color: $header-footer-bg;
  color: $header-footer-color;
  text-align: center;
  padding: 1em 0;
}

main {
  padding: 2em;
  text-align: center;
}
```

### 22. `src/styles/_variables.scss`

```scss
$font-family: Arial, sans-serif;
$background-color: #f4f4f4;
$header-footer-bg: #333;
$header-footer-color: #fff;
```

### 23. `src/styles/_mixins.scss`

```scss
@mixin flex-center {
  display: flex;
  justify-content: center;
  align-items: center;
}
```

### 24. `tests/unit/header.test.js`

```javascript
import React from 'react';
import { render } from '@testing-library/react';
import Header from '../../src/components/Header';

test('renders header with correct content', () => {
  const { getByText } = render(<Header />);
  const headerElement = getByText(/我的个人网站/i);
  expect(headerElement).toBeInTheDocument();
});
```

### 25. `tests/unit/footer.test.js`

```javascript
import React from 'react';
import { render } from '@testing-library/react';
import Footer from '../../src/components/Footer';

test('renders footer with correct content', () => {
  const { getByText } = render(<Footer />);
  const footerElement = getByText(/2023 我的个人网站/i);
  expect(footerElement).toBeInTheDocument();
});
```

### 26. `tests/integration/homepage.test.js`

```javascript
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
```

### 27. `docs/README.md`

```markdown
# 个人网站

这是一个简单的个人网站示例。

## 项目结构

```
root/
│
├── index.html
│
├── css/
│   ├── styles.css
│   ├── responsive.css
│   ├── components/
│       ├── header.css
│       ├── footer.css
│
├── js/
│   ├── script.js
│   ├── components/
│       ├── header.js
│       ├── footer.js
│   ├── plugins/
│       ├── jquery.min.js
│
├── images/
│   ├── logo.png
│   ├── background.jpg
│
├── fonts/
│   ├── fontawesome/
│
├── pages/
│   ├── about.html
│   ├── projects.html
│
├── includes/
│   ├── header.html
│   ├── footer.html
│
├── vendor/
│   ├── bootstrap/
│
├── src/
│   ├── components/
│       ├── Header.js
│       ├── Footer.js
│   ├── styles/
│       ├── main.scss
│       ├── _variables.scss
│       ├── _mixins.scss
│
├── tests/
│   ├── unit/
│       ├── header.test.js
│       ├── footer.test.js
│   ├── integration/
│       ├── homepage.test.js
│
├── docs/
│   ├── README.md
│   ├── CONTRIBUTING.md
│   ├── API.md
│
├── .gitignore
├── package.json
├── webpack.config.js
├── babel.config.js
├── jest.config.js
├── .eslintrc.js
├── .prettierrc
```

## 安装依赖

```bash
npm install
```

## 启动开发服务器

```bash
npm start
```

## 构建项目

```bash
npm run build
```

## 运行测试

```bash
npm test
```
```

### 28. `docs/CONTRIBUTING.md`

```markdown
# 贡献指南

感谢您对项目的贡献！请按照以下步骤进行贡献：

1. **Fork 仓库**：在 GitHub 上 fork 本仓库。
2. **克隆仓库**：将 fork 的仓库克隆到本地。
3. **创建分支**：在本地仓库中创建一个新的分支。
4. **提交代码**：在新分支中进行代码修改，并提交。
5. **提交 Pull Request**：将修改提交到原仓库，并创建一个 Pull Request。

请确保代码符合项目的编码规范，并通过所有测试。
```

### 29. `docs/API.md`

```markdown
# API 文档

## 组件

### Header

```javascript
import Header from './components/Header';
```

### Footer

```javascript
import Footer from './components/Footer';
```

## 样式

### 变量

```scss
$font-family: Arial, sans-serif;
$background-color: #f4f4f4;
$header-footer-bg: #333;
$header-footer-color: #fff;
```

### 混合

```scss
@mixin flex-center {
  display: flex;
  justify-content: center;
  align-items: center;
}
```
```

通过以上代码示例和文件结构，你可以构建一个结构化、可维护和高效的个人网站。如果需要下载第三方库或框架，可以从相应的官方网站获取。