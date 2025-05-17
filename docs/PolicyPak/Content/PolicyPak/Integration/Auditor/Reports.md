---
sidebar_position: 4048
title: How to use  Netwrix Auditor to Report on Endpoint Policy Manager events
---

# How to use Netwrix Auditor to Report on Endpoint Policy Manager events

This topic shows you how to generate reports for interesting events from the Endpoint Policy Manager event logs, that you can then use to create LPM policies as needed.

## Report

![](../../../../../../static/images/PolicyPak/Content/Resources/Images/LeastPrivilege/1325_1.png)

Policy created in LPM using the report details above.

![](../../../../../../static/images/PolicyPak/Content/Resources/Images/LeastPrivilege/1325_2.png)

## Getting Started

In order to receive Endpoint Policy Manager reports for events via Netwrix Auditor, you need to complete the following steps.

**Step 1 –** Creating a monitoring plan for Endpoint Policy Manager events.

**Step 2 –** Configuring sources, filters, events, database settings.

**Step 3 –** Optional: configure alerts.

## Creating a monitoring plan for Endpoint Policy Manager events

Navigate to **Start** > Netwrix Auditor > Netwrix Auditor **Event Log Manager**.

On the main page, you are prompted to select a monitoring plan. Click **Add** to add new plan.

![](../../../../../../static/images/PolicyPak/Content/Resources/Images/LeastPrivilege/1325_3.png)

**Step 1 –** Give the new plan a descriptive name and select **Enable event log collection**. Then add a **Notification recipient** email address. You can specify one or more email addresses for users to receive daily Event Log collection status notifications. Use a semicolon to separate addresses.

![](../../../../../../static/images/PolicyPak/Content/Resources/Images/LeastPrivilege/1325_4.png)

**Step 2 –** In the **General** tab enter credentials for the account that will be used to collect data from the endpoints. Use an account that has local admin rights on the endpoints, and one that can also read Active directory. Then click the **Add** button next to the Monitored computers section.

![](../../../../../../static/images/PolicyPak/Content/Resources/Images/LeastPrivilege/1325_5.png)

**Step 3 –** Choose how you would like to add monitored computers, either by Computer name, by Active Directory container, or via IP Range.

![](../../../../../../static/images/PolicyPak/Content/Resources/Images/LeastPrivilege/1325_6.png)

**NOTE:** You can add multiple types of computer items to your monitoring plan.

![](../../../../../../static/images/PolicyPak/Content/Resources/Images/LeastPrivilege/1325_7.png)

**Step 4 –** In the **Notifications** tab you can configure SMTP settings.

![](../../../../../../static/images/PolicyPak/Content/Resources/Images/LeastPrivilege/1325_8.png)

**Step 5 –** Under the **Audit Database** tab you can review and verify your database settings. Netwrix Auditor Event Log Manager synchronizes Audit Database and reports settings with the default Audit Database configuration from Netwrix Auditor Server. If this option is disabled, contact your Netwrix Auditor Global administrator and make sure that these settings are properly configured in Netwrix Auditor Server. See the Audit Database topic in the [Netwrix Auditor > Configuration Documentation](https://helpcenter.netwrix.com/category/auditor_configuration "Netwrix Auditor > Configuration Documentation") for additional information.

![](../../../../../../static/images/PolicyPak/Content/Resources/Images/LeastPrivilege/1325_9.png)

**Step 6 –** In the **Advanced** tab you can check if Network traffic compression is enabled (recommended). Also, you can specify the notification delivery time.

![](../../../../../../static/images/PolicyPak/Content/Resources/Images/LeastPrivilege/1325_10.png)

**Step 7 –** Filter out the desired events and get them into the Netwrix Auditor Reports. To do so, get back to the **General** tab and configure the **Audit archiving filters**.

![](../../../../../../static/images/PolicyPak/Content/Resources/Images/LeastPrivilege/1325_11.png)

**Step 8 –** Once there, you can add the filtering in the Inclusive filters section. Click **Add** to proceed.

In the next window, we need to specify the following parameters:

* Filter name
* Description for the filter
* Event log – here we need to type in Endpoint Policy Manager manually, as it is not available in the drop down list.
* Write to – here you can select the location to store filtered events, either a long-term archive or a database. It is recommended to use both locations.

![](../../../../../../static/images/PolicyPak/Content/Resources/Images/LeastPrivilege/1325_12.png)

**Step 9 –** Depending on targeted events, in the **Event Fields** tab you may enlist the event IDs to capture. See the [List of Endpoint Policy Manager Event Categories and IDs](../../Tips/EventCategories "List of Endpoint Policy Manager Event Categories and IDs") topic for additional information on event IDs.

For example, here is the list of event IDs related to Endpoint Policy Manager Least Privilege Manager Global Audit events:

![](../../../../../../static/images/PolicyPak/Content/Resources/Images/LeastPrivilege/1325_13.png)

You may adjust the settings in the**Events Fields filtering** section according to your needs.

Once the configuration is done, you may click **OK** and save all your progress so far.

**Step 10 –** Go back to the main monitoring plan configuration window for Netwrix Auditor Event Log Manager, and click **Configure** under alerts filtering:

![](../../../../../../static/images/PolicyPak/Content/Resources/Images/LeastPrivilege/1325_14.png)

Then click **Add** to add a new alert.

![](../../../../../../static/images/PolicyPak/Content/Resources/Images/LeastPrivilege/1325_15.png)

**Step 11 –** In the next window add alerts for any event IDs as needed using the screenshots below as a guide.

**NOTE:** There is no need to configure anything under the **Insertion Strings** tab at this time.

Single Event Alert Example:

![](../../../../../../static/images/PolicyPak/Content/Resources/Images/LeastPrivilege/1325_16.png)

![](../../../../../../static/images/PolicyPak/Content/Resources/Images/LeastPrivilege/1325_17.png)

Group of Specific Events Alert Example:

![](../../../../../../static/images/PolicyPak/Content/Resources/Images/LeastPrivilege/1325_18.png)

![](../../../../../../static/images/PolicyPak/Content/Resources/Images/LeastPrivilege/1325_19.png)

This is all the configuration required for Netwrix Auditor Event Log Manager to report on Endpoint Policy Manager Events.

**Step 12 –** Now, if you would like to review the event log reports, start the Netwrix Auditor software and go to the **Reports** section. There, navigate to the following report path: **Predefined** > **Windows Server**> **Event Log** > **All events by Computer** and click **View**.

![](../../../../../../static/images/PolicyPak/Content/Resources/Images/LeastPrivilege/1325_20.png)

Here you can specify the conditions and filters to represent in the report, such as date range, Event level etc.

![](../../../../../../static/images/PolicyPak/Content/Resources/Images/LeastPrivilege/1325_21.png)

**NOTE:** You can click on the interactive link in the **Date** column to see event details:

![](../../../../../../static/images/PolicyPak/Content/Resources/Images/LeastPrivilege/1325_22.png)