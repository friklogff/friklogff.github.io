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
