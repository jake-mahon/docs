---
sidebar_position: 4154
title: How to install and run MYKI Password Manager as regular user when SecureRun
  is enabled
---

# How to install and run MYKI Password Manager as regular user when SecureRun is enabled

## Option 1:

Use Least Privilege Manager to Elevate the install of MyKi Password Manager for the standard user.

**NOTE:**  This option requires less rules to be created than option 2.

![](../../../../../../static/images/PolicyPak/Content/Resources/Images/LeastPrivilege/SecureRun/844_1_image-20210705210753-1_950x127.png)

**Step 1 –** Create a new Least Privilege Manager policy on either the Computer or User side and add a new Executable policy for the downloaded MyKi installation EXE (i.e., `MYKI-latest.exe`).  Choose the **use combo rule (advanced)** option, then select only **Signature** and **File Info** before clicking **Next**.

![](../../../../../../static/images/PolicyPak/Content/Resources/Images/LeastPrivilege/SecureRun/844_2_image-20210705210753-2.png)

**Step 2 –** Under the **Combo condition** > **Select reference file** drop down, choose **From EXE file** and browse to and select the `MYKI-latest.exe` file. Answer **Yes** when prompted then click **Next** to continue.

![](../../../../../../static/images/PolicyPak/Content/Resources/Images/LeastPrivilege/SecureRun/844_3_image-20210705210753-3.png)

**Step 3 –** In the Select Action window leave the defaults in place then click **Next**.

![](../../../../../../static/images/PolicyPak/Content/Resources/Images/LeastPrivilege/SecureRun/844_4_image-20210705210753-4.png)

**Step 4 –** In the Settings window select **User and System processes** and click **Finish**.

![](../../../../../../static/images/PolicyPak/Content/Resources/Images/LeastPrivilege/SecureRun/844_5_image-20210705210753-5.png)

**Step 5 –** Add a new Executable policy and select the **use combo rule (advanced)** option, then select only **Signature** and **File Info** before clicking **Next**.

![](../../../../../../static/images/PolicyPak/Content/Resources/Images/LeastPrivilege/SecureRun/844_6_image-20210705210753-6.png)

**Step 6 –** Under the **Combo condition** > **Select reference file** drop down, choose From EXE file, then browse to and select `%LocalAppData%\myki\MYKI.exe`.

**NOTE:**  This file can be found at the specified location only after a successful MyKi installation.

**Step 7 –** Click **Yes** when prompted, then click **Next** to continue.

![](../../../../../../static/images/PolicyPak/Content/Resources/Images/LeastPrivilege/SecureRun/844_7_image-20210705210753-7.png)

**Step 8 –** In the Select action window , select **Allow and log** and click **Next**.

![](../../../../../../static/images/PolicyPak/Content/Resources/Images/LeastPrivilege/SecureRun/844_8_image-20210705210753-8.png)

**Step 9 –** In the Settings windowselect **User and System processes**  and click **Finish**.

![](../../../../../../static/images/PolicyPak/Content/Resources/Images/LeastPrivilege/SecureRun/844_9_image-20210705210753-9.png)

## Option2:

Create Allow and Log rules for a Standard user to be able to install and run MyKi Password Manager.

**NOTE:**  If the user has already installed MyKi using their standard user account, then use this option.

![](../../../../../../static/images/PolicyPak/Content/Resources/Images/LeastPrivilege/SecureRun/844_10_image-20210705210753-10_950x133.png)

**Step 1 –** Create a new Least Privilege Manager policy on either the Computer or User side, then add a new Executable policy for the downloaded MIKY installation EXE (i.e.`, MYKI-latest.exe`).Select the **use combo rule (advanced)** option, then select only **Signature** and **File Info** before clicking **Next**.

![](../../../../../../static/images/PolicyPak/Content/Resources/Images/LeastPrivilege/SecureRun/844_11_image-20210705210753-11.png)

**Step 2 –** Under the **Combo condition** > **Select reference file** drop down, choose **From EXE file**, then browse to and select the `MYKI-latest.exe` file. Click **Yes**  when prompted, then click **Next** to continue.

![](../../../../../../static/images/PolicyPak/Content/Resources/Images/LeastPrivilege/SecureRun/844_12_image-20210705210753-12.png)

**Step 3 –** In the Select action window, select **Allow and log**and click **Next**.

![](../../../../../../static/images/PolicyPak/Content/Resources/Images/LeastPrivilege/SecureRun/844_13_image-20210705210753-13.png)

