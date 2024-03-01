import { SectionArea, SectionTitle, Card, Company } from "../../components"

const Experiences = () => {
  return (
    <SectionArea>
        <SectionTitle>Experiências</SectionTitle>
        <Company name="Sorte Online">
            <Card
                position="Desenvolvedora Front end React"
                period="dezembro de 2022 - Present (9 meses)">
                <p>Utilizando TypeScript, Next e Styled Components.</p>
                <p>Utilização do Material UI para a criação de interfaces.</p>
                <p>Integração com a plataforma de e-commerce VTEX e suas API's internas. Utilização de Sentry para monitoramento de erros de código e de performance.</p>
                <p>Atuação pontual com React PWA e sistema legado em C#, ASP.NET core, .NET</p>
            </Card>
        </Company>


        <Company name="DIGITAL HUB">
            <Card
                position="Frontend Developer"
                period="junho de 2022 - novembro de 2022 (6 meses)">
                <p>Desenvolvimento Front-end Magento 2.</p>
                <p>Desenvolvimento de novas features, manutenção e correção de bugs. Análise e implementação de dados via DataLayer para Google Tag Manager.</p>
                <p>Clientes atendidos Magento 2: Belt Nutrition e Asus.</p>
            </Card>
        </Company>

      <Company name="FCamara Consulting & Training" time="4 anos 2 meses">
          <Card
              position="Desenvolvedor Front End"
              period="outubro de 2018 - maio de 2022 (3 anos 8 meses)">
              <p>Desenvolvimento Front-end Magento 2.</p>
              <p>Utilizando o otimizador de tarefas GRUNT e pré processador LESS. Manutenção em arquivos knockout e requirejs.</p>
              <p>Usando o Gitlab como repositório e o Azure e Jira para gerenciamento de tarefas.</p>
              <p>Desenvolvimento de templates de e-mail.</p>
              <p>Atuação pontual com React PWA com TypeScript e Styled Components.</p>
              <p>Utilizando next.js para construção de páginas client-side para implementação de SEO.</p>
              <p>Usando API REST, GraphQL e Apollo Client para integrações backend. Organização com eslint para padronização e storybook para documentação.</p>
              <p>Clientes atendidos:</p>
              <p>Magento 2: Geração Pet - Petland, Infostore, NeoGrid, Dasa [Chromatox e Vacinas], Roche - Accu Chek e Focomix.</p>
              <p>Magento 1: Shop2Gether e Grupo RD Raia Drogasil.</p>
          </Card>
          <Card
              position="Trainee de Sistemas"
              period="abril de 2018 - outubro de 2018 (7 meses)">
              <p>Desenvolvimento Front-end na plataforma Magento 1.</p>
              <p>Criação e manutenção de arquivos XML, PHTML, SCSS, JS. Otimização de tarefas com GULP.</p>
              <p>Auxílio do pré processador SASS para escrever o CSS. Versionamento do código utilizando GIT.</p>
              <p>Armazenamento no repositório Bitbucket.</p>
              <p>Ambiente construído em container Docker e servidor Nginx. Gerenciamento de tarefas pelo Jira com a metodologia SCRUM. Desenvolvimento de templates de e-mail.</p>
              <p>Clientes atendidos: Marabraz e BlueMarket.</p>
          </Card>
      </Company>


        <Company name="ConstruJÁ" time="3 anos 10 meses">
            <Card
                position="Auxiliar de Marketing Digital"
                period="julho de 2015 - abril de 2018 (2 anos 10 meses)">
                <p>Gerenciamento de e-commerce na plataforma Magento.</p>
                <p>Atendimento ao cliente por telefone, chat, e-mail e via Whatsapp. Criação e disparo de E-mail Marketing pela plataforma Mail2Easy da Dinamize.</p>
                <p>Gestão e criação de conteúdo para redes sociais.</p>
                <p>Fotografia de produtos e tratamento de imagens no Photoshop; Elaboração e controle de relatórios de vendas e acessos via Analytics.</p>
            </Card>
            <Card
                position="Aprendiz Administrativo"
                period="julho de 2014 - junho de 2015 (1 ano)">
                <p>Aprendiz administrativo na área de T.I.</p>
                <p>Gerenciamento de produtos na plataforma F1 Soluções. Atendimento ao cliente por telefone e chat.</p>
                <p>Fotografia Still de produtos.</p>
                <p>Tratamento de imagens no Photoshop.</p>
            </Card>
        </Company>
    </SectionArea>
  )
}

export { Experiences }
