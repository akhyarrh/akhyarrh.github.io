---
title: "`localhost` friendly Firefox"
date: 2020-10-14
tags: [browser, firefox, tips]
---

Ever wonder how to tell Firefox to not cache some address ? i.e. your `localhost:$DEV_PORT` or some https://your-development-server ?
Just tell it to ignore that address.

!["If you're reading this, this image is showing Firefox preference screen to disable caching for any port on localhost address"](/assets/post-img/tell-firefox-to-not-allow-localhost-store-data.webp)

This solution is so f-in simple. \
Please note in that image I disable caching for `localhost` but not for `localhost:4040`. So we can use that port to check something
that need browser localstorage or cookie to function properly i.e. `service-worker`. \
Also Firefox treat `localhost` and `localhost:4000` as different address. That mean explicit address only.
Apache or nginx by default able to listen request on `localhost`. Your setup maybe different. \
For Jekyll by default you can add `localhost:4000`.

