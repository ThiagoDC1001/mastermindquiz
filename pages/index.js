/* eslint-disable func-names */
import React from 'react';
import Head from 'next/head';
import { useRouter } from 'next/router';
import db from '../db.json';

import Widget from '../src/components/Widgets';
import QuizBackground from '../src/components/QuizBackground';
import Footer from '../src/components/Footer';
import GitHubCorner from '../src/components/GitHubCorner';
import QuizLogo from '../src/components/QuizLogo';
import Input from '../src/components/Input';
import Button from '../src/components/Button';
import QuizContainer from '../src/components/QuizContainer';

export default function Home() {
  const router = useRouter();
  const [name, setName] = React.useState('');
  return (
    <QuizBackground backgroundImage={db.bg}>
      <Head />
      <QuizContainer>
        <QuizLogo />
        <Widget>
          <Widget.Header>
            <h1>Já ouviu falar de Jogador n°1?</h1>
          </Widget.Header>
          <Widget.Content>
            {/* <img = Colocar uma imagem do Anorak
              alt="Descrição"
              style={{
                width: '100%',
                height: '150px',
                objectFit: 'cover',
              }}
              src={}
            /> */}

            <p>
              Eu sou Anorak o game master e programador de OASIS
            </p>
            <form onSubmit={function (event) {
              event.preventDefault();
              router.push(`/quiz?name=${name}`);
              // eslint-disable-next-line no-console
              console.log('Fazendo uma submissão por meio do React');
            }}
            >
              <Input
                name="nomeDoUsuario"
                onChange={(infosDoEvento) => {
                  setName(infosDoEvento.target.value);
                }}
                placeholder="Quem me sumona?"
                value={name}
              />
              <Button type="submit" disabled={name.length === 0}>
                {`Desafia-me ${name}`}
              </Button>
            </form>
          </Widget.Content>
        </Widget>
        <Widget>
          <Widget.Header>
            Outros jogadores demonstraram sua sabedoria
          </Widget.Header>
          <Widget.Content />
        </Widget>

        <Footer />
      </QuizContainer>
      <GitHubCorner projectUrl="https://github.com/ThiagoDC1001/mastermindquiz" />
    </QuizBackground>

  );
}
