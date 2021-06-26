import {
  FormControl,
  FormLabel,
  MenuItem,
  Select,
  useMediaQuery,
} from '@material-ui/core';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import KeyboardIcon from '@material-ui/icons/Keyboard';
import React from 'react';

import Layout from '../components/Layout';
import { IncludeIf } from '../components/utils';
import theme, { useHomeStyle, useIconStyle } from '../src/theme';

export async function getStaticProps() {
  const SITE_URL = process.env.SITE_URL_BASE;
  const response = await fetch(`${SITE_URL}/api/lang`);
  let { data } = await response.json();
  return {
    props: {
      langs: data,
    },
  };
}

export default function Home({ langs }) {
  const pageMetadata = {
    title: `Fz Machine Translator`,
    description: 'Web app for machine translation',
  };
  return (
    <Layout pageMetadata={pageMetadata} home>
      <HomeBody langs={langs} />
    </Layout>
  );
}

function HomeBody({ langs }) {
  const classes = useHomeStyle();

  const match = useMediaQuery('(max-width:956px)');
  const justifyContent = !match ? classes.justifyCenter : '';
  return (
    <section className={`${classes.main_section} ${justifyContent}`}>
      {/* <HomePageTitle /> */}
      <Translation langs={langs} />
    </section>
  );
}

export function HomePageTitle() {
  const classes = useHomeStyle();
  return (
    <header>
      <h1 className={classes.title}>
        <span className={classes.title_sub0}>Fz </span>
        <span className={classes.title_sub1}>Translator</span>
      </h1>
    </header>
  );
}

function Translation({ langs }) {
  const classes = useHomeStyle(theme);

  return (
    <section className={classes.translation}>
      {langs.map((data) => (
        <div className={classes.translation_bloc} key={data.id}>
          <IncludeIf condition={data.id === 'src'}>
            <KeyboardIcon
              style={{
                position: 'absolute',
                bottom: 0,
                right: '0.2em',
                color: '#888',
              }}
            />
          </IncludeIf>
          <LanguageSelection data={data} />
          <InputTextArea
            className={`${classes.textAreaField} ${
              data.id === 'tar' ? classes.tr_output : ''
            }`}
            readOnly={data.id !== 'src'}
          />
        </div>
      ))}
    </section>
  );
}

function InputTextArea({ className, readOnly = false }) {
  const inputArea = !readOnly ? 'input-textarea' : '';
  React.useEffect(() => {
    if (!readOnly) {
      document.querySelector(`.${inputArea}`).focus();
    }
  }, [readOnly, inputArea]);
  return (
    <textarea
      className={`${className} ${inputArea}`}
      rows='1'
      readOnly={readOnly}
      placeholder={!readOnly ? 'Type to translate' : null}
      aria-label='Source text'
    />
  );
}
function LanguageSelection({ data, name }) {
  const classes = useHomeStyle();
  const [lang, setLang] = React.useState(0);
  const handleChange = (events) => {
    setLang(events.target.value);
  };

  const menuProps = {
    anchorOrigin: {
      vertical: 'bottom',
      horizontal: 'left',
    },
    transformOrigin: {
      vertical: 'top',
      horizontal: 'left',
    },
    getContentAnchorEl: null,
  };
  const icon = useIconStyle();
  const iconComponent = (props) => {
    return (
      <ExpandMoreIcon className={`${props.className} ${icon.expandMore}`} />
    );
  };
  return (
    <FormControl classes={{ root: classes.root_formControl }}>
      <FormLabel classes={{ root: classes.root_formLabel }}>
        Translate {data.id === 'src' ? 'From' : 'Into'}
      </FormLabel>
      <Select
        name={name}
        value={lang}
        MenuProps={menuProps}
        onChange={handleChange}
        style={{
          fontWeight: 'bold',
        }}
        IconComponent={iconComponent}
        disableUnderline>
        {data.languages.map((lang, index) => (
          <MenuItem value={index} key={index}>
            {lang}
          </MenuItem>
        ))}
      </Select>
    </FormControl>
  );
}
