import { VscGithubAlt, VscRocket } from "react-icons/vsc";
import Button from './Button';

function App(){return (
    <div>
      <div>
        <Button primary rounded>
          <VscGithubAlt />
          Click me
        </Button>
      </div>
      <div>
        <Button secondary rounded>
        <VscRocket />
          Buy now!
        </Button>
      </div>
      <div>
        <Button success rounded>
          Buy now!
        </Button>
      </div>
      <div>
        <Button warning rounded>
          Buy now!
        </Button>
      </div>
      <div>
        <Button danger rounded outline>
          Buy now!
        </Button>
      </div>
    </div>
  )
}

export default App;
