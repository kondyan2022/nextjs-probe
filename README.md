The project "Uncover Carpathian's Secrets" (UCF) is a site of a team of enthusiasts
who are fully committed to the mission of creating unforgettable and
extraordinary trips to the most beautiful parts of the Carpathians.
Their goal is not just to show you the natural wonders of the mountains,
but to provide you with a deep immersion in their magical atmosphere.

Project layout: https://www.figma.com/file/2nHaXyrwQxqXLYmPUGQuP1/Untitled?type=design&node-id=0%3A1&mode=design&GFpRhDWRmCy9U5n3-1

The project is implemented as a single-page site with adaptive
and cross-browser layout (mobile from 320px, tablet from 768px, desktop from 1280px).
Mobile layout with burger menu is responsive from 320px to 480px .

OGP information (picture and decription) for instant messengers
and social networks has been added to the website metadata.
Implemented favicon changes due to dark or light browser themes

Technology stack:
React
Next.js 13 (using app router)
Tailwind CSS

Additional library:
swiper
react-hook-form
react-scroll
body-scroll-lock
react-hot-toast
react-loader-spinner

Website Sections:

- Header
  Not fixed. Contains logo and navigation menu.
  Smooth scrolling effect by clicking the corresponding item
  React-scroll is used for smooth navigation to section.

- Hero
  There is a smooth scrolling effect by clicking "Join Now" button to "contacts" section
  CSS Animation is used for panoramic of the background view

- About (Who we are)
  The section contains information about the team of the enthusiasts.

- Services (we offer)
  The section contains a slider with information about different types of travel.
  The slider is made by using the Swiper library.
  Each slide includes:

  - main photo,
  - background image,
  - title and text with a brief description of the trip.
    The slider implements a custom counter and paginator through the list.
    The slides are switched with a "fade" effect.

- Career (Choose us)
  In this section all intrested persons could join the team of enthusiasts and leave information for feedback.
  Provide form validation using react-hook-form and Tailwind CSS to style validation errors.
  The Phone field has a custom input mask.
  A spinner-loader is displayed after submitting the form and the toast message appears after the result.
- Gallery (Our gallery)
  The section contains an endless Swiper slider with 'Coverflow' effect for photo gallery

- Contacts (Contact us)
  The section contains contact information and a feedback form.
  Provide form validation using react-hook-form and Tailwind CSS to style validation errors.
  A spinner-loader is displayed after submitting the form and the toast message appears after the result.
