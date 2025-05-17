---
sidebar_position: 3145
title: Using Wildcards with Endpoint Privilege Manager and Certificates
---

# Using Wildcards with Endpoint Privilege Manager and Certificates

**NOTE:** See the [Endpoint Privilege Manager and Wildcards](../Video/LeastPrivilege/BestPractices/Wildcards "Endpoint Privilege Manager and Wildcards") video on how to use Endpoint Policy Manager Least Privilege Manager and Certificate Wildcards.

Applications like Zoom, GotoMeeting, Webex and others often have certificates which change from time to time. So even if you’ve set up the best practice of Certificate + File Info rules (like we discussed in the [Best Practices](BestPractices/Overview "Best Practices") section), those automatic rules can go out of date quickly.

To allow Endpoint Policy Manager Least Privilege Manager to permit Wildcards in Certificate matching, select Advanced Mode and then **Allow wildcards in Common Name**. This will flip the certificate to be permitted to Wildcard mode.

Now you can address the fields you need as Wildcards; in this example, we’ve specified L=\*.

![A screenshot of a computer

Description automatically generated](../../../../../static/images/PolicyPak/Content/Resources/Images/Book4/SecureCopy/Using Wildcards with PolicyPak.png)

Endpoint Policy Manager Least Privilege Manager will continue to check all the intermediary certificates along the way before it gets to the one you modified.

![A screenshot of a computer

Description automatically generated](../../../../../static/images/PolicyPak/Content/Resources/Images/Book4/SecureCopy/Using Wildcards with PolicyPak_1.png)

**CAUTION:** You want to try to be as restrictive as possible when using Wildcards; the more you open up, the less secure you will be.