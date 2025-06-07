# Redeploy Scripts After Sandbox Refresh

NetSuite has removed the scheduled status on scripts after a sandbox is refreshed. This stops the scripts required for environment compares, change requests built to push to production, and other activities. This suitelet enables you to automatically reset all of your Platform Governance for NetSuite scripts. If you have scheduled custom scripts in your sandbox, you must manually set the status after a sandbox refresh.

1. Open your Sandbox.
2. Open __Customization__ > __Scripting__ > __Scripts__.
3. Set the Filter __Type__ to __Suitelet__ and the __Bundle ID__ to __294336__.

   ![Find the Suitelet](/static/img/product_docs/strongpointfornetsuite/release_notes/scripts.png)
4. Click __View__ by the __Strongpoint Reset Schedule Deployments__ suitelet.
5. Open the __Deployments__ tab.

   ![Open the Deployment tab](/static/img/product_docs/strongpointfornetsuite/release_notes/script_deploy_tab.png)
6. Click the Suitelet name: __Strongpoint Reset Schedule Deployments__.
7. Click on the Script __URL__.

   ![Click the Script URL](/static/img/product_docs/strongpointfornetsuite/release_notes/script_deploy_url.png)
