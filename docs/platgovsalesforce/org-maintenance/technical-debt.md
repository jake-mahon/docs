---
title: Managing Technical Debt in Salesforce
sidebar_label: Technical Debt
description: Systematic approach to managing and resolving technical debt in Salesforce environments with best practices for org management maturity stages.
---

# Managing Technical Debt

These articles are best practices for managing and, over time, resolving technical debt for every
organization in a Salesforce environment. The articles do not extensively focus on organizational
risk and governance.

We begin with a brief review of the root causes of technical debt and the general principles and
capabilities that may apply in a variety of situations. The majority of the document is focused on
systematically taking control of an SFDC org with varying degrees of complexity ranging from simple
to extreme. We move rapidly through critical stages of Salesforce org management maturity:

- Early stages rapidly deliver value with minimal allocation of effort or disruption of process.
- Later stages build on this base to streamline your account and change processes.

Each article ends with a link to the next topic in the **Managing Technical Debt** series.

> **TIPS** and **PRO TIPS**:Provide optional background or details in these articles.

_Technical debt_ (tech debt) is the cost of reworking a system to fix or work around implemented
solutions. A key cause of tech debt is solutions that were not fully engineered at the time they
were deployed. One of the great features of Salesforce is professional coders/developers are not
required for every system enhancement. The downside is inexperienced people inadvertently creating
tech debt.

There are many ways to classify tech debt but we can use three main categories:

1. Bad customization: It was a bad idea in the first place.
2. Base case customization: It was implemented to support a simple case but needs to evolve or
   extend to address new situations.
3. Aged customization: It was a good idea at the time but is no longer in use or fully utilized.

These customizations are littered amongst and intertwined with mission-critical portions of
virtually every org.

Salesforce tech debt is normal. It is not a reflection of team aptitude or level of competence. In
most cases, the changes made to the org were part of rapid, rational, responsible solutions to the
problems of the day. The incredible flexibility of the Salesforce platform enables an organization
to move forward with high velocity and in an agile manner. Over time, the cost of changing or adding
functionality grows at an exponential rate due to the rigor around changes, thus bottle-necking
enhancements. Training costs are inflated answering questions about outdated fields or reports. Team
turnover or org growth makes tribal knowledge unworkable and ongoing regression testing adds
significant cost and slows down innovation.

It is time to tackle your tech debt and unleash your team’s innovation on the task of delivering
great solutions to your business.

**Next Technical Debt Topic:** [Managing Orgs in the Real World](/docs/platgovsalesforce/org-maintenance/technical-debt.md)

# Managing Orgs in the Real World

In a perfect world, we have the time and resources to employ best practices by an experienced team
in every situation. However, the world is not perfect, and technical debt accumulates, adding
difficulty and complexity to making enhancements and managing your orgs.

Platform Governance for Salesforce is designed for a real world where:

- Documentation is incomplete, non-existent or out of date.
- Customizations have not been tightly managed.
- There are or have been multiple hands in the cookie jar.
- Orgs have been over-customized, poorly customized, or customizations have accumulated over time
  and now interfere with each other.
- Turnover of critical SFDC team members has adversely affected tribal knowledge.
- Mergers and acquisitions have influenced the scope or objectives of each team and their orgs.

Getting a handle on this situation can be daunting with the myriad of dependencies and complexities
to address. Progress can be made if it is accepted that positive change can be achieved in steps
rather than reaching for immediate perfection. Following this simple path, you can realize progress
in short order:

1. **Install** the managed package in each org.
2. **Initiate** the Scanner systematically in each org to generate automated documentation. The
   results provide visibility into the dependencies between all components of the org, what is used,
   unused and the risk posed by changes.
3. **Activate** Change Monitoring to alert stakeholders of risky changes. Platform Governance for
   Salesforce warns org owners and admins about risk at very granular levels.
4. **Plan** the clean up of unused, defunct and redundant customizations using the powerful search
   capabilities.
5. **Implement** Automated Risk Management to guide all change agents to make enhancements in a
   structured, safe, and efficient manner.

This table describes the critical stages and how Platform Governance for Salesforce helps at each
stage.

> **PRO TIP**
>
> Each stage delivers benefits to significantly improve your ability to manage technical debt. Take
> your time and adjust the order based on your workload or priorities. The customer support team is
> available to assist in implementing Intelligent Change Enablement quickly to meet your immediate
> needs.

