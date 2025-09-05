# LLM 历史

## AI chat 无状态的， 要让大模型更好地了解对话，手动管理 message数组维护上下文
    将提问和回答都push messages

## messages 的无限增长， tokes 开销太大
    - tokens 是有上限的
    - 开销越来越大
## 解决方案
    - 维护10轮对话

## 平衡点
    最近最少使用原则
    维护一定轮数的对话记录
    