---
layout: page
title: Nipe - An engine to make Tor Network your default gateway.
description: 'Nipe can route the traffic from your machine to the Internet through Tor network, so you can surf the Internet having a more formidable stance on privacy and anonymity in cyberspace'
permalink: /projects/nipe
og_image: https://heitorgouvea.me/images/projects/nipe/nipe-cover.png
---

<p align="center">
  <img src="/images/projects/nipe/logo.png">
  <p align="center">An engine to make Tor Network your default gateway</p>
  <p align="center">
    <a href="/LICENSE.md">
      <img src="https://img.shields.io/badge/license-MIT-blue.svg">
    </a>
    <a href="https://github.com/x86scale/nipe/releases">
      <img src="https://img.shields.io/badge/version-0.9.4-blue.svg">
    </a>
  </p>
</p>

---

### Summary

The Tor project allows users to surf the Internet, chat and send instant messages anonymously through its own mechanism. 
It is used by a wide variety of people, companies and organizations, both for lawful activities and for other illicit purposes. Tor has been largely used by intelligence agencies, hacking groups, criminal activities and even ordinary users who care about their privacy in the digital world.
  
Nipe is an engine, developed in Perl, that aims on making the Tor network your default network gateway. Nipe can route the traffic from your machine to the Internet through Tor network, so you can surf the Internet having a more formidable stance on privacy and anonymity in cyberspace.
  
Currently, only IPv4 is supported by Nipe, but we are working on a solution that adds IPv6 support. Also, 
only traffic other than DNS requests destined for local and/or loopback addresses is not trafficked through Tor. 
All non-local UDP/ICMP traffic is also blocked by the Tor project.

---

### Download and install

```
  # Download
  $ git clone https://github.com/x86scale/nipe && cd nipe
    
  # Install libs and dependencies
  $ sudo cpan install Try::Tiny Config::Simple JSON

  # Nipe must be run as root
  $ perl nipe.pl install
```

---

### Commands:
```
  COMMAND          FUNCTION
  install          Install dependencies
  start            Start routing
  stop             Stop routing
  restart          Restart the Nipe circuit
  status           See status

  Examples:

  perl nipe.pl install
  perl nipe.pl start
  perl nipe.pl stop
  perl nipe.pl restart
  perl nipe.pl status
```

---

### Demo

![Image](/images/projects/nipe/demo.gif)

---

### Contribution

- Your contributions and suggestions are heartily ♥ welcome. [See here the contribution guidelines.](https://github.com/x86scale/nipe/blob/master/.github/CONTRIBUTING.md) Please, report bugs via [issues page.](https://github.com/x86scale/nipe/issues) See here the [security policy.](https://github.com/x86scale/nipe/blob/master/SECURITY.md) (✿ ◕‿◕) This project follows the best practices defined by this [style guide](https://heitorgouvea.me/projects/perl-style-guide).

- If you want to contribute financially to this project, an alternative is to become my ["Patreon"](https://patreon.com/x86scale) or make a donation via [Paypal.](https://www.paypal.com/donate?hosted_button_id=4283L7ZNWN3M6)

---

### License

- This work is licensed under [MIT License.](https://github.com/x86scale/nipe/blob/master/LICENSE.md)