| Stage                                        | Automated Documentation                                                            | Change Monitoring                                                        | Org Clean Up                                                                                | Change Enablement                                                                                                                                       |
| -------------------------------------------- | ---------------------------------------------------------------------------------- | ------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------- |
| Benefit                                      | Plan your changes confidently with a firm understanding of what is in use          | Monitor all changes in all orgs for technical and organizational risk    | Simplify and maintain your orgs for future success                                          | Improve time to value with automated tools that assess risk and intelligently distribute work within your team                                          |
| How Platform Governance for Salesforce Helps | Creates visual, searchable documentation making it easy to understand complex orgs | Instantiates policies to mitigate risky changes before they are deployed | Simplifies clean up with a combination of automated tools, dependency models and usage data | Ensures changes are made properly, safely and efficiently, resulting in up to 80% reduction in enhancement requests that require a CoE or CI/CD process |

**Next Technical Debt Topic:** [Automated Documentation](/docs/platgovsalesforce/org-maintenance/automated-documentation.md)

# Change Enablement

It is commonly believed doing things faster is more dangerous, and doing things slowly and carefully
is safer. In today’s world, slower is simply not an option. Platform Governance for Salesforce
realized that **Faster** can also be **Safer** and sometimes **Very Fast** can be **Extremely
Safe**.

In [Change Monitoring](/docs/platgovsalesforce/org-maintenance/technical-debt.md), we discussed setting up automated change
monitoring to deliver instant oversight of your org. [Org Clean Up](/docs/platgovsalesforce/org-maintenance/technical-debt.md)
described ongoing monitoring of specific changes. Automated Risk Management takes these disciplines
and combines them with three goals:

1. **Keep your org safe** — continuous, comprehensive monitoring of all changes
2. **Make your team more efficient** — distribute work based on risk and automate key process steps
   to ensure speed and reliability
3. **Delight your key stakeholders** — provide rapid access to the changes they need to drive the
   business forward

Our flagship **Intelligent Change Enablement** processes automate the required steps to make changes
quickly and safely, clean up technical debt and make your orgs more understandable and efficient.

The key steps:

1. **Review and Finalize Your Policies** to support a rapid change process.
2. **Train Your Team** to use our automated tools.
3. **Document Your New, Faster Proces**s based on industry best practices or tailored to your
   existing Jira or ServiceNow process.
4. **Roll Out the New Process** in production.

Whether you are trying to get ahead of the game or have to meet specific governance or compliance
goals, our team of experts can lead you every step of the way. We can implement an approach your
team, stakeholders, and auditors will love.

Reach out to your Customer Success Manager or Account Executive to explore Intelligent Change
Enablement tools to simplify governance and audit for your orgs.

# Ongoing Monitoring

One of Platform Governance for Salesforce’s strengths is that it is built right into Salesforce. You
can use all of your Salesforce administration and configuration skills to efficiently monitor and
organize what is important to you.

Most of the examples so far have used List Views to move Customizations through the Clean Up Process
of identification, assessment, approval and clean up. Reports, when combined with Controls, can
deliver powerful results for your clean up process.

For example, you can set up a Report to search the **XML/Code** or **Changed By** fields of
Customizations for any ongoing situations. You can then set a trigger to update the filters on the
report to include specific people, such as new users. Finally, add a dashboard where you can view
the key metrics from your Report.

The Enterprise Compliance edition enables you to take management to the next level by designating
reports as scheduled automated controls. These controls create situation-specific change logs or
control violation logs that can be reviewed and cleared.

It is easy to build a comprehensive dashboard on the **Control Logs** object in a single
**Unresolved Control Violations** List View to monitor dangerous or simply irritating changes in
configuration or data. You can designate who receives alerts without needing to build new workflows
or triggers.

To learn more about simplifying governance and audit with Enterprise Compliance tools, reach out to
your Customer Success Manager or Account Executive.

**Next Technical Debt Topic:** [Change Enablement](/docs/platgovsalesforce/org-maintenance/technical-debt.md)

# Org Clean Up

Cleaning up your orgs is a process. The key to clean up success is to move forward through sets of
closely-related customizations using clear and repeatable steps. Platform Governance for Salesforce
helps you through each step in the process.

Every clean up project has these key steps:

