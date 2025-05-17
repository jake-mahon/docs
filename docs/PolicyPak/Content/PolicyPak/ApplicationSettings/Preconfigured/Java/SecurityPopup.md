---
sidebar_position: 3635
title: 'Java: Using the Pre-configured AppSet for Java, how do I prevent "Java has
  discovered application components that could indicate a security concern." Pop up?'
---

# Java: Using the Pre-configured AppSet for Java, how do I prevent "Java has discovered application components that could indicate a security concern." Pop up?

If you get the following pop-up:

![](../../../../../../../static/images/PolicyPak/Content/Resources/Images/ApplicationSettings/Preconfigured/Java/158_1_uhaE4.jpg)

the pre-configured Java AppSet can adjust for that. However, know that we are not magically "increasing" your security here, simply delivering the value that forces Java to stop the pop up.

The setting located in our pre-configured AppSets for Java is:

Java 7 Pak technique:

![](../../../../../../../static/images/PolicyPak/Content/Resources/Images/ApplicationSettings/Preconfigured/Java/158_2_2014-04-13_1737.png)

Java 8 AppSet technique:

![](../../../../../../../static/images/PolicyPak/Content/Resources/Images/ApplicationSettings/Preconfigured/Java/158_3_13-8.png)

More information from Oracle on the underlying issue can be found at this web page:  [http://java.com/en/download/help/error\_mixedcode.xml](http://java.com/en/download/help/error_mixedcode.xml "Java Found Application Components that Indicate Security Concern")