import styled from 'styled-components';
import db from '../db.json';
import Widget from '../src/components/Widgets';
import QuizBackground from "../src/components/QuizBackground"
import Footer from '../src/components/Footer';
import GitHubCorner from '../src/components/GitHubCorner';
import QuizLogo from '../src/components/QuizLogo';
import Head from 'next/head';


export const QuizContainer = styled.div`
  width: 100%; 
  max-width: 350px;
  padding-top: 45px;
  margin: auto 10%;
  @media screen and (max-width: 500px) {
    margin: auto;
    padding: 15px;
  }
`;

export default function Home() {
  return (
   <>
   <div>   
      <Head>
        <title>Tech Questions</title>

        <meta property="og:title" content="Master Mind Quiz" key="title" />
        <meta property="og:image" content={db.bg}/>
        <meta property="og:image:type" content="image/jpg"/>
    
      </Head>   
    </div>
      <QuizBackground backgroundImage={db.bg}>
            <QuizContainer>
              <QuizLogo />
                <Widget>
                  <Widget.Header>
                    <h1>Perguntas do Quiz</h1>
                  </Widget.Header>
                  <Widget.Content>
                    Aqui vão as perguntas e as opções
                  </Widget.Content>  
                </Widget> 

              <Footer />  
            </QuizContainer>
        <GitHubCorner projectUrl="https://github.com/ThiagoDC1001/mastermindquiz" />
      </QuizBackground>  
    </>
  )
}
