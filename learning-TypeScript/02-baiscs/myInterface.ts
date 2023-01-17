interface User {
    readonly dbID: number
    email: string,
    userId: number,
    googleId?: string,
    // startTrial: () => string
    startTrial(): string,
    getCoupon(couponname: string, value: number): number
}

interface User {
    githubToken: string
}

interface Admin extends User {
    role: "admin" | "ta" | "learner"
}

const helon: Admin = {dbID: 22, email: "nguHelon", userId: 2211, 
role: "admin",
githubToken: "github",
startTrial: () => {
    return "trial started"
}, getCoupon: (name: "hitesh10", off: 10) => {
    return 10
}}

helon.email = "nguhelon@gmail.com"
