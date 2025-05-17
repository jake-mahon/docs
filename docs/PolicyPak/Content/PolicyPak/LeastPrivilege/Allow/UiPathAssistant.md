---
sidebar_position: 4120
title: How to Allow UiPath Assistant to run when running PowerShell is blocked for
  all Users
---

# How to Allow UiPath Assistant to run when running PowerShell is blocked for all Users

Blocking PowerShell for everyone can also cause applications that depend on PowerShell to not run properly.
For example, when using the UiPath Assistant application with PowerShell blocked, the two UiPath Assistant commands below are also be blocked.

![](../../../../../../static/images/PolicyPak/Content/Resources/Images/LeastPrivilege/1320_1_5c7b0bb711837088e14ba56fe0191b4e.png)

![](../../../../../../static/images/PolicyPak/Content/Resources/Images/LeastPrivilege/1320_2_2b07a73f4f7ad9bd4005effc11de64c9.png)

![](../../../../../../static/images/PolicyPak/Content/Resources/Images/LeastPrivilege/1320_3_e63350e252dcfbfbbe47a6949ab99f53.png)

![](../../../../../../static/images/PolicyPak/Content/Resources/Images/LeastPrivilege/1320_4_129d10341515bde5b5cc94db70557eba.png)

To work around this issue you need to create two LPM Path and Command line Executable Policies using the settings below.

![](../../../../../../static/images/PolicyPak/Content/Resources/Images/LeastPrivilege/1320_5_0c63e13faa75539ef18a64527e8fc5c7.png)

For Policy # 1 use these settings:

Path: `C:\Windows\System32\WindowsPowerShell\v1.0\powershell.exe`

Arguments: `*"$assemblies=(\"System\");$source=\"*`

![](../../../../../../static/images/PolicyPak/Content/Resources/Images/LeastPrivilege/1320_6_53331fee44652a08986eec464b49ee4e.png)

For Policy #2 use these settings:

Path: `C:\Windows\System32\WindowsPowerShell\v1.0\powershell.exe`

Arguments: `"$FileContent = Get-Content -Encoding unicode %Temp%\shortcuts-params.txt; Invoke-Expression $FileContent"`

![](../../../../../../static/images/PolicyPak/Content/Resources/Images/LeastPrivilege/1320_7_ee314a383e4b4e2d6f0723c6562c2fff.png)

**NOTE:** For both policies above be sure to set **Ignore arguments** case to **True**, and **Comparison mode** to **Strict Equality**.

[Copy](javascript:void(0);)

Allowed with Path Rule 1

```
  
  
    
      
        
          
            
              
              C:\Windows\System32\WindowsPowerShell\v1.0\powershell.exe  
              
              
              *"$assemblies=(\"System\");$source=\"*  
              false  
              
            
            
            true  
            
            
              
            
          
        
      
    

```
[Copy](javascript:void(0);)

Allowed with Path Rule 2

```
  
  
    
      
        
          
            
              
              C:\Windows\System32\WindowsPowerShell\v1.0\powershell.exe  
              
              
              "$FileContent = Get-Content -Encoding unicode %Temp%\shortcuts-params.txt; Invoke-Expression $FileContent"  
              false  
              
            
            
            true  
            
            
              
            
          
        
      
    

```