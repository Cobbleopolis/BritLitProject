const projectPackage = require('./package.json')

module.exports =  {
    name: projectPackage['name'],
    displayName: projectPackage['displayName'],
    version: projectPackage['version'],
    description: projectPackage['description'],
    author: projectPackage['author'],
}