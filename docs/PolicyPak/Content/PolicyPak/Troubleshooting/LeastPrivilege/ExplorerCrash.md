---
sidebar_position: 3774
title: How-to Fix EXPLORER.EXE crash when right-clicking document files, pdf, docx,
  xlsx, etc.?
---

# How-to Fix EXPLORER.EXE crash when right-clicking document files, pdf, docx, xlsx, etc.?

**NOTE:** This should be automatically fixed for MOST CUSTOMERS with CSE BUILD 3068 and later, these steps are only required if you are still experiencing this issue.

SecureCopy can run into conflicts with some third-party software shell extensions. When this happens, instead of opening a right-click context menu EXPLORER.EXE crashes or restarts instead. The workaround is to disable SecureCopy in the registry.

Use Group Policy Preference items to delete the following registry keys. These keys are also wrapped into a collection and attached within this KB below.

![](../../../../../../static/images/PolicyPak/Content/Resources/Images/Troubleshooting/LeastPrivilege/676_1_image-20210823230906-1_950x247.png)

Once the SecureCopy extension registration is removed from the registry, the EXPLORER.EXE crash issue will no longer occur.

**NOTE:** After disabling SecureCopy in the registry, SecureCopy policies will no longer affect the endpoint.

```
  
  
      
          
      
      
          
      
      
          
      

```
Windows Registry Editor Version 5.00

```
[-HKEY_CLASSES_ROOT\*\shell\trustedcopy]
```
```
[-HKEY_CLASSES_ROOT\folder\shell\trustedcopy]
```
```
[-HKEY_LOCAL_MACHINE\SOFTWARE\Classes\CLSID\{C8DD2F11-B78C-4430-B1A3-C699497449E5}]
```