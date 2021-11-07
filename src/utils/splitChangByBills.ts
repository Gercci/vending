const availableBills = [10, 5, 2, 1]

export const splitChangeByBills = (total: number) => {
    const output: any = {}
    availableBills.forEach(bill => {
        const billsCount = Math.floor(total / bill)
        if(billsCount) {
            output[bill] = billsCount
            total = total - billsCount * bill
        }
    })
    return output
}