1. Identify and prioritize what needs to be cleaned up.
2. Assess the risk of downstream problems and add related Customizations to be cleaned up.
3. Track the progress of your clean up process.
4. Group Customizations for approval and clean up.
5. Archive the Customization definitions and data.
6. Clean up the approved Customizations.
7. Validate you followed your change approval process.

Stepping through this process helps organize the work and manage the risk. Small orgs can do the
whole process with an Automated Documentation license. Large orgs likely require the tighter
approval processes and environment comparison capabilities of the Intelligent Change Enablement
license.

These items can help you identify Customizations for Clean Up:

> Date Last Used
>
> Automated Report Clean Up
>
> Employees Related to a Customization

## Date Last Used

Date Last Used (DLU) is a key criterion for clean up, as you generally are not cleaning up active
Customizations. DLU means different things to different people in the Salesforce community. The
generic definition is:

> _The last date the Customization, or the data it contains, was created, changed, accessed,
> processed or used._

[DLU](/docs/platgovsalesforce/org-maintenance/cleanup-tools.md) is calculated differently for each Customization type.

For all clean up activities, consider the following items:

- Blank DLU means there is no verified date. A blank date does not mean it is safe to remove.
- DLU is not the only criterion. You must look at the dependencies. An unused field with related
  code is not safe to remove. It is, however, a sign you may have unnecessary code.
- An unused field may have important data from the history of your company. A good question to
  investigate is why isn’t it being used? It might be a good idea that never got off the ground.
- Cleaned up Customizations are archived if you need to restore.

Like all Salesforce Date fields, DLU can be filtered using relative date formats (typically what you
will want). You can also filter on specific dates.

![DLU Filter](/img/product_docs/platgovsalesforce/tech_debt/tech_debt_2.webp)

## Automated Report Clean Up

The most common unused Customizations are Reports. In most orgs, new Reports are created every day.
Some are critical to ongoing business processes, others are quick solutions to day-to-day problems.
These one-time quick reports accumulate in your orgs, causing confusion and inefficiency. Refer to
[Automated Report Clean Up](/docs/platgovsalesforce/tools-and-utilities/cleanup-utilities.md) for more details.

Automated Report Clean Up safely archives Reports following the rules and criteria you set up. The
process is simple:

1. Set up default rules. For example,

   - Reports not used within the past year
   - Reports owned by people who no longer have access to Salesforce and have not used in 6 months

2. Run the analysis on an ad hoc basis and review your results.
3. Exclude any Reports to be retained, either manually by changing the rule settings to exclude
   Reports based on:

   - Report Owners
   - Related Roles
   - Scheduled
   - Private Reports
   - Date Last Used

4. - Excludes Reports covered by a special policy or with any downstream dependencies to ensure you
     do not delete something important.
   - Emails Report owners (if desired) that the Report is being archived. The owner can retain the
     Report with a simple mouse click. The Date Last Used is updated to the current date.
   - Deletes the Reports that were not retained, but keeps the Report definition.

   When you run the Clean Up, Archived Reports can be easily be restored if needed.

5. Schedule your rules to run on a regular basis to keep your orgs cleaned up and efficient.

## Employees Related to a Customization

Knowing who is using a customization is useful. This is tackled in steps, by Users and Owners.

### Users

**Field and Object Users**: Track employees editing a Field (using a custom or standard Object). It
is not turned on for all Customizations which would be inefficient. If you use _Salesforce Shield
Event Monitoring_, Platform Governance for Salesforce captures this data automatically.

To capture the data without Salesforce Shield Event Monitoring:

1. Enable **Field Audit Trail** for the field.
2. Permit Salesforce to populate the audit log for the last 18 months.
3. Rescan the tracked fields.
4. Names of the employees changing the data in each field are gathered automatically. This process
   can take multiple days for a large dataset.
5. Turn off audit history if desired.

**Code, App, and Component Users**: With _Salesforce Shield Event Monitoring_, capture users from
the execution history of APEX-related objects.

**Other objects**: There are two strategies for other objects:

- **Sharing Rules**: Often, you can determine who is using a List View or Dashboard by understanding
  the shared Users, Roles, and Groups.
- **Salesforce Shield Event Monitoring**: Employee usage data for Reports, Dashboards, and many
  other objects, is only available with Salesforce Shield Event Monitoring. It enhances usage
  metadata to show users who are viewing non-scripted objects and executing or triggering code and
  workflows. Once you activate _Salesforce Shield Event Monitoring_, data is collected from that
  point on. It is not retroactive.

