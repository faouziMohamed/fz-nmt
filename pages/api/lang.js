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

export default nc().get((req, res) => res.status(200).json({ data: ioData }));
