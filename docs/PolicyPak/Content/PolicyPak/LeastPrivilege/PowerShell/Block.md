---
sidebar_position: 4136
title: How to Block running PowerShell 2.0 using Least Privilege Manager
---

# How to Block running PowerShell 2.0 using Least Privilege Manager

Issue:

Blocking PowerShell Version 2 using a traditional command line rule in Endpoint Policy Manager Least Privilege Manager results in multiple block events being generated every second in the Endpoint Policy Manager event log.

![](../../../../../../static/images/PolicyPak/Content/Resources/Images/LeastPrivilege/1319_1_61042bd4123a78ef7686b114b9eea335.png)

Cause:

When you try to run PowerShell -v 2 (or an equivalent) from the PowerShell prompt the following is happening:

First, the parent (PowerShell) creates a child with the following command line:

`C:\Windows\System32\WindowsPowerShell\v1.0\powershell.exe` -version 2

When it fails (due to the fact the PP LPM Client Side Extensions (CSE) blocks it), the parent (the initial PowerShell process) creates a temporary child process with another command line:

`C:\Windows\System32\WindowsPowerShell\v1.0\powershell.exe`

`C:\Windows\System32\WindowsPowerShell\v1.0\powershell.exe` -version 2.

The child process then creates another child process with the initial command line and Endpoint Policy Manager (formerly PolicyPak) Least Privilege Managerblocks it.

Then it repeats, in an endless loop.

Workaround:

Since we cannot alter the internal PowerShell logic that attempts to restart the child process to overcome the failure, we have to use the two scripts below to work around the issue. The two policies below are also attached as XML for your convenience.

![](../../../../../../static/images/PolicyPak/Content/Resources/Images/LeastPrivilege/1319_2_d3a2208d260469bdbfdfc7edaf6848ba.png)

![](../../../../../../static/images/PolicyPak/Content/Resources/Images/LeastPrivilege/1319_3_5745adb2d8b01ee9555aa6db772eae6a.png)

Lastly, test using the command directly below to ensure that PowerShell Version 2.0 is now successfully blocked and that there are no longer multiple block events being created in the Endpoint Policy Manager event log.

PowerShell -version 2.0

[Copy](javascript:void(0);)

PowerShell V2 Workaround

```
  
  
    
      
        
          
            
              
              CN=Microsoft Windows, O=Microsoft Corporation, L=Redmond, S=Washington, C=US  
              
              
              Microsoft® Windows® Operating System  
              10.0.14393.206  
              *powersh*  
              10.0.14393.206  
              
              
              -v* 2*  
              false  
              
            
            
            false  
            
            
              
              false  
              
            
          
        
      
      
        
          
            
              
              CN=Microsoft Windows, O=Microsoft Corporation, L=Redmond, S=Washington, C=US  
              
              
              Microsoft® Windows® Operating System  
              10.0.14393.206  
              *powersh*  
              10.0.14393.206  
              
              
              * -v* 2*  
              false  
              
            
            
            false  
            
            
              
              false  
              
            
          
        
      
    

```