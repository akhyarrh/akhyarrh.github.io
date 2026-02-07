---
permalink: /privacy-policy/
title: Privacy Policy
image: /assets/uploads/privacy-policy-5243225_1280.jpg
---

I do not collect any personal data or personally identifiable information.

I use services on this site that may collect user data to varying degrees.

## Liwan analytics

This site uses Liwan ([liwan.dev](https://liwan.dev)), a privacy-first, self‑hosted analytics tool, to collect and publish aggregated visit data publicly viewable at [https://lwn.akhyar.id]. This statement explains what data is collected, how it’s processed, what is publicly available, and your rights.

You may opt out by using browser privacy tools (e.g., blocking the tracking script or using tracker-blocking extensions) or using button below.

<details>
<summary>Read more about Liwan</summary>

### Data collected

Copy-pasted directly from [liwan doc](https://liwan.dev/reference/data/).

- **URLs**: The URL of the page that was visited (excluding query parameters and fragments).
- **Referrers**: The URL of the page that referred the visitor to the current page. Only the domain is stored.
- **Browser**: The browser used by the visitor (e.g., Chrome, Firefox). The version is not stored.
- **Operating System**: The operating system used by the visitor (e.g., Windows, macOS). The version is not stored.
- **Device Type**: The type of device used by the visitor (e.g., desktop, mobile).
- **Visitor ID**: An anonymized ID that is unique to each visitor. This is used to track unique visitors across multiple visits.

While Liwan able to track visitor Country and City, I dont enable it, because it needed third party service.

### Data NOT collected

- **IP Addresses**: Liwan does not store IP addresses. Instead, it uses a hash of the IP address to generate the visitor ID. This ensures that visitors remain anonymous.
- **Usernames**: Liwan does not collect usernames or any other personally identifiable information.
- **Cookies**: Liwan does not use cookies to track visitors.
- **Cross-Site Tracking**: Visitors have a unique visitor ID that is specific to this website. This means that visitors are not tracked across different websites.
- **Persistent Identifiers**: Visitors are not tracked across multiple days. Each day is treated as a separate session.

#### How Liwan Identify Visitors

Liwan uses a combination of the visitor’s IP address and user agent to generate a unique visitor ID. This ID is pseudonymized using a one-way hash function and a unique salt. The salt is rotated daily to ensuring that the IP and user agent combination cannot feasibly be reversed, making users anonymous. The IP is discarded right after generating the visitor ID and never stored on disk.

```
# Pseudocode for generating the visitor ID
sha3_256(ip, user_agent, daily_salt, entity_id)[0:16]
```

### Purpose and use
- **Purpose:**: to measure site usage, improve content and performance, and provide transparent, publicly visible statistics.
- **Processing**: Liwan processes and stores visit records on my server; data is aggregated for dashboards and public pages.

### Publicly available data
- **What’s published**: aggregated metrics and summaries are publicly viewable at https://lwn.akhyar.id.
- **No personal data published**: datasets and public dashboards do not include any personal, identifiable information.

### Data retention
- **Retention period**: aggregated statistics are retained indefinitely for public display.
- **Updates**: retention and anonymization practices may be updated; changes will be posted on this page.

### Third parties
- **No external analytics providers**: analytics are self-hosted; data is not shared with third-party analytics services.
- **Server providers**: if any maintenance or backup service accesses stored analytics data, they are required to follow the same privacy constraints and not to extract personal data.

### Security
- Access to the analytics backend is restricted to authorized site administrators. Standard server security and backups are used; data-in-transit uses HTTPS.

### Your rights and choices
- No cookies or persistent IDs are used, clearing cookies is not needed to stop tracking.
- To request deletion of any residual, non-anonymized data related to a specific visit (if any), contact the site administrator at the [contact page](/contact/) on this site.

### Contact
For questions or data requests about the analytics on [https://lwn.akhyar.id], contact the site administrator via the [contact page](/contact/) provided on this website.

Last updated: 7 February 2026.

</details>

<style>
  #disable-liwan-btn {
    background-color: var(--minima-link-base-color);
    color: var(--minima-background-color); 
    
    border: none;
    padding: 10px 20px;
    border-radius: 4px;
    cursor: pointer;
    font-size: 1rem;
    font-weight: 500;
    transition: opacity 0.2s;
  }

  #disable-liwan-btn:hover {
    opacity: 0.85;
  }

  #disable-liwan-btn:disabled {
    background-color: var(--minima-border-color-01);
    color: var(--minima-brand-color-dimmed);
    cursor: not-allowed;
  }
</style>
<div>
<button id="disable-liwan-btn">Disable Liwan</button>

<script>
const btn = document.getElementById('disable-liwan-btn');

function updateButtonState() {
  try {
    const disabled = localStorage.getItem('disable-liwan') === 'true';
    btn.textContent = disabled ? 'Disabled' : 'Disable Liwan';
    btn.disabled = disabled;
  } catch (e) {
    console.error('Failed to read localStorage:', e);
  }
}

updateButtonState();

btn.addEventListener('click', function() {
  try {
    localStorage.setItem('disable-liwan', 'true');
    updateButtonState();
  } catch (e) {
    console.error('Failed to set localStorage:', e);
    alert('Could not save setting.');
  }
});
</script>
</div>

## Formspree

If you send a message via the [contact page](/contact/), the name and email address you provide will be processed by Formspree to forward your message to my email.

[Read Formspree's privacy policy here](https://formspree.io/legal/privacy-policy).

## Cloudflare

This blog is hosted on [Cloudflare Pages](https://pages.dev). Although Cloudflare only hosts this site, they may collect visitor data (such as server logs) on the server side.

[Read Cloudflare's privacy policy here](https://cloudflare.com/privacypolicy/).
