# Home Dashboard

The File System Activity Home dashboard contains the following cards:

![Home Dashboard for Stealthbits Activivty Monitor App for QRadar](/img/versioned_docs/activitymonitor_7.1/activitymonitor/siem/qradar/dashboard/homedashboard.png)

- Active Users – Number of distinct users recorded performing any type of file activity to/from any
  host over the specified time interval
- Active Servers – Number of distinct servers accessed (destination IP Addresses) with any type of
  file activity recorded over the specified time interval
- Open Offenses – Number of ransomware offenses detected within QRadar from the file activity event
  data

    - The value for this card is a hyperlink to the
      [Ransomware Dashboard](/versioned_docs/activitymonitor_7.1/activitymonitor/siem/qradar/dashboard/ransomware.md).

- File Activity – Timeline of all file activity over the specified time interval
- Top Users – Displays up-to the top five users associated with file activity over the specified
  time interval
- Top Servers – Displays up-to the top five servers (destination IP Addresses) associated with file
  activity over the specified time interval
- Latest Events – Tabular format of all file activity events which occurred over the specified time
  interval

    - See the
      [Table Card Features ](/versioned_docs/activitymonitor_7.1/activitymonitor/siem/qradar/app.md#table-card-features)
      topic for additional information.

The time interval is identified in the upper-right corner with the Start and End boxes. This is set
by default to the “past day,” or 24 hours. To search within a different interval, either manually
type the desired date and time or use the calendar buttons to set the desired date and time
interval. Then click Search to refresh the card data.
