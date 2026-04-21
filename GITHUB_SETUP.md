# GitHub 仓库配置指南

## 📦 项目结构

```
h5-game/
├── .github/
│   └── workflows/
│       └── build.yml          # GitHub Actions 工作流
├── src/
│   ├── index.html            # 主页面
│   ├── css/
│   │   └── style.css         # 样式
│   └── js/
│       ├── main.js           # 入口
│       └── game.js           # 游戏逻辑
├── package.json              # 依赖配置
├── capacitor.config.json     # Capacitor 配置
├── .gitignore               # Git 忽略规则
└── README.md                # 项目说明
```

## 🚀 部署步骤

### 1. 初始化 Git 仓库
```bash
cd h5-game
git init
git add .
git commit -m "Initial commit: H5 game project"
```

### 2. 创建 GitHub 仓库
1. 访问 https://github.com/new
2. 输入仓库名称（如：`h5-game`）
3. 选择 Public 或 Private
4. 不要勾选 "Add README"（已有 README.md）
5. 点击 "Create repository"

### 3. 关联远程仓库
```bash
# 替换为你的 GitHub 用户名和仓库名
git remote add origin https://github.com/YOUR_USERNAME/h5-game.git
git branch -M main
git push -u origin main
```

### 4. 配置 GitHub Secrets（可选）
如果需要上传 APK 到 Releases，需要配置：
1. 进入仓库 → Settings → Secrets and variables → Actions
2. 添加 `GH_PAT` (GitHub Personal Access Token)
   - 需要权限：`repo` (完整控制私有仓库)

### 5. 自动构建
推送代码到 `main` 分支后，GitHub Actions 会自动：
- 拉取代码
- 安装依赖
- 添加 Android 平台
- 构建 APK
- 上传构建产物

## 🔐 密钥配置

### GitHub Personal Access Token (GH_PAT)
**用途**: 用于 GitHub API 认证和上传 Releases

**生成步骤**:
1. GitHub → Settings → Developer settings → Personal access tokens → Tokens (classic)
2. 点击 "Generate new token (classic)"
3. 勾选权限：
   - `repo` (Full control of private repositories)
   - `public_repo` (For public repositories)
4. 生成并复制 token
5. 在 GitHub Actions Secrets 中添加：`GH_PAT=your_token_here`

## 📝 注意事项

1. **首次构建时间**: 约 5-10 分钟（需要下载 Android SDK）
2. **构建产物**: APK 文件在 Actions → Build → Download artifact
3. **自动发布**: 可配置自动上传到 GitHub Releases
4. **环境变量**: 敏感信息使用 Secrets，不要硬编码在代码中

## 🎮 下一步

- 测试本地开发：`npm run dev`
- 添加 Android 平台：`npx cap add android`
- 同步更改：`npx cap sync`

---
*配置时间：2026-04-21*
*配置人：Bibos 🎮*
