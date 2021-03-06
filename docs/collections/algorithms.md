# 算法

这里描述的多态性算法是由 Java 平台提供的可重用功能块。所有这些都来自 Collections 类，
并且都采用静态方法的形式，其第一个参数是要对其执行操作的集合。Java 平台提供的绝大多数算法操作 list 实例，
但其中一些可以操作任意的 collection 实例，本节主要描述了以下算法：

* 排序
* 洗牌（打乱）
* 常规数据操作
* 搜索
* 组成
* 寻找极限值

## 排序（Sorting）
排序算法重新排列,这样它的元素列表显示按升序排序关系。提供两种形式的操作。
简单的形式需要一个列表和排序根据元素的自然顺序。如果你不熟悉自然排序的概念,阅读对象排序部分。

排序操作使用稍微优化归并排序算法是快速和稳定的:

* 快速：？ 机器翻译的完全读不通
* 稳定：它不重新排序相等的元素。如果您对不同的属性重复排序相同的列表，这一点很重要。
如果邮件程序的用户通过邮寄日期对收件箱排序，然后由发件人对其进行排序，则用户自然期望来自给定发件人的现在连续的邮件列表将仍然通过邮寄日期来排序。
这只有在第二次排序稳定时才能保证。



有两种方法使用

*  `Collections.sort(list)`;  //使用默认的
*  `Collections.sort(List<T> list, Comparator<? super T> c)`  // 提供比较器

## 洗牌(Shuffling)
随机排序，重新排列了 List。以随机源为准，保证随机的公平性。

这个操作有两种操作形式：

* `Collections.shuffle(List<?> list)` 使用默认的随机源
* `Collections.shuffle(List<?> list, Random rnd) ` 指定随机源

## 常规数据操作
提供了五个常规数据的算法：

* 反转 (reverse) ： 反转指定列表中元素的顺序。
* 填满 (fill)： 使用指定元素替换指定列表中的所有元素。这个操作一般用在初始化列表
* 复制（copy） ： 将所有元素从一个列表复制到另一个列表。
* 交换（swap） ： 在指定列表的指定位置处交换元素。
* addAll      ： 将所有指定元素添加到指定 collection 中。

## 搜索（Searching）
binarySearch ： 使用二分搜索法搜索指定列表，以获得指定对象。在进行此调用之前，必须根据列表元素的自然顺序对列表进行升序排序（通过 sort(List) 方法）。
如果没有对列表进行排序，则结果是不确定的。

被找到时，返回大于 0 的插入位置。

## Composition
不相交和频率算法测试某些？

* 频率（frequency）： 返回指定元素在集合中出现的个数
* 不相交（disjoint） ：如果两个指定 collection 中没有相同的元素，则返回 true。

## 找到极值（Finding Extreme Values）
min 和 max 算法返回集合中的最小值 和 最大值。
