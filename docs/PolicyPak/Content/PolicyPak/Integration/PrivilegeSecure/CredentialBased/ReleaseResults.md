---
sidebar_position: 4050
title: Credential Release Results
---

# Credential Release Results

To see the action, right-click on the application and choose **Run with Netwrix Privilege Secure** (or double-click it if the **Apply on demand** option was unchecked.

![](../../../../../../../static/images/PolicyPak/Content/Resources/Images/Book4/PrivilegeSecure/Credential Release Results.png)

You’ll launch the process as `EastSalesUser1`, and give your Active Directory credentials, Two-Factor (brokered by Netwrix Privilege Secure) and wait for the Activity Session to be created.

![](../../../../../../../static/images/PolicyPak/Content/Resources/Images/Book4/PrivilegeSecure/Credential Release Results_1.png)

The result is that NotepadP is launched as `EastSalesAdmin9`. Because Netwrix Privilege Secure is brokering the operation and the Netwrix Endpoint Policy Manager (formerly PolicyPak) Least Privilege Manager client is changing the context to that user.

![](../../../../../../../static/images/PolicyPak/Content/Resources/Images/Book4/PrivilegeSecure/Credential Release Results_2.png)