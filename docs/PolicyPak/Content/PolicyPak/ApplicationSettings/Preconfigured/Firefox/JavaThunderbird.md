---
sidebar_position: 3620
title: 'Firefox (and Java and Thunderbird): Why can''t I seem to find (or perform)
  UI lockdown for Firefox, Java or Thunderbird ?'
---

# Firefox (and Java and Thunderbird): Why can't I seem to find (or perform) UI lockdown for Firefox, Java or Thunderbird ?

FireFox, Thunderbird and Java pre-configured Paks all support user-interface lockout.

However, that UI lockout is implemented differently and, as such, comes with a caveat.

Tip: To see a video of FireFox UI lockout in action, see the following video:

[https://www.policypak.com/products/manage-firefox-with-group-policy.html](https://www.policypak.com/products/manage-firefox-with-group-policy.html "Manage Firefox with Group Policy")

Tip: To see a video of Thunderbird UI lockout in action, see the following video:

[Endpoint Policy Manager for Thunderbird](../../../Video/ApplicationSettings/Thunderbird "Endpoint Policy Manager for Thunderbird")

Tip: To see a video of Java UI lockout in action, see the following video:

[Endpoint Policy Manager for Thunderbird](../../../Video/ApplicationSettings/Thunderbird "Endpoint Policy Manager for Thunderbird")

Specifically, to perform UI lockout of FireFox, Thunderbird and Java, the GPO must be linked such that the computer is affected. Said another way, you cannot perform UI lockdown on FireFox, Thunderbird or Java "per-user" (when users are in OUs.) You can only perform FireFox, Thunderbird or Java lockdown when affecting computers (when computers are in OUs.)  
In the picture below, you'll see an example of how to create and link a GPO against computers (instead of users) can be seen.

![](../../../../../../../static/images/PolicyPak/Content/Resources/Images/ApplicationSettings/Preconfigured/Firefox/148_1_ff1.jpg)

In this example we've assumed you've put your target computers into the "East Sales Desktops" folder (or similar.) Then when you edit the GPO, edit it on the Computer side as seen here. At that point you can modify settings for FireFox, Thunderbird and Java and specify to "Lockdown this setting using the system-wide config file."

![](../../../../../../../static/images/PolicyPak/Content/Resources/Images/ApplicationSettings/Preconfigured/Firefox/148_2_ff2.jpg)

System-Wide lockdown using config files is only available on the Computer side.

As explained, the "Lockdown this setting using the system-wide config file" doesn't appear on the user-side. If you try to edit these three Paks on the user side, you simply won't see option to perform UI lockdown. An example of editing one of these Paks on the user side (and therefore not seeing the System-Wide lockdown) is shown in this figure.

![](../../../../../../../static/images/PolicyPak/Content/Resources/Images/ApplicationSettings/Preconfigured/Firefox/148_3_ff3.jpg)

Note that the lockdown via System-Wide config file is not present on the user side.