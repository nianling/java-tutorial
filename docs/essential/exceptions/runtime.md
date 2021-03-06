# 非检查异常 - 争议

因为 Java 编程不要求在方法签名上声明 unchecked 异常（RuntimeException、Error、和它们的子类），
程序员可能只想抛出 unchecked 异常或则 RuntimeException 的子类。这两个快捷方式都运行程序员编写代码，
而不必担心编译器报错，也不用担心指定或捕获任何异常。来虽然这可能看起来方便程序员，它回避的意图 catch 或 specify 要求，可能会导致他人使用你的类的问题。


为什么设计人员决定强制一个方法来指定所有可以抛出的未捕获的检查异常？
任何 Exception 可由方法抛出是该方法的公共编程接口的一部分。
调用方法的人必须知道一个方法可以抛出的异常，以便他们可以决定对它们做什么。
这些异常是尽可能多的方法的编程接口作为它的参数和一部分 return 值。

下一个问题可能是：如果记录一个方法的 API，包括它可以抛出的异常，为什么不指定运行时异常？
运行时异常表示编程问题的结果的问题，因此，API 客户端代码不能合理地期望从它们恢复或以任何方式处理它们。
这样的问题包括算术异常，例如除以零; 指针异常，例如试图通过空引用访问对象; 和索引异常，例如尝试通过太大或太小的索引访问数组元素。

运行时异常可以发生在程序中的任何地方，在典型的程序中它们可以非常多。必须在每个方法声明中添加运行时异常会降低程序的清晰度。因此，编译器不需要捕获或指定运行时异常（尽管可以）。

其中，通常的作法是抛出 RuntimeException 是一种情况，当用户调用一个方法不正确。
例如，一种方法可以检查它的一个参数是不正确的 null。如果一种说法是 null，该方法可能抛出 NullPointerException，这是一个未经检查的异常。

一般来说，不扔一个 RuntimeException 或创建 RuntimeException 的子类，只是因为你不希望与您的指定方法可以抛出的异常被人打扰。

这里是底线指南：

- 如果客户可以合理地期望从异常中恢复，使其成为已检查的异常。
- 如果客户端无法从异常中恢复，请将其设置为非检查异常。
