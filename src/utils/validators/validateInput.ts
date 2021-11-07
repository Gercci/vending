const availableBills: number[] = [50, 100, 200, 500]

interface availabilityCheckerReturnValue {
    isAvailable?: boolean,
    isCorrect?: boolean
}

export type AvailabilityChecker = (value: string) => availabilityCheckerReturnValue

export const validateInput: AvailabilityChecker = ( value ) => {
    const isValueCorrect = /^[0-9]+$/g.test(value)
    if(!isValueCorrect) return { isCorrect: false }
    return { isAvailable: availableBills.includes(+value), isCorrect: true }
}