# Policy Comparison Window

When you edit a policy, the change creates an alert in the Alerts interface. You can track the changes made to the policy through a comparison of the new xml with the old xml. Threat Prevention uses fc.exe to do a comparison but you can also employ a third party comparison tool for better results.

Follow the steps to run a comparison.

__Step 1 –__ Click __Alerts__ in the left pane to launch the Alerts interface.

__Step 2 –__ On the Alerts interface, click the __Policy updated on server Changeset #[number]__ link in the Message column for an alert. The Policy Comparison window opens, where you can view the changes made to the policy against the respective alert.

![olicy Comparison window ](/img/product_docs/threatprevention/threatprevention/admin/alerts/window/policycomparison.png)

__Step 3 –__ On the Policy Comparison windowthe old xml displays on the left and the modified xml on the right.

__Step 4 –__ _(Optional)_ Click the __Configure__ icon next to the Run Different Tool button. The File Comparison Tool window opens. In the Path to Comparison Tool box, provide the path to the file comparison tool location in quotations. Next, add __%1 %2__ after the quoted location path. for example, _cmd.exe /K fc.exe %1 %2_. Click __OK__ to close the window.

__NOTE:__ By default, fc.exe is specified as the path but it is recommended to replace this with a path to a Windows based comparison tool such as Beyond Compare for best results.

__Step 5 –__ On the Policy Comparison window, click __Run Difference Tool__ to run the specified compare command using the third party comparison tool.

A window displays the policy comparison results.
