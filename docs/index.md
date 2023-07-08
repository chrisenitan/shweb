-- Overview --
Shweb is a browser extension for bulk managing websites local storage. Export websites local storage data as a backup or import your backed up storage file when needed.
Good for backing up and restoring site settings, background data and other site specific functional data. Read more about how websites use local storage to give you a better experience: https://dev.to/dboatengx/javascript-local-storage-explained-1di6

- Features

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

- Theme is not changing at the right time: Please reload WhatsApp and click the reset button
- Does this sync across my devices: Sort of, settings will not apply across devices but the extension can be re-installed and used anywhere supported

-- Permissions Usage --

- ActiveTab - to access background setting for the current tab you are in
- DeclarativeContent - to identify current website url
- Scripting - to create and manage file export and import

Shweb only runs in the background to fetch and update local storage data, local storage usage is a sole responsibility of the website you are visiting.<br>

-- Developers --
The project is available on Github if you want to have some fun and collaborate on this and other projects. Find repository at https://github.com/chrisenitan/shweb
