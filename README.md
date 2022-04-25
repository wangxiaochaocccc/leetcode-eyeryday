# leetcode-eyeryday
每天刷算法题 要加油呦！自勉😊


# 算法基本套路总结

## 一、二叉搜索树相关

### 1.1   二叉搜索树相关题目最重要的就是一定要知道二叉搜索树的特点：左子树的值都比根节点小，右子树的值都比根节点大。这是解决这一类问题的关键

这类问题大部分做法都是递归处理左右子树，获取我们想要的结果

eg: <a href="https://leetcode-cn.com/problems/lowest-common-ancestor-of-a-binary-search-tree/">235-二叉搜索树的公共祖先</a>


### 1.2   寻找二叉搜索树中的部分子树，只要找到根节点就可以了，直接返回根节点，这就是一棵子树了。不要想复杂了。

eg: <a href="https://leetcode-cn.com/problems/search-in-a-binary-search-tree/">700-二叉搜索树的搜索</a>

### 1.3 二叉搜索树可以和链表结合来解决问题，达到我们想要的目的

eg: <a href="https://leetcode-cn.com/problems/NYBBNL/">剑指offer II 54 展平二插搜索树</a>


## 二、N叉树的遍历

### 1.1 N叉树的前后遍历都是固定的模板

 不同之处就在于 是先遍历再往数组内存，还是先存后遍历
 
<img width="417" alt="image" src="https://user-images.githubusercontent.com/63868915/164952515-ec70507a-a9cb-4fc1-abe9-c0e9f1625416.png">

## 三、二叉树路径相关

求二叉树路径相关问题，基本都是声明一个数组，把结果存到数组中，递归处理左右子树，判断边界情况返回。

eg: <a href="https://leetcode-cn.com/problems/binary-tree-paths/">257-二叉树的所有路径</a>