**Users referred to in objects**: Fields are not created for everything, but all the metadata is
available. You can identify users (and other things) referred to in dashboard filters, formula
fields, SOQL, or even code, by searching the raw XML, JSON or code. The
[Specific Clean Up Approaches](/docs/platgovsalesforce/org-maintenance/technical-debt.md) section contains
examples.

### Owners

The current owner of each Customization is tracked. By default, it is the person who created it. In
cases such as Reports, this is useful to understand who needs to approve a change to a report.

> **TIP**
>
> You can use the **Change Owner** button on any Customization List View. For an individual
> Customization, edit the Owner field on the Customization Record. Best practice if you have a staff
> change, is to update the Process record, which then updates the owner for all the affected
> Customizations.

**Next Technical Debt Topic:**[ Org Clean Up Example](/docs/platgovsalesforce/org-maintenance/technical-debt.md)

# Org Clean Up Example

Here is an example using the simplest clean up case:

- Unused custom fields on Account object
- No risky dependencies

Using the steps outlined Org Clean Up, we can proceed quickly, efficiently and with confidence.

## Step 1: Identify and Prioritize Targets for Clean Up

We are going to use the out-of-the-box Default Clean Up List View with these filters:

![Filters](/img/product_docs/platgovsalesforce/tech_debt/tech_debt_9.webp)

- Filter on the single Record Type **Objects & Fields** to enable editing the Customizations
  directly from the List View. This filter selects all Objects and their related Fields.
- Filter for API Names starting with **Account** (for example, **Account.\_**my*custom_field*)
  limits results to the **Account** object. We could use a similar technique to focus on a specific
  App.
- Filter on **Salesforce CustomField** to return all Custom Fields.
- Filter to exclude **Standard** fields. The Salesforce metadata type for all fields is CustomField.
  Platform Governance for Salesforce identifies standard fields and appends **Standard:
  object_name** to the Customization Name so they can be filtered out of your results.
- In our example, **unused** means _not used within the last six months_, so we finish up with a
  Date Last Used filter.

Specify the fields to show:

- Name
- Base Record: the parent for fields on an Object and the Base Object for other Customizations.
- Owner
- Date Last Used
- Clean Up Comments: freeform area to add notes about your investigation.
- Clean Up Classification - freeform area to organize clean up projects. For example, _Account
  Spring Clean Up_.
- Clean Up Status: specific tracking of the stages of a clean up project.
- Reports
- Scripts
- Workflows / Approvals
- Extended Types
- % Populated

## Step 2: Assess the Risk of Downstream Problems and Add Related Customizations

You now have a list of unused, custom fields on the Account object. Examine the dependencies to
determine what to do next. For this example, we are going to clean up fields without these
complications.

1. Set the **Clean Up Status** on any field without dependencies to **To Be Cleaned Up**. In the
   List View, click the
   ![Edit icon](/img/product_docs/platgovsalesforce/tech_debt/edit_icon.webp)
   icon and edit the **Clean Up Status** and other Clean Up Fields. You can select multiple fields
   using the checkboxes to set the values for the group.
2. For easy reference later, set a project name in the **Clean Up Classification** field such as
   _Simple Account Clean Up_. You can filter on this later when you send for approval.
3. If you have questions, send an email or Chatter request to the owner and set the **Clean Up
   Status** to _Send Request Info Email_ as a reminder you are awaiting a response.
4. As you find unused fields with complex dependencies, such as Scripts or Workflows / Approvals,
   set the **Clean Up Status** to **Under Investigation**. As an example, you can also assign the
   **Clean Up Classification** to be _Scripted Account Fields_ to group them for your investigation
   later.
5. These fields need investigation to see if they can be cleaned up and, more importantly, if the
   scripts and workflows are still useful, need to be fixed, or cleaned up. What are the scripts or
   workflows doing if there is no data in the field?
6. As you work through the list, note your findings in the **Clean Up Comments** field.
7. To keep an unused field, set the **Clean Up Status** to **Ignore**. Alternatively, you can set
   the **Date Last Used** to a date in the future. Platform Governance for Salesforce will not
   override the manually set date with an earlier date so you can retain the Customization. To view
   ignored Customizations, select:  
   **Strongpoint** > **Reports** > **Clean Up** > **Customizations Excluded From Clean Up**

