-- Overview --
Shweb is a browser extension for bulk managing websites local storage. Export websites local storage data as a backup or import your backed up storage file when needed.

-- What it does --

- Often times, web applications use local storage to store settings, text field values and other website specific assets, having them backed up and available to use on any browser/device is a productivity hack.
- Did you know you can loose these if you logout or reset something on your browser like cache.
- Avoid that with Shweb. Shweb allows you back up those notes via browser `local-storage`
  - with an interface you can use to import and export those local storage content. And for all other safety reasons its worth:
- Read more about how websites use local storage to give you a better experience: https://dev.to/dboatengx/javascript-local-storage-explained-1di6

-- Features --

1. Export websites local storage data
2. Import exported local storage from specific website (to one or more sites)

-- How To Use --

1. Install the Shweb extension in your browser

-- To export --

- Click the extension icon to open the extension options
- Click the "export" button in the extension options
- A text file will be generated and you can save this locally.

-- To import --

- Click the extension icon to open the extension options
- Click the "Choose file" button in the extension options
- Upload a compatible local storage file.
  File structure: {storageKey:storageValue, storageKey:storageValue...}

-- To uninstall the extension --

- Right click on the extension icon and select "Remove from Chrome"

-- FAQs --

- Is shweb backing up my local storage in the automatically? No, this might be an upcoming feature
- What type of file does shweb use? Any text based file containing a typical JSON object

-- Permissions Usage --

- ActiveTab - to access background setting for the current tab you are in
- Scripting - to create and manage file export and import
- I imported my local storage file, what's next? Local storage content are instantly available to use on the website pages

Shweb only runs in the background to fetch and update local storage data, local storage usage is a sole responsibility of the website you are visiting.<br>

-- Developers --
The project is available on Github if you want to have some fun and collaborate on this and other projects. Find repository at https://github.com/chrisenitan/shweb
