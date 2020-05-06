---
layout: page
title: Nozaki
description: 'A HTTP fuzzer engine security oriented'
permalink: /projects/nozaki
---

<p align="center">
  <h3 align="center"><b>Nozaki</b></h3>
  <p align="center">A HTTP fuzzer engine security oriented</p>
  <p align="center">
    <a href="https://github.com/GouveaHeitor/nozaki/blob/master/LICENSE.md">
      <img src="https://img.shields.io/badge/license-MIT-blue.svg">
    </a>
    <a href="https://github.com/GouveaHeitor/nozaki/releases">
      <img src="https://img.shields.io/badge/version-0.1.2-blue.svg">
    </a>
  </p>
</p>

---

### Download & Install

```bash 
    $ git clone https://github.com/GouveaHeitor/nozaki && cd nozaki
    $ cpan install Getopt::Long LWP::UserAgent HTTP::Request
```

---

### How to use

```bash
    $ perl nozaki.pl --help

    nozaki v0.0.1
    Core Commands
    ==============
        Command       Description
        -------       -----------
        --url         Define the target
        --wordlist    Define the wordlist
        --return      Define a filter based in HTTP Codes
        --help        See this screen

      Copyright nozaki (c) 2020 | Heitor Gouvêa

    # Example
    $ perl nozaki.pl -u https://example.com/api/v1/ -w wordlists/personal.txt --return 200

    [-] -> [200] | https://example.com/api/v1/ 	 [GET] - OK
    [-] -> [200] | https://example.com/api/v1/ 	 [POST] - OK
    [-] -> [200] | https://example.com/api/v1/ 	 [PUT] - OK
    [-] -> [200] | https://example.com/api/v1/ 	 [HEAD] - OK
    ...
```

---

### Contribution

- Your contributions and suggestions are heartily ♥ welcome. [See here the contribution guidelines.](https://github.com/GouveaHeitor/nozaki/blob/master/.github/CONTRIBUTING.md) Please, report bugs via [issues page.](https://github.com/GouveaHeitor/nozaki/issues) See here the [security policy.](https://github.com/GouveaHeitor/nozaki/blob/master/SECURITY.md) (✿ ◕‿◕) This project follows the best practices defined by this [style guide](https://heitorgouvea.me/projects/perl-style-guide).

---

### License

- This work is licensed under [MIT License.](https://github.com/GouveaHeitor/nozaki/blob/master/LICENSE.md)
