import helmet from 'helmet';
import { NextApiRequest, NextApiResponse } from 'next';
import nextConnect from 'next-connect';



// Warp NextApiRequest to enable Session in the request
export interface NextApiRequestExtend extends NextApiRequest {
}

export const handler = nextConnect<NextApiRequestExtend, NextApiResponse>({
    // All Throw error will send a 500 status
    onError(error, req, res) {
        res
            .status(500)
            .json({ code: 500, message: `Unexpected Error: ${error.message}` });
    },
    // handle method that is not implement
    onNoMatch(req, res) {
        res.status(405).json({ error: `Method ${req.method} Not Allowed` });
    },
})
    //  add helmet
    .use((req, res, next) => {
        const addHeaders = helmet();
        addHeaders(req, res, next);
    });
