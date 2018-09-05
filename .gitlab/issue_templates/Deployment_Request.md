# deployment request :: green-screen

#### release
 - tag: TAG_URL
 - ci pipeline: CI_PASSING_URL

#### host_requirements
 - https://gitlab.wei.wisc.edu/infoserv/green-screen/wikis/host-requirements

## deploy process

- [ ] update release info in tag - @MENTIONYOURSELF
- [ ] snapshot vm - _sysops_
   - [ ] skipped / unneeded
   - [ ] completed
- [ ] os updates - _sysops_
   - _potential for reboot -- note if this is a problem or requires special steps_
   - [ ] skipped / unneeded
   - [ ] completed
- [ ] non-app dependency updates (e.g. phantomjs)
   - [ ] skipped / unneeded
   - [ ] completed
   - LIST REQUESTS HERE:
- [ ] webapp updates - _sysops_
   - ops will update production code to match codebase at tag's commit
   - app updates will be deployed as requested below
- [ ] deploy issue qa review by release owner - @MENTIONYOURSELF
   - release owner should do a qa review of the live deployment, note its completion, and close issue

#### deploy steps

```bash
## WEBAPP DEPLOYMENT STEPS:
# add images to ./images/ from \\file.glbrc.org\shared\6.2.1 Norman\Private\green-screen-images using directions in wiki
# install dependencies into local node_modules folder
npm install
# execute _now_ the nightly crontab
#  e.g. --> $((. $HOME/.bashrc && cd /srv/www/green-screen && /usr/bin/node saveData.js) 2>&1 | /usr/bin/logger -t nodejs)
#  (this is required to: update bldg dir & reindex pictures)
#  (needs to be run initially, and upon every code deploy)
```

## notes

(add any other special notes or comments here)
