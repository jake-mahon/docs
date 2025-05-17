---
sidebar_position: 517
title: Configure Secured Options
---

# Configure Secured Options

This guide shows how to configure secured options to ensure data security in a connection's parameters.

## Overview

A connection's parameters fall into two categories: regular or secured options.

The particularity of secured options is that, once set, they will never again be shown to users. Hence, extra care should be taken while specifying them.

There are several types of secured options: a simple field or multiple key-value fields.

## Configure a Secured Option

Configure a secured option by proceeding as follows:

1. Among a connection's parameters, identify the secured option:

   * for a simple field:

     ![AD creation](../../../../../../../../static/images/Usercube_SaaS/Content/Resources/Images/SecuredOptions_ADLogin_V603.png)
   * for multiple key-value fields:

     ![SQL connection string](../../../../../../../../static/images/Usercube_SaaS/Content/Resources/Images/SecuredOptions_keyValue_V603.png)

     :::note
Contrary to simple fields, multiple-key-value secured options are not restricted to a given property. They are arbitrary and can be set to anything.
     :::
2. Fill the field(s) and, if needed, click on the eye icon to make the content visible.

   ![Eye Icon](../../../../../../../../static/images/Usercube_SaaS/Content/Resources/Images/iconEye_V600.svg)

   > For example, for a simple field in an AD connection, the **Login** and **Password** are by default hidden with ??????:
   >
   > ![Login Secured Options Hidden](../../../../../../../../static/images/Usercube_SaaS/Content/Resources/Images/SecuredOptions_ADExample_V603.png)
   >
   > ![Login Secured Options Revealed](../../../../../../../../static/images/Usercube_SaaS/Content/Resources/Images/SecuredOptions_ADExampleVisible_V603.png)

   > For example, for multiple key-value fields in an SQL connection, some elements of the connection string might be sensitive and need to be hidden:
   >
   > ![SQL connection string](../../../../../../../../static/images/Usercube_SaaS/Content/Resources/Images/SecuredOptions_SQLExample1_V603.png)
   >
   > In this example, the database name and the minimal pool size are secured options:
   >
   > ![SQL Secured option filled](../../../../../../../../static/images/Usercube_SaaS/Content/Resources/Images/SecuredOptions_SQLExample2_V603.png)

   > Another example of multiple key-value fields in a Powershell connection:
   >
   > ![Powershell Secured option hidden](../../../../../../../../static/images/Usercube_SaaS/Content/Resources/Images/SecuredOptions_PowershellExample_V603.png)
3. Once saved, any secured option's value can no longer be seen. However, it can still be modified by deleting the value and re-specifying it.