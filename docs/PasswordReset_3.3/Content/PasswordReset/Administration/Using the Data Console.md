---
sidebar_position: 2552
title: Using the Data Console
---

# Using the Data Console

The Data Console allows you to view and export data collected by Password Reset. Click **Start** > **Netwrix Password Reset** > **NPR Data Console** to open the console.

The Data Console has three tabs. The **Recent Activity** tab shows a chart of recent requests. The chart is empty when Password Reset is first installed, but it will populate itself as the system is used.

![](../../../../../static/images/PasswordReset_3.3/Content/Resources/Images/NPR Admin Guide/Using the Data Console.png)

The bars in the chart show how many successful enrollments, resets, unlocks, and changes occurred every day. You can click the bars to see a filtered view of the events for that day. For example, you could click the blue bar on 2/19/2015 to see all the password resets for that day.

![](../../../../../static/images/PasswordReset_3.3/Content/Resources/Images/NPR Admin Guide/Using the Data Console_1.png)

The resulting view shows only the 15 successful password resets on 2/19/2015. These are shown in the **Audit Log** tab. You can create your own filter to find events in this tab. See the [Custom Filters](Filtering Data#_bookmark37 "Custom Filters") topic for additional information. You can drag a column's header to rearrange the columns, or click a column header to sort the records.

The **Audit Log** tab has nine columns:

* Type — Event type (Success or Failure)
* Date — Event date
* Time — Event time
* Source — Event source (Reset, Unlock, etc.)
* User — User's Active Directory user logon name
* Domain — User's Active Directory domain
* Event — A description of the event
* Source IP — The request's source IP address
* Source User — The request's source username
  (blank if anonymous access is enabled)

The **Users** tab contains Information about each user. All users are shown by default, but you can create filters to find specific users.

![](../../../../../static/images/PasswordReset_3.3/Content/Resources/Images/NPR Admin Guide/Using the Data Console_2.png)

The **Users** tab has seven columns:

* User — User's Active Directory user logon name
* Domain — User's Active Directory domain
* E-mail — E-mail address entered during enrollment
* Last Enroll — Date and time of last successful enroll
* Last Reset — Date and time of last successful password reset
* Last Unlock — Date and time of last successful account unlock
* Last Change — Date and time of last successful password change

**NOTE:** The Data Console does not automatically display new information as it is added to the database. Press F5 to refresh the view.

[Open topic with navigation](../../../Default#PasswordReset/Administration/Using the Data Console)