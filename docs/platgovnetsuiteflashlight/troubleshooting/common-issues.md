# Spider Page Not Found

If you see a **Spider Page Not Found** error:

1. Open **Setup** > **Company** > **General Preferences**
2. Ensure **Web Site Hosting Files Always Available** is checked.
3. Click **Save**

# List Segments Field Cannot be Edited

When setting the Number of Rows in List segments, sometimes the field cannot be edited.

To resolve this:

1. Open **Setup**
2. Select **Company**.
3. Select **General Preferences**.
4. Set the **Number of Rows in List Segments** to 1000.

![rowsinlistsegments_800x382](/img/product_docs/platgovnetsuiteflashlight/troubleshooting/rowsinlistsegments_800x382.webp)

If the field is still gray:

1. Scroll down the page to the tab **Overriding Preferences**
2. Check the box for Number of Rows in List Segments.

![setlinesegments_800x250](/img/product_docs/platgovnetsuiteflashlight/troubleshooting/setlinesegments_800x250.webp)

# System Maintenance Period Error

Usually a _System Maintenance Period_ error indicates your primary web site in NetSuite is in
maintenance mode, which blocks the display of all HTML content. If your web site is down for
maintenance, you can resume using Flashlight once your maintenance is complete and your web site is
online again.

In most cases, if you are not using NetSuite web sites there is no impact on your system so you can
do the following:

1. Open **Setup** > **Site Builder** > **Set Up Website**
2. Click **Edit** for the Primary site.
3. Uncheck **Take Website Offline for Maintenance**
