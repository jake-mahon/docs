#!/usr/bin/env python3

import re
import os
import json

def fix_final_broken_links():
    """Fix the remaining broken links with specific mappings based on user examples"""
    
    # Read the final build report to get current broken links
    with open('final_build_report.log', 'r') as f:
        content = f.read()
    
    # Create specific mappings based on user examples and file system exploration
    specific_mappings = {
        # Basic concepts and platform specific
        '/docs/endpointpolicymanager/gettingstarted/basic-concepts.md': '/docs/endpointpolicymanager/basicconcepts.md',
        '/docs/endpointpolicymanager/platform-specific/mac-support/overview.md': '/docs/endpointpolicymanager/mac/overview.md',
        '/docs/endpointpolicymanager/device-and-desktop-management/device-manager/devicemanager/overview.md': '/docs/endpointpolicymanager/device/devicemanager/overview.md',
        
        # Troubleshooting -> tips
        '/docs/endpointpolicymanager/troubleshooting/eventcategories.md': '/docs/endpointpolicymanager/tips/eventcategories.md',
        '/docs/endpointpolicymanager/troubleshooting/eventlogs.md': '/docs/endpointpolicymanager/tips/eventlogs.md',
        '/docs/endpointpolicymanager/troubleshooting/folderredirection.md': '/docs/endpointpolicymanager/tips/folderredirection.md',
        '/docs/endpointpolicymanager/troubleshooting/onpremisecloud.md': '/docs/endpointpolicymanager/tips/onpremisecloud.md',
        '/docs/endpointpolicymanager/troubleshooting/thirdpartyadvice.md': '/docs/endpointpolicymanager/tips/thirdpartyadvice.md',
        '/docs/endpointpolicymanager/troubleshooting/mmcdisplay.md': '/docs/endpointpolicymanager/tips/mmcdisplay.md',
        '/docs/endpointpolicymanager/troubleshooting/embedclient.md': '/docs/endpointpolicymanager/tips/embedclient.md',
        '/docs/endpointpolicymanager/troubleshooting/services.md': '/docs/endpointpolicymanager/tips/services.md',
        '/docs/endpointpolicymanager/troubleshooting/emailoptout.md': '/docs/endpointpolicymanager/tips/emailoptout.md',
        
        # Device and desktop management -> device
        '/docs/endpointpolicymanager/device-and-desktop-management/device-manager/serialnumber.md': '/docs/endpointpolicymanager/device/serialnumber.md',
        '/docs/endpointpolicymanager/device-and-desktop-management/device-manager/usbdrive.md': '/docs/endpointpolicymanager/device/usbdrive.md',
        '/docs/endpointpolicymanager/device-and-desktop-management/device-manager/registry.md': '/docs/endpointpolicymanager/device/registry.md',
        '/docs/endpointpolicymanager/device-and-desktop-management/start-screen-and-taskbar/overview.md': '/docs/endpointpolicymanager/startscreentaskbar/overview.md',
        '/docs/endpointpolicymanager/device-and-desktop-management/start-screen-and-taskbar/explorer.md': '/docs/endpointpolicymanager/startscreentaskbar/explorer.md',
        '/docs/endpointpolicymanager/device-and-desktop-management/start-screen-and-taskbar/modes.md': '/docs/endpointpolicymanager/startscreentaskbar/modes.md',
        '/docs/endpointpolicymanager/device-and-desktop-management/start-screen-and-taskbar/sccmsoftwarecenter.md': '/docs/endpointpolicymanager/startscreentaskbar/sccmsoftwarecenter.md',
        '/docs/endpointpolicymanager/device-and-desktop-management/start-screen-and-taskbar/helpertools.md': '/docs/endpointpolicymanager/startscreentaskbar/helpertools.md',
        '/docs/endpointpolicymanager/device-and-desktop-management/start-screen-and-taskbar/foldershortcut.md': '/docs/endpointpolicymanager/startscreentaskbar/foldershortcut.md',
        '/docs/endpointpolicymanager/device-and-desktop-management/start-screen-and-taskbar/addlink.md': '/docs/endpointpolicymanager/startscreentaskbar/addlink.md',
        '/docs/endpointpolicymanager/device-and-desktop-management/remote-desktop-protocol/itemleveltargeting/overview.md': '/docs/endpointpolicymanager/remotedesktopprotocol/itemleveltargeting/overview.md',
        '/docs/endpointpolicymanager/device-and-desktop-management/remote-desktop-protocol/overview.md': '/docs/endpointpolicymanager/remotedesktopprotocol/overview.md',
        
        # Application management -> app management
        '/docs/endpointpolicymanager/application-management/browser-router/processorderprecedence.md': '/docs/endpointpolicymanager/browserrouter/processorderprecedence.md',
        '/docs/endpointpolicymanager/application-management/browser-router/install/chromemanual.md': '/docs/endpointpolicymanager/browserrouter/install/chromemanual.md',
        '/docs/endpointpolicymanager/application-management/browser-router/advancedblockingmessage.md': '/docs/endpointpolicymanager/browserrouter/advancedblockingmessage.md',
        '/docs/endpointpolicymanager/application-management/browser-router/forcebrowser.md': '/docs/endpointpolicymanager/browserrouter/forcebrowser.md',
        '/docs/endpointpolicymanager/application-management/browser-router/editpolicytemplate/securityzone.md': '/docs/endpointpolicymanager/browserrouter/editpolicytemplate/securityzone.md',
        '/docs/endpointpolicymanager/application-management/browser-router/defaultbrowser/defined.md': '/docs/endpointpolicymanager/browserrouter/defaultbrowser/defined.md',
        '/docs/endpointpolicymanager/application-management/browser-router/suppresspopup.md': '/docs/endpointpolicymanager/browserrouter/suppresspopup.md',
        '/docs/endpointpolicymanager/application-management/browser-router/install/removeagent.md': '/docs/endpointpolicymanager/browserrouter/install/removeagent.md',
        '/docs/endpointpolicymanager/application-management/browser-router/useselectablebrowser.md': '/docs/endpointpolicymanager/browserrouter/useselectablebrowser.md',
        '/docs/endpointpolicymanager/application-management/browser-router/editpolicytemplate/browsermode.md': '/docs/endpointpolicymanager/browserrouter/editpolicytemplate/browsermode.md',
        '/docs/endpointpolicymanager/application-management/browser-router/shortcuticons.md': '/docs/endpointpolicymanager/browserrouter/shortcuticons.md',
        '/docs/endpointpolicymanager/application-management/browser-router/editpolicytemplate/commandlinearguments.md': '/docs/endpointpolicymanager/browserrouter/editpolicytemplate/commandlinearguments.md',
        '/docs/endpointpolicymanager/application-management/browser-router/edgelegacybrowser.md': '/docs/endpointpolicymanager/browserrouter/edgelegacybrowser.md',
        '/docs/endpointpolicymanager/application-management/browser-router/overview.md': '/docs/endpointpolicymanager/browserrouter/overview.md',
        '/docs/endpointpolicymanager/application-management/file-associations/defaultbrowser.md': '/docs/endpointpolicymanager/fileassociations/defaultbrowser.md',
        '/docs/endpointpolicymanager/application-management/file-associations/collections/gpos.md': '/docs/endpointpolicymanager/fileassociations/collections/gpos.md',
        '/docs/endpointpolicymanager/application-management/file-associations/oemdefaultassociations.md': '/docs/endpointpolicymanager/fileassociations/oemdefaultassociations.md',
        '/docs/endpointpolicymanager/application-management/file-associations/overview.md': '/docs/endpointpolicymanager/fileassociations/overview.md',
        '/docs/endpointpolicymanager/application-management/java-enterprise-rules/itemleveltargeting.md': '/docs/endpointpolicymanager/javaenterpriserules/itemleveltargeting.md',
        '/docs/endpointpolicymanager/application-management/java-enterprise-rules/prompts/overview.md': '/docs/endpointpolicymanager/javaenterpriserules/prompts/overview.md',
        '/docs/endpointpolicymanager/application-management/java-enterprise-rules/exportcollections.md': '/docs/endpointpolicymanager/javaenterpriserules/exportcollections.md',
        '/docs/endpointpolicymanager/application-management/java-enterprise-rules/wildcards.md': '/docs/endpointpolicymanager/javaenterpriserules/wildcards.md',
        '/docs/endpointpolicymanager/application-management/java-enterprise-rules/virtualizedbrowsers.md': '/docs/endpointpolicymanager/javaenterpriserules/virtualizedbrowsers.md',
        '/docs/endpointpolicymanager/application-management/java-enterprise-rules/evaluateurls.md': '/docs/endpointpolicymanager/javaenterpriserules/evaluateurls.md',
        '/docs/endpointpolicymanager/application-management/java-enterprise-rules/overview.md': '/docs/endpointpolicymanager/javaenterpriserules/overview.md',
        
        # Policy management -> direct paths
        '/docs/endpointpolicymanager/policy-management/item-level-targeting/entraidsids.md': '/docs/endpointpolicymanager/itemleveltargeting/entraidsids.md',
        '/docs/endpointpolicymanager/policy-management/item-level-targeting/applypreferences.md': '/docs/endpointpolicymanager/itemleveltargeting/applypreferences.md',
        '/docs/endpointpolicymanager/policy-management/item-level-targeting/securitygroup.md': '/docs/endpointpolicymanager/itemleveltargeting/securitygroup.md',
        '/docs/endpointpolicymanager/policy-management/item-level-targeting/windows11.md': '/docs/endpointpolicymanager/itemleveltargeting/windows11.md',
        '/docs/endpointpolicymanager/policy-management/item-level-targeting/windowsserver2019.md': '/docs/endpointpolicymanager/itemleveltargeting/windowsserver2019.md',
        '/docs/endpointpolicymanager/policy-management/item-level-targeting/entraidgroups.md': '/docs/endpointpolicymanager/itemleveltargeting/entraidgroups.md',
        '/docs/endpointpolicymanager/policy-management/item-level-targeting/virtualdesktops.md': '/docs/endpointpolicymanager/itemleveltargeting/virtualdesktops.md',
        '/docs/endpointpolicymanager/policy-management/item-level-targeting/windowsendpoint.md': '/docs/endpointpolicymanager/itemleveltargeting/windowsendpoint.md',
        '/docs/endpointpolicymanager/policy-management/preferences/componentlicense.md': '/docs/endpointpolicymanager/preferences/componentlicense.md',
        '/docs/endpointpolicymanager/policy-management/preferences/overview.md': '/docs/endpointpolicymanager/preferences/overview.md',
        '/docs/endpointpolicymanager/policy-management/preferences/settings.md': '/docs/endpointpolicymanager/preferences/settings.md',
        '/docs/endpointpolicymanager/policy-management/preferences/printerdeploy.md': '/docs/endpointpolicymanager/preferences/printerdeploy.md',
        '/docs/endpointpolicymanager/policy-management/preferences/drivemappings.md': '/docs/endpointpolicymanager/preferences/drivemappings.md',
        '/docs/endpointpolicymanager/policy-management/preferences/startservice.md': '/docs/endpointpolicymanager/preferences/startservice.md',
        '/docs/endpointpolicymanager/policy-management/preferences/passwords.md': '/docs/endpointpolicymanager/preferences/passwords.md',
        
        # Automation and scripting -> direct paths
        '/docs/endpointpolicymanager/automation-and-scripting/scripts-and-triggers/localscheduledtask.md': '/docs/endpointpolicymanager/scriptstriggers/localscheduledtask.md',
        '/docs/endpointpolicymanager/automation-and-scripting/scripts-and-triggers/overview.md': '/docs/endpointpolicymanager/scriptstriggers/overview.md',
        '/docs/endpointpolicymanager/automation-and-scripting/scripts-and-triggers/wlannetwork.md': '/docs/endpointpolicymanager/scriptstriggers/wlannetwork.md',
        '/docs/endpointpolicymanager/automation-and-scripting/scripts-and-triggers/screensavers.md': '/docs/endpointpolicymanager/scriptstriggers/screensavers.md',
        '/docs/endpointpolicymanager/automation-and-scripting/scripts-and-triggers/windows7tls.md': '/docs/endpointpolicymanager/scriptstriggers/windows7tls.md',
        '/docs/endpointpolicymanager/automation-and-scripting/scripts-and-triggers/edgefirstlogon.md': '/docs/endpointpolicymanager/scriptstriggers/edgefirstlogon.md',
        '/docs/endpointpolicymanager/automation-and-scripting/scripts-and-triggers/mappeddrives/powershell.md': '/docs/endpointpolicymanager/scriptstriggers/mappeddrives/powershell.md',
        '/docs/endpointpolicymanager/automation-and-scripting/scripts-and-triggers/mappeddrives/eventlogtriggers.md': '/docs/endpointpolicymanager/scriptstriggers/mappeddrives/eventlogtriggers.md',
        '/docs/endpointpolicymanager/automation-and-scripting/scripts-and-triggers/windows10modifyscript.md': '/docs/endpointpolicymanager/scriptstriggers/windows10modifyscript.md',
        '/docs/endpointpolicymanager/automation-and-scripting/scripts-and-triggers/onapplyscript.md': '/docs/endpointpolicymanager/scriptstriggers/onapplyscript.md',
        '/docs/endpointpolicymanager/automation-and-scripting/scripts-and-triggers/cylance.md': '/docs/endpointpolicymanager/scriptstriggers/cylance.md',
        '/docs/endpointpolicymanager/automation-and-scripting/scripts-and-triggers/scriptlocation.md': '/docs/endpointpolicymanager/scriptstriggers/scriptlocation.md',
        '/docs/endpointpolicymanager/automation-and-scripting/scripts-and-triggers/powershellscripts.md': '/docs/endpointpolicymanager/scriptstriggers/powershellscripts.md',
        '/docs/endpointpolicymanager/automation-and-scripting/scripts-and-triggers/wlandropbox.md': '/docs/endpointpolicymanager/scriptstriggers/wlandropbox.md',
        '/docs/endpointpolicymanager/automation-and-scripting/scripts-and-triggers/silentbrowserinstall.md': '/docs/endpointpolicymanager/scriptstriggers/silentbrowserinstall.md',
        '/docs/endpointpolicymanager/automation-and-scripting/scripts-and-triggers/shortcutpublicdesktop.md': '/docs/endpointpolicymanager/scriptstriggers/shortcutpublicdesktop.md',
        '/docs/endpointpolicymanager/automation-and-scripting/scripts-and-triggers/updateregistry.md': '/docs/endpointpolicymanager/scriptstriggers/updateregistry.md',
        '/docs/endpointpolicymanager/automation-and-scripting/scripts-and-triggers/resetsecurechannel.md': '/docs/endpointpolicymanager/scriptstriggers/resetsecurechannel.md',
        '/docs/endpointpolicymanager/automation-and-scripting/scripts-and-triggers/temperatureunit.md': '/docs/endpointpolicymanager/scriptstriggers/temperatureunit.md',
        '/docs/endpointpolicymanager/automation-and-scripting/scripts-and-triggers/bitlockerdeployment.md': '/docs/endpointpolicymanager/scriptstriggers/bitlockerdeployment.md',
        '/docs/endpointpolicymanager/automation-and-scripting/scripts-and-triggers/teamsminimized.md': '/docs/endpointpolicymanager/scriptstriggers/teamsminimized.md',
        '/docs/endpointpolicymanager/automation-and-scripting/scripts-and-triggers/vpnconnection.md': '/docs/endpointpolicymanager/scriptstriggers/vpnconnection.md',
        '/docs/endpointpolicymanager/automation-and-scripting/scripts-and-triggers/localaccountpassword.md': '/docs/endpointpolicymanager/scriptstriggers/localaccountpassword.md',
        '/docs/endpointpolicymanager/automation-and-scripting/scripts-and-triggers/mappeddrives/vpn.md': '/docs/endpointpolicymanager/scriptstriggers/mappeddrives/vpn.md',
        '/docs/endpointpolicymanager/automation-and-scripting/scripts-and-triggers/processesdetails.md': '/docs/endpointpolicymanager/scriptstriggers/processesdetails.md',
        '/docs/endpointpolicymanager/automation-and-scripting/scripts-and-triggers/networksecuritymanager.md': '/docs/endpointpolicymanager/scriptstriggers/networksecuritymanager.md',
        '/docs/endpointpolicymanager/automation-and-scripting/feature-management/overview.md': '/docs/endpointpolicymanager/feature/overview.md',
        
        # Cloud and remote management -> direct paths  
        '/docs/endpointpolicymanager/cloud-and-remote-management/remote-work-delivery/updateclientsideextension.md': '/docs/endpointpolicymanager/remoteworkdelivery/updateclientsideextension.md',
        '/docs/endpointpolicymanager/cloud-and-remote-management/remote-work-delivery/installsequentially.md': '/docs/endpointpolicymanager/remoteworkdelivery/installsequentially.md',
        '/docs/endpointpolicymanager/cloud-and-remote-management/remote-work-delivery/installuwp.md': '/docs/endpointpolicymanager/remoteworkdelivery/installuwp.md',
        '/docs/endpointpolicymanager/cloud-and-remote-management/remote-work-delivery/variables.md': '/docs/endpointpolicymanager/remoteworkdelivery/variables.md',
        '/docs/endpointpolicymanager/cloud-and-remote-management/remote-work-delivery/printers.md': '/docs/endpointpolicymanager/remoteworkdelivery/printers.md',
        '/docs/endpointpolicymanager/cloud-and-remote-management/remote-work-delivery/overview.md': '/docs/endpointpolicymanager/remoteworkdelivery/overview.md',
        '/docs/endpointpolicymanager/cloud-and-remote-management/mdm-integration/overview.md': '/docs/endpointpolicymanager/mdm/overview.md',
        
        # Security and privilege management -> direct paths
        '/docs/endpointpolicymanager/security-and-privilege-management/gpo-export/securitysettings.md': '/docs/endpointpolicymanager/gpoexport/securitysettings.md',
        '/docs/endpointpolicymanager/security-and-privilege-management/gpo-export/usercontext.md': '/docs/endpointpolicymanager/gpoexport/usercontext.md',
        '/docs/endpointpolicymanager/security-and-privilege-management/gpo-export/delivercertificates.md': '/docs/endpointpolicymanager/gpoexport/delivercertificates.md',
        '/docs/endpointpolicymanager/security-and-privilege-management/security-settings/overview.md': '/docs/endpointpolicymanager/securitysettings/overview.md',
        
        # Compliance and reporting -> direct paths
        '/docs/endpointpolicymanager/compliance-and-reporting/group-policy-compliance-reporter/concepts.md': '/docs/endpointpolicymanager/grouppolicycompliancereporter/concepts.md',
        '/docs/endpointpolicymanager/compliance-and-reporting/group-policy-compliance-reporter/scenarios.md': '/docs/endpointpolicymanager/grouppolicycompliancereporter/scenarios.md',
        '/docs/endpointpolicymanager/compliance-and-reporting/group-policy-compliance-reporter/deliveryreports.md': '/docs/endpointpolicymanager/grouppolicycompliancereporter/deliveryreports.md',
        '/docs/endpointpolicymanager/compliance-and-reporting/group-policy-compliance-reporter/install.md': '/docs/endpointpolicymanager/grouppolicycompliancereporter/install.md',
        '/docs/endpointpolicymanager/compliance-and-reporting/group-policy-compliance-reporter/license/basis.md': '/docs/endpointpolicymanager/grouppolicycompliancereporter/license/basis.md',
        '/docs/endpointpolicymanager/compliance-and-reporting/group-policy-compliance-reporter/license/types.md': '/docs/endpointpolicymanager/grouppolicycompliancereporter/license/types.md',
        '/docs/endpointpolicymanager/compliance-and-reporting/group-policy-compliance-reporter/license/userlimit.md': '/docs/endpointpolicymanager/grouppolicycompliancereporter/license/userlimit.md',
        '/docs/endpointpolicymanager/compliance-and-reporting/group-policy-compliance-reporter/license/compliancereports.md': '/docs/endpointpolicymanager/grouppolicycompliancereporter/license/compliancereports.md',
        '/docs/endpointpolicymanager/compliance-and-reporting/group-policy-compliance-reporter/shareacrossteam.md': '/docs/endpointpolicymanager/grouppolicycompliancereporter/shareacrossteam.md',
        '/docs/endpointpolicymanager/compliance-and-reporting/group-policy-compliance-reporter/mode/difference.md': '/docs/endpointpolicymanager/grouppolicycompliancereporter/mode/difference.md',
        '/docs/endpointpolicymanager/compliance-and-reporting/group-policy-compliance-reporter/mode/trial.md': '/docs/endpointpolicymanager/grouppolicycompliancereporter/mode/trial.md',
        '/docs/endpointpolicymanager/compliance-and-reporting/group-policy-compliance-reporter/license/minimum.md': '/docs/endpointpolicymanager/grouppolicycompliancereporter/license/minimum.md',
        '/docs/endpointpolicymanager/compliance-and-reporting/group-policy-compliance-reporter/license/expire.md': '/docs/endpointpolicymanager/grouppolicycompliancereporter/license/expire.md',
        '/docs/endpointpolicymanager/compliance-and-reporting/group-policy-compliance-reporter/license/trueup.md': '/docs/endpointpolicymanager/grouppolicycompliancereporter/license/trueup.md',
        '/docs/endpointpolicymanager/compliance-and-reporting/group-policy-compliance-reporter/license/tool.md': '/docs/endpointpolicymanager/grouppolicycompliancereporter/license/tool.md',
        '/docs/endpointpolicymanager/compliance-and-reporting/group-policy-compliance-reporter/license/multiyear.md': '/docs/endpointpolicymanager/grouppolicycompliancereporter/license/multiyear.md',
        '/docs/endpointpolicymanager/compliance-and-reporting/group-policy-compliance-reporter/domainmultiple.md': '/docs/endpointpolicymanager/grouppolicycompliancereporter/domainmultiple.md',
        '/docs/endpointpolicymanager/compliance-and-reporting/group-policy-compliance-reporter/overview.md': '/docs/endpointpolicymanager/grouppolicycompliancereporter/overview.md',
        
        # Deployment methods -> direct paths
        '/docs/endpointpolicymanager/deployment-methods/group-policy/itemleveltargeting/cachepreferences.md': '/docs/endpointpolicymanager/grouppolicy/itemleveltargeting/cachepreferences.md',
        '/docs/endpointpolicymanager/deployment-methods/group-policy/itemleveltargeting/cacheengine.md': '/docs/endpointpolicymanager/grouppolicy/itemleveltargeting/cacheengine.md',
        '/docs/endpointpolicymanager/deployment-methods/group-policy/insertuserinfo.md': '/docs/endpointpolicymanager/grouppolicy/insertuserinfo.md',
        '/docs/endpointpolicymanager/deployment-methods/group-policy/pdqdeploy.md': '/docs/endpointpolicymanager/grouppolicy/pdqdeploy.md',
        '/docs/endpointpolicymanager/deployment-methods/software-packages/winget.md': '/docs/endpointpolicymanager/softwarepackage/winget.md',
        '/docs/endpointpolicymanager/deployment-methods/software-packages/overview.md': '/docs/endpointpolicymanager/softwarepackage/overview.md',
        
        # Reference document
        '/docs/endpointpolicymanager/reference/index.md': '/docs/endpointpolicymanager/reference.md',
        
        # Remove generic resource links (these should be handled separately)
        '/docs/endpointpolicymanager/resources/video-tutorials.md': '',  # Remove
        '/docs/endpointpolicymanager/resources/knowledge-base.md': '',  # Remove
        '/docs/endpointpolicymanager/video/': '',  # Remove generic video link
        '/docs/endpointpolicymanager/video/#getting-started': '',  # Remove
        '/docs/endpointpolicymanager/video/#designstudio-how-to': '',  # Remove
    }
    
    fixed_count = 0
    error_count = 0
    
    print(f"Processing {len(specific_mappings)} specific link mappings...")
    
    for broken_link, correct_link in specific_mappings.items():
        if correct_link == '':  # Skip removal links for now
            print(f"Skipping removal of: {broken_link}")
            continue
            
        print(f"Processing: {broken_link} -> {correct_link}")
        
        # Search for files containing this broken link
        try:
            result = os.popen(f'grep -r "{broken_link}" /Users/jordan.violet/development/docs/docs/endpointpolicymanager/ --include="*.md" 2>/dev/null').read()
            
            if result.strip():
                for line in result.strip().split('\n'):
                    if ':' in line:
                        file_path = line.split(':')[0]
                        print(f"  Found in: {file_path}")
                        
                        try:
                            with open(file_path, 'r', encoding='utf-8') as f:
                                content = f.read()
                            
                            if broken_link in content:
                                new_content = content.replace(broken_link, correct_link)
                                
                                with open(file_path, 'w', encoding='utf-8') as f:
                                    f.write(new_content)
                                
                                print(f"  ✅ Fixed: {broken_link} -> {correct_link}")
                                fixed_count += 1
                            else:
                                print(f"  ⚠️ Link not found in file content")
                                
                        except Exception as e:
                            print(f"  ❌ Error processing {file_path}: {e}")
                            error_count += 1
            else:
                print(f"  ℹ️ Link not found in any files")
                
        except Exception as e:
            print(f"  ❌ Error searching for link: {e}")
            error_count += 1
    
    print(f"\n📊 Summary:")
    print(f"  Fixed: {fixed_count}")
    print(f"  Errors: {error_count}")
    
    return fixed_count, error_count

if __name__ == "__main__":
    fix_final_broken_links()