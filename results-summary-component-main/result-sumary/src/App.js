
import './App.css';
import {Container} from './Components/Container'
import {LeftSide} from './Components/LeftSide'
import {Title} from './Components/Title'
import {Score} from './Components/Score'
import {Text} from './Components/Text'
import {RightSide} from './Components/RightSide'
import {SkillList} from './Components/SkillList'

import {Button} from './Components/Button'

function App() {
  
  return (
    <Container>
      <LeftSide>
        <Title/>
        <Score/>
        <Text/>
      </LeftSide>
      <RightSide>
        <SkillList>
          
        </SkillList>
        <Button/>
      </RightSide>
    </Container>
  );
}

export default App;
