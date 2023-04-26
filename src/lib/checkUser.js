import { getToken, decode } from "next-auth/jwt"

const secret = process.env.NEXT_AUTH_SECRET;


// CHECKING FUNCTIONS
export const hasToken = async (req) => {

    const token = await getToken({ req, secret })

    if (!token) {
        return false
    }
    return true
}
export const isAdmin = async (req) => {
    const token = await getToken({ req, secret });
    
    if (!token || token.user.role !== 'admin') {
        return false
    }
    return true
}
export const getUser = async (req) => {
    const token = await getToken({ req, secret })
    if (!token)
        return null // No token, no user

    return token.user // Return the user



}
export async function getAuthSession(ctx) {
    return ctx.req.session.get("user");
  }
// export const getSession = async (context) => {
//     const session = await getServerSession(
//         context.req,
//         context.res,
//         authOptions
//     );
//     if (!session || !session.user) {
//         return null
//     }
//     return session.user
// }
export const getUserFromRequest = async (req) => {
    const token = await getToken({ req, secret })

    const decoded = await decode({
        token,
        secret,
    })
    return decoded
}

// API MIDDLEWARE
export const hasTokenMiddleware = async (req, res, next) => {
    const token = await getToken({ req, secret })
    if (!token) {
        return next(new Error('Not Allowed - Not logged in'))
    }
    next()
}
export const isAdminMiddleware = async (req, res, next) => {
    const token = await getToken({ req, secret })
    if (!token) {
        return next(new Error('Not Allowed - Not logged in'))
    }
    if (token.user.role !== 'admin') {
        return next(new Error('Not Allowed - Not admin'))
    }
    next()
}
