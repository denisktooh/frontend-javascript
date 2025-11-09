interface MajorCredits {
    credits: number;
    brand: string;
}

interface MinorCredits {
    credits: number;
    brand: string;
}

function sumMajorCredits(subject1: MajorCredits, subject2: MajorCredits): number {
    return subject1.credits + subject2.credits;
}

function sumMinorCredits(subject1: MinorCredits, subject2: MinorCredits): number {
    return subject1.credits + subject2.credits;
}

const major1: MajorCredits = { credits: 20, brand: 'Major' };
const major2: MajorCredits = { credits: 30, brand: 'Major' };

const minor1: MinorCredits = { credits: 10, brand: 'Minor' };
const minor2: MinorCredits = { credits: 15, brand: 'Minor' };

console.log('Sum of Major Credits:', sumMajorCredits(major1, major2)); // Output: 50
console.log('Sum of Minor Credits:', sumMinorCredits(minor1, minor2)); // Output: 25