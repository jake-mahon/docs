# Alert Profiles

Alert profiles provide a way to easily group alert configurations and delivery notification settings together. You can create an alert profile, enable relevant alerts for the profile, and assign it to organization(s). Additionally, you can customize delivery settings and specify which user(s) will receive notifications when alerts in the profile are triggered.

To view the alert profiles, navigate to Configuration > Alerts.

![Alert Profiles List](/static/img/product_docs/1secure/1secure/admin/alerts/alertsprofiles.png)

Alert profiles are displayed in the list with the following information:

- Alert profile – The name of the alert profile
- Alerts enabled – The number of alerts enabled for the profile
- Used in organizations – The number of organizations the alert profile is applied to
- Notification delivery – Indicates whether email notifications are configured for the profile

__NOTE:__ The alert profile named _Netwrix Profile (Default)_ is available by default and is automatically applied to all managed organizations.

## Add an Alert Profile

Follow the steps to add an alert profile.

__Step 1 –__ Navigate to Configuration > Alerts.

__Step 2 –__ Click __Add profile__. The New alert profile pane is displayed.

![New Alert Profile pane](/static/img/product_docs/1secure/1secure/admin/alerts/addalertprofile.png)

__Step 3 –__ Enter a name for the alert profile in the Name field and click __Save__.

The alert profile is added to the list. You can:

- Assign this profile to an organization. You can do this when creating a new organization or editing an organization. See the [Add Organizations](/docs/product_docs/1secure/1secure/admin/organizations/addorganizations.md) topic for additional information.
- Click the profile to review the list of alerts, enable the desired alerts, make necessary edits for alerts, and set delivery settings for the alert profile. See the [Alerts](/docs/product_docs/1secure/1secure/admin/alerts/alerts.md) topic for additional information.

## Modify the Name of an Alert Profile

Follow the steps to modify the name of an alert profile.

__Step 1 –__ Navigate to Configuration > Alerts.

__Step 2 –__ Click the Edit icon for an alert profile. The Edit alert profile pane is displayed.

__Step 3 –__ Modify the name of the profile.

__Step 4 –__ Click __Save__.

## Delete an Alert Profile

__NOTE:__ (1) The alert profile named _Netwrix Profile (Default)_ cannot be deleted.   
(2) When an alert profile is deleted, the _Netwrix Profile (Default)_ is automatically assigned to the organizations that were previously assigned the deleted profile.

Follow the steps to delete an alert profile.

__Step 1 –__ Navigate to Configuration > Alerts.

__Step 2 –__ Click the Delete icon for an alert profile to delete it. A dialog box is displayed, prompting you to confirm the deletion of the profile.

__Step 3 –__ Click __Yes__. The alert profile is deleted from the system.

## Manage Delivery Settings for an Alert Profile

You can receive alerts by email or through the third-party ticket service, as used by the Managed Service Providers.

Follow the steps to configure alerts by email.

__Step 1 –__ . Navigate to Configuration > Alerts.

__Step 2 –__ Click an alert profile. The alerts for the profile are displayed in a list.

__Step 3 –__ Click the Email icon under Delivery Settings. The Email Delivery Settings pane is displayed.

![Email Delivery Settings pane](/static/img/product_docs/1secure/1secure/admin/alerts/alertsemaildelivery.png)

__Step 4 –__ . Toggle the Enabled switch to ON to enable email notifications for the alert profile.

__Step 5 –__ In the Email Addresses field, enter the email address of a recipient for alert notifications and click the Add icon. To specify multiple email addresses, add them one by one.

__Step 6 –__ Check the __Email Organization Admins__ check box to send the alerts to all the organization admins by email.

__Step 7 –__ Click Save.

You may also link to a third-party ticketing system. See the [Third-party systems](/docs/product_docs/1secure/1secure/integration/overview.md) topic for additional information.
