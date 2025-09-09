function reverseListRecursive(head) {

    if(!head || !head.next)
    {
        return head;
    }

    //递归调用 交给下一个
    // 回溯？
    const newHead = reverseListRecursive(head.text);
    head.next.next = head;
    head.next = null;
    return newHead
}