# How to use PDQ Deploy to collect PPLOGS from remote computers then save them to a network location

__NOTE:__ You need to be running PDQ Deploy in Enterprise mode to use this functionality.

__Step 1 –__ Create a new PDQ Deploy package and give it a descriptive name.

__Step 2 –__ Under Steps choose __Command__.

[![784_1_hf-faq-914-img-01](/img/product_docs/policypak/policypak/grouppolicy/784_1_hf-faq-914-img-01.png)](/docs/policypak/website/images/784_1_hf-faq-914-img-01.png)

__Step 3 –__ Give the Step a descriptive name, like Collect PPLOGS as User, then, under __Details tab__ > __Command__ type or paste in the command below. Replace \\server\share with a valid network path for your environment. __Note__: Users must be able to create files under the network path you choose.

```echo y|pplogs /out:\\server\share\pplogs\%computername%\pplogs-%computername%-%username%.zip```

[![784_3_hf-faq-914-img-02_950x110](/img/product_docs/policypak/policypak/grouppolicy/784_3_hf-faq-914-img-02_950x110.png)](/docs/policypak/website/images/784_3_hf-faq-914-img-02.png)

__Step 4 –__ Under the __Options__ tab set the __Run As__ to __Logged on User__, then click __Save__ to save your progress so far.

[![784_5_hf-faq-914-img-03_950x134](/img/product_docs/policypak/policypak/grouppolicy/784_5_hf-faq-914-img-03_950x134.png)](/docs/policypak/website/images/784_5_hf-faq-914-img-03.png)

__Step 5 –__ Select the __New Step__ dropdown and choose __Command__ from the dropdown list.

[![784_7_hf-faq-914-img-04](/img/product_docs/policypak/policypak/grouppolicy/784_7_hf-faq-914-img-04.png)](/docs/policypak/website/images/784_7_hf-faq-914-img-04.png)

__Step 6 –__ Give the Step a descriptive name, like. Collect PPLOGS as Admin), and then under __Details tab__ > __Command__ type or paste in the command below, replacing \\server\share with a valid network path for your environment.

```echo y|pplogs /out:\\server\share\pplogs\%computername%\pplogs-%computername%-admin.zip```

__Step 7 –__ Click __Save__, then test your deployment. Once the deployment has executed successfully check your network share to see the results.

[![784_9_hf-faq-914-img-05](/img/product_docs/policypak/policypak/grouppolicy/784_9_hf-faq-914-img-05.png)](/docs/policypak/website/images/784_9_hf-faq-914-img-05.png)
