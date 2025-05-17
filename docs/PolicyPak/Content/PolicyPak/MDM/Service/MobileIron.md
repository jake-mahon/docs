---
sidebar_position: 4713
title: Endpoint Policy Manager and MobileIron MDM
---

# Endpoint Policy Manager and MobileIron MDM

**NOTE:** [Endpoint Policy Manager and MobileIron MDM](../../Video/MDM/MobileIron "Endpoint Policy Manager and MobileIron MDM") for a video overview of Endpoint Policy Manager and MobileIron.

**Step 1 –** To use MobileIron with Endpoint Policy Manager, go to the Apps section within MobileIron, and click In-House to add an application. Next, add the Endpoint Policy Manager CSE MSI file, Endpoint Policy Manager license MSI file, and the Endpoint Policy Manager settings MSI file.

![](../../../../../../static/images/PolicyPak/Content/Resources/Images/Appendix A - Advanced Concepts_manual/Using PolicyPak with MDM and_9.png)

**Step 2 –** Once uploaded, click Next.

![](../../../../../../static/images/PolicyPak/Content/Resources/Images/Appendix A - Advanced Concepts_manual/Using PolicyPak with MDM and_10.png)

Sometimes MobileIron will ask you for the MSI product code of each MSI you upload. This is not a Endpoint Policy Manager problem but rather a MobileIron idiosyncrasy.

![](../../../../../../static/images/PolicyPak/Content/Resources/Images/Appendix A - Advanced Concepts_manual/Using PolicyPak with MDM and_11.png)

**Step 3 –** To overcome this, Endpoint Policy Manager has provided a utility in the Endpoint Policy Manager download (in the Endpoint Policy Manager Extras folder) called Endpoint Policy Manager File Information Viewer, which you can use to quickly get this information.

![](../../../../../../static/images/PolicyPak/Content/Resources/Images/Appendix A - Advanced Concepts_manual/Using PolicyPak with MDM and_12.png)

**Step 4 –** Once the Endpoint Policy Manager File Information Viewer is run, you can open an MSI (e.g., the Endpoint Policy Manager CSE MSI) and quickly output the MSI product code to copy. Once you have copied the product code, you can paste it into MobileIron.

![](../../../../../../static/images/PolicyPak/Content/Resources/Images/Appendix A - Advanced Concepts_manual/Using PolicyPak with MDM and_13.png)

![](../../../../../../static/images/PolicyPak/Content/Resources/Images/Appendix A - Advanced Concepts_manual/Using PolicyPak with MDM and_14.png)

Additionally, each MSI must be assigned to a category and a location must be selected for the installation.

![](../../../../../../static/images/PolicyPak/Content/Resources/Images/Appendix A - Advanced Concepts_manual/Using PolicyPak with MDM and_15.png)

**Step 5 –** At this point, you must specify to install the application MSIs silently. That is done by clicking Install Application configuration settings.

![](../../../../../../static/images/PolicyPak/Content/Resources/Images/Appendix A - Advanced Concepts_manual/Using PolicyPak with MDM and_16.png)

**Step 6 –** Once you've clicked on Install Application configuration settings, turn on the option Silently install on Windows devices.

![](../../../../../../static/images/PolicyPak/Content/Resources/Images/Appendix A - Advanced Concepts_manual/Using PolicyPak with MDM and_17.png)

**Step 7 –** As a test, on an example client, perform your MDM enrollment to your MobileIron service.

![](../../../../../../static/images/PolicyPak/Content/Resources/Images/Appendix A - Advanced Concepts_manual/Using PolicyPak with MDM and_18.png)

Be sure the computer is MDM-joined and in the correct group (if any). If the MSIs do not download as expected, see [Troubleshooting](../../Troubleshooting/MDM/Overview "Troubleshooting").