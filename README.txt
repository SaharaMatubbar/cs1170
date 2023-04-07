/*
*

Name: Sahara Matubbar
ID: sh320914

*
*/


*** This README file is for Assignment-3 ***

** The HTML, CSS code from Assignment-1,2 was used and JS was applied to enhanced the user experience. **


Personal Business (Ronger Shopnoghor)


Code Link: https://github.com/SaharaMatubbar/cs1170 [will upload at the end of the coding]
Live View: https://cs1170.vercel.app
Live View: https://saharamatubbar.github.io/Saharamatubbar/


File Structure:

- index.html: This is the base file for the website. It contains the main structure and content of the homepage.
- PAGE folder: This folder contains additional pages for the website.
- JS folder: This folder contains all the JS file for the website.
- assets folder: This folder contains all the media files used in the website, including images, videos, and audio files.

.
├── html
│   ├── index.html
│   ├── style.css
│   ├── JS
│   │	  ├── main.js
│   │	  ├── color.js
│   │	  ├── formsubmit.js
│   │	  └── notification.js
│   └── pages
│       ├── sareedetails.html
│       ├── dressdetails.html
│       ├── necklacedetails.html
│       ├── keyringdetails.html
│       ├── pearlnecklacedetails.html
│       ├── braceletdetails.html
│       ├── product.html
│       ├── appointment.html
│       └── contact&collab.html
│
└── assets
    ├── Music&Video
    └── image


Getting Started:

1. Clone or download the repository to your local machine.
2. Open the index.html file in a web browser to view the homepage.
3. To view the other pages, navigate to the PAGE folder and open the desired page in a web browser.
4. To access the media files, navigate to the assets folder.

Technologies Used:

- This project uses HTML, CSS and JavaScript.



JavaScript Overview:

1. color.js: 

- The code defines three variables lightMode, blackMode, and contrastMode.
- which correspond to the HTML elements with the classes "light-mode", "dark-mode", and "high-contrast-mode", respectively.
- When the user clicks on one of these elements, an event listener is triggered which calls the setBackgroundColor function with the corresponding color theme as an argument.

2. formsubmit.js: 
- This file contains the JavaScript code for saving the form data and notifications to local storage. 
- It also includes a function for saving messages that are sent through the website's contact form
- After clicking the submit button it scroll back to the top of the page with smooth effect.

3.notification.js:
- This file contains the JavaScript code for handling notifications.
- It includes a function for saving notifications to local storage and an event listener for the like button that adds a new notification when the button is clicked.
- When the likeButton is clicked, the following happens:

 *The notifyCount element display style is set to block.
 *The isNotify value in localStorage is incremented by 1 (if it exists), and set to 1 if it does not exist.
 *The notifyCount value is updated to reflect the new count of notifications.
 *The notificationLastID value in localStorage is incremented by 1 (if it exists), and set to 1 if it does not exist.
 *A new notification object is created with a randomly selected emoji and the message "You like a new product!!", along with a unique ID and a read status of false.
 *The new notification object is added to the existing notifications in the notifications array in localStorage.
 *The notificationSave() function is responsible for saving the notifications array to localStorage.

4.main.js:
- This file contains the JavaScript code for the main functionality of the website. 
- It includes event listeners for opening and closing the notification modal and for updating the notification count.
- Splash screen close and initial loading.
- "saveMessage": Saves a message to local storage and updates the notification count.
- "notificationSave": Saves an array of notifications to local storage.
- "showNotifyCount": Displays the current notification count on the page.
- "openModalButton": Displays the modal panel with unread notifications.
- "closeModalButton": Closes the modal panel.



****** BELOW PART TAKEN FROM ASSIGNMENT-2 ******


Project Overview:

- This project (folder) contains the HTML and CSS code for a website called Ronger Shopnoghor. The website is an e-commerce platform for fashion and lifestyle products.

- The HTML code is organized using the C.A.R.P design principle, which stands for Contrast, Alignment, Repetition, and Proximity. The principle is used to create a visually appealing and user-friendly website. The home page, products page, appointment page, contact & collaboration page, and dress details page all follow the C.A.R.P design principle.

- The CSS code is used to style the HTML elements and create a cohesive look for the website. The CSS code is organized into separate files for each page to make it easier to maintain and modify.

My CSS Introduction:

- This CSS file is designed to style a webpage with a feminine touch, using a color scheme that includes shades of pink and purple. The file includes styles for the main page, product details, and appointments.

More Details about CSS functionality used:

- Universal Selector: The universal selector applies a transparent background to all elements.

- Background Color: The background color for the body is set to a light shade of pink.

- Centered Item: The .centered-item class centers an item both horizontally and vertically.

- Rounded Div: The #rounded-div ID sets a border radius, background color, and padding for a rounded container.

- Links: The links have been styled to include a drop shadow and a border radius.

- Navigation Links: The navigation links have been styled with a gradient background and an underline effect on hover.

- Images: Images are centered and have a maximum width of 100%. A background color has been added for better contrast. The .imageandproduct class displays two elements side-by-side, and the .imagepart and .productpart classes are used for adjacent sibling selectors.

