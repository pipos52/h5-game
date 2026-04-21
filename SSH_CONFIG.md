# GitHub SSH 密钥配置

## 密钥信息
- **类型**: ED25519
- **私钥**: `~/.ssh/id_ed25519_github`
- **公钥**: `~/.ssh/id_ed25519_github.pub`
- **指纹**: `SHA256:6nPgGtrSCyw+vyOod+vM9nPlbqLD3/7UCh/yV7ozUwQ`

## 配置文件
`~/.ssh/config`:
```
Host github.com
    HostName github.com
    User git
    IdentityFile ~/.ssh/id_ed25519_github
    StrictHostKeyChecking accept-new
    AddKeysToAgent yes
```

## 已部署项目
- **仓库**: https://github.com/pipos52/h5-game
- **分支**: main
- **状态**: 已推送，GitHub Actions 自动构建中

## 使用方式
以后推送代码只需：
```bash
git push origin main
```

无需密码！🔑

---
*配置时间：2026-04-21*
*配置人：Bibos 🎮*
