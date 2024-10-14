# 现代化网页设计的免费宝藏：GitHub Pages+CodePen+Cloudflare+US.KG
## 前言
在当今数字化时代，个人和企业越来越重视在线形象的建立。GitHub Pages 提供了一个免费且便捷的平台，允许用户托管静态网站。然而，GitHub Pages 默认的域名可能不够个性化，因此，许多用户希望将自定义域名绑定到他们的 GitHub Pages 上。Cloudflare 作为一个全球性的 CDN 和 DNS 服务提供商，可以帮助用户实现这一目标，同时提供额外的安全和性能优化。本文将详细介绍如何将 `us.kg` 域名通过 Cloudflare 指向 GitHub Pages，并确保网站的安全性和高可用性。

# 界面预览
[https://friklogff.us.kg](https://friklogff.us.kg)
[https://friklogff.us.kg/dist/index.html](https://friklogff.us.kg/dist/index.html)
![在这里插入图片描述](https://i-blog.csdnimg.cn/direct/ed4cba97c5934fae8adcb0a6a71d1f5b.png)

![在这里插入图片描述](https://i-blog.csdnimg.cn/direct/0c6b70eabbe145638e689d019838488f.png)

### 0. 注册Github
[https://github.com/signup](https://github.com/signup)
### 1. 获取免费域名

#### 1.1 注册账号
首先，你需要访问US.KG域名注册网站 ([https://register.us.kg/auth/register](https://register.us.kg/auth/register)) 并点击“Sign up”注册一个新账号。在注册过程中，你需要提供一些基本信息，包括用户名、法定全名、邮箱、电话和详细地址。完成注册信息填写后，你需要进行邮箱验证。
![在这里插入图片描述](https://i-blog.csdnimg.cn/direct/1fcdbf80247049f1938385e5812247ee.png)

```c
1000 Santa Monica Blvd, Santa Monica, CA90401, United States
```
![在这里插入图片描述](https://i-blog.csdnimg.cn/direct/f47f17e628fc4034a9253061fb36cd44.png)

邮箱完成验证后登录
[https://register.us.kg/auth/login](https://register.us.kg/auth/login)
![在这里插入图片描述](https://i-blog.csdnimg.cn/direct/6723c5b04dcc408c8efd58a139a52b83.png)



#### 1.2 完成KYC验证

在进行KYC（Know Your Customer）验证时，有多种方法可以选择，每种方法都有其特点和适用场景。以下是三种常见的KYC验证方法：

1. **GitHub KYC Verification (Recommended, Super Fast)**
   这种方法推荐给那些在GitHub上有代码贡献的用户。它利用了区块链技术，特别是零知识证明（zkProofs）和多方计算，以保护用户隐私的同时满足监管要求。这种方法的优势在于它不需要透露所有个人数据细节，而是通过生成零知识证明来确认用户符合年龄等法律相关要求，为年龄限制的服务或产品提供了一种保护隐私的解决方案。这种方法不仅快速，而且能够提供额外的信任层，保护投资者并帮助培养对平台完整性和长期成功的的信心。

2. **Donate $1 or More for Verification (Recommended, Fast)**
   这是一种通过捐赠一定金额（至少1美元）来快速完成验证的方法。这种方法通常被推荐给那些希望通过财务贡献来支持平台或项目，同时快速完成KYC验证的用户。捐赠不仅可以帮助平台或项目的发展，还可以作为用户身份验证的一种方式。

3. **Upload KYC Document (Not Recommended & Legacy)**
   这是一种传统的KYC验证方法，用户需要上传KYC文件，如身份证明、地址证明等。这种方法不推荐使用，因为它可能涉及到更多的个人数据泄露风险，而且处理过程可能更慢，不如前两种方法高效和安全。

在选择KYC验证方法时，建议考虑个人的需求和偏好，以及对隐私保护和验证速度的要求。同时，也要确保所选方法符合相关法律法规和监管要求。

![在这里插入图片描述](https://i-blog.csdnimg.cn/direct/e34d3dbe897b427398c3b211b0f34b6f.png)
![在这里插入图片描述](https://i-blog.csdnimg.cn/direct/c9ebf73ef9a74852b361d49339257b2f.png)
1. 加星
2. Procced to GitHub 前往 GitHub

![在这里插入图片描述](https://i-blog.csdnimg.cn/direct/db47b31d012f4136981c61fba38ead2d.png)
>  KYC Using Your GitHub Account
> 
> **自动化验证要求：**
> 
> - 确保你已经给这个仓库点了星标（Star）。
> - 确保你创建的问题（Issue）标题格式为："Request GitHub KYC - Your US.KG Panel registered email"。这样我们的自动化脚本才能检测到你的注册邮箱。
> - 确保这不是一个新创建的 GitHub 账户；它应该有一些已经存在的仓库（Repositories）和星标（Stars）。
> - 确保这是你的第一个 US.KG NIC Panel 账户。
> - 承诺不会将域名用于犯罪或滥用目的。
> 
> **你的账户详情（US.KG NIC Panel）：**
> 
> 请填写以下信息，否则你的请求将不会被处理：
> 
> - **Username**: `[在这里填写你的 US.KG NIC Panel 用户名]`
> - **Account Registration Email**: `[在这里填写你注册 US.KG NIC Panel 时使用的邮箱地址]`
> - **Reason for Registering the .US.KG Domain Name**: `[在这里说明注册 .US.KG 域名的目的，例如：为了建立个人博客、项目展示网站等]`
> 
> **完成以上步骤后，你需要在 US.KG NIC Panel 的问题跟踪系统中创建一个新的问题（Issue），按照上述格式填写相关信息。自动化脚本将会检测到你的请求，并根据你的 GitHub
> 账户活动来自动批准你的 KYC 验证。**
> 
> 请记住，提供的信息需要真实有效，因为它们将被用来验证你的身份，并确保你符合 US.KG NIC Panel
> 的注册要求。如果你的请求被批准，你将能够继续使用你的 .US.KG 域名。

```c
To establish a personal blog and project showcase website
```
等待一段时间后自动审核结束
![在这里插入图片描述](https://i-blog.csdnimg.cn/direct/40d3e8eaa2ca4922a0de07fd034b205f.png)

#### 1.3 申请域名
完成KYC验证后，你可以登录到后台，点击左侧的“Domain Registration”开始申请域名。输入你想要注册的域名，检查其可用性。如果域名可用，你将被引导至注册页面，在这里你需要填写DNS信息。你可以使用Cloudflare的DNS，这将允许你利用Cloudflare的服务进行域名解析和管理 。
![在这里插入图片描述](https://i-blog.csdnimg.cn/direct/c9686c8f1a7646c08e41866a2021631f.png)
Domain name registration
![在这里插入图片描述](https://i-blog.csdnimg.cn/direct/feaeee34baff4155aec28b1cdf0b0065.png)
#### 1.4 更新名称服务器
![在这里插入图片描述](https://i-blog.csdnimg.cn/direct/3676139cc2834138a84ac7ed127f1e9e.png)
这里先填，后续在#### 3.4 使用 Cloudflare 提供的更新名称服务器可能需要更新
* Name Server 1 
```c
shubhi.ns.cloudflare.com
```
* Name Server 2 
```c
yahir.ns.cloudflare.com
```

#### 1.5 续期域名
需要注意的是，US.KG域名是永久免费的，但每年需要提前180天手动续期一次。因此，你需要记得在域名到期前进行续期操作，以保持域名的活跃状态 。
这里分配的名称服务器可能和我的不同，你可能需要返回[https://register.us.kg/panel/main](https://register.us.kg/panel/main)修改
![在这里插入图片描述](https://i-blog.csdnimg.cn/direct/7c80b8063f734acda60401bfddf257f7.png)
Manage my domains 管理我的域
![在这里插入图片描述](https://i-blog.csdnimg.cn/direct/cc6a1e2eac774af1b514f1bece66131e.png)

![在这里插入图片描述](https://i-blog.csdnimg.cn/direct/411fe03e997748a0855822e9d403e10c.png)
通过以上步骤，你可以成功获取一个免费的US.KG域名，并利用Cloudflare进行域名解析和管理。


### 2. 从 CodePen 获取可用代码
#### 2.1 访问 CodePen 网站
[https://codepen.io/accounts/signup/user/free/](https://codepen.io/accounts/signup/user/free/)
打开浏览器，访问 [CodePen](https://codepen.io/) 网站。
![在这里插入图片描述](https://i-blog.csdnimg.cn/direct/ed00a27a592a431fa006da4afcb35d72.png)
Codepen.io 是一个在线社区，开发者和设计师可以在这里编写代码，预览结果，并分享他们的网页设计和前端代码片段。它支持HTML、CSS和JavaScript，允许用户实时编辑和预览代码。Codepen还提供了丰富的社交功能，用户可以关注其他用户，查看他们的代码，甚至直接在别人的代码基础上进行修改和改进。
#### 2.2 选择或创建你的项目
在 CodePen 上，你可以选择一个现有的项目，或者创建一个新的项目。如果你有一个现成的项目，可以直接选择它；如果没有，可以创建一个新的项目并编写你的代码。

#### 2.3 下载项目代码
在项目页面，点击“Export”按钮，选择“Export .zip”选项，将项目代码下载到你的本地计算机。

#### 2.4 将代码上传到 GitHub 仓库
1. 创建一个新的 GitHub 仓库。
2. 将下载的代码解压缩，并将文件上传到 GitHub 仓库中。
3. 确保代码文件位于仓库的根目录或指定的分支。

我们选用一个简单的加载页面用于接下来的演示
[https://codepen.io/zerospree/pen/XWaGER](https://codepen.io/zerospree/pen/XWaGER)
![在这里插入图片描述](https://i-blog.csdnimg.cn/direct/0a8e72c0126842ab8af4f12a464f8a08.png)
你可以Fork到你的CodePen账号上，或者Export下载到本地

### 3. 配置 GitHub Pages

GitHub Pages 是一个静态网站托管服务，它允许用户直接从 GitHub 仓库托管个人、组织或项目的页面。以下是配置 GitHub Pages 的基本步骤：



#### 3.1 创建仓库
首先，你需要在 GitHub 上创建一个新的仓库，用于托管你的网站内容。通常，这个仓库会以 `username.github.io` 的形式命名，其中 `username` 是你的 GitHub 用户名。
![在这里插入图片描述](https://i-blog.csdnimg.cn/direct/4d97dd07472442f0824a5e265958ef09.png)

#### 3.2 初始化仓库
在本地开发环境中创建你的网站内容。这可以是一个简单的 HTML 文件，也可以是一个完整的静态网站生成器项目。完成后，将这些文件推送到你在 GitHub 上创建的仓库。
这里我选择手动创建index.html、styles.css
![在这里插入图片描述](https://i-blog.csdnimg.cn/direct/6cead65f33a047a091059ed7a549017f.png)
index.html
```html
<!DOCTYPE html>
<html>
<head>
  <link rel="stylesheet" type="text/css" href="styles.css">
</head>
<body>
  <p>Redirecting...</p>
  <div class="load">
    <hr/><hr/><hr/><hr/>
  </div>
</body>
</html>

```

styles.css

```css
body{background:#ECF0F1}

.load{position:absolute;top:50%;left:50%;transform:translate(-50%, -50%);
  /*change these sizes to fit into your project*/
  width:100px;
  height:100px;
}
.load hr{border:0;margin:0;width:40%;height:40%;position:absolute;border-radius:50%;animation:spin 2s ease infinite}

.load :first-child{background:#19A68C;animation-delay:-1.5s}
.load :nth-child(2){background:#F63D3A;animation-delay:-1s}
.load :nth-child(3){background:#FDA543;animation-delay:-0.5s}
.load :last-child{background:#193B48}

@keyframes spin{
  0%,100%{transform:translate(0)}
  25%{transform:translate(160%)}
  50%{transform:translate(160%, 160%)}
  75%{transform:translate(0, 160%)}
}
```
![在这里插入图片描述](https://i-blog.csdnimg.cn/direct/31491853049541ab8dd688cc3d2b4897.png)

![在这里插入图片描述](https://i-blog.csdnimg.cn/direct/7f255d88c97f47a19fd6d6aa1e3e9657.png)


### 4. 配置 Cloudflare进行CDN加速
#### 4.1 注册并登录 Cloudflare
1. 访问 [Cloudflare](https://dash.cloudflare.com/sign-up) 网站。
2. 注册一个新账户或登录你的现有账户。

#### 4.2 在域名注册商处更新 DNS 服务器
1. 在 Cloudflare 控制面板中，添加你的域名。
2. Cloudflare 会提供两个新的 DNS 服务器地址。
3. 登录你的域名注册商的管理面板，更新 DNS 服务器地址为 Cloudflare 提供的地址。
![在这里插入图片描述](https://i-blog.csdnimg.cn/direct/30142ce97acf492faf0f59a2f2a270b1.png)
![在这里插入图片描述](https://i-blog.csdnimg.cn/direct/4655fbe383744063bfcf91b1d663d93a.png)

![在这里插入图片描述](https://i-blog.csdnimg.cn/direct/f9113a7d1dc4442a9178d9ee771fd17a.png)

#### 4.3 在 Cloudflare DNS 设置中添加 A 记录
1. 在 Cloudflare 控制面板中，选择你的域名。
2. 进入“DNS”选项卡。
3. 添加一个新的 A 记录，将你的域名指向 GitHub Pages 的 IP 地址（通常是 `185.199.108.153`、`185.199.109.153`、`185.199.110.153` 或 `185.199.111.153`）。
4. 有许多在线工具可以帮助你查找域名的 IP 地址，例如 [WhatsMyDNS](https://www.whatsmydns.net/) 或 [MXToolbox](https://mxtoolbox.com/DNSLookup.aspx)。
![在这里插入图片描述](https://i-blog.csdnimg.cn/direct/3bd5514458444197bc906b1b6f262d67.png)
![在这里插入图片描述](https://i-blog.csdnimg.cn/direct/45ef68df87e449e181bf02ec60b6e465.png)

![在这里插入图片描述](https://i-blog.csdnimg.cn/direct/876b0e9229b84caeb423139a1b1ce316.png)
![在这里插入图片描述](https://i-blog.csdnimg.cn/direct/fc23f7673efe4a6e92a5a1ca93416417.png)

#### 4.4 使用 Cloudflare 提供的更新名称服务器
![在这里插入图片描述](https://i-blog.csdnimg.cn/direct/0147128b950149c89bffcff7382ec364.png)

* Name Server 1 
```c
shubhi.ns.cloudflare.com
```
* Name Server 2 
```c
yahir.ns.cloudflare.com
```
这里分配的名称服务器可能和我的不同，你可能需要返回[https://register.us.kg/panel/main](https://register.us.kg/panel/main)修改
![在这里插入图片描述](https://i-blog.csdnimg.cn/direct/7c80b8063f734acda60401bfddf257f7.png)
Manage my domains 管理我的域
![在这里插入图片描述](https://i-blog.csdnimg.cn/direct/cc6a1e2eac774af1b514f1bece66131e.png)

![在这里插入图片描述](https://i-blog.csdnimg.cn/direct/411fe03e997748a0855822e9d403e10c.png)


#### 4.5 更改 DNS 记录后等待全球生效
更改 DNS 记录后，通常需要等待几分钟到几小时，以便全球 DNS 服务器更新并生效。

![在这里插入图片描述](https://i-blog.csdnimg.cn/direct/8af8695e1873462498af33607f6824c0.png)

#### 4.6 配置 Cloudflare 的缓存和安全设置
1. 在 Cloudflare 控制面板中，选择你的域名。
2. 进入“Caching”选项卡，配置缓存策略。
3. 进入“Firewall”选项卡，配置安全设置，如防火墙规则和速率限制。
![在这里插入图片描述](https://i-blog.csdnimg.cn/direct/2bc198609a524bd7bfa170fb4b6260a7.png)
![在这里插入图片描述](https://i-blog.csdnimg.cn/direct/20f672e5da8841828a7d8a0a83c149b5.png)




### 5 更新GitHub Pages新域名
#### 5.1 配置域名(添加 CNAME 文件)
如果你有自己的域名，并且想要将其指向你的 GitHub Pages 网站，你需要在你的域名注册商处进行 DNS 设置。将一个 CNAME 记录或 A 记录指向 `username.github.io`，其中 `username` 是你的 GitHub 用户名。

![在这里插入图片描述](https://i-blog.csdnimg.cn/direct/2043957845a943f9931b8a675aab137e.png)
![在这里插入图片描述](https://i-blog.csdnimg.cn/direct/2773dc58109c4c3a81dfc76d9c14c564.png)
等待4.5 更改 DNS 记录后等待全球生效
![在这里插入图片描述](https://i-blog.csdnimg.cn/direct/a1516cba1ebe4c3eaf887c0632ec5f03.png)

![在这里插入图片描述](https://i-blog.csdnimg.cn/direct/a6859d6f83b64c71a5487fd32530b406.png)

![在这里插入图片描述](https://i-blog.csdnimg.cn/direct/ad9205fb023c4c1ea0b176c41020f2d3.png)


## 欢迎加星
🌟 网站持续更新中！
如果你喜欢这个项目，请给它一个星标，你的支持是我们最大的动力。
[https://github.com/friklogff/friklogff.github.io](https://github.com/friklogff/friklogff.github.io)
## 总结
通过本文的指导，用户可以成功地将 `us.kg` 域名通过 Cloudflare 指向他们的 GitHub Pages，实现个性化的域名绑定。这个过程不仅提高了网站的专业性，还通过 Cloudflare 的服务增强了网站的安全性和加载速度。用户需要遵循一系列步骤，包括域名注册、DNS 设置、GitHub 仓库配置和 Cloudflare 的高级设置。完成这些步骤后，用户将拥有一个通过自定义域名访问的、安全且性能优化的 GitHub Pages 网站。如果在操作过程中遇到任何问题，用户可以参考本文的详细说明或寻求进一步的帮助。
