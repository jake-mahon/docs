# Deployment Logs

The deployment log is attached to the Deployment Record on the __Related Lists__ tab. You can also access the logs from __Strongpoint__ > __Reports__ > __Release and Deployment__.

Deployment logs have these sections:

> [Deployment Log Detail](#Deployment-Log-Detail)
>
> [Customizations](#Customizations)
>
> [Deployed Components and Apex Test Information](#Deployed-Components-and-Apex-Test-Information)
>
> [Deployment Error Messages](#Deployment-Error-Messages)
>
> [Notes and Attachments](#Notes-and-Attachments)
>
> [Deployment Components](#Deployment-Components)

## Sample Deployment Log

![Successful deployment log example](/img/product_docs/strongpointforsalesforce/release_management/deployment_log.webp)

## Deployment Log Detail

> __Deployment Log Name__: Name of the Deployment Record.
>
> __Change Request__: Link to the change request associated with the deployment record.
>
> __Start Date__: Date deployment was started.
>
> __Owner__: Link to the Deployment Owner. Click __Change__ to edit the owner information.
>
> __Status__: Current status of the deployment. Double click to edit. Status options are:
>
> - Pending
> - InProgress
> - Succeeded
> - SucceededPartial
> - Failed
> - Canceling
> - Canceled
> - Retrieve In Progress
> - Retrieve Completed
> - Retrieve Failed
> - Validation In Progress
> - Validation Completed
> - Validation Failed
> - Rollback In Progress
> - Rollback Partial
> - Rollback Completed
> - Rollback Failed
>
> __Deployment Status__: Green Flag for Succeeded Red Flag for Failed.
>
> __Retrieve Status__: Green Flag for Succeeded Red Flag for Failed.
>
> __Completed Date__: Date deployment was completed.
>
> __State Detail__: Component being deployed or the Apex test class running.

## Customizations

Links to the customizations attached to the deployment record. The link open the customization record.

## Deployed Components and Apex Test Information

> __Components Total__: Number of components in the deployment.
>
> __Components Deployed__: Number of components deployed in the deployment process.
>
> __Component Errors__:Number of components generating errors during the deployment.
>
> __# of Tests Total__: Number of Apex tests for the deployment.
>
> __# of Tests Completed__: Number of Apex tests completed for the deployment.
>
> __# of Test Errors__: Number of Apex tests generating errors during the deployment.

## Deployment Error Messages

> __Deploy Error Messages__: Lists the components and generated errors.
>
> __Tests Error Message__: Lists the test failures.
>
> __Retrieve Error Message__: Lists the error message if a retrieve fails.
>
> __Created By__: Link to user who created the deployment log.
>
> __Last Modified By__: Link to user who last modified the deployment log.

## Notes and Attachments

Attachments are generated during the deployment for validation and auditing. Use __New Note__ to create a deployment note, or __Attach File__ to add a file to the deployment log. Notes and attachments can be edited, viewed or deleted.

## Deployment Components

Deployment Components are generated during the deployment. Use __New Deployment Component__ to add a deployment component to the deployment log. Deployment Components Name and Customization are links to the individual component or customization records. Deployment Components can be edited or deleted.
