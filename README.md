# Bleeding Edge Drupal Project

This multisite, ddev-based Drupal Core 11 project includes the following for linting:
- PHP Code Sniffer PHP lint
- ESlint for Javascript lint
- StyleLint for CSS lint

It installs and automatically configures the following ddev plugins:
- BackstopJS
- BrowserSync

It automatically creates a theme for each site in a multisite setup, and automatically installs and configures:
- Webpack
- PostCSS
- TailwindCSS

## Example scenario and how to use it:

Let's suppose you want to setup a Drupal 11 multisite project that includes the domains mysite.com, sub.mysite.com, and othersite.com

You just need to open the directory and run:
```
./build-project mysite.com sub.mysite.com othersite.com
```
This command will:
- Install Drupal 11 Core
- Create a multisite setup that includes all 3 domains
- Create a theme folder inside each site, with the same name as the site, then install and configure:
  - TailwindCS
  - Webpack
  - PostCSS
  - Configure BackstopJS to work with this theme
  - Configure BrowserSync to work with this theme
  
From this point on you can just run ddev start and all the domains and their themes will be ready to be worked on.

