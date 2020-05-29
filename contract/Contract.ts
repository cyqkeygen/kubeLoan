export class Contract {
  private principal: number
  private interestRate: number
  private startDate: Date
  private endDate: number
  private processingFeeRate: number
  private gstRate: number
  private overdueFeeRate: number
  private addOnContracts: Contract[]

  setPrincipal (principal: number) {
    this.principal = principal
  }

  setInterestRate (interestRate: number) {
    this.interestRate = interestRate
  }

  calculate () {
    this.principal * this.interestRate * 
  }

  getPeriod () {
    return this.
  }
}