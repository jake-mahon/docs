---
sidebar_position: 3922
title: "Error message The element 'emailSettings' in namespace \"\u2026AdminApproval\"\
  \ has incomplete content encountered when editing Admin Approval policy"
---

# Error message The element 'emailSettings' in namespace "…AdminApproval" has incomplete content encountered when editing Admin Approval policy

## PROBLEM:

When editing the Admin Approval policy you receive the error message below.

The element ‘emailSettings'in namespace ‘http://www.policypak.com/2017/LPM/AdminApproval' has
incomplete content. List of possible elements expected: ‘sendTo' in namespace
‘http://www.policypak.com/2017/LPM/AdminApproval'.

![](../../../../../../../static/images/PolicyPak/Content/Resources/Images/Troubleshooting/Error/LeastPrivilege/994_1_image-20230926224931-1.png)

## CAUSE:

The Admin Approval policy XML has become corrupt, and now contains an incomplete ‘emailSettings'
section. See below for an example.

![](../../../../../../../static/images/PolicyPak/Content/Resources/Images/Troubleshooting/Error/LeastPrivilege/994_2_image-20230926224931-2.png)

A correct email settings section would look like this:

```
    this@is.an.example.net
```
## RESOLUTIONS:

There are 3 possible ways to resolve this issue:

### Possible Fix # 1.

Export the AA policy to XML, then edit the XML.

Delete section:

```

```
And save XML file, then reimport the AA policy.

### Possible Fix #2.

Export the AA policy to XML, then edit the XML.

Update Section from

```

```
to

```
  
      

```
and save XML file, then reimport the AA
policy.

### Possible Fix #3.

Edit the Admin Approval policy in the
Netwrix Endpoint Policy Manager (formerly PolicyPak) Admin Console (MMC) and
set the Email option "Use of email:" under the Email tab to "Not Configured" then save
the policy.  Afterward, you can edit the AA policy again to add in the correct email settings if
needed.

![](../../../../../../../static/images/PolicyPak/Content/Resources/Images/Troubleshooting/Error/LeastPrivilege/994_3_image-20230926224931-3.png)

After one of these actions all will be good.