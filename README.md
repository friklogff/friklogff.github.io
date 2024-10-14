# 单页布局动画网站

这是一个具有复杂链式动画的单页布局网站的项目。它展示了一个全屏布局，每个部分都有背景图片、标题和内容，以及平滑的动画效果。

## 目录结构

```
dist/                 # 构建或部署后的文件目录
├── index.html        # 构建后的主页文件
├── script.js         # 构建后的JavaScript文件
└── style.css         # 构建后的CSS样式表

.gitignore           # 排除Git跟踪的文件列表
404.html             # 错误页面，用于显示404错误
blog.md              # 可能用于博客文章的Markdown文件
CNAME                # 用于配置网站的自定义域名
index.html           # 网站的主页文件
LICENSE              # 项目的许可证文件
README.md            # 项目的说明文件
styles.css           # 定义网站样式的CSS文件
_config.yml          # 配置文件，用于静态站点生成器
```

## 搭建指南

1. 从0开始搭建
- [访问我的博客](https://friklogff.blog.csdn.net/article/details/142590747)
- [LICENSE](..%2F..%2FDownloads%2Ftest-main%2FLICENSE)[访问blog.md](./blog.md)
2. 克隆仓库到本地：
   ```
   git clone https://github.com/yourusername/your-project.git
   ```
3. 打开`index.html`文件在浏览器中查看效果。

## 使用说明

- 打开根目录下的`index.html`文件，页面将自动重定向到`dist/index.html`。
- 浏览不同的部分，点击可以展开更多内容。
- 使用页面右上角的关闭按钮可以关闭当前展开的部分。

## 功能特性

- **自动重定向**：根目录下的`index.html`包含一个元标签，用于在页面加载时重定向到`dist/index.html`。
- **加载动画**：使用CSS动画实现的加载效果，显示在页面重定向期间。
- **响应式布局**：使用百分比宽度和高度，确保在不同设备上都能良好显示。
- **平滑动画**：使用CSS过渡和变换实现平滑的动画效果。
- **交互性**：使用JavaScript添加了点击事件监听器，允许用户与页面互动。

## 贡献

欢迎任何形式的贡献，包括但不限于代码提交、bug报告、功能请求等。请通过GitHub Issues或Pull Requests提交您的贡献。

## 许可证

本项目采用 MIT 许可证，详见 `LICENSE` 文件。

