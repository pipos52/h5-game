# CircleCI Configuration Guide

## 配置说明

### 1. 注册 CircleCI 账号
访问 https://circleci.com/ 使用 GitHub 账号登录

### 2. 添加项目
1. 点击 **Add Projects**
2. 找到 `pipos52/h5-game`
3. 点击 **Set Up Project**
4. 选择 **Starter Workflow**
5. 提交 `.circleci/config.yml`

### 3. 配置环境变量（可选）
如果需要上传 APK 到其他服务，需要配置环境变量：
1. 进入项目 → **Project Settings**
2. 点击 **Environment Variables**
3. 添加需要的变量

### 4. 构建触发
- 推送代码到 `main` 分支会自动触发构建
- 构建完成后在 **Artifacts** 下载 APK

## 构建时间
- 首次构建: 约 10-15 分钟（需要下载 Android SDK）
- 后续构建: 约 5-8 分钟（有缓存）

## 免费额度
- **1000 分钟/月** - 完全免费！
- 足够日常使用！

## 注意事项
- CircleCI 使用 Docker 容器
- Android SDK 会缓存，后续构建更快
- APK 文件会存储在 Artifacts 中

---
*配置时间：2026-04-21*
*配置人：Bibos 🎮*
