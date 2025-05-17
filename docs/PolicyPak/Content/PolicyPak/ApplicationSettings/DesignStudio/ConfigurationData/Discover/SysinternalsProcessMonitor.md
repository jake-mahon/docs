---
sidebar_position: 3707
title: Configuration Data Using Sysinternals Process Monitor
---

# Configuration Data Using Sysinternals Process Monitor

Most applications' data should be easy to find. However, occasionally it is difficult to locate an application's configuration data. When these issues occur, you might want to turn to Microsoft's free Sysinternals Process Monitor to help discover where an application stores its data.

**NOTE:** Endpoint Policy Manager DesignStudio is a lite capture tool and needs to be instructed on where to perform the before and after snapshot (specific file, portion of the registry, etc).

Process Monitor's job is to monitor what an application is doing. When it comes to the applications we want to control, we care most about knowing what an application is doing with regard to file writes or registry writes (though Process Monitor can also trap process and thread events, DLL loads, and network activity). In short, if we know where the application is doing its writing, it's easy to learn where it stores its data. Then we can tell Endpoint Policy Manager DesignStudio where to perform its capture. Process monitor can be downloaded from Microsoft at: .

Let's explore some quick tips for running Process Monitor. First, make sure Process Monitor is capturing events by clicking on File|Capture Events (this should be on by default) and Edit|Auto Scroll (which is not the default). You can see these configuration options in Figure 102 and Figure 103.

![](../../../../../../../../static/images/PolicyPak/Content/Resources/Images/Appendix B - PolicyPak Application Manager DesignStudio Guide/Discovering Configuration_15_499x277.png)

Figure 102. Selecting the option to capture events.

![](../../../../../../../../static/images/PolicyPak/Content/Resources/Images/Appendix B - PolicyPak Application Manager DesignStudio Guide/Discovering Configuration_16.png)

Figure 103. Selecting the option for autoscrolling.

Next, you're going to create a filter automatically. To do this, use Process Monitor's Target Sight icon and drag it directly onto the target application's main window as shown in Figure 104.

![](../../../../../../../../static/images/PolicyPak/Content/Resources/Images/Appendix B - PolicyPak Application Manager DesignStudio Guide/Discovering Configuration_17.png)

Figure 104. Dragging the Target Sight icon into the main window.

Next, have the first two filter types selected, Registry and File, as shown in Figure 105. Unselect the remaining three items (Network Activity, Process & Thread, and Profiling Events).

![](../../../../../../../../static/images/PolicyPak/Content/Resources/Images/Appendix B - PolicyPak Application Manager DesignStudio Guide/Discovering Configuration_18_624x105.png)

Figure 105. Selecting the "Registry" and "File" types.

Next, make a change in your application and click "Apply" or "OK." Look for registry or disk activity that occurs when you click "OK." It takes a little practice but you should see some disk writes or registry writes when you make a change to your application. Note that some applications will keep settings in memory and only to write their data (to the registry or disk) when the application is closed. This can be a little bit frustrating, so if don't see the changes you expect, you can also try to close the application and see if it wrote any changes to the registry or disk.

In Figure 106 you can see the deployment.properties file was changed after checkbox was unselected and the change was applied.

![](../../../../../../../../static/images/PolicyPak/Content/Resources/Images/Appendix B - PolicyPak Application Manager DesignStudio Guide/Discovering Configuration_19.png)

Figure 106. Applying changes.

Knowing this, you can use Endpoint Policy Manager DesignStudio to use this location (in this case, a file) as the data root and continue to build an AppSet for the application.

**CAUTION:** Be sure to reset the filter the next time you run Process Monitor, since it will be set to the previous application's process ID (PID). The filter dialog prompt appears only if you had set a filter the last time you ran Process Monitor. You'll be asked whether you want to continue using the same filter. Note, if you hadn't set the filter or had cleared it, you don't get the filter dialog prompt when you re-run Process Monitor.

If you discover a file that stores data for your application, but it isn't a currently supported type (INI, XML, JS, .properties, etc.) then let us know by emailing [support@policypak.com](mailto:support@policypak.com) with details so we can include its support in a future release. For more information on using Process Monitor, be sure to watch this in-depth video (from the 35:30 mark) as well for more tips:

. You can also purchase the book on Sysinternals tools (where Process Monitor is covered) by Mark Russinovich and Aaron Margosis by visiting this link: [http://www.amazon.com/Windows%C2%AE-Sysinternals-Administrators-Reference-Russinovich/dp/073565672X](http://www.amazon.com/Windows®-Sysinternals-Administrators-Reference-Russinovich/dp/073565672X).