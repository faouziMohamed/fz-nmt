// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import styles from "../../styles/Home.module.css";
import nc from "next-connect";

const ioData = [
  {
    label: "Source",
    name: "src_lang",
    languages: ["English", "French"],
    className: styles.source_field,
  },
  {
    label: "Target",
    name: "tar_lang",
    languages: ["French", "English"],
    className: styles.translation_output,
  },
];

const handler = nc().get((req, res) => {
  res.json({ data: ioData });
});

export default handler;