> **PRO TIP**
>
> If you are cleaning up a very large object, add a filter for **Clean Up Status** equals **“”**.
> This shortens your list as you work your way through the fields and set an appropriate **Clean Up
> Status**. Remove the filter later when you want to work through the fields.
>
> - **Archived**: tracks automatically cleaned up Reports.
> - **Deleted**: tracks Customizations that have been deleted.
> - **Reassign Owner**: reassigns the Owner of one or more Customizations.

## Step 3: Track the Progress of the Clean Up Process

You now have a list of unused fields on the Account object grouped into fields that are relatively
simple to clean up and fields with code and other critical dependencies.

> **TIP**
>
> If you have a blank List View, remove the filter on the **Clean Up Status** or set it to **To Be
> Cleaned Up**. If you set a **Project Name** in the **Clean Up Classification**, you can filter for
> it in the search box at the top of the List View.

Some of the fields may have associated Reports or List Views. If you open the DRD in the
Customization Record, you can drill into the details to see if removing the field is likely to cause
a problem. Some things to consider:

- List Views do not track Date Last Used. Be careful cleaning up them up. Reports do track DLU.
- Cleaning up fields used in **Report Filters** can change the scope of the report. You can check
  whether the field is used in the report filter by looking at the **Search Filters** check box
  field.
- Fields on actively used Reports should have **Clean Up Status** set to **Under Investigation** and
  a plan for cleaning up the Report documented in the **Clean Up Comments** field. You might want to
  email or Chatter with the owner to determine whether it is safe to clean up. Set the status to
  **Send Request Info Emails** as a reminder.

## Step 4: Group Customizations for Approval and Clean Up

Now that you have identified what you can clean up, you can proceed with the Approval process. Some
Customizations may require different levels of approval or different approvers. If you are using
Intelligent Change Enablement, you can group related Customizations for approval and assign them to
a Change Request directly from the List View:

1. Click the **Change Request** tab and click **New**.
2. Enter the name and a brief description of the clean up project. Set the **Change Type** to
   **Clean Up**. If you are using an external change approval system such as Jira or ServiceNow, you
   can enter the **External Change Request Number**.

   ![Edit Change Request](/img/product_docs/platgovsalesforce/tech_debt/tech_debt_3.webp)

3. On your List View, set the **Add To Change Request** field for the Customizations you are
   planning to clean up with this Change Request.

   ![Default Clean Up List View](/img/product_docs/platgovsalesforce/tech_debt/tech_debt_12.webp)

4. Open your Change Request and view the Impact Analysis for the Customizations you want to clean
   up. You are warned if there are SOQL, code, workflow, role, profile filter report or List View
   dependencies or if the field affects actively used Reports.

   ![Clean Up Unused Fields](/img/product_docs/platgovsalesforce/tech_debt/tech_debt_4.webp)

5. If you need to make changes to the Customizations, **Edit** the Change Request and select **View
   All** in the Customizations field. You can **Add** or **Remove** Customizations to the **Selected
   Customizations** list. **Save** when you are finished.
6. When you are ready, Submit your Change Request for Approval.

> **PRO TIP**
>
> You can add additional approvers (beyond what is required for the policy) to the Change Request.
> Initially, only the approvers from your default policy are required. There are two methods to add
> additional approvers:
>
> - Create a Process Record and specify approvers. Add the Process Record to the Change Request
>   under the **Affected Processes** field. The additional approvers are added to this Change
>   Request and can be reused on future Change Requests. **Process Owner Approvals** must be enabled
>   on the applicable Policy.
> - Manually specify one or more approvers in the **Additional Approvers** field.

If you are not using Change Enablement, you can export the results to Excel by clicking the **Export
To Excel** on the Change Request **Impact Analysis** tab. You can also create a report of
Customization Records (there are third party apps that enable List View export). You must double
check the impact and manually route your list for approval.

## Step 5: Archive the Customization Definition / Data

Your metadata is automatically archived for the field. Best practice is to create a Report with all
of the non-empty fields you are cleaning up, and store it on the Change Request before you clean up
the fields.

## Step 6: Clean Up Approved Customizations

