---
title: Roadmap
weight: 10
chapter: false
disableToc: true
---

### Beta
* Features
  * `ipxe` - builds an iPXE compatible image.
  * `uefi` - includes UEFI bootloader into the image (systemd-boot).
  * `grub2` - image comes with an MBR and grub2.
  * `mutable` - default disk mount is read-only, this feature flag enables read/write to the root partition.
  * `cloudinit` - installs the cloud-init package.
  * `docker` - installs the docker daemon and CLI.
  * `containerd` - installs containerd daemon and CLI.
  * `frr` - installs the frr package and vtysh.
* Flavors
  * onmetal - comes with PXEBOOT or UEFI boot loader
  * KVM - comes with PXEBOOT or UEFI boot loader
  * AWS - comes with grub2 and outputs an AWS image
  * GCP - comes with grub2 and outputs a GCP image
  * Azure - comes with grub2 and outputs an Azure image
  * VMware - comes with grub2 and outputs an ova template
  * OpenStack - comes with grub2 and outputs a qcow2 image
  * Alibaba Cloud
* CI / CD
  * Automatic building of all configurations with GitHub actions
  * Deployment on https://repo.gardenlinux.io
  * Push images to Hyperscalers

### Release 1
* Automated Testing
  * Define Test-Cases
  * Implement first Test-Cases

### Release 2
* Flavors
  * Yandex Cloud
* Automated Testing
  * Implement more Test-Cases
