# Least Privilege Manager - How to create a Self-Elevation policy for local groups of Standalone computers

__Step 1 –__ 
When creating the Self Elevation Policy in LPM, create the rule as you would normally and choose whichever Executable types you wish the members of the local group to be able to execute, and also whether or not the policy should apply to child processes.

![959_1_image-20230522075042-1](../../../../../static/img/product_docs/policypak/policypak/leastprivilege/policyeditor/959_1_image-20230522075042-1.jpeg)

__Step 2 –__ When you get to the __Allowed Users__ section be sure to use the __Add custom user/group by SID as member__ option.

![959_2_image-20230522075042-2](../../../../../static/img/product_docs/policypak/policypak/leastprivilege/policyeditor/959_2_image-20230522075042-2.webp)

__Step 3 –__ At this point you will need to look up the SID for the local group you wish to have the Self Elevation policy apply to. This can be done by running the command "whoami /groups" on the computer where the local group exists.

![959_3_image-20230522075042-3](../../../../../static/img/product_docs/policypak/policypak/leastprivilege/policyeditor/959_3_image-20230522075042-3.webp)

__Step 4 –__ In this example, I will be using the SID for the BUILTIN\Users group "S-1-5-32-545"

![959_4_image-20230522075042-4](../../../../../static/img/product_docs/policypak/policypak/leastprivilege/policyeditor/959_4_image-20230522075042-4.webp)

__Step 5 –__ Your policy should look similar to the example below.

![959_5_image-20230522075042-5](../../../../../static/img/product_docs/policypak/policypak/leastprivilege/policyeditor/959_5_image-20230522075042-5.webp)

__Step 6 –__ Lastly, deploy the policy and test if Self Elevation works. If the LPM Self Elevation policy applies successfully to the local group then when you right click on any of the Executable types you selected in the policy, you should see the __Run Self Elevated with PolicyPak__ option available.

![959_6_image-20230522075042-6](../../../../../static/img/product_docs/policypak/policypak/leastprivilege/policyeditor/959_6_image-20230522075042-6.webp)