**Step 4 –** In the Settings window select **User and System processes**  and click **Finish**.

![](../../../../../../static/images/PolicyPak/Content/Resources/Images/LeastPrivilege/SecureRun/844_14_image-20210705210753-14.png)

**Step 5 –** Next, add a new executable policy. Select the **use combo rule (advanced)** option, but this time select **Path** and **Signature** conditions before clicking **Next**.

**Step 6 –** Add the three paths below and answer **No** the first time you are asked if you you want to automatically fill the values from the selected file for signature conditions. Answer **Yes** the second time you are prompted (when adding `Update.exe` path, etc.). Click **Next** to continue.

```
%LocalAppData%\MyKi\*\Squirrel.exe    %LocalAppData%\MyKi\*\Update.exe    %LocalAppData%\myki\Update.exe
```
Your screen should look similar to what is shown below for **Path Condition** and **Signature Condition** respectively.

![](../../../../../../static/images/PolicyPak/Content/Resources/Images/LeastPrivilege/SecureRun/844_15_image-20210705210753-15.png)

![](../../../../../../static/images/PolicyPak/Content/Resources/Images/LeastPrivilege/SecureRun/844_16_image-20210705210753-16.png)

**Step 7 –** In the Select Action window select**Allow and log** then click **Next**.

![](../../../../../../static/images/PolicyPak/Content/Resources/Images/LeastPrivilege/SecureRun/844_17_image-20210705210753-17.png)

**Step 8 –** In the Settings window select **User and System processes**, then click **Finish**.

![](../../../../../../static/images/PolicyPak/Content/Resources/Images/LeastPrivilege/SecureRun/844_18_image-20210705210753-18.png)

**Step 9 –** Add a new Executable policyand select the **use combo rule (advanced)** option, then select only **Signature** and **File Info** before clicking **Next**.

![](../../../../../../static/images/PolicyPak/Content/Resources/Images/LeastPrivilege/SecureRun/844_19_image-20210705210753-19.png)

**Step 10 –** Under the **Combo condition** > **Select reference file** drop-down, choose **From EXE file** then browse to and select `%LocalAppData%\myki\MYKI.exe`.

**NOTE:**  This file can be found at the specified location only after a successful MyKi installation.

**Step 11 –** Click **Yes** when prompted, then click **Next** to continue.

![](../../../../../../static/images/PolicyPak/Content/Resources/Images/LeastPrivilege/SecureRun/844_20_image-20210705210753-20.png)

**Step 12 –** In the Select window, select **Allow and log**, then click **Next**.

![](../../../../../../static/images/PolicyPak/Content/Resources/Images/LeastPrivilege/SecureRun/844_21_image-20210705210753-21.png)

**Step 13 –** In the Settings windows select **User and System processes** and click **Finish**.

![](../../../../../../static/images/PolicyPak/Content/Resources/Images/LeastPrivilege/SecureRun/844_22_image-20210705210753-22.png)

**Step 14 –** Add a new Executable policy and choose the **use combo rule (advanced)** option, then select only **Path** and **Command-line arguments** before clicking **Next**.

![](../../../../../../static/images/PolicyPak/Content/Resources/Images/LeastPrivilege/SecureRun/844_23_image-20210705210753-23.png)

**Step 15 –** In the Configure Conditions windowenter `%SYSTEMROOT%\System32\cmd.exe` under Path Condition.

![](../../../../../../static/images/PolicyPak/Content/Resources/Images/LeastPrivilege/SecureRun/844_24_image-20210705210753-24.png)

**Step 16 –** Then under Command-line Arguments select the **Strict equality** and **Ignore arguments case** boxes and also paste in the following text within the Arguments box before clicking **Next** to continue.

```
/d /c "%localappdata%\myki\*\resources\native_messenger\index-win.exe" chrome-extension://*/*
```
Your screen should look identical to the one below.

![](../../../../../../static/images/PolicyPak/Content/Resources/Images/LeastPrivilege/SecureRun/844_25_image-20210705210753-25.png)

**Step 17 –** In the **Select action** window, select **Allow and log** then click **Next**.

![](../../../../../../static/images/PolicyPak/Content/Resources/Images/LeastPrivilege/SecureRun/844_26_image-20210705210753-26.png)

**Step 18 –** In the Settings window select**User and System processes**  and click **Finish**.

![](../../../../../../static/images/PolicyPak/Content/Resources/Images/LeastPrivilege/SecureRun/844_27_image-20210705210753-27.png)