import './App.css';
import './style.css';
import './style2.css';
import './script';
import Eu from'./img/eu.png';
import Behance from'./img/behance2.png';
import Linkedin from'./img/linkedin2.png';
import Github from'./img/github2.png';
import LightMode from './img/lightMode.png';
import Whats from './img/whats.png'
import Ideia from'./img/ideia2.png';
import Mkt from'./img/mkt.png';
import Ti from'./img/ti2.png';
import HtmlImg from './img/html.png'
import CssImg from'./img/css.png';
import JsImg from'./img/javascript.png';
import WordpressImg from'./img/wordpress2.png';
import LinkPagina from './img/link.png';
import BurronLogo from './img/Job-01.png'
import BurronArt from'./img/Job-02.png';
import AndreLogo from'./img/Job-03.png';
import AndreArt from'./img/Job-04.png';



function App() {
  return (
    <div className="App">
      <div id="conteiner">

        <header className="header">
            <h1 id="modeH1">Igor <span className="sobrenome">Maceno</span></h1>
            <nav className="flex-conteiner">
                <ul className="menu">
                    <li>
                        <a href="https://www.behance.net/igorlopesmbd63" target="_blank"><img src={Behance} id="behance" alt="behance"/></a>
                    </li>
                    <li>
                        <a href="https://www.linkedin.com/in/igor-lopes-maceno-653355110/" target="_blank"><img src={Linkedin} id="linkedin" alt="linkedin"/></a>
                    </li>
                    <li>
                        <a href="https://github.com/Igor-Maceno" target="_blank"><img src={Github} id="github" alt="github"/></a>
                    </li>
                    </ul>
            </nav>
            
        </header>
{/*
        <div className="b2">
            <img src={LightMode} alt="darkMode" id="dM" onclick="darkMode()"/>
        </div>
*/}
        <section className="grid1">
            <div>
                <img className="igor-pic" src={Eu} alt="Igor-Maceno"/>
            </div>
            <div className="texts">
                <div>
                    <h3>Olá, sou o Igor!</h3>
                </div>
                <div>
                    <h2>Desenvolvedor Web</h2>
                </div>
                <div>
                    <p>Sou estudante de Análise e Desenvolvimento de 
                        Sistemas na UTFPR e atuo como desenvolvedor
                        web freelancer. Meus conhecimentos englobam 
                        os ramos de design, marketing e tecnologia. </p>
                </div>
                <div>
                    <button type="button">
                        <a href="https://api.whatsapp.com/send?phone=5542984082845" target="_blank">
                        <img src={Whats} alt="whatsapp"/> FALE COMIGO
                        </a>
                    </button>
                </div>
            </div>  
        </section>

        <section className="grid2">
            <div className="hability">
                <img src={Ideia} id="ideia" alt=""/>
                <h3>Design</h3>
                <p className="p2">Presto serviços como
                    designer gráfico a 
                    pelo menos 7 anos,
                    onde aprendi, com 
                    muitos projetos, as
                    bases e fundamentos.</p>
            </div>
            <div className="hability orange">
                <img src={Mkt} alt=""/>
                <h3>Marketing</h3>
                <p class="p2">Comecei a estudar sobre
                    marketing em 2018, com
                    a necessidade de vender
                    meus serviços. E logo
                    visualizei oportunidades
                    para atuar na área.</p>
            </div>
            <div className="hability">
                <img src={Ti} id="ti" alt=""/>
                <h3>Tecnologia</h3>
                <p className="p2">Sempre me considerei
                    uma pessoa muito 
                    criativa e percebi que
                    a área de T.I. poderia
                    ser muito promissora e
                    cheia de oportunidades.</p>
            </div>
            <div className="xp">
                <h2>7</h2>
                <p>Anos de experiência</p>
            </div>
            <div className="tools">
                <h3>10+</h3>
                <p className="p2">Ferramentas</p>
            </div>
            <div className="tools">
                <h3>20+</h3>
                <p className="p2">Cursos</p>
            </div>
            <div className="tools">
                <h3>50+</h3>
                <p className="p2">Clientes</p>
            </div>
            <div className="tools">
                <h3>100+</h3>
                <p className="p2">Projetos</p>
            </div>
        </section>

        <section className="tecnologies">
            <div>
                <img src={HtmlImg} alt="html"/>
            </div>
            <div>
                <img src={CssImg} alt="css"/>
            </div>
            <div>
                <img src={JsImg} alt="javascript"/>
            </div>
            <div>
                <img src={WordpressImg} id="wp" alt="wordpress"/>
            </div>
        </section>

        <section className="grid3">
            <h2>Portfólio</h2>
            <div className="jobs">
                <img src={BurronLogo} alt="Burron_Engenharia"/>
            </div>
            <div className="jobs">
                <img src={BurronArt} alt="Burron_Engenharia"/>
            </div>
            <div className="jobs">
                <img src={AndreLogo} alt="Massas-Andre"/>
            </div>
            <div className="jobs">
                <img src={AndreArt} alt="Massas-Andre"/>
            </div>
            <button>
                <a href="https://massasandre.com.br/" target="_blank">
                Projeto site Massas André 
                <img src={LinkPagina} alt="link"/>
                </a>
            </button>
        </section>
        <footer>
            <h1>Igor <span className="sobrenome">Maceno</span></h1>
            <p>Copyright ® 2021 – Todos os direitos reservados</p>
        </footer>
      </div>
    </div>
  );
}

export default App;
