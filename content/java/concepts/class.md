# 什么是类？

在现实世界中，你经常会发现许多单独的对象都是同样的。可能有成千上万的其他自行车存在，所有相同的制造和模型。每辆自行车是由同一套蓝图构成的，因此包含相同的组件。在面向对象的术语，我们说你的自行车是一个**实例**中的**类的对象**被称为自行车。类是从中创建单个对象的蓝图。

下面是自行车类的一种可能的实施方式：
```java
class Bicycle {
    // 节奏
    int cadence = 0;
    // 速度
    int speed = 0;
    // 齿轮
    int gear = 1;

    void changeCadence(int newValue) {
         cadence = newValue;
    }

    void changeGear(int newValue) {
         gear = newValue;
    }

    void speedUp(int increment) {
         speed = speed + increment;   
    }

    void applyBrakes(int decrement) {
         speed = speed - decrement;
    }

    void printStates() {
         System.out.println("cadence:" +
             cadence + " speed:" + 
             speed + " gear:" + gear);
    }
}
```