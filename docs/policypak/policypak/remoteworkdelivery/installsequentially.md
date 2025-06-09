# How can I make applications install sequentially / in order (and how does it work?)

By default, Netwrix Endpoint Policy Manager (formerly PolicyPak) Remote Work Delivery Manager will install applications in any order, not the order specified in the precedence list.

![757_1_image_1_950x408](/img/product_docs/policypak/policypak/remoteworkdelivery/757_1_image_1_950x408.png)

However, you can change this behavior by making a Collection. Then on the Collection you may select the __Process policies sequentially__ checkbox:

![757_2_img-02-6sd54v5sd4f_950x553](/img/product_docs/policypak/policypak/remoteworkdelivery/757_2_img-02-6sd54v5sd4f_950x553.jpg)

This will ensure the processing order within the collection.

That being said, you do need to be careful around this when you specify a post-copy __Run process__ or __Run PowerShell Script__.

![757_4_img-03-65sd4f5sd4f_950x499](/img/product_docs/policypak/policypak/remoteworkdelivery/757_4_img-03-65sd4f5sd4f_950x499.jpg)

Endpoint Policy Manager Remote Work Delivery Manager guarantees that it will wait for the Run Process to exit, or wait until the post-action PowerShell script is complete before it starts downloading the next item.

So, if you use a PowerShell script, you have full control and thus full responsibility over individual commands.

For example, if you use Start-Process from a PowerShell script, and want to wait until the process it created finishes and exits, it is your responsibility to use the wait switch. And finally exit and close the script, thus completing it.

But if your goals are modest, and you simply want to download applications in order, and at the end of each download, run a single installer (either .msi or .exe), then we recommend the __Run Process__ method instead of PowerShell.
