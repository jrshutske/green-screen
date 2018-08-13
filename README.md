a nodejs app to display helpful information in the WEI/GLBRC first floor green screens

Setup
- Clone Repo
- add images to `./public/images/topright`
- add images to `./public/images/bottomleft`
- add video to `./public/images/topleft`
- add video to `./public/images/bottomright`
- run `npm install`
- connect to `smb://file.glbrc.org/shared`
- run `node saveData` (run this in background indefinetly)
- run `http-server -c-1`
- navigate to `./public/index.html`
