#!/usr/bin/env node
const readlineSync = require('readline-sync')
const fs = require('fs')
const path = require('path')

/**
 * Gets the needed system info to execute this script
 */
const getSysInfo = function () {
  let screepsScriptsPath = null

  switch (process.platform) {
    // mac
    case 'darwin':
      screepsScriptsPath = process.env.HOME + '/Library/Application Support/Screeps/scripts/'
      return {
        scriptsPath: screepsScriptsPath,
        isUnix: true
      }

    case 'linux':
      screepsScriptsPath = process.env.HOME + '/.config/Screeps/scripts'
      isUnix = true
      return {
        scriptsPath: screepsScriptsPath,
        isUnix: true
      }

    default:
      console.log('Could not determine the Screeps script folder for platform "' + process.platform + '." Please contact your maintainer to resolve this issue.')
      process.exit(1)
      return
  }
}

const loadAnswers = function () {
  try {
    let savedDataDir = __dirname.substring(0, __dirname.length - 4) + path.sep + '.userData'
    return JSON.parse(fs.readFileSync(path.join(savedDataDir, 'deployAnswers'), 'utf-8'))
  } catch (error) {
    return {}
  }
}

const saveAnswers = function (answers) {
  let savedDataDir = __dirname.substring(0, __dirname.length - 4) + path.sep + '.userData'
  try {
    fs.mkdirSync(savedDataDir)
  } catch (error) {
    if (error.code != "EEXIST") {
      throw error
    }
  }

  fs.writeFileSync(path.join(savedDataDir, 'deployAnswers'), JSON.stringify(answers), 'utf-8')
}

/**
 * Given a full path to a directory or file return the last directory or file name.
 * @param {String} value Path to trim to the last segment
 */
const trimToLast = function (value) {
  let index = value.lastIndexOf(path.sep)

  if (index > 0) {
    return value.substring(index + 1)
  }

  return value
}

/**
 * Checks to see if the provided testPath is hidden on the OS
 * @param {String} testPath The path to the directory / file to test for hidden-ness
 * @param {Boolean} isUnix True if we should use the unix hidden algorithm, false for windows
 */
const isHidden = function (testPath, isUnix = true) {
  let p = trimToLast(testPath)

  if (isUnix) {
    return (/(^|\/)\.[^\/\.]/g).test(p)
  } else {
    return false // TODO: Find someone who can test this as I do not have a windows machine.
  }
}

/**
 * 
 * @param {String} testPath 
 * @param {Boolean} isUnix True if we should use the unix hidden algorithm, false for windows
 */
const isDirectoryAndNotHidden = function (testPath, isUnix) {
  return fs.lstatSync(testPath).isDirectory() && !isHidden(testPath, isUnix)
}

const getSelectionFromList = function (listData, dataLabel, queryLabel, previousSelection = null) {
  let dataMap = {}
  let numberAnswersMap = {}
  let displayAnswersMap = {}
  let selectedDataKey = null

  console.log('')
  console.log(dataLabel)
  console.log('='.repeat(dataLabel.length))
  for (let i = 0; i < listData.length; i++) {
    let displayIndex = i + 1

    let displayDir = trimToLast(listData[i])
    if (displayDir.indexOf('___') !== -1) {
      let parts = displayDir.split('_')
      displayDir = parts[0] + '.' + parts[1] + '.' + parts[2] + '.' + parts[3] + ':' + parts[6]
    }

    dataMap[displayIndex] = listData[i]
    numberAnswersMap[displayIndex] = displayDir
    displayAnswersMap[displayDir] = displayIndex

    console.log('  ' + displayIndex + '.) ' + displayDir)
  }

  do {
    let query = queryLabel
    let previousAnswer = previousSelection[dataLabel]
    if (previousAnswer && previousAnswer in displayAnswersMap) {
      query += " [" + previousAnswer + "]: "
    } else {
      query += ": "
    }

    // NOTE: NaN is returned when something other than a number is entered.
    let answer = readlineSync.question(query)
    if (answer == '') {
      selectedDataKey = displayAnswersMap[previousAnswer]
    } else {
      let parsedAnswer = parseInt(answer, 10)
      if (parsedAnswer in dataMap) {
        selectedDataKey = parsedAnswer
      }
    }

  } while (!selectedDataKey)

  previousSelection[dataLabel] = numberAnswersMap[selectedDataKey]

  console.log('')
  return dataMap[selectedDataKey]
}

const main = function () {
  let sysInfo = getSysInfo()
  let previousAnswers = loadAnswers()

  let dirs = fs.readdirSync(sysInfo.scriptsPath).map(name => path.join(sysInfo.scriptsPath, name)).filter(p => isDirectoryAndNotHidden(p, sysInfo.isUnix))
  let selectedPath = getSelectionFromList(dirs, 'Available Servers', 'Please select a server to work against', previousAnswers)

  // Create a new directory for the deploy timestamp and copy the code into that directory
  let name = 'WIP'
  let destDir = path.join(selectedPath, name)

  try {
    fs.mkdirSync(destDir)
  } catch (error) {
    if (error.code != "EEXIST") {
      throw error
    }
  }

  let sourcePath = __dirname.substring(0, __dirname.length - 4) + path.sep + 'src'
  let existingFiles = fs.readdirSync(destDir)
  let sourceFiles = fs.readdirSync(sourcePath)
  let sourceFilesFullPath = sourceFiles.map(name => path.join(sourcePath, name)).filter(p => fs.lstatSync(p).isFile() && p.endsWith('.js') && !p.endsWith('.test.js'))
  let deleteFiles = existingFiles.filter(f => sourceFiles.indexOf(f) === -1)

  // Copy over the new files.
  for (let i = 0; i < sourceFilesFullPath.length; i++) {
    let lastSepIndex = sourceFilesFullPath[i].lastIndexOf(path.sep)
    let fileName = sourceFilesFullPath[i].substring(lastSepIndex + 1)

    let destFullPath = destDir + path.sep + fileName
    fs.copyFileSync(sourceFilesFullPath[i], destFullPath)
  }

  // Remove files that no longer exist
  for (let i = 0; i < deleteFiles.length; i++) {
    let target = path.join(destDir, deleteFiles[i])
    fs.unlinkSync(target)
  }

  saveAnswers(previousAnswers)

  console.log('Deployment finished successfully!')
  console.log('Please check for a "WIP" branch in your Screeps client')
}

main()