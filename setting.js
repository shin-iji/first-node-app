const Settings = {
    secretKey: 'GT3458_3!ky12Bb1KJjdr',
    userPasss: 'ktD234BzKYjW22_!!rj',
    databaseName: 'iosthailandDatabase'                    
}
const getSecretKey = () => {
    return Settings.secretKey
}
module.exports.getSecretKey = getSecretKey
module.exports.userPasss = Settings.userPasss
module.exports.databaseName = Settings.databaseName