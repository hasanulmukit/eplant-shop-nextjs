# NatureNest

NatureNest is a modern, responsive landing page for a plant shop, built using Next.js 13 with the App Router and styled with Tailwind CSS. This project is a migration from a traditional static HTML/CSS/JS website to a modular, component-based React application. It features a mobile-friendly design, dark mode toggle, interactive FAQ accordion, and more.

## Features

- **Responsive Design:** Tailwind CSS ensures the site looks great on all devices.
- **Dark Mode:** Users can toggle between light and dark themes.
- **Mobile Navigation:** A collapsible mobile menu improves navigation on smaller screens.
- **Interactive FAQ Section:** Clickable accordion items for a smooth user experience.
- **Modular Components:** Clean, reusable React components for maintainability and scalability.
- **Modern Tech Stack:** Built with Next.js 13, React, and Tailwind CSS.

## Technologies Used

- [Next.js 13](https://nextjs.org/) (App Router)
- [React](https://reactjs.org/)
- [Tailwind CSS](https://tailwindcss.com/)
- [PostCSS](https://postcss.org/) & [Autoprefixer](https://github.com/postcss/autoprefixer)
- [Remix Icon](https://remixicon.com/)

## Project Structure

```plaintext
naturenest-app/
├── app/
│   ├── components/
│   │   ├── Header.js
│   │   ├── HomeSection.js
│   │   ├── AboutSection.js
│   │   ├── StepsSection.js
│   │   ├── ProductsSection.js
│   │   ├── FAQsSection.js
│   │   ├── ContactSection.js
│   │   └── Footer.js
│   ├── layout.js
│   └── page.js
├── public/
│   └── images/ (all static assets: home.png, about.jpg, product images, payment icons, etc.)
├── tailwind.config.js
├── postcss.config.js
├── package.json
└── README.md
```

### Contributing

Contributions are welcome! If you have ideas for improvements or bug fixes, please fork the repository and submit a pull request.

### License

This project is licensed under the MIT License.
