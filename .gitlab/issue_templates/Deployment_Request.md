# deployment request

#### webapp
 - green-screen

#### release
 - tag: TAG_URL
 - ci pipeline: CI_PASSING_URL

#### host_requirements
 - https://gitlab.wei.wisc.edu/compbio/green-screen/wikis/host-requirements

## deploy process

- [ ] update changelog.md - @MENTIONYOURSELF
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
# add images to ./images/topright
# add images to ./images/bottomleft
# add video to ./images/topleft
# add video to ./images/bottomright
npm install
http-server -c-1
```

## notes

(add any other special notes or comments here)