# frontend

## webpack migrate to vite sample with rails view

this directory has two applications saas and admin

saas directory is application for users and aim to earn money.

admin directory is organization for users and aim to be system application.

finally aim to use pnpm, turbo-repo, vite

## application stack

| description | first | secondly | finally | 
|:---|:---|:---|:---|
| package manager | npm | npm | pnpm |
|  ||||
| language | typescript | typescript | typescript |
| server | rails v8.0 | -- | -- |
| bundler | webpack | vite | vite |
| ui | react@v18 | react@v19 | react@v19 |
| state manager | redux(with react-redux) | redux(with react-redux) | redux(with react-redux) |

run time on docker

`bundler`

hash_support and each application has {application_name}-{hash}.js.
hot module realod on rails server.


## application structure

```./frontend

```