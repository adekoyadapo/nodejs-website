## The node.js static website - Using Skaffold for deployment in k8s


The node.js based of website resume in https://github.com/adekoyadapo/personal-web-dev.git

## Requirements
* skaffold
* Docker
* k8s cluster with loadbalancer ingress setup

## Common setup

Clone the repo and install the dependencies.

```bash
git clone --branch skaffold-dev https://github.com/adekoyadapo/nodejs-website.git
cd nodejs-website
```

Using skaffold to create and setup a dev environment
```bash
skaffold init
skaffold dev
```

## Future Considerations
* Implement CI/CD with gitlab/github for minor/major content changes 

## References
* https://github.com/GoogleContainerTools/skaffold
* https://igboie.medium.com/kubernetes-continuous-deployment-with-skaffold-e97507ab450b