- Product Details: The .products-section, .product-list, and .product-details classes are used to style the product details section of the webpage. The .details-list and .price-list classes are used to style the product details and pricing information respectively.

- Appointment Images: The .image-container class is used to display images side by side in the appointments section of the webpage.

- Table: The .table-container class is used to display tables with a horizontal scrollbar.

Additional CSS-

1.One form is add to the contact page (pages/contact&collab.html). Necessary CSS is also added for better visual representation.

2.1 page is designed with flexbox - (pages/appointment.html)

3.1 grid design is added - (pages/products.html)

4.Different Selector and their location in the “style.css” file given below:
  a.Universal Selector:  This is used in Line 5 in style.css file.
  b.Multiple Selector: This is used in Line 288 in style.css file.
  c.Child Selector: This is used in Line 382 in style.css file.
  d.General Sibling Selector: This is used in Line 513 in style.css file.
  e.Adjacent Sibling Selector: This is used in Line 161 in style.css file.
  f.Attribute Selector: This is used in Line 149 in style.css file.
  g.Pseudo-element Selector: This is used in Line 105,128,144, in style.css file.

5.Details about @Keyframe:

- 0%: The element's initial position is set to translateX(0) which means it is not moved.
- 20%: The element's position remains the same as 0%.
- 25%: The element starts to move left by 500 pixels (-500px).
- 45%: The element remains in its left position (-500px).
- 50%: The element moves further left by 1000 pixels (-1000px).
- 70%: The element remains in its left position (-1000px).
- 75%: The element moves further left by 1500 pixels (-1500px).
- 95%: The element remains in its left position (-1500px).
- 100%: The element returns to its initial position (translateX(0)).



****** BELOW PART TAKEN FROM ASSIGNMENT-1 ******

Code Details:

- The code contains the following elements:

    A. Index.html: 
        - A head element that includes the title of the website and a link to the logo image to be used as the website's icon.
        - A body element that contains the main content of the website. The content includes:
        - A main heading and a small heading that welcome the user to the website.
        - Social media links to the website's Facebook and Instagram accounts.
        - A navigation bar with links to the various pages of the website.
        - A main image displayed in the center of the page. “<center>” tag was used for this purpose. 

    B. pages/product.html:
        - The website displays a collection of products including dresses, wooden jewellery, stone jewellery, and a stone bracelet making video. The website also has an audio clip that can be played while shopping. The audio[3] and videos[4] used on this page are taken from the internet but I hosted everything in the local directory. 

    C. pages/appointment.html:

        - The p tag is used to display five images of Mehendi designs.

        - Two tables are created using the table tag, with the border attribute used to add a border to the table. The first table displays the name, email, and phone number for booking an appointment, and the second table displays the availability for appointments on Saturdays and Sundays.

        - The iframe tag is used to embed a YouTube video[1] that provides a tutorial for beginners.


    D. pages/contact&collab.html:

        - A paragraph explaining the purpose and history of the business.
        - A section for contact information, including an email link, and instructions on what to include in the email.
        - An embedded YouTube video[2] about the importance of collaboration.

    F. pages/sareedetails.html:
        - Product details section with an ordered list "ol" displaying the color and fabric of the product and a price section with an unordered list "ul" showing the price in two different currencies.

    G. pages/dressdetails.html:
        - I have created a new page with content that is similar to a previous page(pages/sareedetails.html). This is just a new page with a new product but all the structure is the same as the previous page. Only product(item) names and price are different. 

    H. pages/necklacedetails.html:
        - I have created a new page with content that is similar to a previous page(pages/sareedetails.html). This is just a new page with a new product but all the structure is the same as the previous page. Only product(item) names and price are different. 
    I. pages/keyringdetails.html:
        - I have created a new page with content that is similar to a previous page(pages/sareedetails.html). This is just a new page with a new product but all the structure is the same as the previous page. Only product(item) names and price are different. 
    J. pages/pearlnecklacedetails.html:
        - I have created a new page with content that is similar to a previous page(pages/sareedetails.html). This is just a new page with a new product but all the structure is the same as the previous page. Only product(item) names and price are different. 
    K. pages/braceletdetails.html:
        - I have created a new page with content that is similar to a previous page(pages/sareedetails.html). This is just a new page with a new product but all the structure is the same as the previous page. Only product(item) names and price are different. 


References:

1. [YouTube. 2023] YouTube. "Mistakes Beginner Henna Artists do | Do's and Dont's In Henna, Mehndi Designs / Thouseens Henna." https://www.youtube.com/embed/v6KgYiyXLcA.
2. [YouTube. 2023] YouTube. "The importance of collaboration for small businesses." https://www.youtube.com/embed/6CtEIycTeMM.
3. [TikTok. 2023] TikTok. "Reply to @addysalton THANK YOU FOR OVER 34K!!" https://vt.tiktok.com/ZS8P6udRb
4. [Standvibes. 2023] Standvibes. "Fujii Kaze – Matsuri" https://standvibes.com/mp3-fujii-kaze-matsuri/ 



Contact:

- If you have any questions or concerns, please feel free to reach out to me at sh320914@dal.ca
