# Creating Policies within Collections

Double-click to go into your collection, where you can now create policies. Go to __Add__ > __New Policies__. Once there you are prompted by the Endpoint Policy Manager Feature Manager for Windows wizard.

![quickstart_adding_and_removing_3](../../../../../static/img/product_docs/policypak/policypak/feature/addremove/quickstart_adding_and_removing_3.webp)

Here you can select an install rule, an uninstall rule, or a mixed rule.

- Install Rule provides a method to install features or optional features.
- Uninstall Rule provides a method to uninstall features or optional features.
- Mixed Rule provides methods both installing and uninstalling.

For this example, select __Install Rule__, which brings you to the __Select package type__ page.

![quickstart_adding_and_removing_4](../../../../../static/img/product_docs/policypak/policypak/feature/addremove/quickstart_adding_and_removing_4.webp)

The next screen allows you to turn on Windows features. Select the items you want, such as .Net Framework 3.5 (either, both, or neither of the sub-options) as well as the Telnet Client. Additionally you should take note of some special items:

- Supported on - Explains which versions of Windows 10 and Windows Server this item will apply to.
- Feature details - Explains which features depend on the selected feature (and will automatically be installed), as well as whether a reboot is required or possible.

![quickstart_adding_and_removing_5](../../../../../static/img/product_docs/policypak/policypak/feature/addremove/quickstart_adding_and_removing_5.webp)

Click __Next__ to continue. Then, click on __Add policies to the existing collection__.

![quickstart_adding_and_removing_6](../../../../../static/img/product_docs/policypak/policypak/feature/addremove/quickstart_adding_and_removing_6.webp)

In The Policies settings window shows which policy items you are about to create. You can optionally add Item-Level Targeting to any item, so that item will only be installed when the conditions are true. In the example below you can see that the Telnet Client will only be installed on portable computers.

![quickstart_adding_and_removing_7](../../../../../static/img/product_docs/policypak/policypak/feature/addremove/quickstart_adding_and_removing_7.webp)

__NOTE:__ You do not need to add Item-Level Targeting for this example, it is just shown here for future reference.

The final page of the wizard displays:.

![quickstart_adding_and_removing_8](../../../../../static/img/product_docs/policypak/policypak/feature/addremove/quickstart_adding_and_removing_8.webp)

Click __Finish__. Thee two items are added to your collection.

![quickstart_adding_and_removing_9](../../../../../static/img/product_docs/policypak/policypak/feature/addremove/quickstart_adding_and_removing_9.webp)

Now, repeat the process again, this time selecting:

- __Install Rule__
- __Windows Optional Feature__

The __Turn Windows optional features ON__ page appears. __Select__ __Graphics Tools__.

![quickstart_adding_and_removing_10](../../../../../static/img/product_docs/policypak/policypak/feature/addremove/quickstart_adding_and_removing_10.webp)

Scroll down and find the RSAT category and select __RSAT: Group Policy Management Tools__.

![quickstart_adding_and_removing_11](../../../../../static/img/product_docs/policypak/policypak/feature/addremove/quickstart_adding_and_removing_11.webp)

Continue, leaving the remainder of the default settings. You can see the policies added to the collection.

![quickstart_adding_and_removing_12](../../../../../static/img/product_docs/policypak/policypak/feature/addremove/quickstart_adding_and_removing_12.webp)

Now, let's remove some features and optional features.

We will add more policies, this time selecting:

- __Uninstall rule__
- __Windows Features__

Select the items to uninstall, like Microsoft XPS Document Writer and SMB 1.0.

![quickstart_adding_and_removing_13](../../../../../static/img/product_docs/policypak/policypak/feature/addremove/quickstart_adding_and_removing_13.webp)

Click __Next__ through the remainder of the wizard, accepting the defaults.

Run through the wizard one more time, selecting:

- __Uninstall Rule__
- __Windows Optional Feature__

Then you can select to turn off XPS Viewer.

![quickstart_adding_and_removing_14](../../../../../static/img/product_docs/policypak/policypak/feature/addremove/quickstart_adding_and_removing_14.webp)

Click __Next__ through the remainder of the wizard, accepting the defaults.

At this point you should have seven policies.

![quickstart_adding_and_removing_15](../../../../../static/img/product_docs/policypak/policypak/feature/addremove/quickstart_adding_and_removing_15.webp)
