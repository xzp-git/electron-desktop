const os = require('os')
const fs = require('fs')
const { contextBridge } = require('electron')

const platform = os.platform()
const release = os.release()

document.addEventListener('DOMContentLoaded', () => {
  document.getElementById('platform').append(platform)
  document.getElementById('release').append(release)
})

const saveFile = (path, content) => {
  return new Promise((resolve, reject) => {
    fs.writeFile(path, content, (err) => {
      if (err) {
        reject(err)
      } else {
        resolve()
      }
    })
  })
}

contextBridge.exposeInMainWorld('electron', {
  saveFile,
})
