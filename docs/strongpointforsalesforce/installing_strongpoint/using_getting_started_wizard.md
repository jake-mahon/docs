# Run the Getting Started Wizard

The Getting Started Wizard helps you set up Platform Governance for Salesforce after you have done the [basic installation](/docs/strongpointforsalesforce/installing_strongpoint/installing_strongpoint.md) and configuration.

To use the Getting Started Wizard:

1. Open __Netwrix Dashboard__.
2. Open __Settings__> __Getting Started Wizard__

The __Getting Started Wizard__ opens to help you finish the configuration and set up.

## Choose Your License Type

On the Initial Setup Wizard page, choose the package type you have purchased. If you have an Intelligent Change Management or Enterprise Compliance License, enter the __Input Authorization Token__ sent to you. Click __Next__.

![getting_started_wizard2](/img/product_docs/strongpointforsalesforce/installing_strongpoint/getting_started_wizard2.webp)

## Add your Credentials

Once you have chosen your license type, you need to add your credentials. If your credentials change, an alert is sent to update the saved credentials. Expired credentials can cause auto scanners to fail. Use __Netwrix Dashboard__ > __Settings__> __SP Credentials__ to update your credentials.

![getting_started_wizard3](/img/product_docs/strongpointforsalesforce/installing_strongpoint/getting_started_wizard3.webp)

1. On the Credentials page, add the following values:

- __Salesforce Username__
- __Salesforce Password__
- __Salesforce Security Token__
- __Salesforce Consumer Key__ Extracted when you created the Strongpoint Connected App
- __Salesforce Consumer Secret__  Extracted when you created the Strongpoint Connected App

2. Click __Next__

## Test Your Connection

Once you have set up your credentials, you need to configure the remote site settings.

![Testing the connection](/img/product_docs/strongpointforsalesforce/installing_strongpoint/getting_started_wizard10.webp)

1. Open Salesforce __Setup__ > __Security__ > __Remote Site Settings__.
2. Click __New Remote Site__.

   ![New Remote Site](/img/product_docs/strongpointforsalesforce/installing_strongpoint/getting_started_new_rss.webp)
3. Copy/paste the information from the wizard to create the remote sites.
4. Click on __Test Connection__. __Test connection was Successful__ is displayed if the connection succeeds. If the connection fails, the wizard suggests troubleshooting steps to resolve the issue.
5. Click __Next__.
  
  

__Next Step:__ [Set Up the Initial Scan](/docs/strongpointforsalesforce/installing_strongpoint/setting_up_initial_scan.md)
