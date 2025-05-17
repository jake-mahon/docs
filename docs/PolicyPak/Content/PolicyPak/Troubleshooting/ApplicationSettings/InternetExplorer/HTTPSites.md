---
sidebar_position: 3956
title: 'Internet Explorer: Why don''t HTTP sites get added to the Trusted Site list?'
---

# Internet Explorer: Why don't HTTP sites get added to the Trusted Site list?

IE itself wont allow HTTP sites unless you loosen the security in IE.

Use Netwrix Endpoint Policy Manager (formerly PolicyPak) to do it for you.

On the Security tab, ensure "Trusted: Require server verification https:" and "Intranet: Require server verification https" are both UNDERLINED and UN-Checked.

This will deliver "un-check" to these settings, allowing for HTTP zones.

![](../../../../../../../static/images/PolicyPak/Content/Resources/Images/Troubleshooting/ApplicationSettings/240_1_image002.png)