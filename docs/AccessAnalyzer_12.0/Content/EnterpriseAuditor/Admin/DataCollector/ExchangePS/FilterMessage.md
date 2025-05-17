---
sidebar_position: 6028
title: "ExchangePS:\_Filter by Message"
---

# ExchangePS: Filter by Message

The Filter by Message page is used to define the filter conditions of the search. It is a wizard page for the category of:

* Mailbox Search

![ExchangePS Data Collector Wizard Filter by Message Conditions page](../../../../../../../static/images/AccessAnalyzer_12.0/Content/Resources/Images/EnterpriseAuditor/Admin/DataCollector/ExchangePS/FilterMessage.png "ExchangePS Data Collector Wizard Filter by Message Conditions page")

In the Select Conditions section, choose the filter logic:

* All Conditions – All selected conditions must be met
* Any condition – Any of the selected conditions must be met

Available conditions to select from include:

* date when message expires according to policy – If selected, specify date range through the Date Range Selection window
* with specific words in the retention policy – If selected, specify words through the Words window
* with specific words in the subject – If selected, specify words through the Words window
* with specific words in the body – If selected, specify words through the Words window
* with specific words in the subject or body – If selected, specify words through the Words window
* with specific words in the recipient’s address – If selected, specify words through the Words window
* with specific words in the sender’s address – If selected, specify words through the Words window
* that was received in a specific date range – If selected, specify date range through the Date Range Selection window
* with specific words in the attachment – If selected, specify words through the Words window

See the [Date Range Selection Window](#_Date_Range_Selection "Date Range Selection Window") and [Words Window](#_Words_Window "Words Window") topics for additional information.

In the Select Search Mailbox Parameters section, select the desired filter parameters:

* Do not Include Archive
* Include Unsearchable Items
* Search Dumpster
* Search Dumpster Only

#### Date Range Selection Window

The Date Range Selection window is opened by the **Specify Date Range...** option for a date related filter on the Filter by Message page.

![Date Range Selection window](../../../../../../../static/images/AccessAnalyzer_12.0/Content/Resources/Images/EnterpriseAuditor/Admin/DataCollector/ExchangePS/DateRangeSelectionWindow.png "Date Range Selection window")

Select the range category on the left and configure the range setting in the enabled fields:

* Over – Select the number and time units. The available time units are: **Days**, **Months**, or **Years**.
* Last – Select the number and time units. The available time units are: **Days**, **Months**, or **Years**.
* Before – Drop-down menu opens a calendar selection view, choose the end date
* After – Drop-down menu opens a calendar selection view, choose the start date
* Between (Date) – Drop-down menus open calendar selection view, choose the start and end dates
* Between – Select the numbers for the lower and upper range boundary, and the desired time units. The available time units are: **Days**, **Months**, or **Years**.

When the date range is specified, click **OK**. The selected date range shows as a filter on the Filter by Message page. Click the filter to open the Date Range Selection window to modify the date range.

#### Words Window

The Words window is opened by the **Specify words...** option for a word related filter on the Filter by Message page.

![Words window](../../../../../../../static/images/AccessAnalyzer_12.0/Content/Resources/Images/EnterpriseAuditor/Admin/DataCollector/ExchangePS/WordsWindow.png "Words window")

In the Search property section, choose the filter logic:

* All Words – All selected word filters must be met
* Any Words – Any of the selected word filters must be met

Then, configure the required words in the filter list. Enter the word in the textbox and click **Add**. To delete a word from the filter list, select the word and click **Remove**.

When the word list is complete, click **OK**. The specified words show as a filter on the Filter by Message page. Click the filter to open the Words window to modify the list.