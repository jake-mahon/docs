---
sidebar_position: 3640
title: "Locking Down the Use of Application Settings Manager ACL Lockdown\u2122"
---

# Locking Down the Use of Application Settings Manager ACL Lockdown™

In the example above, we changed some values, closed the application, and reopened it. We also saw that PolicyPak Application Settings Manager automatically remediated the application's settings again at relaunch.

In addition, Endpoint Policy Manager Application Settings Manager can perform ACL Lockdown™.

**NOTE:** To see Endpoint Policy Manager Application Settings Manager ACL Lockdown™ in action, watch this video: [https://www.policypak.com/video/policypak-acl-lockdown-for-registry-based-applications.html](http://www.policypak.com/videos/bypassing-internal-item-level-targeting-filters).

ACL stands for Windows's Access Control List. ACLs are a built-in operating system function that performs true lockout on sections of the Registry and files. With Endpoint Policy Manager Application Settings Manager ACL Lockdown™ enabled, users literally cannot make or keep changes in the effected pieces of the application.

**Step 1 –** To see ACL Lockdown in action, let's go back into the GPO and turn it on. To do this, right-click "at least one lower case character (a-z)" and select "Perform ACL Lockdown," as seen in Figure 14.

![](../../../../../../../static/images/PolicyPak/Content/Resources/Images/ApplicationSettings/PolicyPak Application Settings_13.png)

Figure 14. Selecting the "Perform ACL Lockdown" setting.

**Step 2 –** When you perform ACL Lockdown on one setting, the same portion of the Registry (or file system) might contain more than one setting. For instance, all the items in the Passwords tab are located in the same place in the Registry. Therefore, if you were to right-click any other setting in the Passwords tab, you'll see that "Perform ACL Lockdown" is automatically checked for those settings, as well.

On the client machine

* ensure WinZip is closed,
* run `GPupdate` (or log off and log back on) to get the new "signal" that you want to test ACL Lockdown™, and
* rerun WinZip.

**Step 3 –** ACL Lockdown is now working while the application is running. Now, go back to WinZip's Options, select the Passwords tab, and uncheck the two checkboxes that are available, as shown in Figure 15. Then click OK.

![](../../../../../../../static/images/PolicyPak/Content/Resources/Images/ApplicationSettings/PolicyPak Application Settings_14.png)

Figure 15. The Passwords tab in WinZip Options.

**Step 4 –** After that's done, immediately go back to Options and select the Passwords tab again. Figure 16 shows that the user's desired changes did not take effect because Endpoint Policy Manager Application Settings Manager has used ACL Lockdown™ to perform the lockout of the settings.

![](../../../../../../../static/images/PolicyPak/Content/Resources/Images/ApplicationSettings/PolicyPak Application Settings_15.png)

Figure 16. Using ACL Lockdown, the user's changes have not taken effect because the settings have been locked.

For more information on ACL Lockdown™, see section, "ACL Lockdown™ Mode," in the next major section in the manual.