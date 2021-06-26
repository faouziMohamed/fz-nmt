import nc from 'next-connect';

const ioData = [
  {
    id: 'src',
    label: 'Source',
    name: 'src_lang',
    languages: ['English', 'French'],
  },
  {
    id: 'tar',
    label: 'Target',
    name: 'tar_lang',
    languages: ['French', 'English'],
  },
];
const handler = nc().get((req, res) => {
  return res.json({ data: ioData });
});

export default handler;
