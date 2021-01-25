import styled from 'styled-components';
import db from '../db.json';
import Widget from '../src/components/Widgets';
import QuizBackground from "../src/components/QuizBackground"
import Footer from '../src/components/Footer';
import GitHubCorner from '../src/components/GitHubCorner';
import QuizLogo from '../src/components/QuizLogo';

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
        </QuizContainer>
            <Footer />  
      <GitHubCorner projectUrl="http://https://github.com/ThiagoDC1001/mastermindquiz" />
    </QuizBackground>
  )
}
