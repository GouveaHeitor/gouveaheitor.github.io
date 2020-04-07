---
layout: page
title: Fukon
description: 'A simple and complete HTTP fuzzer engine security oriented'
permalink: /projects/fukon
---

<p align="center">
  <h3 align="center"><b>Fukon</b></h3>
  <p align="center">A simple and complete HTTP fuzzer engine security oriented</p>
  <p align="center">
    <a href="https://github.com/GouveaHeitor/fukon/blob/master/LICENSE.md">
      <img src="https://img.shields.io/badge/license-MIT-blue.svg">
    </a>
    <a href="https://github.com/GouveaHeitor/fukon/releases">
      <img src="https://img.shields.io/badge/version-0.1.2-blue.svg">
    </a>
  </p>
</p>

---

### Download & Install

```bash 
    $ git clone https://github.com/GouveaHeitor/fukon
    $ cd fukon
    $ cpan install Getopt::Long LWP::UserAgent HTTP::Request
```
### How to use

```bash
    $ perl fukon.pl --help

    Fukon v0.0.1
    Core Commands
    ==============
        Command       Description
        -------       -----------
        --url         Define the target
        --wordlist    Define the wordlist
        --return      Define a filter based in HTTP Codes
        --help        See this screen

      Copyright Fukon (c) 2020 | Heitor Gouvêa

    # Example
    $ perl fukon.pl -u https://example.com/api/v1/ -w wordlists/personal.txt --return 200

    [-] -> [200] | https://example.com/api/v1/ 	 [GET] - OK
    [-] -> [200] | https://example.com/api/v1/ 	 [POST] - OK
    [-] -> [200] | https://example.com/api/v1/ 	 [PUT] - OK
    [-] -> [200] | https://example.com/api/v1/ 	 [HEAD] - OK
    ...
```

### To do

  - Customize a header
  - Customize verbs http
  - Fuzzing parameters
  - Fuzzing content-type
  - Implement multithread
  - Improve return/exclude filters
  - Create a option for output in json format supported by postman
  - Create a Dockerfile
  - Fuzzing recursive

### Contribution

- Your contributions and suggestions are heartily ♥ welcome. [See here the contribution guidelines.](/.github/CONTRIBUTING.md) Please, report bugs via [issues page.](https://github.com/GouveaHeitor/fukon/issues) See here the [security policy.](./github/SECURITY.md) (✿ ◕‿◕) 

### License

- This work is licensed under [MIT License.](https://github.com/GouveaHeitor/fukon/blob/master/LICENSE.md)
