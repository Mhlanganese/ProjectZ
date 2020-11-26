import React from 'react';
import {Reveal,Segment,Progress,Divider, List,Icon,Grid, Header, Image,Container } from 'semantic-ui-react';


function Portforlio()
{
    return(
         

         <Container>   {/*ClassName : The whole portforlio */}
             <Container fluid='true'> {/*ClassName : Icon and Title */}
                <Image centered src='https://react.semantic-ui.com/images/wireframe/square-image.png' size='medium' circular />
                <Header as='h1' textAlign="center">Chelsey Mhlanga</Header>
             </Container>

             <Container textAlign='center'> {/*ClassName : Job Title and Address */}
                 <List horizontal >
                     <List.Item>
                         <p>Software Engineer</p> 
                     </List.Item>

                     <List.Item>
                          <Icon name="map marker alternate" />  
                     </List.Item>

                     <List.Item>
                          <p>Johannesburg,2092,South Africa</p>
                     </List.Item>
                     <List.Item>
                          <Icon name="mail" />  
                     </List.Item>

                     <List.Item>
                          <p >Mhlanganese@gmail.com</p>
                     </List.Item>
    
                     <List.Item>
                          <p> | </p>
                     </List.Item>

                     <List.Item>
                         <Icon name="call" />  
                     </List.Item>
        
                     <List.Item>
                         <p> 0635458507 </p>
                     </List.Item>
                 </List>
             </Container>

             <Container> {/* Contains two grid  */}
                     <Segment >
                        <Grid columns={2} relaxed='very' stretched='true' >
                         
                          <Grid.Column> {/* First grid with DETAILS,LINKS,SKILLS,LANGUAGES,HOBBIES */}  
                               <Container >  {/* Details container */}
                                  <List bulleted='true' celled='true '>
                                     <List.Item  >
                                         <List.Header>
                                           <Header as='h5' >DETAILS</Header>
                                         </List.Header>
    
                                         <List.Item>
                                             <p>13 Annadale Street Johannesburg</p> 
                                         </List.Item>
        
                                         <List.Item>
                                             <p>South Africa</p> 
                                         </List.Item>
             
                                         <List.Item>
                                            <p>0635458507</p> 
                                         </List.Item>
             
                                         <List.Item >
                                           <a href='https://mail.google.com/mail?authuser=me@gmail.com#all/{message_id}'>Mhlanganese@gmail.com</a> 
                                         </List.Item>


                                         <List.Header>
                                           <Header as ='h5' color ='grey'> Nationality </Header>
                                         </List.Header>
                                         
                                         <List.Item>
                                            <p>South African</p>
                                         </List.Item>
                                        
                                         <List.Header>
                                           <Header as='h5' color='grey'>Place /Date Of birth</Header>
                                         </List.Header>
                                             <List.Item >
                                              <p>16 December 2020</p> 
                                             </List.Item>
         
                                             <List.Item>
                                              <p>Limpopo</p> 
                                             </List.Item>
                                 </List.Item>
                                
                                     <List.Item>
                                         <List.Header >
                                             <Header as='h5' >LINKS</Header>
                                         </List.Header>
                                             <List.Item>
                                                 <a href='https://www.linkedin.com/in/chelsey-mhlanga-0b4323196'>LinkedIn</a>
                                             </List.Item>
                                     </List.Item> 

                                     

                    {/*Skills Container */}

                    <List.Item>
                         <List.Header >
                         <Header as='h5' >SKILLS</Header>
                         </List.Header>

                         <List.Item>
                             <p centered> Java</p>
                            <Progress  size='small' percent={60}/> 
                         </List.Item>

                         <List.Item>
                             <p centered> Java</p>
                            <Progress size='small' percent={50} />
                         </List.Item>

                         <List.Item>
                             <p centered> Java</p>
                            <Progress size='small' percent={78}/>
                         </List.Item>

                         <List.Item>
                             <p centered> Java</p>
                            <Progress size='small' percent={10}/>
                         </List.Item>

                         <List.Item>
                             <p centered> Java</p>
                            <Progress size='small' percent={35} />
                         </List.Item>

                         <List.Item>
                             <p centered> Java</p>
                            <Progress size='small' percent={60} />
                         </List.Item>

                         <List.Item>
                             <p centered> Java</p>
                            <Progress size='small' percent={60}/>
                         </List.Item>
                     </List.Item> 

                     <List.Item>
                                         <List.Header >
                                             <Header as='h5' >Hobbies</Header>
                                         </List.Header>
                                             <List.Item>
                                                <p>Cooking, Coding, Reading Novels, Listening to music</p>
                                             </List.Item>
                                     </List.Item> 
                             </List>
                               </Container>  
                           </Grid.Column>
                         
                          <Grid.Column> {/* Second grid with profiles*/}
                                <Container>
                                <List>

                                    <List.Item>
                                      <List.Icon name='user' />
                                      <List.Content> <Header as='h5' >PROFILE</Header></List.Content>
                                    </List.Item>

                                    <List.Item> 
                                      <List.Content>a passionate student at the University of Johannesburg, doing Computer science and informatics,</List.Content>
                                    </List.Item>
                                    
                                    <List.Item>
                                        <List.Icon name='graduation'></List.Icon>
                                        <List.Header>Bsc Computer science and informatics at the University of Johannesburg</List.Header>
                                         
                                         <List.Description >
                                             February 2017 - November 2020
                                         </List.Description>
                                    </List.Item>
                                 </List>

                                </Container>
                          </Grid.Column>

                       </Grid>
                            <Divider hidden='true' vertical>And</Divider>
                     </Segment>
             </Container>
         </Container>
             
    )
}

export default Portforlio;