import Swal from "sweetalert2";

export function handleTermsClick() {
    Swal.fire({
      title: 'Terms of Service',
      text: 'You are free to use this service to search the dic; you can click the links in the footer as well 😸  All other uses are prohibited?',
      icon: 'info',
      confirmButtonText: 'Cool'
    })
  }

  export function handlePrivacyClick (){
    Swal.fire({
      title: 'Privacy Policy',
      text: 'This site does not collect your data - It does not record searches, track you, set cookies or anything like that 😸',
      icon: 'question',
      confirmButtonText: 'Cool'
    })
  }

  export const data = ({
    year: new Date().getFullYear(),
    link: "https://turnerkendall.com",
    site: "Turner Kendall",
    copy: "Some Rights Reserved.",
  });

  export const siteData = 
  {
    title: 'The Dic Site',
    subtitle: 'by Turner Kendall',
    description: 'This is a simple little project I whipped up.  It is a dictionary essentailly...',
    image: '/images/theDic.webp',
    imageAlt: 'The Dic Site by Turner',
  }