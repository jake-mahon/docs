---
sidebar_position: 4121
title: How to Allow a Non-Admin user to manage a specific Service using SC.EXE with
  Least Privilege Manager
---

# How to Allow a Non-Admin user to manage a specific Service using SC.EXE with Least Privilege Manager

The steps in the example below will allow a Non-Admin user to manage the Remote Registry service using the SC.EXE command.
Before you start, you can pre-test that a standard user cannot use the command line to start the service.

Follow the steps to start the service using the command line.

**Step 1 –** Use command `sc config remoteregistry start=auto` to start your test.

**Step 2 –** Create an LPM Combo rule using Path and Command line.

![](../../../../../../static/images/PolicyPak/Content/Resources/Images/LeastPrivilege/1318_1_6c12a201fa0efabb0ac290a16ff6cc0d.png)

**Step 3 –** For the Path, use: C:\Windows\System32\sc.exe

![](../../../../../../static/images/PolicyPak/Content/Resources/Images/LeastPrivilege/1318_2_8beafda62e37494f1c8002167898f88f.png)

**Step 4 –** For the Command line use the syntax: `* *` (\*space\*). For example:`* RemoteRegistry*`. Ensure that both **Strict equality** and **Ignore arguments** case options are checked.

![](../../../../../../static/images/PolicyPak/Content/Resources/Images/LeastPrivilege/1318_3_68d25dd7a6203dc388177e40b10e567d.png)

**NOTE:** You can use services.msc and look at the properties of an individual service to get the ServiceName, or you can use the `sc query` command from CMD to get the ServiceName.

**Step 5 –** Apply the policy to the user(s) or computer(s) that need to receive the policy.

![](../../../../../../static/images/PolicyPak/Content/Resources/Images/LeastPrivilege/1318_4_eb4a951261c6175e4bc5cf6755973f0e.png)

**Step 6 –** Test from a CMD prompt as a standard non-admin user to see if you can manage the Remote Registry service using the SC.EXE command. `SC Config RemoteRegistry Start=Auto`

**NOTE:** Since the Remote Registry service is disabled by default we need to enable the service and choose its startup type.

![](../../../../../../static/images/PolicyPak/Content/Resources/Images/LeastPrivilege/1318_5_508183dde00c40d462fb07efa2b16d71.png)

**Step 7 –** Start the service using the following command: `SC Start RemoteRegistry`.

![](../../../../../../static/images/PolicyPak/Content/Resources/Images/LeastPrivilege/1318_6_5f4b0a5c9b2a2991bb671fa5353a3f8f.png)

**Step 8 –** Stop the service with the following command: `SC Stop RemoteRegistry`.

![](../../../../../../static/images/PolicyPak/Content/Resources/Images/LeastPrivilege/1318_7_97c635953212043da712525588cec2d0.png)

**Step 9 –** Disable the service with the following command: `SC Config RemoteRegistry Start=Disabled`.

You can use the XML policy below as an example.

[Copy](javascript:void(0);)

XML Policy

```
  
  
    
      
        
          
            
              
              %SYSTEMROOT%\System32\sc.exe  
              
              
              * RemoteRegistry*  
              false  
              
            
            
            true  
            
            
              
                
                  
                  
                
              
            
          
        
      
    

```