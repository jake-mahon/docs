# Platform Governor Status

This is a live status update of the Usage of SFDC Governor Limit. Access it from __Netwrix Dashboard__ > __Settings__ > __Platform Governor Status__

When Platform Governance for Salesforce reaches the threshold, executions are reschedule for the next day so the organization limit is not reached.

![governor](../../../static/img/product_docs/strongpointforsalesforce/installing_strongpoint/governor.webp)

## Set a Threshold

You can set or edit the organization limits through the Setup menu.

1. Open __Setup__ > __Custom Code__ > __Custom Settings__
2. Click __Manage__ next to __Strongpoint General Config CS__
3. Click __Edit__ next to __Strongpoint Apex Method Daily__
4. Change the __Value Number__ as needed.
5. Click __Save__
