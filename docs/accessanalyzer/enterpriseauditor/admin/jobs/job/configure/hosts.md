# Hosts Node

The Hosts node provides the option to assign a preconfigured host list at the job level. It also provides a way to manually assign hosts to be targeted by the job using Host Selection pane.

![Host Selection page](/img/product_docs/accessanalyzer/enterpriseauditor/admin/jobs/job/configure/hostselection.png)

Use the default settings by selecting the __Use Default Setting__ checkbox and inherit the job group’s assigned host lists. To break inheritance and assign host lists at the job level select from the available host lists.

Hosts added manually at the job level are added to the Master Host Table if not already there, and it triggers a host inventory query according to the global settings. The host will not be added to any individual host lists. See the [Manually Add Hosts to a Job](#manually-add-hosts-to-a-job) topic for additional information.

Click __Save__ to apply any changes to the host selection. Changes are not implemented unless they are saved.

## Manually Add Hosts to a Job

Hosts can be added manually at the job level even when inheritance (Use Default Setting) is used for host list assignment. The job targets the hosts in any assigned host lists as well as any manually added at the job level. Follow these directions to manually add a host to a job.

![Job's Configure > Hosts node](/img/product_docs/accessanalyzer/enterpriseauditor/admin/jobs/job/configure/hostsnode.png)

__Step 1 –__ Navigate to the job’s __Configure__ > __Hosts__ node.

![Individual hosts section of the Host Selection view](/img/product_docs/accessanalyzer/enterpriseauditor/admin/jobs/job/configure/hostselectionindividualhosts.png)

__Step 2 –__ In the Individual hosts section of the Host Selection view, enter the Host name in the textbox and click __Add__.

__Step 3 –__ Repeat the previous step for each host to be added.

__Step 4 –__ Click __Save__ and then __OK__ to confirm the changes.

The manually added host is now targeted by the job.
