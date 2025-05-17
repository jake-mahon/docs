---
sidebar_position: 3142
title: Understanding Re-authentication & Justification Text
---

# Understanding Re-authentication & Justification Text

There might be times you want users to re-authenticate and/or provide justification text about their actions. Justification text is logged to the local event log for later review.

Here, on the left you’ll see a Self Elevate rule, and on the right a standard Elevation rule.

You can see both rule types have the options for **Require Justification Text** and **Force user to reauthenticate**.

![A screenshot of a computer

Description automatically generated](../../../../../static/images/PolicyPak/Content/Resources/Images/Book4/Reauthentication/Understanding Re authentication.png)

**NOTE:** See the [Endpoint Policy Manager Least Priv Manager: Self Elevate Mode](../Video/LeastPrivilege/BestPractices/SelfElevateMode "Endpoint Policy Manager Least Priv Manager: Self Elevate Mode") video for a demonstration of Justification text for Self Elevate.

**NOTE:** See the [Endpoint Privilege: Re-Authenticate with Self Elevate](../Video/LeastPrivilege/SelfElevateMode/Reauthenticate "Endpoint Privilege: Re-Authenticate with Self Elevate") video for a demonstration of re-authentication for Self Elevate.

You can force a user to **Require Justification Text** for normal elevation actions, as well as Self Elevate policies.

The following cases highlight how this might work.

## Case 1

**Show popup message** is selected, but neither sub-option are checked.

[![A screen shot of a computer

Description automatically generated](../../../../../static/images/PolicyPak/Content/Resources/Images/Book4/Reauthentication/Understanding Re authentication_1.png)](https://hf-files-oregon.s3.amazonaws.com/hdppolicypak_kb_attachments/2023/06-02/f4754da9-7f9e-4596-a0d4-e51a80069fb4/image-20230602145013-2.png)

When the application launches, the pop up is presented.

Text input from the user is optional. The user must at least click **OK** to continue and launch the application.

[![A screenshot of a computer monitor

Description automatically generated](../../../../../static/images/PolicyPak/Content/Resources/Images/Book4/Reauthentication/Understanding Re authentication_2.png)](https://hf-files-oregon.s3.amazonaws.com/hdppolicypak_kb_attachments/2023/06-02/7cf639c9-d610-4200-b292-11b853774084/image-20230602145013-3.png)

## Case 2

**Show popup message** and **Justification text required** are selected, but **Force user re-authenticate** is not.

[![A screen shot of a message

Description automatically generated](../../../../../static/images/PolicyPak/Content/Resources/Images/Book4/Reauthentication/Understanding Re authentication_3.png)](https://hf-files-oregon.s3.amazonaws.com/hdppolicypak_kb_attachments/2023/06-02/d461bef9-2ded-447e-ae24-3564ddb80fb3/image-20230602145013-4.png)

The pop-up box appears, and user must type in something before continuing onward by pressing **OK** button.

[![A screenshot of a computer error message

Description automatically generated](../../../../../static/images/PolicyPak/Content/Resources/Images/Book4/Reauthentication/Understanding Re authentication_4.png)](https://hf-files-oregon.s3.amazonaws.com/hdppolicypak_kb_attachments/2023/06-02/bb5784c9-ab6a-4d17-88ca-5a74842c3793/image-20230602145013-5.png)

## Case 3

**Show popup message** and **Force user re-authenticate** is selected, but **Justification text required** is not.

[![A screenshot of a computer screen

Description automatically generated](../../../../../static/images/PolicyPak/Content/Resources/Images/Book4/Reauthentication/Understanding Re authentication_5.png)](https://hf-files-oregon.s3.amazonaws.com/hdppolicypak_kb_attachments/2023/06-02/0a8d7919-430e-4786-b232-fbb4925de890/image-20230602145013-6.png)

The user is required to re-authenticate, but then the pop-up occurs, no text input is required by the user.

[![A screenshot of a computer

Description automatically generated](../../../../../static/images/PolicyPak/Content/Resources/Images/Book4/Reauthentication/Understanding Re authentication_6.png)](https://hf-files-oregon.s3.amazonaws.com/hdppolicypak_kb_attachments/2023/06-02/d5119ac8-da14-4f4b-aa97-6f7f784b77b9/image-20230602145013-7.png)

## Case 4

**Force user re-authenticate** and **Justification text required** are both selected.

[![A screenshot of a computer

Description automatically generated](../../../../../static/images/PolicyPak/Content/Resources/Images/Book4/Reauthentication/Understanding Re authentication_7.png)](https://hf-files-oregon.s3.amazonaws.com/hdppolicypak_kb_attachments/2023/06-02/66416294-b061-458d-85f7-d67ac118817c/image-20230602145013-8.png)

The User must re-authenticate, then when a pop-up is shown, theuser must type in something before **OK** is allowed an application proceeds.

[![A screenshot of a computer

Description automatically generated](../../../../../static/images/PolicyPak/Content/Resources/Images/Book4/Reauthentication/Understanding Re authentication_8.png)](https://hf-files-oregon.s3.amazonaws.com/hdppolicypak_kb_attachments/2023/06-02/29d2b18a-7c4f-4783-925a-f2bb6b2ec46c/image-20230602145013-9.png)