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
