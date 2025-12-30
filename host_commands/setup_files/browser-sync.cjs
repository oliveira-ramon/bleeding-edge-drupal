let themes_custom = process.env.DDEV_DOCROOT + '/themes/custom/**/*.{twig,js,css}';
let modules_custom = process.env.DDEV_DOCROOT + '/modules/custom/**/*.{twig,js,css}';
let multisite_files = process.env.DDEV_DOCROOT + '/sites/**/*.{twig,js,css}';
let storybook = process.env.DDEV_COMPOSER_ROOT + '/storybook/stories/**/*.twig';

let url = process.env.DDEV_HOSTNAME;
let filesdir = process.env.DDEV_FILES_DIR;
let filesdir_multisite = '/sites/**/files';

if (filesdir === "") {
  filesdir = null
}

module.exports = {
  files: [
    themes_custom,
    modules_custom,
    multisite_files,
    storybook
  ],
  ignore: ["node_modules", filesdir, filesdir_multisite, "vendor"],
  open: false,
  ui: false,
  server: false,
  proxy: {
    target: "localhost"
  },
  host: url,
}
