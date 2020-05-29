export class BusinessAccount {
  name: string
  businessId: string
  key: string
  secret: string
  url: string
  notifyUrl: string

  setName (name: string) {
    this.name = name
  }

  setBusinessId (businessId: string) {
    this.businessId = businessId
  }

  setKey (key: string) {
    this.key = key
  }

  setSecret (secret: string) {
    this.secret = secret
  }

  setUrl (url: string) {
    this.url = url
  }

  setNotifyUrl (notifyUrl: string) {
    this.notifyUrl = notifyUrl
  }

  validCheck () {
    if (!this.name) {
      throw new Error('Business account name can not be empty')
    }
    if (!this.businessId) {
      throw new Error('Business id can not be empty')
    }
    if (!this.key) {
      throw new Error('Business key can not be empty')
    }
    if (!this.secret) {
      throw new Error('Business secret can not be empty')
    }
    if (!this.url) {
      throw new Error('Business url can not be empty')
    }
    if (!this.notifyUrl) {
      throw new Error('Business notifyUrl can not be empty')
    }
  }
}