---
sidebar_position: 4051
title: Setting up the Endpoint Policy Manager Policy
---

# Setting up the Endpoint Policy Manager Policy

After **Selecting Credential Based Policy**, fill in **Domain** and **User Name**.

![](../../../../../../../static/images/PolicyPak/Content/Resources/Images/Book4/PrivilegeSecure/Setting up the PolicyPak Policy.png)

* Domain – Enter the name of the domain of the Netwrix Privilege Secure managed user to perform the activity.
* User name – Enter the unqualified name of the Netwrix Privilege Secure managed user to perform the activity.
* Activity name – Nothing to enter when Credential Release / always grayed out.

At the end of the policy you have some settings for **Action** and **Options**.

![](../../../../../../../static/images/PolicyPak/Content/Resources/Images/Book4/PrivilegeSecure/Setting up the PolicyPak Policy_1.png)

In **Action**, you can select **Run with elevated privileges** or simply Allow and log if you just want it brokered.

In **Options**, you can have the application launch be exclusively called with a right click **Run with Netwrix Privilege Secure** context menu, or always call Netwrix Privilege Secure with **Apply on demand** unchecked. Additionally, you can enable or disable video recording when this policy is issued via **Enable video recording (Netwrix Privilege Secure)**.

Back on the Netwrix Privilege Secure server, you need to make sure there is a matching **Credential Based** policy.

![](../../../../../../../static/images/PolicyPak/Content/Resources/Images/Book4/PrivilegeSecure/Setting up the PolicyPak Policy_2.png)