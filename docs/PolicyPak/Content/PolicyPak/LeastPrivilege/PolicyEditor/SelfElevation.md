---
sidebar_position: 4149
title: Least Privilege Manager - How to create a Self-Elevation policy for local groups
  of Standalone computers
---

# Least Privilege Manager - How to create a Self-Elevation policy for local groups of Standalone computers

**Step 1 –** 
When creating the Self Elevation Policy in LPM, create the rule as you would normally and choose whichever Executable types you wish the members of the local group to be able to execute, and also whether or not the policy should apply to child processes.

![](../../../../../../static/images/PolicyPak/Content/Resources/Images/LeastPrivilege/PolicyEditor/959_1_image-20230522075042-1.jpeg)

**Step 2 –** When you get to the **Allowed Users** section be sure to use the **Add custom user/group by SID as member** option.

![](../../../../../../static/images/PolicyPak/Content/Resources/Images/LeastPrivilege/PolicyEditor/959_2_image-20230522075042-2.png)

**Step 3 –** At this point you will need to look up the SID for the local group you wish to have the Self Elevation policy apply to. This can be done by running the command "whoami /groups" on the computer where the local group exists.

![](../../../../../../static/images/PolicyPak/Content/Resources/Images/LeastPrivilege/PolicyEditor/959_3_image-20230522075042-3.png)

**Step 4 –** In this example, I will be using the SID for the BUILTIN\Users group "S-1-5-32-545"

![](../../../../../../static/images/PolicyPak/Content/Resources/Images/LeastPrivilege/PolicyEditor/959_4_image-20230522075042-4.png)

**Step 5 –** Your policy should look similar to the example below.

![](../../../../../../static/images/PolicyPak/Content/Resources/Images/LeastPrivilege/PolicyEditor/959_5_image-20230522075042-5.png)

**Step 6 –** Lastly, deploy the policy and test if Self Elevation works. If the LPM Self Elevation policy applies successfully to the local group then when you right click on any of the Executable types you selected in the policy, you should see the **Run Self Elevated with PolicyPak** option available.

![](../../../../../../static/images/PolicyPak/Content/Resources/Images/LeastPrivilege/PolicyEditor/959_6_image-20230522075042-6.png)