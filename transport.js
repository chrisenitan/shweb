//allows import and export of local storage via web apis
const date = new Date()
const timeStamp = `${date.getFullYear()}_${date.getMonth() + 1}_${date.getDate()}`

const transport = {
  importListener: () => {
    const fileReader = new FileReader()
    fileReader.onload = function (event) {
      transport.prepareImport(fileReader.result)
    }
    if (document.getElementById("localStorageFile")) {
      document.getElementById("localStorageFile").onchange = function (event) {
        fileReader.readAsText(event.target.files[0])
      }
    }
  },

  prepareImport: (storageFile) => {
    const newStorage = JSON.parse(storageFile)
    for (const [key, value] of Object.entries(newStorage)) {
      chrome.tabs.query({ active: true, currentWindow: true }, function (tabs) {
        var req = {
          key: key,
          value: value,
        }
        chrome.scripting.executeScript({
          target: { tabId: tabs[0].id },
          func: transport.addImport,
          args: [req],
        })
      })
    }
  },

  addImport: (pair) => {
    localStorage.setItem(pair.key, pair.value)
  },

  export: () => {
    const link = document.createElement("a")
    const content = JSON.stringify(localStorage)
    const file = new Blob([content], { type: "text/plain" })
    link.href = URL.createObjectURL(file)
    link.download = `shweb_${timeStamp}.txt`
    link.click()
    URL.revokeObjectURL(link.href)
  },
}

//export watch
if (document.getElementById("exportStorage")) {
  document.getElementById("exportStorage").addEventListener("click", function () {
    chrome.tabs.query({ active: true, currentWindow: true }, function (tabs) {
      chrome.scripting.executeScript({
        target: { tabId: tabs[0].id },
        func: transport.export,
      })
    })
  })
}

window.addEventListener("load", function () {
  transport.importListener()
})
