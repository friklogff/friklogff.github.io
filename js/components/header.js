// 头部脚本
document.addEventListener('DOMContentLoaded', function() {
    const header = document.querySelector('header');
    header.innerHTML = `
        <h1>个人网站</h1>
        <nav>
            <ul>
                <li><a href="index.html">首页</a></li>
                <li><a href="pages/about.html">关于我</a></li>
                <li><a href="pages/projects.html">项目</a></li>
            </ul>
        </nav>
    `;
});
