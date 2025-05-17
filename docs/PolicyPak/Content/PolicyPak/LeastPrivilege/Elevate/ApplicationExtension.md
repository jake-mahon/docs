---
sidebar_position: 4168
title: How to Elevate applications with a .application extension using Least Privilege
  Manager
---

# How to Elevate applications with a .application extension using Least Privilege Manager

**Method 1 (Recommended): Elevating the underlying .EXE**

**Step 1 –** Look in the Netwrix Endpoint Policy Manager (formerly PolicyPak) Event log for the blocked event to findthe name of the EXE being blocked.

![](../../../../../../static/images/PolicyPak/Content/Resources/Images/LeastPrivilege/Elevate/451_1_image-20200210223130-1_950x326.png)

**Step 2 –** Create an EXE elevation combo rule in Least Privilege Manager for the EXE being blocked.

![](../../../../../../static/images/PolicyPak/Content/Resources/Images/LeastPrivilege/Elevate/451_3_image-20200210223130-2_950x592.png)

**NOTE:**  The more conditions evaluated, the more secure the rule will be. See this video for more details: [Best Practices for Elevating User-Based Installs](../../Video/LeastPrivilege/BestPractices/ElevatingUserBasedInstalls "Best Practices for Elevating User-Based Installs")

**Step 3 –** Apply the policy and then verify using the Endpoint Policy Manager event log of the application being Elevated.

![](../../../../../../static/images/PolicyPak/Content/Resources/Images/LeastPrivilege/Elevate/451_5_image-20200210223130-3_950x270.png)

Method 2: Elevating RUNDLL32.exe and the .APPLICATION exactly

**Step 1 –** Immediately after receiving the BLOCKED message (launch the application again if needed), look in the Least Privilege Manager Log `PPService.log`, which can be found here by default:

`%programdata%\PolicyPak\PolicyPak Least Privilege Manager\ppService.log` (i.e. `C:\ProgramData\PolicyPak\PolicyPak Least Privilege Manager\ppService.log`)

![](../../../../../../static/images/PolicyPak/Content/Resources/Images/LeastPrivilege/Elevate/451_7_image-20200210223130-4.png)

**NOTE:**  The reason to look immediately in the log is so that we know which ppservice().log file to look in, ppservice.log is the latest log, and ppservice(n).log files are the rolled over logs.

**Step 2 –** Open the ppservice.log in notepad (or any text editor) and scroll all the way to the bottom. Start searching from the bottom upwards for the text ".application".

![](../../../../../../static/images/PolicyPak/Content/Resources/Images/LeastPrivilege/Elevate/451_9_image-20200210223130-5.png)

**Step 3 –** What we are looking for is the entire command-line used to launch the .application. See below for example:

![](../../../../../../static/images/PolicyPak/Content/Resources/Images/LeastPrivilege/Elevate/451_11_image-20200210223130-6.png)

Using the example above our entire command-line would be:

```
"C:\Windows\System32\rundll32.exe" "C:\Windows\System32\dfshim.dll",ShOpenVerbApplication C:\Users\EastSalesUser1\Desktop\test.application
```
**Step 4 –** Now we are going to create an EXE combo elevation rule using **Path**, and also check the two settings for **Command-line arguments** and **Apply to child processes** before clicking **Next**.

![](../../../../../../static/images/PolicyPak/Content/Resources/Images/LeastPrivilege/Elevate/451_13_image-20200210223130-7.png)

**Step 5 –** Enter "\*\EXE" for the PATH, replace EXE with the name of the executable mentioned in the command-line from the ppservice.log relevant to your environment, then click **Next**.

In this example, the EXE name is **Rundll32.exe**.

![](../../../../../../static/images/PolicyPak/Content/Resources/Images/LeastPrivilege/Elevate/451_15_image-20200210223130-8.png)

**Step 6 –** At the next screen, copy and paste the entire command-line from the ppservice.log file into the **Command-line Arguments** section. Ensure that **Strict Equality** and **Ignore Arguments case** are both selected.

**NOTE:** The command-line arguments cannot be empty.

**Step 7 –** Click **Next** then **Finish** to save the rule.

![](../../../../../../static/images/PolicyPak/Content/Resources/Images/LeastPrivilege/Elevate/451_17_image-20200210223130-9.png)

**Step 8 –** Apply the policy and then verify using the Endpoint Policy Manager event log for the application being Elevated.

![](../../../../../../static/images/PolicyPak/Content/Resources/Images/LeastPrivilege/Elevate/451_19_image-20200210223130-10_950x266.png)