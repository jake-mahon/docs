---
sidebar_position: 5918
title: Custom Roles
---

# Custom Roles

A custom role can be created within Access Analyzer to combine the rights of other defined roles. Follow the steps below to create a custom role.

**Step 1 –** In the Access Analyzer directory, navigate to **PrivateAssemblies** and edit the **rba-roles.conf** file.  Add a new section for the custom role as shown in the following instructions:

```
  
  
  
  
  
  

```
* Replace `Special User` between the double quotes in the script above with the name of the new role.
* Replace `Description of Special User` between the double quotes in the script above with a description of what a user assigned the new role is able to do.

**Step 2 –** Add privileged values for the desired rights on new lines between the beginning comment `` and ending comment `` in the script above.

* For example, to create a single role which has the same privileges as the Host Management Administrator and Global Options Administrator roles, copy the privileges from the sections of the **rba-roles.conf** file to the newly added section, and remove duplicate values if there is any overlap.

See the sections below for examples of how roles should be added in the **rba-roles.conf** file.

## Default Global Options Administrator Privileges

The following example shows what is currently contained in the Global Options Administrator role, and how the created role should be added in the **rba-roles.conf** file.

```
  
  
  
  
  
  
     
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  

```
## Default Host Management Administrator Privileges

The following example shows what is currently contained in the Host Management Administrator role, and how the created role should be added in the **rba-roles.conf** file.

```
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  

```
## New Role Combining the Global Options Administrator and Host Management Administrator Roles

The following is an example of a custom role that combines the Global Options Administrator and Host Management Administrator roles. The script contains duplicate privileges of `RunSA`, `ScheduleDelete`, and `ScheduleEdit` that need to be removed.

```
  
   
  
  
  
           
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  

```