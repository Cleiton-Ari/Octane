//componentDidMount(GET axios to => "/jetski")  
//                               <= {Jetski data}                                       
// {Jetski data}.map etc...
// Global compnt => Jetski => (image, text, button) (image, text, button)(image, text, button) (image, text, button)
            //                          ||
            //                          {Image: database}
                    //                  {text (name, make, description): database}
                     //                 {button (ID jetski, ID user) => reservation }   
                     import React from 'react';
                     import "./JetSki.css";
                     import logo from "./Kawasaki.jpeg";
                     import logo1 from "./seddoo2.jpeg";
                     import logo2 from "./yamaha.jpeg";
                     
                     //component jetski
                     class JetSki extends React.Component {
                         state = {
                             userId: "",
                             jetskiId: ""
                         };
                     
                         componentDidMount = () => {
                             //axios
                             
                         }
                         render() {
                             return(
                               <>
                                     <h1>LOCATIONS</h1>
                                     <div className="thejets">
                                         <img src={logo} alt="Kawasaki" />
                                             <p>Kawasaki</p>
                                             <p>auto gearbox 120 km/h</p>
                                             <button>Reservez</button>
                                     </div>
                               </>
                             );
                         };
                     }
                     
                     
                     export default JetSki;

                     