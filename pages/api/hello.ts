import type { NextApiRequest, NextApiResponse } from 'next'
 
type ResponseData = {
  message: string
}
 
export default function handler(
  req: NextApiRequest,
  res: NextApiResponse<ResponseData>
) {
    // req.method === 'POST'
    const { pid } = req.query
  res.status(200).json({ message: `Hello ${pid} from Next.js!` })
}