# Cleaning Up Change Logs

The __Change Logs Clean Up__ tool enables you to schedule an automatic clean up of old Change Logs. Cleaning up these old logs helps keep your orgs efficient and organized.

Netwrix recommends this clean up process be used as part of your Salesforce data backup and recovery plan. You should discuss with your compliance team how many months/years of Change Logs you need to retain and how this should be split between live and archived data.

1. Open __Netwrix Dashboard__ > __Tools__ > __Change Logs Clean Up__

   ![Open the Change Logs Clean Up Tool](/static/img/product_docs/strongpointforsalesforce/tools/change_logs_clean_up.png)
2. Set up the schedule to run the tool:

   - __Frequency__ can be set to __Daily__ or __Weekly__.
   - __Day__ specifies the day to run the Clean Up if a __Weekly__ __Frequency__ is selected.
   - __Time__ specifies the time to run the Clean Up. Format is _hh_:_mm_ _AM_/_PM_
   - __Months to Retain__ specifies the number of months before a Change Log becomes a Clean Up candidate.
3. Enable the schedule using the toggler.
