# OmniHealth Landing Page Maintenance Guide

This guide will help you maintain and customize the OmniHealth mental health services landing page. Whether you're new to web development or need a quick reference, follow these detailed instructions.

## Table of Contents
- [Updating Text and Styling](#updating-text-and-styling)
- [Managing Links](#managing-links)
- [Adding Privacy and Terms Pages](#adding-privacy-and-terms-pages)
- [Troubleshooting](#troubleshooting)

## Updating Text and Styling

### Header Section
The header contains your logo and navigation menu:
```html
<header class="fixed w-full bg-white/95 backdrop-blur-sm shadow-sm z-50">
    <nav class="container mx-auto px-6 py-4">
        <div class="flex items-center justify-between">
            <a href="/" class="text-xl font-semibold">OmniHealth</a>
            <!-- Navigation items -->
        </div>
    </nav>
</header>
```

To update:
1. Change logo text: Replace "OmniHealth" with your brand name
2. Modify header styling:
   - `bg-white/95`: Controls background color and opacity
   - `shadow-sm`: Adds subtle shadow
   - `z-50`: Keeps header above other content

### Hero Section
Located at the top of the page:
```html
<section class="pt-32 pb-24 px-6">
    <div class="container mx-auto max-w-7xl">
        <h1 class="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 mb-6">
            Mental Health Services in Andheri East, Mumbai
        </h1>
        <p class="text-xl md:text-2xl text-gray-600 mb-12 max-w-3xl">
            Expert Therapy and Psychiatry Services for all stages of life
        </p>
    </div>
</section>
```

To update:
1. Change heading text inside `<h1>` tags
2. Modify subtitle in the `<p>` tag
3. Responsive text sizes:
   - `text-4xl`: Mobile size
   - `md:text-5xl`: Tablet size
   - `lg:text-6xl`: Desktop size

### Services Section
Each service card follows this structure:
```html
<div class="bg-white p-8 rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300">
    <h3 class="text-xl font-semibold mb-4">Affordable Care</h3>
    <p class="text-gray-600">Quality mental health services at competitive rates</p>
</div>
```

To add/modify services:
1. Copy the entire `<div>` block
2. Paste within the `grid grid-cols-1 md:grid-cols-3 gap-8` container
3. Update heading and description text
4. Maintain consistent spacing with `mb-4` class

## Managing Links

### Navigation Menu Links
Current navigation structure:
```html
<div class="hidden md:flex space-x-8">
    <a href="#services" class="text-gray-600 hover:text-gray-900 transition-colors duration-300">Services</a>
    <a href="#benefits" class="text-gray-600 hover:text-gray-900 transition-colors duration-300">Benefits</a>
    <a href="#faq" class="text-gray-600 hover:text-gray-900 transition-colors duration-300">FAQ</a>
    <a href="#contact" class="text-gray-600 hover:text-gray-900 transition-colors duration-300">Contact</a>
</div>
```

To update links:
1. Internal links (same page):
   - Use `#section-id` format
   - Ensure section IDs match exactly
2. External links:
   - Replace `href="#"` with full URL
   - Example: `href="https://yourwebsite.com/page"`

### Consultation Button
Located in hero section:
```html
<a href="https://omnihealthservices.in" class="inline-block bg-gray-900 text-white px-8 py-4 rounded-lg">Book Consultation</a>
```

To update:
1. Replace `https://omnihealthservices.in` with your booking URL
2. Modify button text between `<a>` tags
3. Adjust styling classes if needed

## Adding Privacy and Terms Pages

### Footer Legal Links
Current placeholder links:
```html
<div>
    <h3 class="text-lg font-semibold mb-4">Legal</h3>
    <ul class="space-y-2">
        <li><a href="#" class="text-gray-600 hover:text-gray-900">Privacy Policy</a></li>
        <li><a href="#" class="text-gray-600 hover:text-gray-900">Terms of Service</a></li>
    </ul>
</div>
```

To add proper links:
1. Create privacy.html and terms.html files
2. Update href attributes:
```html
<li><a href="privacy.html" class="text-gray-600 hover:text-gray-900">Privacy Policy</a></li>
<li><a href="terms.html" class="text-gray-600 hover:text-gray-900">Terms of Service</a></li>
```

## Troubleshooting

Common issues and solutions:

### Broken Internal Links
If clicking navigation links doesn't scroll to sections:
1. Check that section IDs match exactly
2. Example: `href="#services"` must match `id="services"`
3. IDs are case-sensitive

### Responsive Design Issues
If layout breaks on mobile:
1. Check responsive classes:
   - `md:` prefix for tablet (768px+)
   - `lg:` prefix for desktop (1024px+)
2. Ensure grid classes are correct:
   - `grid-cols-1` for mobile
   - `md:grid-cols-3` for larger screens

### Style Conflicts
If Tailwind styles aren't applying:
1. Check class spelling exactly matches Tailwind classes
2. More specific classes override less specific ones
3. Order matters: later classes override earlier ones

Need more help? Refer to:
- [Tailwind CSS Documentation](https://tailwindcss.com/docs)
- [HTML MDN Web Docs](https://developer.mozilla.org/en-US/docs/Web/HTML)