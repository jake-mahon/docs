---
sidebar_position: 3160
title: How to insert User information in any Application via Group Policies?
---

# How to insert User information in any Application via Group Policies?

## Summary:

How to read Active Directory attribute data for a User object and insert those details in Adobe Acrobat Identity node.

## Business case

You have a requirement to insert User information details, i.e. Name, Title, or Email for any application. For example, you want to insert these details under the Identity node for Adobe Acrobat Preferences.

This topic demonstrates how to read that information from Active Directory User Object attributes, and insert that data for the Identity tab in Adobe Acrobat.

![](../../../../../static/images/PolicyPak/Content/Resources/Images/GroupPolicy/687_1_image-20200219090943-1_680x434.png)

## Solution

First, locate the registry entries of the required application. In this example we only show Registry location and values for Adobe Acrobat, which may also change anytime. Make sure you have the correct Registry details. You can test it by manually making changes in RegEdit.

Once you are sure, follow these steps to pre-fill the required information.

**Step 1 –** Create a GPO and link it to a Scope you want

**Step 2 –** Create a Registry collection to stay organized

**Step 3 –** Create the required Registry items to insert user information for Adobe Acrobat as shown below.

Reg Location: `HKEY_CUIRRENT_USER\Software\Adobe\Adobe Acrobat\DC\Identity`

Reg Value: `tEMail – tFirstName – tLastName – tName – tTitle`

![](../../../../../static/images/PolicyPak/Content/Resources/Images/GroupPolicy/687_2_image-20200219090943-2_787x233.png)

**Step 4 –** Click on the **Common** tab, under each Reg item, and select **Run** in the logged-on user's security context

**Step 5 –** Check the Item-level targeting box and click **Targeting**.

![](../../../../../static/images/PolicyPak/Content/Resources/Images/GroupPolicy/687_3_image-20200219090943-3_388x184.png)

**Step 6 –** From the **New Item** drop-down, select LDAP and define the filter as below.

`&(objectClass=User)(sAMAccountName=%USERNAME%)`

![](../../../../../static/images/PolicyPak/Content/Resources/Images/GroupPolicy/687_4_image-20200219090943-4_674x261.png)

**NOTE:**  This step lets you access the AD user object attribute for the logged-on user, and turn them into variables for use within the Registry Preferences.

**Step 7 –** Use both variables to get the user's First and Last name and save them in a Reg Item.

![](../../../../../static/images/PolicyPak/Content/Resources/Images/GroupPolicy/687_5_image-20200219090943-5_405x314.png)

This will read First and Last Name values from AD User Object's attribute and save it for tName registry value for Adobe Acrobat.

**Step 8 –** Follow the same steps for other Registry items and change User Object attributes as required.

For more information on AD attributes for User Object, please see Self ADSI's article [Attributes for AD Users](http://www.selfadsi.org/user-attributes-w2k12.htm "Attributes for AD Users") for additional information.