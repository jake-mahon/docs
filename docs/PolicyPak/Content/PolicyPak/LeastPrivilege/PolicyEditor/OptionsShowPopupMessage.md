---
sidebar_position: 4148
title: How does the "Show Pop-Up" message checkbox work along side "Force user re-authenticate"
  and "Justification text required" checkboxes?
---

# How does the "Show Pop-Up" message checkbox work along side "Force user re-authenticate" and "Justification text required" checkboxes?

In CSEs 23.6
and later, there are several options you may select:.

![](../../../../../../static/images/PolicyPak/Content/Resources/Images/LeastPrivilege/PolicyEditor/942_1_image-20230602145013-1.png)

The four cases below illustrate how these work.

Case 1

**Show popup message** is selected, but neither sub-option are checked.

![](../../../../../../static/images/PolicyPak/Content/Resources/Images/LeastPrivilege/PolicyEditor/942_2_image-20230602145013-2.png)

When the application launches, the pop up is presented as shown below.

Text input from the user is optional. The User must at least click **OK** to continue and launch the application.

![](../../../../../../static/images/PolicyPak/Content/Resources/Images/LeastPrivilege/PolicyEditor/942_3_image-20230602145013-3.png)

Case 2

**Show popup message** and **Justification text required** are selected, but **Force user re-authenticate** is not.

![](../../../../../../static/images/PolicyPak/Content/Resources/Images/LeastPrivilege/PolicyEditor/942_4_image-20230602145013-4.png)

The pop-up box
appears, and the user must type in something before continuing onward by clicking **OK**.

![](../../../../../../static/images/PolicyPak/Content/Resources/Images/LeastPrivilege/PolicyEditor/942_5_image-20230602145013-5.png)

**Case 3**

**Show popup
message** and **Force user re-authenticate** is selected, but **Justification text required** is not.

![](../../../../../../static/images/PolicyPak/Content/Resources/Images/LeastPrivilege/PolicyEditor/942_6_image-20230602145013-6.png)

The User is required to re-authenticate, but then when the pop-up occurs, no text input is required by the user.

![](../../../../../../static/images/PolicyPak/Content/Resources/Images/LeastPrivilege/PolicyEditor/942_7_image-20230602145013-7.png)

**Case 4**

![](../../../../../../static/images/PolicyPak/Content/Resources/Images/LeastPrivilege/PolicyEditor/942_8_image-20230602145013-8.png)

The User must
re-authenticate. When the pop-up is shown, the user must type in something before **OK** is allowed and the application
proceeds.

![](../../../../../../static/images/PolicyPak/Content/Resources/Images/LeastPrivilege/PolicyEditor/942_9_image-20230602145013-9.png)