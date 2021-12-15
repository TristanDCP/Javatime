import React from 'react'
import './App.css';
// DEUX PROFILS
import MalePicture from '../src/assets/man.svg'
import FemalePicture from '../src/assets/woman.svg'
// LIGNE DE LA PEAU
import HeadSVG from '../src/assets/skin.svg'
import Skin1 from '../src/assets/color-FCD7B8.svg'
import Skin2 from '../src/assets/color-E0A39A.svg'
import Skin3 from '../src/assets/color-FCCC84.svg'
import Skin4 from '../src/assets/color-533724.svg'
// LIGNE DES T-SHIRTS
import TshirtSVG from '../src/assets/t-shirt.svg'
import Shirt1 from '../src/assets/color-B2C7C7.svg'
import Shirt2 from '../src/assets/color-88C10F.svg'
import Shirt3 from '../src/assets/color-FF1414.svg'
import Shirt4 from '../src/assets/color-striped.svg'



const App = () => {
    return <div id="temp-style"> 
        <div class="card-outline">
            <div class="card-title">
                <div class="title-text">
                    PROFIL
                </div>
            </div>
            <div class="container">
                <div class="card-content" >
                        <div class="content-title">
                            Lequel de ces deux avatars préférez-vous?
                        </div>
                        <div class="img">
                            <img class="male-picture" src={MalePicture} alt="visage d'homme"/>
                            <img class="female-picture" src={FemalePicture} alt="visage de femme"/>
                        </div>
                        <div class="divider"></div>
                        <div class="skin-line">
                            <img class="icone" src={HeadSVG} alt="icone de visage"/>
                            <img src={Skin1} alt="peau blanche"/>
                            <img src={Skin2} alt="peau rose"/>
                            <img src={Skin3} alt="peau jaune"/>
                            <img src={Skin4} alt="peau noire"/>
                        </div>
                        <div class="shirt-line">
                            <img class="icone" src={TshirtSVG} alt="icone de t-shirt"/>
                            <img src={Shirt1} alt="t-shirt gris"/>
                            <img src={Shirt2} alt="t-shirt vert pomme"/>
                            <img src={Shirt3} alt="t-shirt rouge"/>
                            <img src={Shirt4} alt="t-shirt rayé"/>
                        </div>
                        <div class="button-placement">
                            <div class="button">
                                VALIDER
                            </div>  
                        </div>

                </div>  
            </div>         
        </div>
    </div>
}

export default App;
