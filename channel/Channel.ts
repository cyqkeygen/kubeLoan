import {BusinessAccount} from './BusinessAccount'

export abstract class Channel {
  protected abstract readonly name
  private account: BusinessAccount

  async pay () {}

  async repay () {}

  async setAccount (account: BusinessAccount) {
    if (account.name !== this.name) {
      throw new Error('Channel name does not match')
    }
    this.account = account
  }
}