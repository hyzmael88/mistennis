import Stripe from 'stripe'

const stripe = new Stripe(import.meta.env.VITE_PUBLIC_STRIPE_SECRET_KEY)

export default async function handler(req, res){
    if(req.method === 'POST'){
        try {
            
        } catch (error) {
            res.status(500).json({statusCode: 500, message: error.message})
        }
    }
}