# Integrate with Power Automate

You can link an identity store in Directory Manager to Power Automate to achieve the following:

- __Trigger a flow from__ Directory Manager - To achieve this, you have to link a workflow in an identity store to a Power Automate flow. When the Directory Manager workflow is triggered, the linked flow is auto triggered.

## Trigger a Flow from Directory Manager

You can link a workflow in an identity store to a flow. Both system and user-defined workflows can be linked to flows.

- As a one-time process, connect your identity store to Microsoft Power Automate .See the [Connect an Identity Store to Power Automate](#Connect-an-Identity-Store-to-Power-Automate) topic.
- Link a workflow to a flow by providing the URL of that flow in the workflow .See the [Link an Identity Store Workflow to a Flow](#Link-an-Identity-Store-Workflow-to-a-Flow) topic.

Consequently, when the identity store workflow is triggered, the linked flow is auto triggered.

NOTE: When the flow is approved in Power Automate, the identity store workflow request is auto approved. However, if the identity store workflow request is approved first, the flow would not be auto approved.

### Connect an Identity Store to Power Automate

To connect an identity tore to Power Automate, you must configure a Power Automate client for that identity store. This will establish a communication channel between the Directory Manager Data service and the Power Automate platform.

NOTE: Make sure the Directory Manager server is deployed on a machine that is exposed over the Internet, as Power Automate needs to communicate with the Directory Manager server for processing requests. Power Automate cannot communicate with a server deployed on a machine behind NAT.

__To configure a Power Automate client for an identity store:__

1. In Admin Center, click __Identity Stores__ in the left pane.
2. On the __Identity Stores__ page, click the ellipsis button for an identity store and select __Edit__.
3. Click __Workflows__ under __Settings__ in the left pane.
4. On the __Workflows__ page, click the __Advanced Workflow Settings__ tab.
5. In the __Power Automate Settings__ section, click __Register Client__.
6. Enter the following information:

   - __Organization Code__ - the unique name for the environment that stores your flows in Power Automate.
   - __Region__ - the location of your environment.
   - __Directory Manager Data Service URL__ - the URL of the Data service. Requests from Power Automate will communicate with the Data service endpoint. The URL is as:  
     https://<GroupID server name>/<Data service name>  
     For example:  
     https://powerautomate-netwrix1.msappproxy.net/groupiddataservice
   - __Tenant ID__ - the tenant ID assigned to the Directory Manager application when you registered it in Microsoft Entra Admin Center.
   - __Client ID__ - the application ID assigned to the Directory Manager application when you registered it in Microsoft Entra Admin Center.

   NOTE: The Directory Manager application in Microsoft Entra Admin Center must have the following permissions for Power Automate:  
    ![pa_permissions](/static/img/product_docs/groupid/groupid/admincenter/workflow/pa_permissions.png)
7. Click __Save__ on the __Advanced Workflow Settings__ page.

### Link an Identity Store Workflow to a Flow

To link an identity store workflow to a Power Automate flow, generate a flow template from an identity store workflow and provide the URL of the flow in workflow settings. When the workflow is triggered, the linked flow is auto triggered.

__To link a workflow to a flow:__

1. In Admin Center, click __Identity Stores__ in the left pane.
2. On the __Identity Stores__ page, click the ellipsis button for an identity store and select __Edit__.
3. Click __Workflows__ under __Settings__ in the left pane.
4. On the __Configure Workflows__ tab of the __Workflows__ page, click the ellipsis button for a workflow and select __Edit__.
5. On the __Edit Workflow__ page, click __Power Automate Settings__ in the top right corner.
6. On the __Power Automate Settings__ dialog box, provide the username and password of a Microsoft Entra ID account for managing flows in the Microsoft Power Automate portal. This account must have
   the following permissions on the Entra tenant:

   ![pa_permissions](/static/img/product_docs/groupid/groupid/admincenter/workflow/pa_permissions.png)
7. Click __Create Template__. Directory Manager creates a basic flow in Power Automate with the same name as the workflow, and displays the following message:

   ![pa_template_message](/static/img/product_docs/groupid/groupid/admincenter/workflow/pa_template_message.png)
8. The next step is to copy the flow URL from Power Automate and provide it here. To copy the URL, do the following:

   1. Launch Power Automate and navigate to __Environments > GroupID application > My Flows__. This page displays the flow you created in Power Automate from the Directory Manager workflow.
   2. Hover the mouse over the flow to display the ellipsis button. Click it and select __Edit__.
   3. Expand the __Connections__ area.

      ![connections_area](/static/img/product_docs/groupid/groupid/admincenter/workflow/connections_area.png)
   4. Click __Approvals__ in the __Connections__ area. The approver of the Directory Manager workflow is auto added here. Click __Save__.
   5. Expand the __When a HTTP request is received__ area and copy the URL displayed for __HTTP POST URL__.
9. In Directory Manager, return to the workflow being linked to the flow, and click __Configure a Request URL__ on the __Power Automate Settings__ dialog box.
10. Enter the copied HTTP POST URL in the __Request URL__ box.
11. Click __Authenticate__ and then __Save__.
12. Click __Update Workflow__ on the __Edit Workflow__ page to save the settings.
13. Click __Save__ on the __Workflows__ page.
14. Next, enable the linked flow in Power Automate. To do so:

    1. In Power Automate, navigate to __Environments > GroupID application > My Flows__. This page displays the flow you created in Power Automate from the Directory Manager workflow.
    2. Hover the mouse over the flow to display the ellipsis button. Click it and select __Turn on__.
