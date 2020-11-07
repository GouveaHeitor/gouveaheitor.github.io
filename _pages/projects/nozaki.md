---
layout: page
title: Nozaki -  HTTP fuzzer engine security oriented 
description: 'The idea is that this solution is complete enough to cover the entire fuzzing process in a web application (be it a monolith, a REST API, or even a GraphQL API) being fully parameterized, piped with other tools and with amazing filters.'
permalink: /projects/nozaki
---

<p align="center">
  <img src="https://heitorgouvea.me/images/projects/nozaki/logo.png" width="150px" heigth="150px">
  <h3 align="center"><b>Nozaki</b></h3>
  <p align="center">HTTP engine fuzzer security oriented</p>
  <p align="center">
    <a href="/LICENSE.md">
      <img src="https://img.shields.io/badge/license-MIT-blue.svg">
    </a>
    <a href="https://github.com/x86scale/nozaki/releases">
      <img src="https://img.shields.io/badge/version-0.0.9-blue.svg">
    </a>
  </p>
</p>

---

### Summary 

⚠️ __Warning:__ Nozaki is currently in __development__, you've been warned :) and please consider [contributing!](./github/CONTRIBUTING.md)

"Fuzzing is one of the most powerful and proven strategies for identifying security issues in real-world software" and for this reason, Nozaki tries to bridge the gap for a complete solution focused on web applications.

The idea is that this solution is complete enough to cover the entire fuzzing process in a web application (be it a monolith, a REST API, or even a GraphQL API) being fully parameterized, piped with other tools and with amazing filters.

---

### Download & Install

```bash 
  $ git clone https://github.com/x86scale/nozaki && cd nozaki
  $ cpan install Getopt::Long LWP::UserAgent HTTP::Request
```

---

### How to use

```
$ perl nozaki.pl

Nozaki v0.0.9
Core Commands
==============
	Command       Description
	-------       -----------
	--method      Define methods HTTP to use during fuzzing, separeted by ","
	--url         Define a target
	--wordlist    Define wordlist of paths
	--delay       Define a seconds of delay between requests
	--agent       Define a custom User Agent
	--return      Set a filter based on HTTP Code Response
	--timeout     Define the timeout, default is 10s
	--payload     Send a custom data

# Example
$ perl nozaki.pl -m GET -u http://lab.nozaki.io:8002/\?read\= -w wordlists/payloads/ssrf.txt | grep "574"

[200] | http://lab.nozaki.io:8002/?read=http://2852039166/           [GET] - OK | Length: 574
[200] | http://lab.nozaki.io:8002/?read=http://0xA9FEA9FE/           [GET] - OK | Length: 574
[200] | http://lab.nozaki.io:8002/?read=http://0251.0376.0251.0376/  [GET] - OK | Length: 574
...
```

---

### Contribution

- Your contributions and suggestions are heartily ♥ welcome. [See here the contribution guidelines.](https://github.com/x86scale/perl-style-guide/blob/master/.github/CONTRIBUTING.md) Please, report bugs via [issues page.](https://github.com/x86scale/perl-style-guide/issues)  and for security issues see here the [security policy.](https://github.com/x86scale/perl-style-guide/blob/master/SECURITY.md) (✿ ◕‿◕) 

- If you want to contribute financially to this project, an alternative is to become my ["Patreon"](https://patreon.com/x86scale) or make a donation via [Paypal.](https://www.paypal.com/donate?hosted_button_id=4283L7ZNWN3M6)

---

#### License

- This work is licensed under [MIT License.](https://github.com/x86scale/perl-style-guide/blob/master/LICENSE.md)