# List Segments Field Cannot be Edited

When setting the Number of Rows in List segments, sometimes the field cannot be edited.

To resolve this:

1. Open **Setup**
2. Select **Company**.
3. Select **General Preferences**.
4. Set the **Number of Rows in List Segments** to 1000.

![rowsinlistsegments](/img/product_docs/platgovnetsuite/troubleshooting/rowsinlistsegments.webp)

If the field is still gray:

1. Scroll down the page to the tab **Overriding Preferences**
2. Check the box for Number of Rows in List Segments.

![setlinesegments](/img/product_docs/platgovnetsuite/troubleshooting/setlinesegments.webp)

# Stop Scripts

You can stop the Spider scripts at any point during the spider process:

Open **Strongpoint** > **Strongpoint Support** > **Stop Scripts**

This stops the next execution of the scheduled scripts.

# System Maintenance Period Error

Usually a _System Maintenance Period_ error indicates your primary web site in NetSuite is in
maintenance mode, which blocks the display of all HTML content. If your web site is down for
maintenance, you can resume using Platform Governance for NetSuite once your maintenance is complete
and your web site is online again.

If the **Take Web Site Offline for Maintenance** option is changed, you must use the
**Strongpoint** > **Strongpoint Support** > **License Manager** > **Get Lic. Number**  
 Or re-push the bundle to update the Spider link.

In most cases, if you are not using NetSuite web sites there is no impact on your system so you can
do the following:

1. Open **Setup** > Select **Site Builder** > **Set Up Website**
2. Click **Edit** for the Primary site.
3. Uncheck **Take Website Offline for Maintenance**