As with any change, you are strongly encouraged to clean up the fields in a sandbox first, run your
test sets, and review the changes with the affected business owners prior to making the change in
production.

You currently cannot delete items using Platform Governance for Salesforce tools. To actually remove
objects in bulk, you can use
[Destructive Change Sets](https://developer.salesforce.com/docs/atlas.en-us.daas.meta/daas/daas_destructive_changes.htm).
You can also remove them manually. We are working with customers to understand the controls required
to automate this process, taking into account the judgment required to safety proceed in various
sized orgs.

## Step 7: Validate Your Change Approval Process Was Followed

To ensure that your change approval process is being followed, there is an **Unresolved
Non-Compliant Changes** report. This report summarizes all changes where a Change Request was
required by policy, but either not created or not approved. The report includes these details:

- Customization Name and API Name
- Metadata Type (for example, **CustomField**, **WorkflowAlert**, **ApexClass**)
- Change Overview (for example, **Custom Field Created**, **WorkflowAlert Changed**, **ApexClass
  Created**)
- Diff Summary (detailed comparison of before and after)
- Related Change Requests, if they exist

The [Change Enablement Reports](/docs/platgovsalesforce/reporting/change-management-reports.md) and List Views
give you visibility into the changes occurring in your orgs.

**Next Technical Debt Topic:**
[Specific Clean Up Approaches](/docs/platgovsalesforce/org-maintenance/technical-debt.md)

# Specific Clean Up Approaches

Cleaning up an org is driven by your priorities. Platform Governance for Salesforce documentation is
very flexible, to help you clean up objects quickly and effectively.

Here are some guidelines to specific clean up problems:

> Unused, Risky
>
> Unused Automation
>
> Unused Test Classes
>
> Entire Object or Group of Parent / Child Objects
>
> Layouts and List Views
>
> Value-based Clean Up

These guidelines assume you set up your List Views the same way as described
[Step 1: Identify and Prioritize Targets](/docs/platgovsalesforce/org-maintenance/technical-debt.md).

## Unused, Risky

DLU is populated older than X but there are some dependencies (Role, Code, Workflow):

1. Create a Clean Up List View filtered for Customizations where:

   - DLU is populated and older than X and
   - Scripted, Filter, SOQL, and/or Profile checkboxes are checked.

2. Set the **Clean Up Status** to **Under Investigation** and add appropriate **Clean Up Notes**.

## Unused Automation

Code and Other Critical Objects with dependencies on Unused Fields and Objects:

1. Create a report, such as the Unused Scripts Report, using the **Customizations with
   Dependencies** Report Type filtered for customizations with:

   - Salesforce Type you are focused on (for example, APEX Class)
   - The Customization's Date Last Used and/or the Dependency: Date Last Used is populated and
     older than X.
   - Optional: Filter out objects from a managed package:
     - Exclude all Packages: filter on Packages equals \{blank\}
     - Exclude specific Packages: filter on Packages not equal to
       `\{names of package you want to exclude\}  `
     - Exclude all Managed Packages: filter on Manageable State equals **unmanaged**

2. Open each relevant Customization in a new tab and set the **Clean Up Status** to **Under
   Investigation** and add appropriate **Clean Up Notes**.
3. While investigating, flag any Unused Test Classes you no longer need. They are identified with
   the Test Class check box.

## Unused Test Classes

Cleaning up tests that are no longer necessary can significantly improve your release cycles. There
are two reasons that a test class may be unused:

1. The code it tests is no longer used. To clean these up:

1. Create a new Report based on the **Customizations with Dependencies** type.
1. Filter for:

   - Salesforce Type equals **Apex Class**
   - Test Class equals **True**
   - Customization's Date Last Used and/or the Dependency: Date Last Used is populated and older
     than X
   - Optional: Filter out objects from a managed package.

1. Add **Clean Up Notes** that the code it tests is no longer in use.

1. The assertions in the Test Class relate to fields no longer in use. To identify these:

1. Create a new Report based on the **Customizations with Dependencies** report type.
1. The following filters identify test classes referencing fields that have not been used in the
   past six months:

- Salesforce Type equals **Apex Class**
- Test Class equals **True**
- Dependency: Salesforce Type equals **CustomField**
- Dependency: Date Last Used less than **180 DAYS AGO**

3. Add **Clean Up Notes** that the Test Class assertions relate to fields no longer in use.

## Entire Object or Group of Parent / Child Objects

Cleaning up a group of custom parent - child objects or an entire object (including the object
itself):

1. Create a Clean Up List View
2. Use the API Name as a filter set to either:

   - Equals the API Name of the parent or
   - Starts with the API Name of the parent object **plus " \_ \_. "**. (example **API Name starts
     with Record\_ \_.**) The period is required to ensure you just match that record and its
     children. You get all fields and children under the parent.

3. Set the **Clean Up Status** to **Under Investigation** and add appropriate **Clean Up Notes**.

## Layouts and List Views

These customizations do not have a reliable **Date Last Used**. We are working to narrow this gap.
For now, be extra careful when investigating these items.

## Value-based Clean Up

Sometimes we want to clean up values not just Customizations. For example:

- Cleaning up as someone leaves the company
- Identifying hard-coded dependencies on users
- Identifying where a record type or list value is used

You have already seen some clues to how you might do this in preceding cases. For most objects,
simply:

1. Create a Clean Up List View showing all Customizations.
2. Include the XML/Code field and any other specific fields you are interested in, for example:
   Report Formulas.
3. Search in the **Search this list** field (Only Available in Lightning) for:

   - Email address
   - Name
   - Email root (for example, `@netwrix.com`)
   - Record type or list value you are looking to isolate
   - Anything else that could appear in the metadata

Points to consider:

- Restricting the List View to one Record Type enables you to edit records directly from the List
  View.
- Search carefully if using multiple terms (refer to this
  [Salesforce Search guide](https://help.salesforce.com/articleView?id=000247472andtype=1)) - quotes
  can be useful to enforce just the string you are looking for. **"Search Term"** (in quotes) finds
  objects with that phrase whereas **Search Term** (unquoted) finds anything with **Search** and
  **Term** even if they are in different fields in the List View.
- Even good searches can result in false positive matches if the same value appears in multiple
  lists or record types or is a commonly-used term in Salesforce's XML or is a common
  company-specific term.

**Next Technical Debt Topic:** [Ongoing Monitoring ](/docs/platgovsalesforce/org-maintenance/technical-debt.md)

# Change Monitoring

Activating change monitoring is the next step on the path to reduce your Technical Debt. Change
monitoring records all changes that occur in the org and automatically alerts stakeholders of any
that fall outside of policy or impose unacceptable levels of risk.

Change monitoring can be integrated into your change governance process or be leveraged as the
foundation of a new super-efficient process using Platform Governance for Salesforce. For now,
oversight is the goal. In particular, notification of any changes that touch automation (code,
workflows, triggers), profiles or roles is essential. The severity level can be set to the level of
change a policy should impose. For example, code-related changes normally follow a tighter approval
process than simple data model changes.

> **TIP**
>
> **How Change Policies Work**: Every time a customization is created or changed in an org, Platform
> Governance for Salesforce checks to see if the change should have been reviewed or approved. By
> default, this depends on the dependencies — a picklist with no dependencies is a relatively safe
> change compared to a picklist with risky code dependencies. Default policies can be customized and
> applied to specific customizations. For example, most reports do not need change control, but
> management reports need to be tightly controlled.

Policies define the level of change control to follow to reduce risk. The five change levels contain
escalating levels of rigor and/or skill required to address a change:

| Change Level                            | Change Process                                                                               | Example                                                                     | Skill Level Required                                                                                  |
| --------------------------------------- | -------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------- |
| L1: Log Changes                         | This is a safe change.                                                                       | Ordinary report.                                                            | Anyone.                                                                                               |
| L2: Process Issue                       | This is a relatively safe change but should be reviewed afterward.                           | Public report.                                                              | Anyone.                                                                                               |
| L3: Change Request                      | This needs approval from management but not sandbox review.                                  | Management report or Control.                                               | Anyone, provided prior approval is granted                                                            |
| L4: Sandbox Development and Testing     | This is not a complex change, but best practices require it to be tested in a sandbox first. | Data model changes with no dependencies. For example, adding a new field.   | Business Analyst or Admin with prior approval, working in sandbox before deploying in production.     |
| L5: Full Software Development Lifecycle | This is not a safe change. It needs to be changed carefully with rigorous testing.           | Changes to code or a picklist used in field with code or SoQL dependencies. | Admin / Developer with prior approval working through a full development cycle in multiple sandboxes. |

Changes made without the policy-required approval are reported as Non-Compliant. Review the
Non-Compliant Changes Report to ensure dangerous changes do not slip through and cause process or
data problems.

Policies can also be used to block unauthorized changes.

## Default Policy

Netwrix recommends our default policy as a foundational best practice. In addition, consider
Specific Monitoring for anything needing special protection.

![Strongpoint Default Policy](/img/product_docs/platgovsalesforce/tech_debt/tech_debt_5.webp)

Platform Governance for Salesforce documents **Unresolved Non-Compliant Changes** in both a List
View and a Report. Both show you all the changes that should have received approval and the level of
change control required for the change. The List View enables you to quickly review and manage the
resolution from a single screen through the **Short Resolution Description** and **Status** fields.

If you are not fully leveraging Platform Governance for Salesforce in your change enablement
process, you can restrict your review of changes by filtering out object types or risk levels that
do not concern you. Alternatively, you can create different reports for different team members to
prioritize what you see.

![Unresolved Non-Compliant Changes Report](/img/product_docs/platgovsalesforce/tech_debt/tech_debt_8.webp)

## Specific Monitoring

The default policy may be all you require. However, you should consider whether there are specific
people, objects, reports or fields that need special protection. These can be addressed in two ways:

> Specific People
>
> Specific Customizations
>
> Specific Changes
>
> Adding Custom Fields and Objects to the Policy

### Specific People

Sometimes the behavior of certain individuals in your system is essential to monitor. This could be
a maverick developer, or a new hire not completely familiar with your system.

Create a List View or Report against one or both:

- Customization records based on the **Last Modified By** field
- Change Logs filtered by the **Changed By** field showing the Customization, the date of the
  change, the person making the change, the resolution explanation and status (requires _Intelligent
  Change Enablement_ or _Enterprise Compliance_
  [license](/docs/platgovsalesforce/getting-started/features-and-licensing.md)). Either approach can also be
  very useful to monitor new hires.

You can filter the Unresolved Non-Compliant Changes List View by the Changed By field. This has the
advantage of showing you the Non-Compliant Changes and providing an easy workflow to resolve them.

### Specific Customizations

In some cases, it is essential to monitor changes to specific Customizations, Objects, or Fields.
For example:

- Encrypted fields or other privacy-related fields. Changes likely need to be reviewed by the data
  security team.
- Important List Views or Reports with role, SOQL, dashboard/script dependencies, or selected by
  owner.
- Financially-sensitive Customizations such as contracts and compensation-related objects and
  fields.
- Any other specific fields requiring special approvals.

You can create a special policy with heightened sensitivity for these Customizations. For example,
you can require general approval of report changes and add special approvers, such as the CFO.

To apply the policy to Customizations you are concerned about:

1. Create a **List View** that selects the Customization records to protect, based on your criteria.
2. Add a **Record Type** filter with a single Record Type so that you can edit directly from the
   List View.
3. Include the **Change / Approval Policy** field as a List View column.
4. Select one or more Customizations and select the **Change / Approval Policy**.

   ![Applying the policy to Customizations](/img/product_docs/platgovsalesforce/tech_debt/tech_debt_7.webp)

### Specific Changes

Sometimes, you are more concerned about what is being changed than who is doing it. The Technical
Debt topic [Ongoing Monitoring](/docs/platgovsalesforce/org-maintenance/technical-debt.md) has some specific examples for
watching your org to spot problems before they happen.

### Adding Custom Fields and Objects to the Policy

When you add sensitive objects to the Policy, you may also need to add the Custom Fields that belong
to that Object. There is a new **Set Policy** option on the Customization record to easily add it to
the policy.

1. Open **Customizations**.
2. Search for **Customizations** **CustomObject**.

   ![Search for Customizations > CustomObject](/img/product_docs/threatprevention/threatprevention/reportingmodule/configuration/integrations/search.webp)

3. Open the Customization to add to a policy.
4. Click **Set Policy**.

   ![Set Policy is used to add Customizations to a policy](/img/product_docs/platgovsalesforce/tech_debt/policy_set_button.webp)

5. Select individual customizations or click the check box in the heading bar to select all.
6. Click **Save**.

**Next Technical Debt Topic:** [Org Clean Up](/docs/platgovsalesforce/org-maintenance/technical-debt.md)
