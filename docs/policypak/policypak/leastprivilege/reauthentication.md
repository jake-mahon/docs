# Understanding Re-authentication & Justification Text

There might be times you want users to re-authenticate and/or provide justification text about their actions. Justification text is logged to the local event log for later review.

Here, on the left you’ll see a Self Elevate rule, and on the right a standard Elevation rule.

You can see both rule types have the options for __Require Justification Text__ and __Force user to reauthenticate__.

![A screenshot of a computer

Description automatically generated](/img/product_docs/policypak/policypak/leastprivilege/understanding_re_authentication.png)

__NOTE:__ See the [Endpoint Policy Manager Least Priv Manager: Self Elevate Mode](/docs/policypak/policypak/video/leastprivilege/bestpractices/selfelevatemode.md) video for a demonstration of Justification text for Self Elevate.

__NOTE:__ See the [Endpoint Privilege: Re-Authenticate with Self Elevate](/docs/policypak/policypak/video/leastprivilege/selfelevatemode/reauthenticate.md) video for a demonstration of re-authentication for Self Elevate.

You can force a user to __Require Justification Text__ for normal elevation actions, as well as Self Elevate policies.

The following cases highlight how this might work.

## Case 1

__Show popup message__ is selected, but neither sub-option are checked.

[![A screen shot of a computer

Description automatically generated](/img/product_docs/policypak/policypak/leastprivilege/understanding_re_authentication_1.png)](https://hf-files-oregon.s3.amazonaws.com/hdppolicypak_kb_attachments/2023/06-02/f4754da9-7f9e-4596-a0d4-e51a80069fb4/image-20230602145013-2.png)

When the application launches, the pop up is presented.

Text input from the user is optional. The user must at least click __OK__ to continue and launch the application.

[![A screenshot of a computer monitor

Description automatically generated](/img/product_docs/policypak/policypak/leastprivilege/understanding_re_authentication_2.png)](https://hf-files-oregon.s3.amazonaws.com/hdppolicypak_kb_attachments/2023/06-02/7cf639c9-d610-4200-b292-11b853774084/image-20230602145013-3.png)

## Case 2

__Show popup message__ and __Justification text required__ are selected, but __Force user re-authenticate__ is not.

[![A screen shot of a message

Description automatically generated](/img/product_docs/policypak/policypak/leastprivilege/understanding_re_authentication_3.png)](https://hf-files-oregon.s3.amazonaws.com/hdppolicypak_kb_attachments/2023/06-02/d461bef9-2ded-447e-ae24-3564ddb80fb3/image-20230602145013-4.png)

The pop-up box appears, and user must type in something before continuing onward by pressing __OK__ button.

[![A screenshot of a computer error message

Description automatically generated](/img/product_docs/policypak/policypak/leastprivilege/understanding_re_authentication_4.png)](https://hf-files-oregon.s3.amazonaws.com/hdppolicypak_kb_attachments/2023/06-02/bb5784c9-ab6a-4d17-88ca-5a74842c3793/image-20230602145013-5.png)

## Case 3

__Show popup message__ and __Force user re-authenticate__ is selected, but __Justification text required__ is not.

[![A screenshot of a computer screen

Description automatically generated](/img/product_docs/policypak/policypak/leastprivilege/understanding_re_authentication_5.png)](https://hf-files-oregon.s3.amazonaws.com/hdppolicypak_kb_attachments/2023/06-02/0a8d7919-430e-4786-b232-fbb4925de890/image-20230602145013-6.png)

The user is required to re-authenticate, but then the pop-up occurs, no text input is required by the user.

[![A screenshot of a computer

Description automatically generated](/img/product_docs/policypak/policypak/leastprivilege/understanding_re_authentication_6.png)](https://hf-files-oregon.s3.amazonaws.com/hdppolicypak_kb_attachments/2023/06-02/d5119ac8-da14-4f4b-aa97-6f7f784b77b9/image-20230602145013-7.png)

## Case 4

__Force user re-authenticate__ and __Justification text required__ are both selected.

[![A screenshot of a computer

Description automatically generated](/img/product_docs/policypak/policypak/leastprivilege/understanding_re_authentication_7.png)](https://hf-files-oregon.s3.amazonaws.com/hdppolicypak_kb_attachments/2023/06-02/66416294-b061-458d-85f7-d67ac118817c/image-20230602145013-8.png)

The User must re-authenticate, then when a pop-up is shown, theuser must type in something before __OK__ is allowed an application proceeds.

[![A screenshot of a computer

Description automatically generated](/img/product_docs/policypak/policypak/leastprivilege/understanding_re_authentication_8.png)](https://hf-files-oregon.s3.amazonaws.com/hdppolicypak_kb_attachments/2023/06-02/29d2b18a-7c4f-4783-925a-f2bb6b2ec46c/image-20230602145013-9.png)
