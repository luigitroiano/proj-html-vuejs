let app = new Vue({
  el: "#root",
  data: {
    opening: "Mon - Sat - 9:00-18:00",
    phoneNumb: "+1 (305) 1234-5678",
    email: "hello@example.com",
    address: "Main Avenue, 987",
    menuJumbotron: [
      {
        name: "HOME",
        url: "#",
      },
      {
        name: "ABOUT",
        url: "#",
      },
      {
        name: "SERVICES",
        url: "#",
      },
      {
        name: "PROCESS",
        url: "#",
      },
      {
        name: "TESTIMONIALS",
        url: "#",
      },
    ],
    footerLink: [
      {
        label: "About",
        downMenu: [{
          name: "The Company",
          url: "#",
        },
        {
          name: "Institutional",
          url: "#",
        },
        {
          name: "Social & Events",
          url: "#",
        },
        {
          name: "Innovation",
          url: "#",
        },
        {
          name: "Environment",
          url: "#",
        },
        {
          name: "Technology",
          url: "#"
        }],
      },
      {
        label: "Transport",
        downMenu: [{
          name: "Industrialized",
          url: "#",
        },
        {
          name: "Chemicals",
          url: "#",
        },
        {
          name: "Packaged & Liquids",
          url: "#",
        },
        {
          name: "Construction",
          url: "#",
        },
        {
          name: "Laminated Wood",
          url: "#",
        },
        {
          name: "And others",
          url: "#",
        }],
      },
      {
        label: "Support",
        downMenu: [{
          name: "Responsibility",
          url: "#",
        },
        {
          name: "Terms of Use",
          url: "#",
        },
        {
          name: "About Cookies",
          url: "#",
        },
        {
          name: "Privacy Policy",
          url: "#",
        },
        {
          name: "Accessibility",
          url: "#",
        },
        {
          name: "Information",
          url: "#",
        }],
      },
    ],
  },
  methods: {

  },
});
