create a .env file inside the view folder with this inside the env <br> 
API_ID=641facf1 <br> 
API_KEY=3bd1c423730ce9650260fd3d5cdabe98 <br> 
ENDPOINT=https://api.edamam.com/search? <br> 
MAX_SEARCH_RESULTS=15 <br> 
EMAILJS_SERVICE_ID=service_rxm5mz3 <br> 
EMAILJS_TEMPLATE_ID=template_3rjrfo8 <br> 
EMAILJS_PUBLIC_KEY=RasD-SwAXlaTNJfxy<br> 
VALIDATE_ATTEMPT_MAX=3 <br> 

//////////////////////////////////////////////////////////////////////////////////
In order to start the app Install Expo Go on a mobile device

Have two different terminals open to launch the back end server and the actually expo app. to start either one type "npm start"

cd .\view\
npm start

cd .\backend
npm start

if you have an iphone scan QR code with camera to open in Expo Go

once launched in expo check expo ip and change the ip in the URL in Apollo.js to match expo IP in order to connect with backend
///////////////////////////////////////////////////////////////////////////////////////////////////////////////////

if the app does not work then you may need to change your URL in the apollo.js file 

in the terimnal Expo will launch its own IP and that IP may need to match in order to connect the front end with back end 
So change the the IP numbers from the // and : to match your Expo IP, this URL in apollo must end with ':4000' to connect to the apollo graphql server to match and grab mutations or quries. 

