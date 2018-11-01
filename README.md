## green-screen

An HTML, CSS, and NodeJS app to display directory information and news on the WEI/GLBRC first floor green screens.


# green-screen host requirements

production server (and gitlab ci!) requirements to run the green-screen nodejs webapp

## prereqs

**nodejs:** `10.4.0`

**image files:** `\\file.glbrc.org\shared\6.2.1 Norman\Private\green-screen-images`

### nodejs app server

```bash
#curl
run node saveData.js (run this in background indefinitely)
# install
npm install http-server
# run non-globally (*preferred)
node node_modules/http-server/bin/http-server -c-1
# or, run globally
http-server -c-1

navigate to ./public/index.html
```
- https://www.npmjs.com/package/http-server
- execute this command from within the webapp directory
- the http-server module needs to be running on the host server to serve our nodejs app

### environment variables
# ${CURL_USER}    
-stores sharepoint access username.   
# ${CURL_PASS}   
-stores sharepoint access password.   
# ${CURL_URL}   
-stores sharepoint list url to be pulled.  
  

