import Titulo from '../../components/Titulo'
import Paragrafo from '../../components/Paragrafo'
import { GithubSecao } from './styles'

const Sobre = () => (
  <section>
    <Titulo fontSize={16}>Sobre</Titulo>
    <Paragrafo tipo="principal">
      Lorem ipsum dolor sit, amet consectetur adipisicing elit. Repellat itaque
      voluptas veniam harum excepturi! Nesciunt, neque? Hic neque expedita
      excepturi sequi dolorum vel perspiciatis eligendi similique, iure atque,
      accusantium illo.
    </Paragrafo>
    <GithubSecao>
      <img src="https://github-readme-stats.vercel.app/api?username=DEV-Gabriel7&show_icons=true&theme=dracula&include_all_commits=true&count_private=true" />
      <img src="https://github-readme-stats.vercel.app/api/top-langs/?username=DEV-Gabriel7&layout=compact&langs_count=7&theme=dracula" />
    </GithubSecao>
  </section>
)

export default Sobre
