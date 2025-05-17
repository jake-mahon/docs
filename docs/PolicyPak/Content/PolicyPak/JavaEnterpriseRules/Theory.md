---
sidebar_position: 3201
title: Theory of Operation and Moving Parts
---

# Theory of Operation and Moving Parts

In this section you will learn about two main things: the theory of operation and the moving parts for Netwrix Endpoint Policy Manager (formerly PolicyPak) Java Rules Manager. This will give you an overview before we start to use the product.

## Theory of Operation

Endpoint Policy Manager Java Rules Manager automates Oracle's own built-in Java Deployment Rule Set feature. To find more information on the Java Deployment Rule Set feature, visit the following websites:

* Older but more readable: .
* Newer but less readable: .

The Deployment Rule Set feature is useful but can be difficult to set up and keep updated enterprise-wide. The essence of the feature is a rule set, which must be created in XML. Then, a package must be digitally signed and deployed to endpoints. When the rule set is executed correctly (manually), the result looks similar to what is shown below.

![](../../../../../static/images/PolicyPak/Content/Resources/Images/Netwrix_Book 6 - Java Enterprise Rules Manager Component_manual/Theory of Operation and Moving.png)

Automating and updating deployment rule sets anytime a site requires updating can be painful. Fortunately, Endpoint Policy Manager Java Rules Manager automates the whole process. It reduces errors, enables change management using Group Policy, Microsoft Endpoint Manager (SCCM and Intune), or your own tool, and gets everything to work the first time.

## Moving Parts

* A management station – You must install the Endpoint Policy Manager Admin Console MSI on your management station where you create Group Policy Objects (GPOs). Then the Endpoint Policy Manager | Endpoint Policy Manager Java Rules Manager node will be visible.
* The Endpoint Policy Manager client-side extension (CSE) that runs on the client (target) machine — This is the same CSE for all Endpoint Policy Manager products. There is nothing separate to install, and the Endpoint Policy Manager CSE must be present in order to accept Endpoint Policy Manager Security Settings Manager directives when using Microsoft Endpoint Manager (SCCM and Intune), KACE, similar utilities, or Endpoint Policy Manager Cloud.
* Endpoints — Endpoints must be licensed for Endpoint Policy Manager Java Rules Manager using one of the licensing methods.
* Endpoint Policy Manager Exporter (optional) — This is a free utility that lets you take Endpoint Policy Manager Java Rules Manager and our other products' XML files and wrap them into a portable MSI file for deployment using Microsoft Endpoint Manager (SCCM and Intune) or your own systems management software.