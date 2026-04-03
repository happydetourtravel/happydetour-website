export default async function handler(req, res) {
  if (req.method === 'POST') {
    const data = req.body;
    console.log('New Lead:', data);
    return res.status(200).json({ message: 'Lead received' });
  }

  return res.status(405).json({ message: 'Method not allowed' });
}
