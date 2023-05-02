In order to start the app Install Expo Go on a mobile device

Have two different terminals open to launch the back end server and the actually expo app. to start either one type "npm start"

cd .\view\
npm start

cd .\backend
npm start

if you have an iphone scan QR code with camera to open in Expo Go

once launched in expo check expo ip and change the ip in the URL in Apollo.js to match expo IP in order to connect with backend

//////////////////////////////////////////////////////////////////////////////////

create a .env file inside the view folder with this inside the env
API_ID=641facf1
API_KEY=3bd1c423730ce9650260fd3d5cdabe98
ENDPOINT=https://api.edamam.com/search?
MAX_SEARCH_RESULTS=15
EMAILJS_SERVICE_ID=service_rxm5mz3
EMAILJS_TEMPLATE_ID=template_3rjrfo8
EMAILJS_PUBLIC_KEY=RasD-SwAXlaTNJfxy
VALIDATE_ATTEMPT_MAX=3
//////////////////////////////////////////////////////////////////////////////////

Our Recipe App uses Apollo and gql to connect the front end with our back end data base MongoDB