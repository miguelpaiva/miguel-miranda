import React from 'react';

import './styles.css';

import miguelImg from '../../assets/foto-miguel.png';

import FacebookIcon from '@material-ui/icons/Facebook';
import InstagramIcon from '@material-ui/icons/Instagram';
import LinkedInIcon from '@material-ui/icons/LinkedIn';
import PinterestIcon from '@material-ui/icons/Pinterest';
import GitHubIcon from '@material-ui/icons/GitHub';

import AssignmentIndIcon from '@material-ui/icons/AssignmentInd';
import WorkIcon from '@material-ui/icons/Work';

import AccountBalanceIcon from '@material-ui/icons/AccountBalance';
import AssignmentIcon from '@material-ui/icons/Assignment';
import SchoolIcon from '@material-ui/icons/School';

import { Line, Circle } from 'rc-progress';

export default function Profile() {
    return (
        <div id="container">

            <section className="profile">

                <div className="personal" >
                    <img src={ miguelImg } alt="Perfil Miguel"/>
                    <a href=""><button>Baixar Currículo</button></a>
                </div>                
                
                <div className="content">
                    <h1> Olá, eu sou <span> Miguel Miranda! </span> </h1>
                    <h2> Desenvolvedor Web </h2>
                    <p>
                        Meu objetivo é entrar na área do desenvolvimento de 
                        software como estagiário, contribuir e aprender 
                        o máximo possível com a experiência e conhecimentos
                        adquiridos nesta empresa.
                    </p>

                    <div id="dados">
                        <h4>Idade:  23</h4>
                        <h4>Endereço: R Benedito da Silva Ramos, nº 238 - Jd. Esplanada II</h4>
                        <h4>Nacionalidade: Brasileiro</h4>
                        <h4>Celular: (12) 98102-5388</h4>
                        <h4>Email: miguelpaiva91@gmail.com</h4>
                        <h4>Website: miguelmiranda.com.br</h4>
                    </div>
                    
                    <div id="social">                        
                        <h3>Redes Sociais</h3>

                        <div id="networks">
                            <a href="https://www.facebook.com/miguel.paiva.562/" target="blank"><button> <FacebookIcon></FacebookIcon> </button></a>
                            <a href="https://www.instagram.com/miguelpsmiranda/" target="blank"><button> <InstagramIcon></InstagramIcon> </button></a>
                            <a href="https://www.linkedin.com/in/miguel-miranda-0b929ba6/" target="blank"><button> <LinkedInIcon></LinkedInIcon> </button></a>
                            <a href="https://br.pinterest.com/miguelpaiva91/_saved/" target="blank"><button> <PinterestIcon></PinterestIcon> </button></a>
                            <a href="https://github.com/miguelpaiva" target="blank"><button> <GitHubIcon></GitHubIcon> </button></a>
                        </div>                        
                    </div> 
                </div>                
            </section>

            <h2 className="section-title" >Habilidades</h2>
            <section className="skills">

                <div className="skill-wrapper">
                    <span className="skill-title" >Habilidades Profissionais</span>

                    <div id="professional">   

                        <h3>Programação</h3>                

                        <label htmlFor="Line"> HTML e CSS </label>
                        <Line className="line" percent="70" strokeWidth="2" trailWidth="2" strokeColor="#6894f3" />

                        <label htmlFor="Line"> JavaScript </label>
                        <Line className="line" percent="50" strokeWidth="2" trailWidth="2" strokeColor="#6894f3" />

                        <label htmlFor="Line"> ReactJS </label>
                        <Line className="line" percent="30" strokeWidth="2" trailWidth="2" strokeColor="#6894f3" />

                        <label htmlFor="Line"> Wordpress </label>
                        <Line className="line" percent="50" strokeWidth="2" trailWidth="2" strokeColor="#6894f3" />

                        <h3>Design</h3>

                        <label htmlFor="Line"> Corel Draw </label>
                        <Line className="line" percent="70" strokeWidth="2" trailWidth="2" strokeColor="#6894f3" />

                        <label htmlFor="Line"> Photoshop </label>
                        <Line className="line" percent="50" strokeWidth="2" trailWidth="2" strokeColor="#6894f3" />

                        <label htmlFor="Line"> Illustrator </label>
                        <Line className="line" percent="40" strokeWidth="2" trailWidth="2" strokeColor="#6894f3" />

                    </div>
                </div>

                <div className="skill-wrapper">

                <span className="skill-title">Habilidades Complementares</span>

                    <div id="additional">                  

                        <div className="circle-group">
                            <Circle percent="80" strokeWidth="8" trailWidth="8" strokeColor="#6894f3" />
                            <label htmlFor="Line"> Criatividade </label>
                        </div>

                        <div className="circle-group">
                            <Circle percent="75" strokeWidth="8" trailWidth="8" strokeColor="#6894f3" />
                            <label htmlFor="Line"> Comunicação </label>
                        </div>

                        <div className="circle-group">
                            <Circle percent="90" strokeWidth="8" trailWidth="8" strokeColor="#6894f3" />
                            <label htmlFor="Line"> Trabalho em Equipe </label>
                        </div>

                        <div className="circle-group">
                            <Circle percent="100" strokeWidth="8" trailWidth="8" strokeColor="#6894f3" />
                            <label htmlFor="Line"> Português </label>
                        </div>

                        <div className="circle-group">
                            <Circle percent="70" strokeWidth="8" trailWidth="8" strokeColor="#6894f3" />
                            <label htmlFor="Line"> Inglês </label>
                        </div>

                        <div className="circle-group">
                            <Circle percent="50" strokeWidth="8" trailWidth="8" strokeColor="#6894f3" />
                            <label htmlFor="Line"> Espanhol </label>
                        </div>
                    </div>
                </div>           

            </section>

            <h2 className="section-title">Experiências</h2>
            <section className="experiences">

                <div className="experience-wrapper">
                    <span className="experience-year">2017</span>

                    <div className="experience-item">
                        <span> <AssignmentIndIcon></AssignmentIndIcon> Colportor Evangelista </span>   {/* cargo */}
                        <span> <WorkIcon></WorkIcon> APV </span>                      {/* empresa */}
                        <p>
                            Participei de um projeto de conscientização social relacionado a 
                            saúde física, mental e espiritual. O projeto tem o objetivo 
                            de capacitar os voluntários para a venda de literatura
                            especializada, tanto em residências, comércios ou empresas.
                        </p>
                    </div>
                </div>

                <div className="experience-wrapper">
                    <span className="experience-year">2018</span>

                    <div className="experience-item">
                        <span> <AssignmentIndIcon></AssignmentIndIcon> Web Designer </span>     {/* cargo */}
                        <span> <WorkIcon></WorkIcon> DSIGN/SA </span>                           {/* empresa */}
                        <p>
                            Trabalhava gerenciando o site da empresa, atualizando o 
                            portfolio, fazendo mudanças visuais,  otimizando o 
                            desempenho. Cuidava do servidor dedicado para a  
                            hospedagem do site e fazia o melhor para deixá-lo otimizado.
                        </p>
                    </div>
                </div>

                <div className="experience-wrapper">
                    <span className="experience-year">2019</span>

                    <div className="experience-item">
                        <span> <AssignmentIndIcon></AssignmentIndIcon> Arte Finalista </span>       {/* cargo */}
                        <span> <WorkIcon></WorkIcon> Carimbos Estoril </span>                      {/* empresa */}
                        <p>
                            Realizo o design, alteração e criação de artes de carimbos 
                            personalizados. Atuo também no relacionamento com o cliente 
                            em lojas virtuais e canais de comunicação.
                        </p>
                    </div>
                </div>
                                
            </section>


            <h2 className="section-title">Educação</h2>
            <section className="education">

            <div className="education-wrapper">
                    <span className="education-year">2014</span>

                    <div className="education-item">
                        <span> <AssignmentIcon></AssignmentIcon> Ensino Médio </span>     
                        <span> <AccountBalanceIcon></AccountBalanceIcon> Colégio Adventista de São José dos Campos </span>                           
                    
                    </div>
                </div>

                <div className="education-wrapper">
                    <span className="education-year">2015 - 2017</span>

                    <div className="education-item">
                        <span> <AssignmentIcon></AssignmentIcon> Ensino Superior (Incompleto) </span>    
                        <span> <AccountBalanceIcon></AccountBalanceIcon> FATEC - São José dos Campos </span>                     
                        <span> <SchoolIcon></SchoolIcon> Análise e Desenvolvimento de Sistemas </span> 
                        
                    </div>
                </div>
                
            </section>
            
        </div>
        
    );
}