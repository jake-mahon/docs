---
sidebar_position: 3603
title: Share-Based Storage for Endpoint Policy Manager Extension DLLs
---

# Share-Based Storage for Endpoint Policy Manager Extension DLLs

**NOTE:**  For an overview of Share-Based Storage for Endpoint Policy Manager extension DLLs, see this video: [http://www.policypak.com/videos/policypak-using-shares-to-store-your-paks-share-based-storage.html](http://www.policypak.com/videos/bypassing-internal-item-level-targeting-filters).

Some organizations' administrators cannot (or don't want to) create a Endpoint Policy Manager Central Storage to contain Endpoint Policy Manager DLL files.

You can optionally use regular shares (or DFS shares) to store your DLL files. This gives the basic benefits of the Endpoint Policy Manager Central Storage without having to use domain controllers to store the DLL files.

To use the Share-Based Storage for Endpoint Policy Manager extension DLLs, simply copy the DLL file to a share of your choosing. In this example, the folder called Paks is shared on a server called DC.

Simply copy the Endpoint Policy Manager extension DLLs into the shared folder (which must be readable by everyone).

![](../../../../../../../static/images/PolicyPak/Content/Resources/Images/ApplicationSettings/PolicyPak Application Settings_3_10.png)

Locating the PAK123 folder.

Once you do this, the AppSets are ready to be used. However, these AppSets will not immediately display in the MMC. By default, only AppSets in the Local or Central Storage will show up automatically.

![](../../../../../../../static/images/PolicyPak/Content/Resources/Images/ApplicationSettings/PolicyPak Application Settings_3_11.png)

Paks in the Local and Central Storage are shown automatically.

To enable the AppSets in the share to be seen by the MMC snap-in, you must manually select "Manage Share-Based Central Stores".

![](../../../../../../../static/images/PolicyPak/Content/Resources/Images/ApplicationSettings/PolicyPak Application Settings_3_12.png)

![](../../../../../../../static/images/PolicyPak/Content/Resources/Images/ApplicationSettings/PolicyPak Application Settings_3_13.png)

Step 1 (left) select "Manage Share-Based Central Stores." Step 2 (right) specify which shares hold Endpoint Policy Manager DLL files.

Once you specify the share, you will see the AppSets added. When any Share-Based AppSet is used, you will see its Extension Location display as Share-Based Storage.

![](../../../../../../../static/images/PolicyPak/Content/Resources/Images/ApplicationSettings/PolicyPak Application Settings_3_14.png)

Any Share-Based Pak will show up in the Extension Location.

Note that the specific shares you are using are preserved only on your administrative machine. However, you can mass-deliver Share-Based Storage locations to other Endpoint Policy Manager Application Settings Manager administrators quickly and automatically using the Group Policy Preferences Registry Extension. Simply specify the locations as REG\_MULTI\_SZ in the Paths value to `HKEY_CURRENT_USER\Software\ PolicyPak\Config\MMC\CentralStores`.

![](../../../../../../../static/images/PolicyPak/Content/Resources/Images/ApplicationSettings/PolicyPak Application Settings_3_15.png)

In the Registry editor you can mass-deliver Share-Based Storage locations to other Endpoint Policy Manager administrators quickly and automatically.