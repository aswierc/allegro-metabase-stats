const { program } = require('commander')
const loadingAnimation = require('../src/infrastructure/loader/consoleLoader')
const {getDeviceCode, authorizeDevice} = require('../src/infrastructure/allegro/authorizeDevice')

program.version('0.0.1')
    .action(() => {
        getDeviceCode().then((resp) => {
            console.log('')
            console.log(`Please go to address ${resp.verification_uri_complete} and connect a device.`)
            console.log('')

            loadingAnimation("Waiting for confirmation device…", function (e) {
                authorizeDevice(resp.device_code).then(() => {
                    console.log('')
                    console.log('Device authorized!')
                    clearInterval(e)
                }).catch(() => {})
            });
        })
    })
program.parse()
