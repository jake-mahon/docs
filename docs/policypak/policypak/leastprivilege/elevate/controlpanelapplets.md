# Elevating Control Panel Applets

Endpoint Policy Manager can also be used to elevate situations within Windows itself. Select __Add__ > __New Control Panel Applet Policy__ from the drop-down menu.

![A screenshot of a computer

Description automatically generated](/img/product_docs/policypak/policypak/leastprivilege/elevate/elevating_control_panel_applets.webp)

Next, consider a situation in which a Standard User may need access to the Device Manager and the Disk Defragmenter Control Panel applets. Make two policies (going through the wizard twice). The first time choose __Device Manager__ first, as shown here. Next, select __Run with elevated privileges__ as the action.

![A screenshot of a computer

Description automatically generated](/img/product_docs/policypak/policypak/leastprivilege/elevate/elevating_control_panel_applets_1.webp)

The second time you run through the wizard, choose __Optimize Drives__,.

![A screenshot of a computer

Description automatically generated](/img/product_docs/policypak/policypak/leastprivilege/elevate/elevating_control_panel_applets_2.webp)

The result of having gone through the wizard twice is the two MMC entries shown here.

![A screenshot of a calendar

Description automatically generated](/img/product_docs/policypak/policypak/leastprivilege/elevate/elevating_control_panel_applets_3.webp)

At this point, GPupdate can be run and tested on the endpoint. You should bypass the UAC prompt and be prompted for Device Manager and the Disk Defragmenter, as shown here.

![A screenshot of a computer

Description automatically generated](/img/product_docs/policypak/policypak/leastprivilege/elevate/elevating_control_panel_applets_4.webp)
