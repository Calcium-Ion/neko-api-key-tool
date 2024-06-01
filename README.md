> 该项目需配合NewAPI才能正常使用：[https://github.com/Calcium-Ion/new-api](https://github.com/Calcium-Ion/new-api)

<div align="center">

<h1 align="center">Neko API Key Tool</h1>

NewAPI 令牌查询页

[![Deploy with Vercel](https://vercel.com/button)](https://vercel.com/new/aiass1s-projects/clone?repository-url=https%3A%2F%2Fgithub.com%2FAI-ASS%2Fneko-api-key-tool&env=REACT_APP_SHOW_DETAIL&env=REACT_APP_SHOW_BALANCE&env=REACT_APP_BASE_URL&project-name=neko-api-key-tool&repository-name=neko-api-key-tool)

</div>

![image](img.png)


### 使用方法

1. 准备好你的 [NewAPI项目](https://github.com/Calcium-Ion/new-api);
2. 点击右侧按钮开始部署：
   [![Deploy with Vercel](https://vercel.com/button)](https://vercel.com/new/aiass1s-projects/clone?repository-url=https%3A%2F%2Fgithub.com%2FAI-ASS%2Fneko-api-key-tool&env=REACT_APP_SHOW_DETAIL&env=REACT_APP_SHOW_BALANCE&env=REACT_APP_BASE_URL&project-name=neko-api-key-tool&repository-name=neko-api-key-tool)，直接使用 Github 账号登录即可，记得在环境变量页填入 `REACT_APP_SHOW_BALANCE` （是否展示令牌信息，true 或 false） 和 `REACT_APP_SHOW_DETAIL` （是否展示调用详情，true 或 false） 和 `REACT_APP_BASE_URL` （你的NewAPI项目地址）；
3. 部署完毕后，即可开始使用；
4. （可选）[绑定自定义域名](https://vercel.com/docs/concepts/projects/domains/add-a-domain)：Vercel 分配的域名 DNS 在某些区域被污染了，绑定自定义域名即可直连。

### 二次开发
复制.env.example文件为.env
```
cp .env.example .env
```
修改.env文件中的配置
```
# 展示使用明细
REACT_APP_SHOW_DETAIL=true

# 展示余额
REACT_APP_SHOW_BALANCE=true

# BaseURL 结尾不要带/
REACT_APP_BASE_URL=https://nekoapi.com
```

