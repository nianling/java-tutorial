(window.webpackJsonp=window.webpackJsonp||[]).push([[77],{486:function(a,t,n){"use strict";n.r(t);var e=n(21),s=Object(e.a)({},function(){var a=this,t=a.$createElement,n=a._self._c||t;return n("ContentSlotsDistributor",{attrs:{"slot-key":a.$parent.slotKey}},[n("h1",{attrs:{id:"旧版日期时间代码"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#旧版日期时间代码","aria-hidden":"true"}},[a._v("#")]),a._v(" 旧版日期时间代码")]),a._v(" "),n("p",[a._v("可以说是旧版日期机制的代码迁移指南吧")]),a._v(" "),n("p",[a._v("在 Java SE 8 发布前，java 提供了日期时间机制的类 java.util.Date， java.util.Calendar\n以及 java.util.TimeZone 类，以及它们的子类，如 java.util.GregorianCalendar 中。这些类有几个缺点，包括：")]),a._v(" "),n("ul",[n("li",[a._v("Calendar 是不安全的")]),a._v(" "),n("li",[a._v("由于这些类是可变的，因此他们不能用于多线程")]),a._v(" "),n("li",[a._v("应用程序代码中的错误是常见的，原因是不寻常的几个月和缺乏类型安全。?")])]),a._v(" "),n("h2",{attrs:{id:"与遗留代码的互操作性"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#与遗留代码的互操作性","aria-hidden":"true"}},[a._v("#")]),a._v(" 与遗留代码的互操作性")]),a._v(" "),n("p",[a._v("也序你使用了 java.util 的日期相关的类，并且想对现有代码进行最小改动的情况下使用 java.time 的功能")]),a._v(" "),n("p",[a._v("JDK8 提供了几个方法允许 java.util 和 java.time 对象之间进行转换：")]),a._v(" "),n("ul",[n("li",[a._v("Calendar.toInstant()")]),a._v(" "),n("li",[a._v("GregorianCalendar.toZonedDateTime()")]),a._v(" "),n("li",[a._v("GregorianCalendar.from(ZonedDateTime)")]),a._v(" "),n("li",[a._v("Date.from(Instant)")]),a._v(" "),n("li",[a._v("Date.toInstant()")]),a._v(" "),n("li",[a._v("TimeZone.toZoneId()")])]),a._v(" "),n("p",[a._v("以下示例将 Calendar 实例转换为 ZonedDateTime 实例。请注意，必须提供时区才能将 Instant 转换为 ZonedDateTime：")]),a._v(" "),n("div",{staticClass:"language-java line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-java"}},[n("code",[a._v("Calendar now "),n("span",{pre:!0,attrs:{class:"token operator"}},[a._v("=")]),a._v(" Calendar"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(".")]),n("span",{pre:!0,attrs:{class:"token function"}},[a._v("getInstance")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("(")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(")")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(";")]),a._v("\nZonedDateTime zdt "),n("span",{pre:!0,attrs:{class:"token operator"}},[a._v("=")]),a._v(" ZonedDateTime"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(".")]),n("span",{pre:!0,attrs:{class:"token function"}},[a._v("ofInstant")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("(")]),a._v("now"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(".")]),n("span",{pre:!0,attrs:{class:"token function"}},[a._v("toInstant")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("(")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(")")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(",")]),a._v(" ZoneId"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(".")]),n("span",{pre:!0,attrs:{class:"token function"}},[a._v("systemDefault")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("(")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(")")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(")")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(";")]),a._v("\n")])]),a._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[a._v("1")]),n("br"),n("span",{staticClass:"line-number"},[a._v("2")]),n("br")])]),n("p",[a._v("以下示例 Date 和 Instant 之间的转换")]),a._v(" "),n("div",{staticClass:"language-java line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-java"}},[n("code",[a._v("Instant inst "),n("span",{pre:!0,attrs:{class:"token operator"}},[a._v("=")]),a._v(" date"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(".")]),n("span",{pre:!0,attrs:{class:"token function"}},[a._v("toInstant")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("(")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(")")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(";")]),a._v("\n\nDate newDate "),n("span",{pre:!0,attrs:{class:"token operator"}},[a._v("=")]),a._v(" Date"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(".")]),n("span",{pre:!0,attrs:{class:"token function"}},[a._v("from")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("(")]),a._v("inst"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(")")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(";")]),a._v("\n")])]),a._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[a._v("1")]),n("br"),n("span",{staticClass:"line-number"},[a._v("2")]),n("br"),n("span",{staticClass:"line-number"},[a._v("3")]),n("br")])]),n("p",[a._v("以下示例将从 GregorianCalendar 转换为 ZonedDateTime，然后从 ZonedDateTime 转换为 GregorianCalendar。\n其他基于时间的类是使用 ZonedDateTime 实例创建的：")]),a._v(" "),n("div",{staticClass:"language-java line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-java"}},[n("code",[a._v("GregorianCalendar cal "),n("span",{pre:!0,attrs:{class:"token operator"}},[a._v("=")]),a._v(" "),n("span",{pre:!0,attrs:{class:"token keyword"}},[a._v("new")]),a._v(" "),n("span",{pre:!0,attrs:{class:"token class-name"}},[a._v("GregorianCalendar")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("(")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(")")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(";")]),a._v("\n\nTimeZone tz "),n("span",{pre:!0,attrs:{class:"token operator"}},[a._v("=")]),a._v(" cal"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(".")]),n("span",{pre:!0,attrs:{class:"token function"}},[a._v("getTimeZone")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("(")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(")")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(";")]),a._v("\n"),n("span",{pre:!0,attrs:{class:"token keyword"}},[a._v("int")]),a._v(" tzoffset "),n("span",{pre:!0,attrs:{class:"token operator"}},[a._v("=")]),a._v(" cal"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(".")]),n("span",{pre:!0,attrs:{class:"token function"}},[a._v("get")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("(")]),a._v("Calendar"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(".")]),a._v("ZONE_OFFSET"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(")")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(";")]),a._v(" "),n("span",{pre:!0,attrs:{class:"token comment"}},[a._v("// 获取偏移量")]),a._v("\n\nZonedDateTime zdt "),n("span",{pre:!0,attrs:{class:"token operator"}},[a._v("=")]),a._v(" cal"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(".")]),n("span",{pre:!0,attrs:{class:"token function"}},[a._v("toZonedDateTime")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("(")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(")")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(";")]),a._v("\n\nGregorianCalendar newCal "),n("span",{pre:!0,attrs:{class:"token operator"}},[a._v("=")]),a._v(" GregorianCalendar"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(".")]),n("span",{pre:!0,attrs:{class:"token function"}},[a._v("from")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("(")]),a._v("zdt"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(")")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(";")]),a._v("\n\nLocalDateTime ldt "),n("span",{pre:!0,attrs:{class:"token operator"}},[a._v("=")]),a._v(" zdt"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(".")]),n("span",{pre:!0,attrs:{class:"token function"}},[a._v("toLocalDateTime")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("(")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(")")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(";")]),a._v("\nLocalDate date "),n("span",{pre:!0,attrs:{class:"token operator"}},[a._v("=")]),a._v(" zdt"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(".")]),n("span",{pre:!0,attrs:{class:"token function"}},[a._v("toLocalDate")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("(")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(")")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(";")]),a._v("\nLocalTime time "),n("span",{pre:!0,attrs:{class:"token operator"}},[a._v("=")]),a._v(" zdt"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(".")]),n("span",{pre:!0,attrs:{class:"token function"}},[a._v("toLocalTime")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("(")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(")")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(";")]),a._v("\n")])]),a._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[a._v("1")]),n("br"),n("span",{staticClass:"line-number"},[a._v("2")]),n("br"),n("span",{staticClass:"line-number"},[a._v("3")]),n("br"),n("span",{staticClass:"line-number"},[a._v("4")]),n("br"),n("span",{staticClass:"line-number"},[a._v("5")]),n("br"),n("span",{staticClass:"line-number"},[a._v("6")]),n("br"),n("span",{staticClass:"line-number"},[a._v("7")]),n("br"),n("span",{staticClass:"line-number"},[a._v("8")]),n("br"),n("span",{staticClass:"line-number"},[a._v("9")]),n("br"),n("span",{staticClass:"line-number"},[a._v("10")]),n("br"),n("span",{staticClass:"line-number"},[a._v("11")]),n("br"),n("span",{staticClass:"line-number"},[a._v("12")]),n("br")])]),n("h2",{attrs:{id:"java-util-date-与-java-time-功能映射"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#java-util-date-与-java-time-功能映射","aria-hidden":"true"}},[a._v("#")]),a._v(" java.util Date 与 java.time 功能映射")]),a._v(" "),n("p",[a._v("因为 Java SE 8 版本中已经完全重新设计了日期和时间的 Java 实现，所以您不能将一个方法替换为另一个方法。\n如果您想要使用 java 提供的丰富功能。时间包，您最简单的解决方案是使用上一节中列出的 toInstant 或 toZonedDateTime 方法。\n但是，如果您不想使用这种方法，或者它对您的需求来说是不够的，那么您必须重写您的日期时间代码。")]),a._v(" "),n("p",[a._v("在 "),n("RouterLink",{attrs:{to:"/datetime/iso/overview.html"}},[a._v("概述")]),a._v(" 页面中的表格可以让你明白哪些类是复合你的需求的")],1),a._v(" "),n("p",[a._v("这两个 api 之间没有一对一的映射对应关系，但是下面列出了 大致功能概念的映射")]),a._v(" "),n("h3",{attrs:{id:"java-util-date-与-java-timeinstant"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#java-util-date-与-java-timeinstant","aria-hidden":"true"}},[a._v("#")]),a._v(" java.util.Date 与 java.timeInstant")]),a._v(" "),n("p",[a._v("这两个类是相似的：")]),a._v(" "),n("ul",[n("li",[a._v("代表时间轴(UTC)上的瞬时点")]),a._v(" "),n("li",[a._v("保存一个与时区无关的时间")]),a._v(" "),n("li",[a._v("表示的是纳秒 epoch-seconds(自 1970-01-01T00:00:00Z 起)")])]),a._v(" "),n("p",[n("code",[a._v("Date.from(Instant)")]),a._v(" 和 "),n("code",[a._v("Date.toInstant()")]),a._v(" 方法互相转换")]),a._v(" "),n("h3",{attrs:{id:"java-util-gregoriancalendar-和-java-time-zoneddatetime"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#java-util-gregoriancalendar-和-java-time-zoneddatetime","aria-hidden":"true"}},[a._v("#")]),a._v(" java.util.GregorianCalendar 和 java.time.ZonedDateTime")]),a._v(" "),n("p",[a._v("ZonedDateTime 类是替代 GregorianCalendar 的 。它提供了以下类似的功能。")]),a._v(" "),n("p",[a._v("人类时间")]),a._v(" "),n("ul",[n("li",[a._v("LocalDate: 年，月，日")]),a._v(" "),n("li",[a._v("LocalTime: 时，分，秒，纳秒")]),a._v(" "),n("li",[a._v("ZoneId: 时区")]),a._v(" "),n("li",[a._v("ZoneOffset: 从 GMT 的偏移量")])]),a._v(" "),n("p",[n("code",[a._v("GregorianCalendar.from(ZonedDateTime)")]),a._v(" 和 "),n("code",[a._v("GregorianCalendar.to(ZonedDateTime)")]),a._v(" 相互转换")]),a._v(" "),n("h3",{attrs:{id:"java-util-timezone-和-java-time-zoneid-zoneoffset"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#java-util-timezone-和-java-time-zoneid-zoneoffset","aria-hidden":"true"}},[a._v("#")]),a._v(" java.util.TimeZone 和 java.time.ZoneId/ZoneOffset")]),a._v(" "),n("ul",[n("li",[a._v("ZoneId 指定时区标识符和访问所使用的每个时区的规则")]),a._v(" "),n("li",[a._v("ZoneOffset 指定一个从格林尼治/ UTC 偏移。有关更多信息，请参阅 "),n("RouterLink",{attrs:{to:"/datetime/iso/timezones.html"}},[a._v("时区和偏移")]),a._v(" 类。")],1)]),a._v(" "),n("h3",{attrs:{id:"gregoriancalendar-和-java-time-localtime"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#gregoriancalendar-和-java-time-localtime","aria-hidden":"true"}},[a._v("#")]),a._v(" GregorianCalendar 和 java.time.LocalTime")]),a._v(" "),n("p",[a._v("在 GregorianCalendar 实例中将日期设置为 1970-01-01 以便使用时间组件的代码可以替换为 LocalTime 实例。 因为 LocalTime 只包含时分秒")]),a._v(" "),n("h3",{attrs:{id:"gregoriancalendar-和-java-time-localdate"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#gregoriancalendar-和-java-time-localdate","aria-hidden":"true"}},[a._v("#")]),a._v(" GregorianCalendar 和 java.time.LocalDate")]),a._v(" "),n("p",[a._v("在 GregorianCalendar 实例中将时间设置为 00:00 以便使用日期组件的代码可以用 LocalDate 的实例替换。\n（这样的方法有缺陷，因为在一些国家，由于过渡到夏令时，每年午夜都不会发生。）")]),a._v(" "),n("h2",{attrs:{id:"日期和时间格式"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#日期和时间格式","aria-hidden":"true"}},[a._v("#")]),a._v(" 日期和时间格式")]),a._v(" "),n("p",[a._v("尽管 java.time.format.DateTimeFormatter 为格式化日期和时间值提供了强大的机制，但您也可以直接使用\njava.util.Formatter 和 String.format 来格式化 java.time 类")])])},[],!1,null,null,null);t.default=s.exports}}]);