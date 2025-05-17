---
sidebar_position: 3161
title: How to use PDQ Deploy to collect PPLOGS from remote computers then save them
  to a network location
---

# How to use PDQ Deploy to collect PPLOGS from remote computers then save them to a network location

**NOTE:** You need to be running PDQ Deploy in Enterprise mode to use this functionality.

**Step 1 –** Create a new PDQ Deploy package and give it a descriptive name.

**Step 2 –** Under Steps choose **Command**.

[![](../../../../../static/images/PolicyPak/Content/Resources/Images/784_1_hf-faq-914-img-01.png)](../../Website/images/784_1_hf-faq-914-img-01.png)

**Step 3 –** Give the Step a descriptive name, like Collect PPLOGS as User, then, under **Details tab** > **Command** type or paste in the command below. Replace \\server\share with a valid network path for your environment. **Note**: Users must be able to create files under the network path you choose.

`echo y|pplogs /out:\\server\share\pplogs\%computername%\pplogs-%computername%-%username%.zip`

[![](../../../../../static/images/PolicyPak/Content/Resources/Images/784_3_hf-faq-914-img-02_950x110.png)](../../Website/images/784_3_hf-faq-914-img-02.png)

**Step 4 –** Under the **Options** tab set the **Run As** to **Logged on User**, then click **Save** to save your progress so far.

[![](../../../../../static/images/PolicyPak/Content/Resources/Images/784_5_hf-faq-914-img-03_950x134.png)](../../Website/images/784_5_hf-faq-914-img-03.png)

**Step 5 –** Select the **New Step** dropdown and choose **Command** from the dropdown list.

[![](../../../../../static/images/PolicyPak/Content/Resources/Images/784_7_hf-faq-914-img-04.png)](../../Website/images/784_7_hf-faq-914-img-04.png)

**Step 6 –** Give the Step a descriptive name, like. Collect PPLOGS as Admin), and then under **Details tab** > **Command** type or paste in the command below, replacing \\server\share with a valid network path for your environment.

`echo y|pplogs /out:\\server\share\pplogs\%computername%\pplogs-%computername%-admin.zip`

**Step 7 –** Click **Save**, then test your deployment. Once the deployment has executed successfully check your network share to see the results.

[![](../../../../../static/images/PolicyPak/Content/Resources/Images/784_9_hf-faq-914-img-05.png)](../../Website/images/784_9_hf-faq-914-img-05.png)