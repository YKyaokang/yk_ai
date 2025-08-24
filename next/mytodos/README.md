# Next.js

## supbase 

## 数据库开发
- ORM 工具
    不需要写SQL,向操作对象一样去操作数据库
    Prisma 

## Prisma? 数据库的工程化
是命令行工具，用于管理数据库 schema、迁移
schema 是数据库的结构蓝图，定义了表、字段、数据类型、关系和约束等阻止方式（不需要写SQL）
Migration 数据库结构变更（建表、改字段） 等
不止可以帮助我们操作数据库，还可以为我们的数据库操作留下记录。
npx prisma init
npx prisma migrate dev --name init

## 实操
.env设置需要连接的数据库
schema.prisma 进行写即将迁移的数据库
npx prisma migrate(迁移 上个状态 -> 下个状态) dev --name init 数据库迁移