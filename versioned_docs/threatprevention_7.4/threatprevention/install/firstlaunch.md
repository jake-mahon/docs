# First Launch

Once Threat Prevention is installed, the Administration Console administrator is the only user who
can launch it for the first time.

Follow the steps to launch Threat Prevention for the first time.

**Step 1 –** On first launch, the Netwrix Threat Prevention Licensing Configuration window is
displayed to the first Administration Console administrator, showing a license key warning:

- Product license will expire in `<number>` days. Please contact your Netwrix representative for a
  new license.

This warning always displays when the organization’s license is within 14 days of expiring. Click
**OK**. See the
[Import the License](/versioned_docs/threatprevention_7.4/threatprevention/install/licenseimport.md)
topic for licensing the product.

![Import Templates dialog box](/img/versioned_docs/threatprevention_7.4/threatprevention/install/importtemplates.png)

**Step 2 –** On the Import Templates dialog box, you can choose to import policy templates now or
later.

In Threat Prevention, many policy templates are pre-configured for the most common policy types, so
that you can quickly configure a policy. See the
[Templates Interface](/versioned_docs/threatprevention_7.4/threatprevention/admin/templates/overview.md)
topic for details.

- Click **Yes** on the Import Templates dialog box to import all the templates into the
  Administration Console now. Once complete, the templates are available to all Administration
  Console users.
- On clicking **No**, the Import Templates dialog box appears asking, “Do you want to be prompted
  again next time this application loads?”

You can import the policy templates any time later. See the
[Import Templates](/versioned_docs/threatprevention_7.4/threatprevention/admin/templates/folder/overview.md#import-templates)
topic for additional information.

![Install Agent dialog box](/img/versioned_docs/changetracker_8.0/changetracker/install/agent/installagent.png)

**Step 3 –** On the Install Agents dialog box, you can choose to install the Agent on servers now or
later.

The Agent is responsible for monitoring the events as configured in policies. The Agent must be
deployed on all the servers where these events occur. Use the Administration Console to deploy and
manage the Agent.

- Click **Yes** on the Install Agents dialog box to launch the **Deploy Agents** wizard. See the
  [Deploy Agents](/versioned_docs/threatprevention_7.4/threatprevention/admin/agents/deploy/overview.md)
  topic for additional information.
- Click **No** if you do not want to install the Agents now. To install Agents later, see the
  [Agents Interface](/versioned_docs/threatprevention_7.4/threatprevention/admin/agents/overview.md)
  topic.

See the
[Getting Started ](/versioned_docs/threatprevention_7.4/threatprevention/gettingstarted.md)topic for
the next steps.
