# Testing Your GPO

Next, make sure your endpoint is in an organizational unit (OU) to which the GPO would apply. Then log on as any user. Run GPupdateto push the computer-side GPO changes. This would normally happen in the background between 90 and 120 minutes later. After the computer gets the GPO, the user is prompted to reboot.

![quickstart_adding_and_removing_16](../../../../../static/img/product_docs/policypak/policypak/feature/addremove/quickstart_adding_and_removing_16.webp)

The reboot prompt only occurs because of the setting within the collection. The computer will finish installing or uninstalling the features upon reboot.

![quickstart_adding_and_removing_17](../../../../../static/img/product_docs/policypak/policypak/feature/addremove/quickstart_adding_and_removing_17.webp)

Now you can go back and verify those items are added or removed. Below are examples of the final result.

![quickstart_adding_and_removing_18](../../../../../static/img/product_docs/policypak/policypak/feature/addremove/quickstart_adding_and_removing_18.webp)

![quickstart_adding_and_removing_19](../../../../../static/img/product_docs/policypak/policypak/feature/addremove/quickstart_adding_and_removing_19.webp)
