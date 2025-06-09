# Netwrix Strongpoint for Netsuite 7.1 Release Notes

## Core 7.1.2.1

November 30, 2023

- Support links are changing December 1st, the new link is [https://www.netwrix.com/support.html](https://www.netwrix.com/support.html)
- NetSuite changes, such a moving an account to a different datacenter, are now treated as a Platform change. They do not create a non-compliant Change Log record.
- Improved handling of custom employee center roles across the Strongpoint spiders.
- Bundle updates were enabling __Automatic Synchronization__ between Strongpoint and Jira, changing settings where __Automatic Synchronization__ was disabled. __Automatic Synchronization__ defaults to enabled for new installations. Refer to [Jira](/docs/strongpointfornetsuite/integrations/jira_integration.md) topic for more information.
- Enhanced handling of nonmaterial changes for fields using html coding. Special symbols ( < > & " ) in fields do not generate non-compliant change logs.
- Improved handling of the __Date Last Used__ script to avoid time limit errors.

## Core 7.1.2

November 2, 2023

- Removed __People Related to Customization__ search from the __Strongpoint__ > __Customization__ menu.
- Increased the number of employees and roles for User Provisioning per run. If there are more than the limit, multiple runs are processed. The __User Provisioning Error__ field reports the Change Request is in process until all of the runs are complete.
- Improved handling of Affected Employees if an error occurs during provisioning. The error only appears once per employee.
- Eliminated duplicate logs on script __Type__ customizations occurring when __Resider Now__ was run after the Strongpoint Create System Note CL scheduled script.
- Added system notes for changes to the __Company Preference__ and __Account Preference__.
- Removed the Token Based Authentication Setup note link from __Environment Compare__.
- Improved ReSpider Now to prevent duplicated change logs.
- Improved handling of Non-material change workflow instances.
- Improved handling of platform changes on the Record type. Non-compliant change logs are not generated for permissions and links sublists it the __permittedrole__ or __linkcenter__ is empty. The change is noted in the log.

## Core 7.1.1.1

October 16, 2023

- __Change Log Evaluation__: Change logs related to workflows were labeled with a __Scripted Object__ change type. The labeling caused discrepancies in the change log evaluation.
- __Search Functionality__: The __Execute as Admin Workflows__ search was not displaying data, even when executed workflows were present.

## Core 7.1.1

September 20, 2023

- Added __Refresh Changed By__ button to refresh change information on Change Logs. If the __Actual Change Date__ is empty or __Change By__ is set to __Could Not Be Determined__ or __Pending Autospider__, a __Refresh Changed By__ button is available. When clicked, it populates __Actual Change Date__ and __Change By__ fields.

  The button is only available for Object types where Strongpoint can retrieve the __Actual Change Date__ and __Change By__ fields.

  ![Refresh Changed By](/img/product_docs/strongpointfornetsuite/change_management/change_log_refresh.png)
- Removed extraneous Customization record link in Search Clean Up notification emails. Non-Strongpoint users receive the notification and cannot use the link.

## Core 7.1

August 23, 2023

Every release may contain enhancements behind the scenes and customer-specific bug fixes to keep Strongpoint running smoothly.

__NetSuite Release 2023.2 Support__

The Strongpoint Searches have been updated to support NetSuite's change of __Formula (Text) Fields__ to the new __Formula (HTML) Fields__. This is a NetSuite security enhancement.

Strongpoint 7.1 must be installed prior to the NetSuite 2023.2 release to ensure a smooth upgrade:

1. Install Strongpoint 7.1 in your Sandbox August 15th.
2. Test Strongpoint 7.1 before August 22nd. Contact your Customer Success Manager if you have questions.
3. Strongpoint 7.1 will be pushed to your production environment starting August 23rd.

NetSuite will begin pushing release 2023.2 the end of August.

If you have custom searches, you must update them to support the NetSuite change. To view the list of saved searches in your account that contain code in __Formula(Text)__ fields, open:   
__Lists__ > __Search__ > __Saved Searches with HTML in Formula(Text)__

![Run the Saved Search to view changes](/img/product_docs/strongpointfornetsuite/release_notes/formulahtml.png)

## SoD 1.6.2

November 3, 2023

- Updated the email template to include the Affected Employee details when an SoD Exemption is updated to Pending Approval. The approver sees the following details:

  - Any related SOD Exemptions for the Affected Employee where Status = Approved
  - Affected Employee
  - Related Exemption Name
  - Related Exemption Reason for Exemption
  - Related Exemption Affected Rules
  - Related Exemption Affected Roles

## SoD 1.6.1

September 20, 2023

Improved handling of __Proposed User Roles__ and __Proposed Global Permissions__ in the SoD Approval Form.

## SoD 1.6

August 23, 2023

NetSuite Release 2023.2 Support

The Strongpoint Searches have been updated to support NetSuite's change of __Formula (Text) Fields__ to the new __Formula (HTML) Fields__. This is a NetSuite security enhancement.

Strongpoint 7.1 and SoD 1.6 must be installed prior to the NetSuite 2023.2 release to ensure a smooth upgrade:

1. Install Strongpoint 7.1 and SoD 1.6 in your Sandbox August 15th.
2. Test Strongpoint 7.1 and SoD 1.6 before August 22nd. Contact your Customer Success Manager if you have questions.
3. Strongpoint 7.1 and SoD 1.6 will be pushed to your production environment starting August 23rd.

NetSuite will begin pushing release 2023.2 the end of August.

## Jira 1.3

November 30, 2023

- Support links are changing December 1st, the new link is [https://www.netwrix.com/support.html](https://www.netwrix.com/support.html)

## Jira 1.2.16

September 27, 2023

- Improved handling of the Jira Token field. It is now stored as an API Secret in NetSuite. Refer to [https://suiteanswers.custhelp.com/app/answers/detail/a\_id/98285](https://suiteanswers.custhelp.com/app/answers/detail/a_id/98285) for more information.
- Improved handling of the Change Request owner assignment. __Owner__ is now the person who pushed the ticket into NetSuite.

## Jira 1.2.15

- Replaced the persistent popup message in the Strongpoint Jira integration when project restricted access is in effect. You see a static note in the tab if you do not have access, instead of a more intrusive popup message requiring interaction. (Jira On-prem was updated August 2023, Jira Cloud updated November 2023)

## Jira 1.2.14

- Added the ability to receive and store images attached in the Jira description by Jira ticket ID.

  ![Strongpoint stores attached Jira images](/img/product_docs/strongpointfornetsuite/release_notes/jira_images.png)

## Jira 1.2.13

Here are the enhancements for the release:

- Change customization name to allow Single quotes (').
- Added __Location__ to the __Type__ drop down on the __Add Proposed Customization__ form.

## Jira 1.2.11

Here are the enhancements for the release:

- Import Customizations from Jira
- Enable Allow NS to Jira Push (must be done prior to creating a ticket from NetSuite to Jira)
- Create Ticket from NetSuite to Jira
- Change customization name to allow Single quotes (').
- Added __Group__ to the __Type__ drop down on the __Add Proposed Customization__ form.

Import Customizations from Jira

An __Import Customization__ button has been added to the Jira Strongpoint form. You can import an xml file exported from a Jira ticket.  
![Jira Strongpoint form](/img/product_docs/strongpointfornetsuite/release_notes/jira_strongpoint_form.png)

Enable Allow NS to Jira Push

This feature must be enabled before you can create tickets from NetSuite to Jira.

1. Open __Strongpoint__ > __Strongpoint Support__ > __Installation Settings__
2. Open the __Jira Integration__ tab
3. Check __Allow NS to Jira Push__ to enable pushing NetSuite change requests into Jira.  

   ![Enable Allow NS to Push to Jira](/img/product_docs/strongpointfornetsuite/release_notes/jira_example_integration.png)

Create Ticket from NetSuite to Jira

Create Ticket from NetSuite to Jira must be enabled before you can create tickets from NetSuite to Jira.

1. Create or open a change request in Strongpoint.
2. Add your information and customizations.
3. Click __Push to Jira__.
4. Select your Jira project.  
   ![Select a Jira Project](/img/product_docs/strongpointfornetsuite/release_notes/jira_ns_jira_push2.png)
5. Click __Push__. A Change Request Pushed message is displayed. Click __Close__.
6. Open the __Related Change Records__ tab. The ticket number is added as an __External Change Request Number__. __CM-15__ in this example.  
   ![The ticket number is on the Related Change Records tab](/img/product_docs/strongpointfornetsuite/release_notes/jira_create_cr_related_change.png)
7. Open Jira.
8. Navigate to __CM-15__ ticket.  
   ![Open the ticket in Jira](/img/product_docs/strongpointfornetsuite/release_notes/jira_ns_jira_push3.png)
9. Click __Strongpoint NetSuite__. The customizations from the change request are added.  
   ![Customizations are added to the ticket](/img/product_docs/strongpointfornetsuite/release_notes/jira_ns_jira_push4.png)

## Jira 1.2.10

Here are the enhancements for the release:

- Credentials are now persistent, and do not need to be entered every time.
- Strongpoint Settings page added to Jira

Strongpoint Settings for Jira

The Strongpoint Settings app is accessed through Jira. This is where you create your Token Based Authentication (TBA) credentials for your account. Once created, they are available to you for easy selection when performing your tasks.

Token-Based Authentication is set up through NetSuite. Refer to [Setting up Token-Based Authentication](/docs/strongpointfornetsuite/integrations/jira_integration.md#Setting-up-Token-Based-Authentication).

1. Open __Jira__.
2. Open your __Projects__ page:

   ![Open your Jira Projects page to find Add-ons](/img/product_docs/strongpointfornetsuite/release_notes/jira_projects_menu.png)
3. Expand __Add-ons__.
4. Select __Strongpoint Settings__.

   ![Jira Strongpoint Settings](/img/product_docs/strongpointfornetsuite/release_notes/jira_strongpoint_settings.png)
5. Click __New Token Based Authentication__ to add your credentials. This needs to be done once for each of your accounts.

   ![Add tokens for Jira](/img/product_docs/strongpointfornetsuite/release_notes/jira_add_token.png)
6. Enter your credentials and click __Add Token Based Authentication Credential__.

## ServiceNow Integration 1.1.5

November 2, 2023

- Token-based Authentication is now a requirement. The Basic Authentication login form is deprecated.
- Improved formatting for __Add Proposed Customization__ IDs.

## User Access Review 1.0.2

October 13, 2023

- Added a __GL Impact__ field and a __Permission Risk Severity__ dropdown to the Permission record.   
  __GL Impact__ field is a __Y/N__ choice.  
  __Permission Risk Severity__ can be __High__, __Medium__, __Low__ or __Null__ (default).
- Added __GL Impact__ and __Permission Risk Severity__ filters to the Permission Revews lists.
- Added __GL Impact__ and __Permission Risk Severity__ columns to the Permission Review.

  ![UAR GL Impact](/img/product_docs/strongpointfornetsuite/release_notes/uar_gl_impact.png)
- Added new roles and permissions for UAR users:

  - Strongpoint UAR Admin
  - Strongpoint UAR Owner
  - Strongpoint UAR Additional Reviewer
  - Strongpoint UAR Auditor
