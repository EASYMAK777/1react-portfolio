import React from 'react';
import { Media, Container } from 'react-bootstrap';
import "./bio.css";
import Juan from "../img/Juan-Flores.jpg"




function Bio() {
    return (
        <div className="bio">
            <Container>


                <Media>
                    <img src = {Juan}
                        width={500}
                        height={500}
                        className="mr-3"
                        
                        alt="Juan and Augusto Flores"
                    />
                    <Media.Body>
                        <h5>Juan Pablo Flores</h5>
                        <p>
                            I am Juan Flores. I am just a regular guy who lives a regular life. I decided to take coding bootcamp because I wanted a real career in which i can learn a skill as well a develop it. I want to make big impact for whichever employer I decide to work for.

                            Learning Code has been tough but rewarding. One of the best feelings in the world is over coming a challenge you struggled with, even if its just one line of code that breaks your work finding the answer is a rush.

                            Coding has been one of the toughest things I've done but im learning. I look forward to being able to progress this page as I continue my coding journey!

                            For those of you following my work, I look forward to showing you the progress I've made as an amature web developer!

                            HAVE A GREAT DAY!!
                        </p>
                    </Media.Body>
                </Media>



            </Container>



        </div>
    );
}

export default Bio;
