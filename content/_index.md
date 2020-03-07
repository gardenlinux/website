---
title: "Garden Linux"
---


Garden Linux
==============

What is Garden Linux?
---------------------
Garden Linux is a [Debian](https://www.debian.org/) Linux derivative specifically designed for [Gardener](https://gardener.cloud/) managed Kubernetes clusters. Garden Linux versions share their names with the upstream Debian versions. The most current Garden Linux version is *bullseye* (Debian 11 - Testing). Garden Linux leverages Debian's [security tracker](https://security-tracker.debian.org/tracker/) and its large community of package maintainers.

Unlike Debian, Garden Linux is not a general purpose Linux! We have carefully selected every single package to include only those that are needed on a Gardener Kubernetes node. We follow the immutable infrastructure paradigm. Therefore parts of the filesystem are read only, resulting in immutable, more secure Linux servers. If you need more packages than those that are included in the Garden Linux images you cannot install them during runtime. All software that should run on the server has to be deployed via Kubernetes.


Flavors
-------
Garden Linux comes in different flavors, optimized for deployment in different environments.
* [Bare Metal](flavors/baremetal/)
* [KVM](flavors/kvm/)
* [AWS](flavors/aws/)
* [Microsoft Azure](flavors/azure/)
* [Google Cloud](flavors/gcp/)
* [Alibaba Cloud](flavors/alibaba/)
* [OpenStack](flavors/openstack/)
* [VMware](flavors/vmware/)


Openness
--------
Garden Linux build scripts and manifests are shared with the public via [GitHub](https://github.com/MalteJ/gardenlinux-manifest). You need a Debian machine to build the Garden Linux Debian distribution. Garden Linux images in different [Flavors](flavors/) can be downloaded from this website.


### What customers say about Garden Linux

> "Garden Linux... with a name like that, who wouldn't use it?"
> 
> *Michael B.*
