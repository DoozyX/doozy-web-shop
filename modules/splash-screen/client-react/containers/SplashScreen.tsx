import React, { useState, useContext } from 'react';
import { useCookies } from 'react-cookie';
import { animated, useTransition } from 'react-spring';
import { Button, Header, List, Image } from 'semantic-ui-react';
import { RootContext } from '../RootContext';
import { default as i18next } from 'i18next';

const SplashScreen = () => {
  const { farmer, updateProperty } = useContext(RootContext);
  const [lang, setLang] = useState(i18next.language);
  const [cookies, setCookie] = useCookies(['farmer', 'lang']);
  const [loading, setLoading] = useState(!cookies.hasOwnProperty('farmer'));
  const transitions = useTransition(loading, null, {
    from: { position: 'absolute', opacity: 1 },
    enter: { opacity: 1 },
    leave: { opacity: 0 }
  });

  const languages = Object.keys(i18next.store.data);

  return (
    <div>
      {transitions.map(
        ({ item, props }) =>
          item && (
            <animated.div
              style={{
                backgroundImage:
                  'url("https://previews.dropbox.com/p/thumb/AAYMO8Rfv_FKDsoGONDZyu7kOGuUY3tRlLHLkAzri2BRlnihQ_bD06BWw9oxc2o40pt7hmhsz8LYkqKBwFozQ_tiIRqDMKn2QFhXDtWfTgT8Y2QFBfPBy5leDR88gWlr9JcuMG8STUUZkfEs7RzYWVam7GGnb6YQw_Pg9EiiEZS76nJgn6nYFy27bxBJ7AuAP0xLYfs1u45BBryX48Bv60DFrRh4KDgerhp81oCSMSIS8zeA9X3nz_2Gskx5QG3xCf2dvSVtamWHfwpJiqzYb1rscrMSY8uqMglnFDB-R8uahXyWGTmmYIN_Y1NLwyCjIPvNJ2xEF0abLeNTCkqJ2QJEGwLktnKlp-Ef2QKv9sWZUjH0tIk7yAcpxlPqtI1dZOEZWRupzYv3acwEZ-YVN8Bx/p.jpeg?size_mode=5")',
                backgroundRepeat: 'no-repeat',
                backgroundPosition: 'center',
                backgroundSize: 'cover',
                width: '100%',
                height: '100%',
                position: 'absolute',
                zIndex: 100,
                top: 0,
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                justifyContent: 'center',
                ...props
              }}
            >
              <Header as="h1">I am a </Header>
              <Button.Group size={'massive'} toggle>
                <Button active={farmer} onClick={() => updateProperty('farmer', true)}>
                  Farmer
                </Button>
                <Button.Or />
                <Button active={!farmer} onClick={() => updateProperty('farmer', false)}>
                  Consumer
                </Button>
              </Button.Group>
              <Header as="h1">Language </Header>
              <List selection animated divided size="massive">
                <List.Item
                  active={lang === languages[0]}
                  onClick={() => {
                    i18next.changeLanguage(languages[0]);
                    setLang(languages[0]);
                  }}
                >
                  <Image
                    avatar
                    src="https://upload.wikimedia.org/wikipedia/en/thumb/a/a4/Flag_of_the_United_States.svg/1200px-Flag_of_the_United_States.svg.png"
                  />
                  <List.Content>
                    <List.Header>English</List.Header>
                  </List.Content>
                </List.Item>
                <List.Item
                  active={lang === languages[1]}
                  onClick={() => {
                    i18next.changeLanguage(languages[1]);
                    setLang(languages[1]);
                  }}
                >
                  <Image
                    avatar
                    src="https://upload.wikimedia.org/wikipedia/commons/thumb/3/32/Flag_proposal_of_Macedonia_-_8.svg/360px-Flag_proposal_of_Macedonia_-_8.svg.png"
                  />
                  <List.Content>
                    <List.Header>Macedonian</List.Header>
                  </List.Content>
                </List.Item>
              </List>
              <Button
                size="massive"
                color="green"
                onClick={() => {
                  setCookie('farmer', farmer);
                  setLoading(false);
                }}
              >
                CONTINUE
              </Button>
            </animated.div>
          )
      )}
    </div>
  );
};

export default SplashScreen;
