interface MajorCredits {
  credits: number;
  readonly _brandMajor: unique symbol;
}

interface MinorCredits {
  credits: number;
  readonly _brandMinor: unique symbol;
}

/**
 * Sums major credits of two subjects
 * @param subject1 - First subject with major credits
 * @param subject2 - Second subject with major credits
 * @returns A MajorCredits object with the sum of credits
 */

function sumMajorCredits(
  subject1: MajorCredits,
  subject2: MajorCredits
): MajorCredits {
  return {
    credits: subject1.credits + subject2.credits,
  } as MajorCredits;
}

/**
 * Sums minor credits of two subjects
 * @param subject1 - First subject with minor credits
 * @param subject2 - Second subject with minor credits
 * @returns A MinorCredits object with the sum of credits
 */

function sumMinorCredits(
  subject1: MinorCredits,
  subject2: MinorCredits
): MinorCredits {
  return {
    credits: subject1.credits + subject2.credits,
  } as MinorCredits;
}
