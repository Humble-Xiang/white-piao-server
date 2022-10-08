import { NextApiRequest, NextApiResponse } from 'next';
import { AV } from '@/utils/leancloud-object';

const sources = async (req: NextApiRequest, res: NextApiResponse) => {
  if (req.method === 'GET') {
    const SourceQuery = new AV.Query('Source');
    const source = await SourceQuery.get(req.query.id as string);
    res.status(200).send(source.toJSON());
  } else {
    res.status(405).send({});
  }
};

export default sources;
