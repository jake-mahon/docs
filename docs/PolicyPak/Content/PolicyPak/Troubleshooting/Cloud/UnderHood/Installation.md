---
sidebar_position: 3950
title: Troubleshooting Installation
---

# Troubleshooting Installation

If you choose an interactive installation of the Endpoint Policy Manager Cloud client, then any success or failure messages that occur when connecting to Endpoint Policy Manager Cloud will be shown on the final window during installation, as shown in Figure 156.

![](../../../../../../../static/images/PolicyPak/Content/Resources/Images/Troubleshooting/Cloud/Underneath the Hood and Troubleshooting_2_624x343.png)

Figure 156. The final window of the installation process.

There are some common issues that occur during installation, and these client troubleshooting errors are documented in one place: Getting Started with Cloud > [Knowledge Base](../../../Cloud/Overview/KnowledgeBase "Knowledge Base"). However, three of our most common errors are presented in the next few pages.

## No Internet Connection During Installation

You might install the Endpoint Policy Manager Cloud client during a time when there is no internet connection, or some other issue might occur when your client initially joins Endpoint Policy Manager Cloud.

**NOTE:**  If you always use a proxy, and the Endpoint Policy Manager Cloud client cannot seem to contact the Endpoint Policy Manager services, please read this Endpoint Policy Manager KB article: .

During installation, the Endpoint Policy Manager Cloud client will try to connect with Endpoint Policy Manager Cloud for a maximum of 60 seconds. If it is able to make a connection and acquire a license within 60 seconds, you'll get a success message. If the Endpoint Policy Manager Cloud client cannot locate Endpoint Policy Manager Cloud you'll get an error message, as shown in Figure 157.

![](../../../../../../../static/images/PolicyPak/Content/Resources/Images/Troubleshooting/Cloud/Underneath the Hood and Troubleshooting_3_406x302.png)

Figure 157. The error message when the Endpoint Policy Manager Cloud client cannot connect to Endpoint Policy Manager Cloud.

If you click "Continue," you'll see a success message, but no results of the connection to Endpoint Policy Manager Cloud, as shown in Figure 158.

![](../../../../../../../static/images/PolicyPak/Content/Resources/Images/Troubleshooting/Cloud/Underneath the Hood and Troubleshooting_4_406x336.png)

Figure 158. The success message indicating installation is complete.

Therefore, if the Endpoint Policy Manager Cloud is contacted and/or the license isn't acquired, then the Endpoint Policy Manager Cloud client will try to sync again within the next hour. It will continue to re-try every hour (after Internet access is restored).

## System Time Error

A common error occurs when the system time is off. If you get the error shown in Figure 159, ensure that the system time on the client system is correct. If the time significantly off, the cloud client cannot talk with the cloud server.

![](../../../../../../../static/images/PolicyPak/Content/Resources/Images/Troubleshooting/Cloud/Underneath the Hood and Troubleshooting_5.png)

Figure 159. System time error message.

To check the time, do the following:

**Step 1 –** Change the time zone to UTC, as shown in Figure 160.

![](../../../../../../../static/images/PolicyPak/Content/Resources/Images/Troubleshooting/Cloud/Underneath the Hood and Troubleshooting_6.png)

Figure 160. Selecting UTC as the time zone.

**Step 2 –** Verify the time on the computer is now the same as what is shown at the following website: [https://www.worldtimeserver.com/current\_time\_in\_UTC.aspx](http://www.worldtimeserver.com/current_time_in_UTC.aspx).

**Step 3 –** If the computer's time is off, change it so it matches the UTC time.

**Step 4 –** Then join Endpoint Policy Manager Cloud.

**Step 5 –** After joining, change the time zone to your correct time zone.

**Step 6 –** Verify Endpoint Policy Manager Cloud still works with commandline: `ppcloud /sync`.

## Multiple Registrations for the Same Computer

If you attempt to destroy and re-create a computer, for instance, after re-installing the whole OS, then the computer will, by default, be seen as unique (see Figure 161). This is expected because of the computer registration modes, and it can typically happen when the computer is a VDI machine that gets destroyed and rebuilt often. To compensate for this, refer to the section "Company Details."

![](../../../../../../../static/images/PolicyPak/Content/Resources/Images/Troubleshooting/Cloud/Underneath the Hood and Troubleshooting_7_624x277.png)

Figure 161. A computer is seen as being unique after the OS is re-installed.

The registration mode you likely want to use is "Loose (allow computers to recovery access by UUID or MAC Address)" for normal machines (as shown in Figure 162), and "Advanced (always register a new computer and keep existing records)" for VDI machines.

![](../../../../../../../static/images/PolicyPak/Content/Resources/Images/Cloud/Web Interface and Controls_71_624x518.png)

Figure 162. Selecting the registration mode.