# The License Tool (LT) isn't permitting me to install License Files (or I am using AGPM, GPA, or GPOAdmin.) What should I try?

When you buy Netwrix Endpoint Policy Manager (formerly PolicyPak) On-Prem suite you get licenses for each product in the suite, so you'll have to install multiple licenses.

There are two ways to install licenses: one is using LT, and the other is using any GPO and importing the license (more on this later),

__NOTE:__ If youare using AGPM, GPA or GPOAdmin, skip this section and jump to the next section.

## Option 1: Using LT to install licenses.

![69_1_image005](/static/img/product_docs/policypak/policypak/license/activedirectory/69_1_image005.jpg)

If you are encountering problems, first try to copy and paste the license ininstead of browsing for the file. Then click __Validate__  and continue.

![69_2_image0011](/static/img/product_docs/policypak/policypak/license/activedirectory/69_2_image0011.png)

## Option 2: Importing a license directly into an existing GPO

Another way to install license files for Endpoint Policy Manager On-Prem suite is to use the License Management node, which is found in two places.

__NOTE:__ This tip only works when the Endpoint Policy Manager Admin Console MMC snap in is 759 or later.

__Step 1 –__ Go to __Computer Configuration__ > __Endpoint Policy Manager__, then right-click __License Management__.

__NOTE:__  This node will NOT appear when using NetIQ GPA!!

![69_3_image0021](/static/img/product_docs/policypak/policypak/license/activedirectory/69_3_image0021.png)

Alternatively, click __Computer Configuration__ > Endpoint Policy Manager > __Admin Templates Manager__ > __License Management__. This is an alternate way to get to License Management, and which does work for NetIQ GPA).

![69_4_2015-06-03_2227](/static/img/product_docs/policypak/policypak/license/activedirectory/69_4_2015-06-03_2227.png)

__Step 2 –__ Then import the licenses received from Endpoint Policy Manager sales.

![69_5_image0071](/static/img/product_docs/policypak/policypak/license/activedirectory/69_5_image0071.png)

__Step 3 –__ Verify that the licenses are in the GPO by looking at the GPMC settings report:

![69_6_image010](/static/img/product_docs/policypak/policypak/license/activedirectory/69_6_image010.jpg)

__Step 4 –__ Finally, link the GPO to where the computers are.

Endpoint Policy Manager doesn't care where USERS are located, only where computersare. In this example, we are linking the GPO to Sales OU, where the GPO will flow downward and hit the computers.

__NOTE:__ Endpoint Policy Manager will not work in un-licensed locations. Those must be selected when providing your license request key before your licenses are cut.

![69_7_image011](/static/img/product_docs/policypak/policypak/license/activedirectory/69_7_image011.png)
