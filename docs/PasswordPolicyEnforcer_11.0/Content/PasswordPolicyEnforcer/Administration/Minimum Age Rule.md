---
sidebar_position: 6610
title: Age (Min) Rule
---

# Age (Min) Rule

The Minimum Age rule stops users from quickly cycling through a series of passwords in order to evade the History and Similarity rules. This rule can only be enforced by domain policies.

![Minimum age rule](../../../../../static/images/PasswordPolicyEnforcer_11.0/Content/Resources/Images/PasswordPolicyEnforcer/Admin/Policies/ageMin.png "Minimum age rule")

Select the **Age (Min)** check box to enable the Minimum Age rule.

Select the number of days before a user can change their password.

**NOTE:** The Minimum Age rule is unique because users cannot comply with it by choosing a different password; they must wait until the required number of days has elapsed. The Password Policy Client consequently handles rejections by this rule differently to other rules. Rather than displaying the usual message components, the Password Policy Client only displays the Minimum Age rule's Reason insert. See [Password Policy Client](Password Policy Client "Password Policy Client") topic for additional information. The Rejection Reason template, macros, and inserts from other rules are not displayed when a password change is denied by the Minimum Age rule.

The Minimum Age rule is not enforced during policy testing, but the test log does show the user's password age. A log entry is also added if the Minimum Age rule would have rejected the password change.