# Denying Standard Applications

__NOTE:__ For an overview of Endpoint Policy Manager performing Application control see the [Endpoint Policy Manager Application Control with PP Least Privilege Manager](../../video/leastprivilege/applicationcontrol.md) video.

To do this, first create a rule type which matches your scenario. Then pick the condition to match. For instance, you could use a __Signature Condition__ to select a file from Mozilla Corporation, as seen here.

![A screenshot of a computer

Description automatically generated](../../../../../static/img/product_docs/policypak/policypak/leastprivilege/deny/denying_standard_applications.webp)

Then select the __Action__ type __Deny execution__.

![A screenshot of a computer

Description automatically generated](../../../../../static/img/product_docs/policypak/policypak/leastprivilege/deny/denying_standard_applications_1.webp)

The MMC will take action to deny the desired user rights.

![A screenshot of a computer

Description automatically generated](../../../../../static/img/product_docs/policypak/policypak/leastprivilege/deny/denying_standard_applications_2.webp)

The result is that Firefox and every other application signed by this publisher would not run on the endpoint no matter how it made it there (even if it was properly installed). The result of a __Deny__ rule can be seen below.

__NOTE:__ You may use Endpoint Policy Manager (formerly PolicyPak) Least Privilege Managerr to deliver custom messages to users, including links to click on URLs for more information on your corporate policies.

![A screenshot of a computer

Description automatically generated](../../../../../static/img/product_docs/policypak/policypak/leastprivilege/deny/denying_standard_applications_3.webp)
