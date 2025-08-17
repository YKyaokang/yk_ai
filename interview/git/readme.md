# git 日常使用

- branch
- git restore
- 提pr 
    如何给开源项目提交pr?



上班 pull主分支 切换到当前分支(通过checkout切换到dev分支) 查看git branch 通过merge将主分支的新更新的内容（同时昨天修改的） 拿到自己的dev分支上，然后 自己对当前项目做了很多修改，然后git push origin main


1. 第一步的 pull 主分支
如果当前已在 main 分支，直接 git pull 是合理的（拉取远程 main 的最新代码）。

如果当前不在 main 分支，需要先切换到 main 分支再拉取：

bash
git checkout main
git pull origin main
2. 切换到 dev 分支
git checkout dev 是正确的（假设 dev 分支已存在）。

如果是新分支，需要先创建并切换：

bash
git checkout -b dev
3. 查看分支
git branch 只是查看本地分支列表，没有问题。

4. 将 main 的更新合并到 dev
这是正确的操作，可以确保 dev 分支基于最新的 main 分支：

bash
git merge main
如果有冲突需要手动解决。

5. 在 dev 分支上修改代码
这是正常开发流程，没有问题。

6. 关键问题：git push origin main
你一直在 dev 分支上开发，但最后却尝试推送 main 分支。

这是错误的，因为：

你没有在 main 分支上修改代码，推送的是旧的 main 分支内容。

直接推送 main 分支可能会覆盖远程的 main 分支（如果强制推送）。

正确的做法是推送 dev 分支：

bash
git push origin dev
如果目的是将 dev 的修改合并到 main，应该：

切换回 main 分支：

bash
git checkout main
合并 dev 到 main：

bash
git merge dev
推送 main：

bash
git push origin main
更规范的流程是通过 Pull Request（PR）或 Merge Request（MR） 在代码托管平台（如 GitHub/GitLab）上完成合并。

正确完整流程：
bash
# 1. 更新 main 分支
git checkout main
git pull origin main

# 2. 切换到 dev 分支（假设已存在）
git checkout dev

# 3. 将 main 的更新合并到 dev
git merge main

# 4. 在 dev 上开发并提交
git add .
git commit -m "你的修改"

# 5. 推送 dev 分支到远程
git push origin dev

# 6. 可选：通过 PR/MR 将 dev 合并到 main（推荐）
为什么不能直接推送 main？
main 分支通常是受保护的主分支，直接推送可能会：

绕过代码审查。

导致未经测试的代码进入生产环境。

引发团队协作冲突。

最佳实践是通过 PR/MR 由团队审核后合并。

