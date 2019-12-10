const { ipcRenderer } = require("electron")
const Store = require("electron-store")
const fetch = require("node-fetch")

const store = new Store()
module.exports.store = store

const APi_URL = "http://127.0.0.1:8000"