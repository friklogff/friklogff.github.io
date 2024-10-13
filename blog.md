[github页面绑定域名/Domain‘s DNS record could not be retrieved](https://blog.csdn.net/weixin_43645287/article/details/109603945)
[如何使用Github Page搭建个人网站【踩坑实录&多图预警】](https://blog.csdn.net/WHYbeHERE/article/details/140378572)
[利用cloudflare搭建gh-proxy加速github](https://blog.csdn.net/lzyaks/article/details/139929807)
要将 us.kg 域名通过 Cloudflare 指向 GitHub Pages，你需要按照以下步骤操作：

1. **获取域名**：首先，确保你拥有一个 us.kg 域名。如果没有，你需要购买一个。us.kg 是一个免费提供二级域名注册的服务，你可以访问它们的官方网站进行注册 。

2. **设置 Cloudflare 账户**：注册并登录 Cloudflare 账户。在 Cloudflare Dashboard 中添加你的 us.kg 域名。

3. **更新域名的 DNS 服务器**：在域名注册商处将你的 us.kg 域名的 DNS 服务器更新为 Cloudflare 提供的服务器。这样，你的域名解析就会通过 Cloudflare 来管理。

4. **添加 DNS 记录**：在 Cloudflare 的 DNS 设置中，为你的域名添加 A 记录，指向 GitHub Pages 的 IP 地址。GitHub Pages 有四个静态 IP 地址，你需要将它们全部添加为 A 记录 。

5. **配置 GitHub Pages**：在你的 GitHub 仓库中设置 GitHub Pages，并在设置中指定你的自定义域名（即你的 us.kg 域名）。

6. **添加 CNAME 文件**：在你的 GitHub 仓库的根目录中添加一个 CNAME 文件，里面写上你的自定义域名。

7. **启用 HTTPS**：Cloudflare 提供免费的 SSL/TLS 证书，确保你的网站通过 HTTPS 提供服务。

8. **等待 DNS 记录生效**：更改 DNS 记录后，可能需要一些时间来全球生效。

9. **检查配置**：在 GitHub Pages 设置中检查自定义域名的 DNS 记录是否正确，确保没有错误。

完成以上步骤后，你的 us.kg 域名就应该通过 Cloudflare 指向你的 GitHub Pages 了。这样设置后，你的网站不仅可以利用 Cloudflare 的 CDN 加速，还能通过 HTTPS 提供更安全的服务 。



## GitHub Pages 绑定域名并通过 Cloudflare 加速的步骤


### 1. 获取免费域名

#### 1.1 注册账号
首先，你需要访问US.KG域名注册网站 (https://register.us.kg/) 并点击“Sign up”注册一个新账号。在注册过程中，你需要提供一些基本信息，包括用户名、法定全名、邮箱、电话和详细地址。请注意，邮箱不可以使用临时邮箱，其余信息可以使用美国信息生成器生成。完成注册信息填写后，你需要进行邮箱验证。

#### 1.2. 完成KYC验证
注册账号后，你可能需要完成KYC（Know Your Customer）验证。目前有两种方法可以通过验证：
- 方法一：内容可以任意填写，图片也可以随意上传一张，系统会自动通过审核。
- 方法二：使用身份信息生成工具生成个人信息并截图保存为KYC文件。选择KYC方式为“Upload KYC Document(Not Recommended & Legacy)”，填写相关信息，包括注册域名的目的（例如填写“blog”），文档类型（例如填写“proof of address”），并上传KYC文件。提交后等待提示“Successful!”即可 。

#### 1.3. 申请域名
完成KYC验证后，你可以登录到后台，点击左侧的“Domain Registration”开始申请域名。输入你想要注册的域名，检查其可用性。如果域名可用，你将被引导至注册页面，在这里你需要填写DNS信息。你可以使用Cloudflare的DNS，这将允许你利用Cloudflare的服务进行域名解析和管理 。

#### 1.4. 设置DNS
在Cloudflare上添加你的域名，并选择“Free”套餐。复制Cloudflare提供的名称服务器（NS）记录，并将其粘贴到US.KG域名注册页面的相应位置。完成这些步骤后，你的域名申请就成功了。

#### 1.5. 续期域名
需要注意的是，US.KG域名是永久免费的，但每年需要提前180天手动续期一次。因此，你需要记得在域名到期前进行续期操作，以保持域名的活跃状态 。

通过以上步骤，你可以成功获取一个免费的US.KG域名，并利用Cloudflare进行域名解析和管理。


### 2. 从 CodePen 获取可用代码
#### 2.1 访问 CodePen 网站
打开浏览器，访问 [CodePen](https://codepen.io/) 网站。

#### 2.2 选择或创建你的项目
在 CodePen 上，你可以选择一个现有的项目，或者创建一个新的项目。如果你有一个现成的项目，可以直接选择它；如果没有，可以创建一个新的项目并编写你的代码。

#### 2.3 下载项目代码
在项目页面，点击“Export”按钮，选择“Export .zip”选项，将项目代码下载到你的本地计算机。

#### 2.4 将代码上传到 GitHub 仓库
1. 创建一个新的 GitHub 仓库。
2. 将下载的代码解压缩，并将文件上传到 GitHub 仓库中。
3. 确保代码文件位于仓库的根目录或指定的分支（如 `gh-pages` 分支）。

### 3. 配置 GitHub Pages
#### 3.1 在 GitHub 仓库中设置 GitHub Pages
1. 进入你的 GitHub 仓库。
2. 点击“Settings”选项卡。
3. 向下滚动到“GitHub Pages”部分。
4. 在“Source”下拉菜单中选择你要发布的分支（如 `main` 或 `gh-pages`）。
5. 点击“Save”按钮。

#### 3.2 添加 CNAME 文件
1. 在你的 GitHub 仓库中，创建一个名为 `CNAME` 的文件。
2. 在 `CNAME` 文件中添加你的自定义域名（如 `example.us.kg`）。
3. 提交并推送 `CNAME` 文件到你的 GitHub 仓库。

### 4. 配置 Cloudflare
#### 4.1 注册并登录 Cloudflare
1. 访问 [Cloudflare](https://www.cloudflare.com/) 网站。
2. 注册一个新账户或登录你的现有账户。

#### 4.2 在域名注册商处更新 DNS 服务器
1. 在 Cloudflare 控制面板中，添加你的域名。
2. Cloudflare 会提供两个新的 DNS 服务器地址。
3. 登录你的域名注册商的管理面板，更新 DNS 服务器地址为 Cloudflare 提供的地址。

#### 4.3 在 Cloudflare DNS 设置中添加 A 记录
1. 在 Cloudflare 控制面板中，选择你的域名。
2. 进入“DNS”选项卡。
3. 添加一个新的 A 记录，将你的域名指向 GitHub Pages 的 IP 地址（通常是 `185.199.108.153`、`185.199.109.153`、`185.199.110.153` 或 `185.199.111.153`）。

#### 4.4 使用 Cloudflare 提供的免费 SSL/TLS 证书
1. 在 Cloudflare 控制面板中，选择你的域名。
2. 进入“SSL/TLS”选项卡。
3. 选择“Flexible”或“Full”模式，以启用 SSL/TLS 证书。

#### 4.5 更改 DNS 记录后等待全球生效
更改 DNS 记录后，通常需要等待几分钟到几小时，以便全球 DNS 服务器更新并生效。

#### 4.6 在 GitHub Pages 设置中检查 DNS 记录
1. 返回 GitHub 仓库的“Settings”选项卡。
2. 在“GitHub Pages”部分，确保你的自定义域名已经正确配置。

#### 4.7 访问你的自定义域名
在浏览器中输入你的自定义域名（如 `example.us.kg`），确保网站正常加载。

#### 4.8 配置 Cloudflare 的缓存和安全设置
1. 在 Cloudflare 控制面板中，选择你的域名。
2. 进入“Caching”选项卡，配置缓存策略。
3. 进入“Firewall”选项卡，配置安全设置，如防火墙规则和速率限制。

