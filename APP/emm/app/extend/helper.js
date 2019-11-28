const crypto = require("crypto")

module.exports = {
    hash(params) {
      let str=  crypto.createHmac('sha256', '李华').update(params).digest('hex')
      return str
    }
}